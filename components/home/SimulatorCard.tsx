"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Wallet, ChevronRight, BarChart3 } from "lucide-react";

function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export default function SimulatorCard() {
  const [valorDesejado, setValorDesejado] = useState(200000);
  const [prazo, setPrazo] = useState(100);

  const parcelaEstimada = useMemo(() => {
    const taxaAdmin = 0.18;
    return (valorDesejado * (1 + taxaAdmin)) / prazo;
  }, [valorDesejado, prazo]);

  return (
    <div id="simulador" className="relative" role="region" aria-labelledby="simulador-title">
      {/* Glow Effect — hidden on mobile for performance */}
      <div className="gradient-orb absolute -inset-1 bg-gradient-to-r from-brand/30 to-accent-cyan/30 rounded-3xl blur-xl opacity-50" aria-hidden="true" />

      <div className="relative glass-card rounded-3xl p-6 sm:p-8 glow-brand">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl gradient-brand flex items-center justify-center" aria-hidden="true">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 id="simulador-title" className="text-xl font-bold text-white">Simule seu Plano</h2>
            <p className="text-sm text-navy-400">Descubra sua parcela ideal</p>
          </div>
        </div>

        {/* Valor Slider */}
        <div className="mb-6">
          <div className="flex justify-between items-baseline mb-3">
            <label htmlFor="valor-carta" className="text-sm font-medium text-navy-300">Valor da Carta</label>
            <output htmlFor="valor-carta" className="text-2xl font-bold text-white">
              R$ {formatBRL(valorDesejado)}
            </output>
          </div>
          <input
            id="valor-carta"
            type="range"
            min={30000}
            max={500000}
            step={5000}
            value={valorDesejado}
            onChange={(e) => setValorDesejado(Number(e.target.value))}
            aria-valuemin={30000}
            aria-valuemax={500000}
            aria-valuenow={valorDesejado}
            aria-valuetext={`R$ ${formatBRL(valorDesejado)}`}
            className="w-full"
          />
          <div className="flex justify-between mt-2 text-xs text-navy-500" aria-hidden="true">
            <span>R$ 30 mil</span>
            <span>R$ 500 mil</span>
          </div>
        </div>

        {/* Prazo Slider */}
        <div className="mb-8">
          <div className="flex justify-between items-baseline mb-3">
            <label htmlFor="prazo-meses" className="text-sm font-medium text-navy-300">Prazo</label>
            <output htmlFor="prazo-meses" className="text-2xl font-bold text-white">{prazo} meses</output>
          </div>
          <input
            id="prazo-meses"
            type="range"
            min={36}
            max={180}
            step={12}
            value={prazo}
            onChange={(e) => setPrazo(Number(e.target.value))}
            aria-valuemin={36}
            aria-valuemax={180}
            aria-valuenow={prazo}
            aria-valuetext={`${prazo} meses`}
            className="w-full"
          />
          <div className="flex justify-between mt-2 text-xs text-navy-500" aria-hidden="true">
            <span>36 meses</span>
            <span>180 meses</span>
          </div>
        </div>

        {/* Result */}
        <div className="p-5 rounded-2xl bg-dark/50 border border-brand/20 mb-6" aria-live="polite" aria-atomic="true">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-navy-400 mb-1">Parcela Estimada</p>
              <p className="text-3xl font-bold text-brand">
                R$ {formatBRL(parcelaEstimada)}
              </p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center" aria-hidden="true">
              <Wallet className="w-7 h-7 text-brand" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/planos"
          className="btn-primary w-full"
        >
          <span className="flex items-center gap-2">
            Solicitar Proposta
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </span>
        </Link>

        {/* Footer Note */}
        <p className="text-xs text-center text-navy-500 mt-4">
          *Simulação aproximada. Taxa administrativa de 18%.
        </p>
      </div>
    </div>
  );
}
