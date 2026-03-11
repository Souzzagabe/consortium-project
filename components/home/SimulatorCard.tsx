"use client";

import { useState, useMemo, FormEvent } from "react";
import { Home, Car, BarChart3, TrendingUp, Send } from "lucide-react";

function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

const PRAZO = 240;

const TIPOS = {
  imovel: {
    label: "Imóvel",
    icon: Home,
    taxa: 0.12,         // Taxa administrativa interna (real) — não exibir ao usuário
    taxaDisplay: 0.12,  // Taxa exibida na simulação ao usuário
    taxaCalculo: 0.404, // Fator de cálculo → R$ 404 por R$ 100.000
    min: 100000,
    max: 5000000,
    step: 50000,
    defaultVal: 300000,
    minLabel: "R$ 100 mil",
    maxLabel: "R$ 5 mi",
  },
  veiculo: {
    label: "Veículo",
    icon: Car,
    taxa: 0.848,
    taxaDisplay: 0.848,
    taxaCalculo: 0.848,
    min: 70000,
    max: 1000000,
    step: 10000,
    defaultVal: 200000,
    minLabel: "R$ 70 mil",
    maxLabel: "R$ 1 mi",
  },
} as const;

type TipoKey = keyof typeof TIPOS;

const inputClass =
  "w-full px-3 py-2.5 rounded-xl border border-dark-border bg-dark/60 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-white placeholder:text-navy-500 text-sm";

export default function SimulatorCard() {
  const [tipo, setTipo] = useState<TipoKey>("imovel");
  const [valorDesejado, setValorDesejado] = useState(300000);

  const [form, setForm] = useState({ nome: "", telefone: "", email: "", horario: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const config = TIPOS[tipo];

  const contribuicaoMensal = useMemo(() => {
    return (valorDesejado * config.taxaCalculo) / 100;
  }, [valorDesejado, config.taxaCalculo]);

  const handleTipoChange = (novoTipo: TipoKey) => {
    setTipo(novoTipo);
    setValorDesejado(TIPOS[novoTipo].defaultVal);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const tipoLabel = TIPOS[tipo].label;
    const valorFmt = `R$ ${formatBRL(valorDesejado)}`;
    const parcelaFmt = `R$ ${formatBRL(Math.round(contribuicaoMensal))}`;

    // Tenta enviar por e-mail via API
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          telefone: form.telefone,
          email: form.email,
          horarioLigacao: form.horario,
          tipoConsorcio: tipoLabel,
          valorConsorcio: valorFmt,
          parcelaSimulada: parcelaFmt,
        }),
      });
    } catch {
      // API indisponível — WhatsApp garante o recebimento
    }

    // Envia mensagem completa via WhatsApp
    const linhas = [
      `Olá! Vim pelo site Matheus Multiplica e gostaria de uma proposta.\n`,
      `👤 *Nome:* ${form.nome}`,
      `📱 *Telefone:* ${form.telefone}`,
      `📬 *E-mail:* ${form.email}`,
      `🏷️ *Tipo de consórcio:* ${tipoLabel}`,
      `💰 *Valor do consórcio:* ${valorFmt}`,
      `📊 *Parcela simulada:* ${parcelaFmt}`,
      form.horario ? `⏰ *Melhor horário:* ${form.horario}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/555197147766?text=${encodeURIComponent(linhas)}`, "_blank");

    setStatus("success");
    setForm({ nome: "", telefone: "", email: "", horario: "" });
  };

  return (
    <div id="simulador" className="relative" role="region" aria-labelledby="simulador-title">
      <div className="gradient-orb absolute -inset-1 bg-gradient-to-r from-brand/30 to-accent-cyan/30 rounded-3xl blur-xl opacity-50" aria-hidden="true" />

      <div className="relative glass-card rounded-3xl p-6 sm:p-8 glow-brand">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl gradient-brand flex items-center justify-center" aria-hidden="true">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 id="simulador-title" className="text-xl font-bold text-white">Simule seu Consórcio</h2>
            <p className="text-sm text-navy-400">Encontre o crédito ideal para você</p>
          </div>
        </div>

        {/* Type Toggle */}
        <div className="flex rounded-2xl bg-dark/60 border border-dark-border p-1 mb-6" role="group" aria-label="Tipo de consórcio">
          {(Object.keys(TIPOS) as TipoKey[]).map((t) => {
            const Icon = TIPOS[t].icon;
            const isActive = tipo === t;
            return (
              <button
                key={t}
                onClick={() => handleTipoChange(t)}
                aria-pressed={isActive}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-brand text-white shadow-lg shadow-brand/30"
                    : "text-navy-400 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                {TIPOS[t].label}
              </button>
            );
          })}
        </div>

        {/* Valor Slider */}
        <div className="mb-5">
          <div className="flex justify-between items-baseline mb-3">
            <label htmlFor="valor-carta" className="text-sm font-medium text-navy-300">
              Valor da Carta
            </label>
            <output htmlFor="valor-carta" className="text-2xl font-bold text-white">
              R$ {formatBRL(valorDesejado)}
            </output>
          </div>
          <input
            id="valor-carta"
            type="range"
            min={config.min}
            max={config.max}
            step={config.step}
            value={valorDesejado}
            onChange={(e) => setValorDesejado(Number(e.target.value))}
            aria-valuemin={config.min}
            aria-valuemax={config.max}
            aria-valuenow={valorDesejado}
            aria-valuetext={`R$ ${formatBRL(valorDesejado)}`}
            className="w-full"
          />
          <div className="flex justify-between mt-2 text-xs text-navy-500" aria-hidden="true">
            <span>{config.minLabel}</span>
            <span>{config.maxLabel}</span>
          </div>
        </div>

        {/* Fixed Prazo Info */}
        <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-dark/40 border border-dark-border mb-5">
          <span className="text-sm text-navy-400">Prazo fixo</span>
          <span className="text-sm font-semibold text-white">{PRAZO} meses</span>
        </div>

        {/* Result */}
        <div className="p-5 rounded-2xl bg-dark/50 border border-brand/20 mb-6" aria-live="polite" aria-atomic="true">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-navy-400 mb-1">Contribuição Mensal Estimada</p>
              <p className="text-3xl font-bold text-brand">
                R$ {formatBRL(contribuicaoMensal)}
              </p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center" aria-hidden="true">
              <TrendingUp className="w-7 h-7 text-brand" />
            </div>
          </div>
          <p className="text-xs text-navy-500 mt-3">
            Taxa administrativa: {config.taxaDisplay}% · Sujeito a reajuste anual
          </p>
        </div>

        {/* ── Formulário embutido ── */}
        <div className="border-t border-dark-border pt-6 mt-1">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-xl bg-green-600/15 flex items-center justify-center" aria-hidden="true">
              <Send className="w-4 h-4 text-green-400" />
            </div>
            <p className="text-sm font-semibold text-white">Solicitar proposta</p>
          </div>

          {status === "success" ? (
            <div role="alert" className="p-5 bg-brand/10 text-brand rounded-2xl text-sm text-center font-medium">
              Mensagem enviada! Aguarde nosso contato em breve.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <input
                  type="text"
                  required
                  placeholder="Nome completo"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className={inputClass}
                  aria-label="Nome completo"
                />
                <input
                  type="tel"
                  required
                  placeholder="Telefone / WhatsApp"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className={inputClass}
                  aria-label="Telefone"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <input
                  type="email"
                  required
                  placeholder="E-mail"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  aria-label="E-mail"
                />
                <select
                  value={form.horario}
                  onChange={(e) => setForm({ ...form, horario: e.target.value })}
                  className={inputClass}
                  aria-label="Melhor horário para ligação"
                >
                  <option value="">Horário para ligação</option>
                  <option value="08h às 10h">08h às 10h</option>
                  <option value="10h às 12h">10h às 12h</option>
                  <option value="12h às 14h">12h às 14h</option>
                  <option value="14h às 16h">14h às 16h</option>
                  <option value="16h às 18h">16h às 18h</option>
                  <option value="18h às 20h">18h às 20h</option>
                  <option value="Qualquer horário">Qualquer horário</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-green-600/20 mt-1"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                {status === "loading" ? "Enviando..." : "Enviar via WhatsApp"}
              </button>
            </form>
          )}
        </div>

        <p className="text-xs text-center text-navy-500 mt-4">
          *Simulação estimada. Valores sujeitos a reajuste anual conforme índice do grupo.
        </p>
      </div>
    </div>
  );
}
