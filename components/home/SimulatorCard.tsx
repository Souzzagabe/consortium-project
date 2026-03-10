"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Home, Car, BarChart3, TrendingUp } from "lucide-react";

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
    taxa: 0.12,
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
    min: 70000,
    max: 1000000,
    step: 10000,
    defaultVal: 200000,
    minLabel: "R$ 70 mil",
    maxLabel: "R$ 1 mi",
  },
} as const;

type TipoKey = keyof typeof TIPOS;

export default function SimulatorCard() {
  const [tipo, setTipo] = useState<TipoKey>("imovel");
  const [valorDesejado, setValorDesejado] = useState(300000);

  const config = TIPOS[tipo];

  const contribuicaoMensal = useMemo(() => {
    return (valorDesejado * config.taxa) / 100;
  }, [valorDesejado, config.taxa]);

  const handleTipoChange = (novoTipo: TipoKey) => {
    setTipo(novoTipo);
    setValorDesejado(TIPOS[novoTipo].defaultVal);
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
            Taxa mensal: {config.taxa}% · Sujeito a reajuste anual
          </p>
        </div>

        {/* CTA */}
        <Link href="/planos#formulario" className="btn-primary w-full">
          <span className="flex items-center justify-center gap-2">
            Solicitar Proposta
          </span>
        </Link>

        <p className="text-xs text-center text-navy-500 mt-4">
          *Simulação estimada. Valores sujeitos a reajuste anual conforme índice do grupo.
        </p>
      </div>
    </div>
  );
}
