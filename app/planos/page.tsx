import { ArrowRight, Sparkles } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/layout/Footer";
import {
  AnimatedSection,
  PageHero,
  SectionHeader,
  GlassCard,
  CTASection,
} from "@/components/ui/PremiumComponents";

const cartasContempladas = [
  { administradora: "Bradesco", credito: "R$ 270.000,00", parcelasPagas: 2, parcela: "R$ 1.383,88" },
  { administradora: "Embracon", credito: "R$ 286.100,00", parcelasPagas: 1, parcela: "R$ 1.456,51" },
  { administradora: "Caixa", credito: "R$ 353.400,00", parcelasPagas: 1, parcela: "R$ 1.796,00" },
  { administradora: "Embracon", credito: "R$ 458.690,00", parcelasPagas: 3, parcela: "R$ 2.348,75" },
  { administradora: "Itaú", credito: "R$ 525.870,00", parcelasPagas: 2, parcela: "R$ 2.676,16" },
  { administradora: "Caixa", credito: "R$ 579.755,00", parcelasPagas: 2, parcela: "R$ 2.949,30" },
  { administradora: "Bradesco", credito: "R$ 690.150,00", parcelasPagas: 3, parcela: "R$ 3.518,68" },
  { administradora: "Itaú", credito: "R$ 812.790,00", parcelasPagas: 4, parcela: "R$ 4.334,50" },
  { administradora: "Caixa", credito: "R$ 913.230,00", parcelasPagas: 3, parcela: "R$ 4.656,06" },
  { administradora: "Embracon", credito: "R$ 1.085.375,00", parcelasPagas: 5, parcela: "R$ 5.585,64" },
  { administradora: "Bradesco", credito: "R$ 1.285.714,00", parcelasPagas: 6, parcela: "R$ 6.648,16" },
  { administradora: "Caixa", credito: "R$ 1.772.830,77", parcelasPagas: 5, parcela: "R$ 9.112,08" },
  { administradora: "Embracon", credito: "R$ 2.073.840,00", parcelasPagas: 5, parcela: "R$ 10.655,71" },
  { administradora: "Caixa", credito: "R$ 2.672.750,00", parcelasPagas: 6, parcela: "R$ 13.797,83" },
  { administradora: "Bradesco", credito: "R$ 3.415.000,00", parcelasPagas: 5, parcela: "R$ 17.533,46" },
  { administradora: "Itaú", credito: "R$ 4.745.180,00", parcelasPagas: 6, parcela: "R$ 24.480,46" },
  { administradora: "Caixa", credito: "R$ 7.100.230,00", parcelasPagas: 7, parcela: "R$ 31.835,00" },
  { administradora: "Embracon", credito: "R$ 8.688.450,00", parcelasPagas: 8, parcela: "R$ 45.273,38" },
  { administradora: "Caixa", credito: "R$ 9.882.271,00", parcelasPagas: 7, parcela: "R$ 51.224,38" },
  { administradora: "Itaú", credito: "R$ 10.756.000,00", parcelasPagas: 9, parcela: "R$ 56.335,31" },
  { administradora: "Caixa", credito: "R$ 11.146.780,00", parcelasPagas: 8, parcela: "R$ 58.077,18" },
  { administradora: "Bradesco", credito: "R$ 12.335.500,00", parcelasPagas: 9, parcela: "R$ 64.604,94" },
  { administradora: "Caixa", credito: "R$ 13.565.890,00", parcelasPagas: 8, parcela: "R$ 68.412,50" },
  { administradora: "Embracon", credito: "R$ 14.650.000,00", parcelasPagas: 7, parcela: "R$ 74.890,00" },
  { administradora: "Bradesco", credito: "R$ 15.328.200,00", parcelasPagas: 8, parcela: "R$ 79.855,41" },
];

const adminColors: Record<string, string> = {
  Bradesco: "bg-red-600",
  Embracon: "bg-green-600",
  Caixa: "bg-blue-600",
  Itaú: "bg-orange-500",
};

export default function PlanosPage() {
  return (
    <>
      <PageHero
        badge="Carta Contemplada"
        title="Escolha a Carta"
        titleHighlight="Ideal para Você"
        description="Compare nossas cartas contempladas e encontre a melhor opção para o seu objetivo financeiro."
      />

      {/* Cartas Contempladas Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-dark relative overflow-hidden" aria-label="Cartas contempladas disponíveis">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand/5 rounded-full blur-[128px] gradient-orb" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Disponíveis agora"
            title="Cartas"
            titleHighlight="Contempladas"
            description="Cartas já contempladas, prontas para utilização. Negocie diretamente com nosso time."
          />

          <div className="overflow-x-auto scrollbar-hide" role="region" aria-label="Tabela de cartas contempladas" tabIndex={0}>
            <table className="w-full min-w-[640px] text-left" aria-label="Cartas contempladas disponíveis">
              <caption className="sr-only">Lista de cartas de crédito contempladas com valores, parcelas e administradoras</caption>
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-navy-400">Administradora</th>
                  <th scope="col" className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-navy-400">Crédito</th>
                  <th scope="col" className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-navy-400 text-center">Parcelas Pagas</th>
                  <th scope="col" className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-navy-400">Parcela</th>
                  <th scope="col" className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-navy-400 text-right">Ação</th>
                </tr>
              </thead>
              <tbody>
                {cartasContempladas.map((c, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4">
                      <span className={`${adminColors[c.administradora] ?? "bg-gray-600"} text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full`}>
                        {c.administradora}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-brand font-bold text-sm sm:text-base">{c.credito}</td>
                    <td className="py-4 px-4 text-white text-sm text-center">{c.parcelasPagas}</td>
                    <td className="py-4 px-4 text-white font-medium text-sm sm:text-base">{c.parcela}</td>
                    <td className="py-4 px-4 text-right">
                      <a
                        href={`https://wa.me/555197147766?text=${encodeURIComponent(`Olá! Tenho interesse na carta contemplada de ${c.credito} (${c.administradora}).`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand/10 text-brand text-xs sm:text-sm font-semibold hover:bg-brand/20 transition-colors"
                      >
                        Negociar
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <AnimatedSection delay={0.3}>
            <p className="mt-8 text-center text-sm text-navy-400">
              * Valores sujeitos a alteração. Entre em contato para confirmar disponibilidade.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-32 bg-dark-card relative overflow-hidden" aria-label="Vantagens dos planos">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Por que escolher nossos planos?"
            title="Vantagens"
            titleHighlight="Exclusivas"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: "💰",
                title: "Sem Juros",
                description: "Apenas taxa administrativa transparente",
              },
              {
                icon: "�",
                title: "Correção Monetária",
                description: "Correção monetária prevista em contrato, acompanhando a valorização do crédito ao longo do tempo",
              },
              {
                icon: "🏆",
                title: "100% Confiável",
                description: "Administradora autorizada pelo BACEN",
              },
              {
                icon: "⚡",
                title: "Contemplação Rápida",
                description: "Sorteios mensais e opção de lance",
              },
            ].map((benefit, idx) => (
              <AnimatedSection key={benefit.title} delay={idx * 0.1}>
                <GlassCard className="text-center h-full flex flex-col items-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4" aria-hidden="true">{benefit.icon}</div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-300">{benefit.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Plan CTA */}
      <section className="py-12 sm:py-16 lg:py-32 bg-dark relative overflow-hidden" aria-label="Plano personalizado">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-[128px] gradient-orb" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="glass-card rounded-3xl p-8 lg:p-12">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-brand/10 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-brand" aria-hidden="true" />
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Precisa de um plano personalizado?
              </h2>

              <p className="text-navy-300 text-lg mb-8 max-w-xl mx-auto">
                Se nenhum dos planos acima atende suas necessidades, entre em
                contato conosco para criar um plano sob medida para você.
              </p>

              <a
                href="https://wa.me/555197147766"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span className="flex items-center gap-2">
                  Falar com Consultor
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <LeadForm />

      <CTASection
        title="Pronto para Começar?"
        description="Faça uma simulação gratuita e descubra a melhor opção para você."
        primaryCTA={{ text: "Simular Agora", href: "/#simulador" }}
      />

      <Footer />
    </>
  );
}
