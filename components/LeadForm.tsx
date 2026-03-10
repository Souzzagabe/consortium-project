"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

export default function LeadForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    valorDesejado: "",
    horarioLigacao: "",
  });
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Vim pelo site Patrimônio Programado e gostaria de uma proposta.\n\n` +
      `👤 *Nome:* ${form.nome}\n` +
      `📱 *Telefone:* ${form.telefone}\n` +
      `📬 *E-mail:* ${form.email}\n` +
      `💰 *Valor desejado:* R$ ${form.valorDesejado}\n` +
      `⏰ *Melhor horário para ligação:* ${form.horarioLigacao}`
    );
    window.open(`https://wa.me/5551981179752?text=${msg}`, "_blank");
    setStatus("success");
    setForm({ nome: "", email: "", telefone: "", valorDesejado: "", horarioLigacao: "" });
  };

  return (
    <section id="formulario" className="py-12 sm:py-16 lg:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand mb-2">
              Fale Conosco
            </span>
            <h2 className="text-3xl font-bold text-white mb-3">
              Solicite seu Orçamento
            </h2>
            <p className="text-navy-300">
              Preencha o formulário e nossa equipe entrará em contato.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-navy-300 mb-1">
                Nome completo
              </label>
              <input
                id="nome"
                type="text"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-card focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-white placeholder:text-navy-500"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-300 mb-1">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-card focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-white placeholder:text-navy-500"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-navy-300 mb-1">
                Telefone
              </label>
              <input
                id="telefone"
                type="tel"
                required
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-card focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-white placeholder:text-navy-500"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label htmlFor="valorDesejado" className="block text-sm font-medium text-navy-300 mb-1">
                Valor desejado
              </label>
              <input
                id="valorDesejado"
                type="text"
                required
                value={form.valorDesejado}
                onChange={(e) => setForm({ ...form, valorDesejado: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-card focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-white placeholder:text-navy-500"
                placeholder="R$ 100.000"
              />
            </div>

            <div>
              <label htmlFor="horarioLigacao" className="block text-sm font-medium text-navy-300 mb-1">
                Melhor horário para ligação
              </label>
              <select
                id="horarioLigacao"
                required
                value={form.horarioLigacao}
                onChange={(e) => setForm({ ...form, horarioLigacao: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-card focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-white"
              >
                <option value="" disabled>Selecione um horário</option>
                <option value="08h às 10h">08h às 10h</option>
                <option value="10h às 12h">10h às 12h</option>
                <option value="12h às 14h">12h às 14h</option>
                <option value="14h às 16h">14h às 16h</option>
                <option value="16h às 18h">16h às 18h</option>
                <option value="18h às 20h">18h às 20h</option>
                <option value="Qualquer horário">Qualquer horário</option>
              </select>
            </div>

            <div className="grid gap-3 pt-2">
              <Button type="submit" size="lg" className="w-full !bg-green-600 hover:!bg-green-700">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar via WhatsApp
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
