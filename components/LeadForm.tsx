"use client";

import { useState, useEffect, FormEvent } from "react";
import Button from "@/components/ui/Button";

function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export default function LeadForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    valorConsorcio: "",
    parcelaSimulada: "",
    tipoConsorcio: "",
    horarioLigacao: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Lê parâmetros da URL gerados pelo simulador
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const valor = params.get("valor");
    const parcela = params.get("parcela");
    const tipo = params.get("tipo");

    setForm((prev) => ({
      ...prev,
      valorConsorcio: valor
        ? `R$ ${formatBRL(Number(valor))}`
        : prev.valorConsorcio,
      parcelaSimulada: parcela
        ? `R$ ${formatBRL(Number(parcela))}`
        : prev.parcelaSimulada,
      tipoConsorcio:
        tipo === "imovel" ? "Imóvel" : tipo === "veiculo" ? "Veículo" : prev.tipoConsorcio,
    }));
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Tenta enviar por e-mail via API (funciona em ambientes com suporte a servidor)
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // API indisponível (hospedagem estática) — o WhatsApp garante o recebimento
    }

    // Monta e envia a mensagem completa pelo WhatsApp (sempre)
    const linhas = [
      `Olá! Vim pelo site Matheus Multiplica e gostaria de uma proposta.\n`,
      `👤 *Nome:* ${form.nome}`,
      `📱 *Telefone:* ${form.telefone}`,
      `📬 *E-mail:* ${form.email}`,
      form.tipoConsorcio ? `🏷️ *Tipo de consórcio:* ${form.tipoConsorcio}` : null,
      form.valorConsorcio ? `💰 *Valor do consórcio:* ${form.valorConsorcio}` : null,
      form.parcelaSimulada ? `📊 *Parcela simulada:* ${form.parcelaSimulada}` : null,
      form.horarioLigacao ? `⏰ *Melhor horário para ligação:* ${form.horarioLigacao}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const msg = encodeURIComponent(linhas);
    window.open(`https://wa.me/555197147766?text=${msg}`, "_blank");

    setStatus("success");
    setForm({
      nome: "",
      email: "",
      telefone: "",
      valorConsorcio: "",
      parcelaSimulada: "",
      tipoConsorcio: "",
      horarioLigacao: "",
    });
  };

  const fieldClass =
    "w-full px-4 py-3 rounded-xl border border-dark-border bg-dark/60 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-white placeholder:text-navy-500 text-sm";

  return (
    <section id="formulario" className="py-16 sm:py-20 lg:py-28 bg-dark-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-[128px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[128px]" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand mb-3">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            Solicite seu <span className="gradient-text">Orçamento</span>
          </h2>
          <p className="text-navy-300 text-lg max-w-xl mx-auto">
            Preencha o formulário e nossa equipe entrará em contato com a melhor proposta para você.
          </p>
        </div>

        {/* Glass Card Form Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Nome + E-mail */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-navy-300 mb-1.5">
                  Nome completo *
                </label>
                <input
                  id="nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className={fieldClass}
                  placeholder="Seu nome completo"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-300 mb-1.5">
                  E-mail *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={fieldClass}
                  placeholder="seu@email.com"
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Row 2: Telefone + Tipo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-navy-300 mb-1.5">
                  Telefone / WhatsApp *
                </label>
                <input
                  id="telefone"
                  type="tel"
                  required
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className={fieldClass}
                  placeholder="(51) 99999-9999"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label htmlFor="tipoConsorcio" className="block text-sm font-medium text-navy-300 mb-1.5">
                  Tipo de consórcio
                </label>
                <select
                  id="tipoConsorcio"
                  value={form.tipoConsorcio}
                  onChange={(e) => setForm({ ...form, tipoConsorcio: e.target.value })}
                  className={fieldClass}
                >
                  <option value="">Selecione o tipo</option>
                  <option value="Imóvel">Imóvel</option>
                  <option value="Veículo">Veículo</option>
                </select>
              </div>
            </div>

            {/* Row 3: Valor + Parcela */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="valorConsorcio" className="block text-sm font-medium text-navy-300 mb-1.5">
                  Valor do consórcio *
                </label>
                <input
                  id="valorConsorcio"
                  type="text"
                  required
                  value={form.valorConsorcio}
                  onChange={(e) => setForm({ ...form, valorConsorcio: e.target.value })}
                  className={fieldClass}
                  placeholder="Ex: R$ 300.000"
                />
              </div>
              <div>
                <label htmlFor="parcelaSimulada" className="block text-sm font-medium text-navy-300 mb-1.5">
                  Parcela simulada
                </label>
                <input
                  id="parcelaSimulada"
                  type="text"
                  value={form.parcelaSimulada}
                  onChange={(e) => setForm({ ...form, parcelaSimulada: e.target.value })}
                  className={fieldClass}
                  placeholder="Preenchido pelo simulador"
                />
              </div>
            </div>

            {/* Row 4: Horário (full width) */}
            <div>
              <label htmlFor="horarioLigacao" className="block text-sm font-medium text-navy-300 mb-1.5">
                Melhor horário para ligação
              </label>
              <select
                id="horarioLigacao"
                value={form.horarioLigacao}
                onChange={(e) => setForm({ ...form, horarioLigacao: e.target.value })}
                className={fieldClass}
              >
                <option value="">Selecione um horário</option>
                <option value="08h às 10h">08h às 10h</option>
                <option value="10h às 12h">10h às 12h</option>
                <option value="12h às 14h">12h às 14h</option>
                <option value="14h às 16h">14h às 16h</option>
                <option value="16h às 18h">16h às 18h</option>
                <option value="18h às 20h">18h às 20h</option>
                <option value="Qualquer horário">Qualquer horário</option>
              </select>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto sm:min-w-[280px] sm:mx-auto sm:flex !bg-green-600 hover:!bg-green-700"
                disabled={status === "loading"}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {status === "loading" ? "Enviando..." : "Enviar via WhatsApp"}
              </Button>
            </div>

            {status === "success" && (
              <div role="alert" aria-live="assertive" className="p-4 bg-brand/10 text-brand rounded-xl text-sm text-center font-medium">
                Mensagem enviada! Aguarde nosso contato em breve.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
