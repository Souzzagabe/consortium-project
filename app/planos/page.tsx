import { Check, ArrowRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/layout/Footer";
import {
  AnimatedSection,
  PageHero,
  SectionHeader,
  GlassCard,
  CTASection,
} from "@/components/ui/PremiumComponents";

const TAXA_ADMIN = 0.18;

const planos = [
  { credito: 30000, prazo: 36, popular: false },
  { credito: 50000, prazo: 48, popular: false },
  { credito: 80000, prazo: 60, popular: true },
  { credito: 100000, prazo: 72, popular: false },
  { credito: 150000, prazo: 84, popular: false },
  { credito: 200000, prazo: 96, popular: true },
  { credito: 300000, prazo: 108, popular: false },
  { credito: 500000, prazo: 120, popular: false },
];

function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function PlanosPage() {
  return (
    <>
      <PageHero
        badge="Nossos Planos"
        title="Escolha o Plano"
        titleHighlight="Ideal para Você"
        description="Compare nossos planos e encontre a melhor opção para o seu objetivo financeiro."
      />

      {/* Plans Grid Section */}
      <section className="py-12 sm:py-16 lg:py-32 bg-dark relative overflow-hidden" aria-label="Tabela de planos">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[128px] gradient-orb" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[128px] gradient-orb" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Compare"
            title="Tabela de"
            titleHighlight="Planos"
            description="Valores de crédito, prazos, parcelas estimadas e taxas administrativas de cada plano."
          />

          {/* Cards Grid — 2 cols on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {planos.map((p, idx) => {
              const parcela = (p.credito * (1 + TAXA_ADMIN)) / p.prazo;
              return (
                <AnimatedSection key={p.credito} delay={idx * 0.05}>
                  <div
                    className={`relative h-full hover-lift ${p.popular ? "z-10" : ""}`}
                  >
                    {/* Popular Badge */}
                    {p.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-brand to-brand-dark text-white text-xs font-bold shadow-lg">
                          <Star className="w-3 h-3 fill-current" aria-hidden="true" />
                          Popular
                        </span>
                      </div>
                    )}

                    <div
                      className={`relative h-full rounded-2xl ${
                        p.popular
                          ? "bg-gradient-to-b from-brand/20 to-dark-lighter border-2 border-brand/30"
                          : "glass-card"
                      } p-4 sm:p-6 flex flex-col`}
                    >
                      {/* Credit Value */}
                      <div className="text-center mb-4 sm:mb-6">
                        <p className="text-xs sm:text-sm text-navy-400 mb-1">
                          Valor do Crédito
                        </p>
                        <p className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">
                          R$ {formatBRL(p.credito)}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="space-y-3 sm:space-y-4 flex-grow">
                        <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/5">
                          <span className="text-navy-400 text-xs sm:text-sm">Prazo</span>
                          <span className="text-white font-medium text-sm sm:text-base">
                            {p.prazo} meses
                          </span>
                        </div>

                        <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/5">
                          <span className="text-navy-400 text-xs sm:text-sm">Parcela</span>
                          <span className="text-brand font-bold text-sm sm:text-base">
                            R$ {formatBRL(parcela)}
                          </span>
                        </div>

                        <div className="flex justify-between items-center py-2 sm:py-3">
                          <span className="text-navy-400 text-xs sm:text-sm">
                            Taxa Admin.
                          </span>
                          <span className="text-navy-300 text-xs sm:text-sm">
                            {(TAXA_ADMIN * 100).toFixed(0)}%
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <Link
                        href="/#simulador"
                        className={`mt-4 sm:mt-6 w-full py-2.5 sm:py-3 rounded-xl font-semibold text-center transition-all flex items-center justify-center gap-2 text-sm sm:text-base ${
                          p.popular
                            ? "btn-primary"
                            : "border border-brand/30 text-brand hover:bg-brand/10"
                        }`}
                      >
                        Simular
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={0.5}>
            <p className="mt-12 text-center text-sm text-navy-400">
              * Valores simulados. A parcela final pode variar de acordo com a
              administradora e condições do grupo.
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
                icon: "📊",
                title: "Parcelas Fixas",
                description: "Planejamento financeiro sem surpresas",
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
                href="https://wa.me/5551981179752"
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
