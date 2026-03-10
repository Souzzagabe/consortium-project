import {
  HelpCircle,
  Users,
  Trophy,
  Banknote,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import {
  AnimatedSection,
  PageHero,
  SectionHeader,
  GlassCard,
  CTASection,
} from "@/components/ui/PremiumComponents";

const conceitos = [
  {
    title: "O que é Consórcio?",
    description:
      "O consórcio é uma modalidade de crédito coletivo onde um grupo de pessoas se reúne com o objetivo de adquirir bens ou serviços. Cada participante contribui mensalmente e, todos os meses, um ou mais integrantes são contemplados com a carta de crédito, podendo realizar a compra desejada com poder de compra à vista.",
    icon: HelpCircle,
    iconBg: "bg-brand/10",
    iconColor: "text-brand",
  },
  {
    title: "Como Funcionam os Grupos?",
    description:
      "Os participantes são organizados em grupos com prazo e valor de crédito semelhantes. Cada grupo tem um número definido de participantes e o fundo comum é formado pelas contribuições mensais de todos. O grupo é gerido por uma administradora autorizada pelo Banco Central.",
    icon: Users,
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
  },
  {
    title: "Sorteios Mensais",
    description:
      "Todo mês, é realizado um sorteio entre os participantes do grupo que ainda não foram contemplados. O sorteio é público e auditado, garantindo total transparência. Todos têm chances iguais de serem contemplados a cada assembleia mensal.",
    icon: Trophy,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
  {
    title: "Lances",
    description:
      "Além do sorteio, você pode ofertar um lance para antecipar sua contemplação. O lance é um valor adicional que você está disposto a pagar para ter prioridade. Existem diferentes tipos: lance livre, lance fixo e lance embutido (usando parte da carta de crédito).",
    icon: Banknote,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    title: "Contemplação",
    description:
      "A contemplação é o momento mais esperado! Quando você é contemplado — por sorteio ou lance — recebe a carta de crédito no valor integral contratado. Com ela, você tem poder de compra à vista para adquirir o bem desejado, negociando as melhores condições.",
    icon: Star,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
];

const timeline = [
  { step: "1", title: "Escolha seu plano", desc: "Defina o valor do crédito e o prazo ideal." },
  { step: "2", title: "Entre no grupo", desc: "Você é incluído em um grupo de consórcio." },
  { step: "3", title: "Faça suas contribuições", desc: "Contribua mensalmente com o fundo comum do grupo." },
  { step: "4", title: "Sorteio ou lance", desc: "Participe dos sorteios ou oferte um lance." },
  { step: "5", title: "Contemplação", desc: "Receba a carta de crédito integral." },
  { step: "6", title: "Realize seu sonho", desc: "Use a carta para comprar seu bem à vista." },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <PageHero
        badge="Entenda o Consórcio"
        title="Como Funciona o"
        titleHighlight="Consórcio?"
        description="Entenda de forma simples e clara como o consórcio pode ser a melhor opção para realizar seus planos."
      />

      {/* Concepts Section */}
      <section className="py-12 sm:py-16 lg:py-32 bg-dark relative overflow-hidden" aria-label="Conceitos sobre consórcio">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand/5 rounded-full blur-[128px] gradient-orb" aria-hidden="true" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[128px] gradient-orb" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Conceitos"
            title="Tudo sobre"
            titleHighlight="Consórcio"
            description="Entenda cada etapa do processo de consórcio de forma clara e objetiva."
          />

          <div className="space-y-6">
            {conceitos.map((c, idx) => {
              const IconComponent = c.icon;
              return (
                <AnimatedSection key={c.title} delay={idx * 0.1}>
                  <GlassCard hover={false}>
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div
                        className={`w-14 h-14 rounded-xl ${c.iconBg} flex items-center justify-center shrink-0`}
                      >
                        <IconComponent className={`w-7 h-7 ${c.iconColor}`} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">
                          {c.title}
                        </h3>
                        <p className="text-navy-300 leading-relaxed">
                          {c.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="py-12 sm:py-16 lg:py-32 bg-dark-card relative overflow-hidden" aria-label="Passo a passo do consórcio">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Passo a Passo"
            title="Sua Jornada no"
            titleHighlight="Consórcio"
          />

          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand/30 to-transparent" aria-hidden="true" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-12">
              {timeline.map((t, idx) => (
                <AnimatedSection key={t.step} delay={idx * 0.1}>
                  <div className="relative text-center group">
                    {/* Step Number */}
                    <div
                      className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6"
                    >
                      <div className="absolute inset-0 rounded-full gradient-brand opacity-20 blur-lg group-hover:opacity-40 transition-opacity" />
                      <div className="relative w-full h-full rounded-full gradient-brand flex items-center justify-center shadow-lg shadow-brand/30">
                        <span className="text-lg sm:text-xl font-bold text-white">
                          {t.step}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-brand transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-navy-300">{t.desc}</p>

                    {/* Arrow connector - only show on larger screens */}
                    {idx < timeline.length - 1 && idx !== 2 && (
                      <div className="hidden lg:block absolute top-12 -right-6 transform translate-x-1/2">
                        <ArrowRight className="w-4 h-4 text-brand/40" aria-hidden="true" />
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-12 sm:py-16 lg:py-32 bg-dark relative overflow-hidden" aria-label="Dúvidas frequentes">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-[128px] gradient-orb" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="glass-card rounded-3xl p-8 lg:p-12">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-brand/10 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-brand" aria-hidden="true" />
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ainda tem dúvidas?
              </h2>

              <p className="text-navy-300 text-lg mb-8 max-w-xl mx-auto">
                Nossa equipe está pronta para esclarecer todas as suas dúvidas
                sobre consórcio. Entre em contato e tenha um atendimento
                personalizado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#simulador"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <span className="flex items-center gap-2">
                    Fazer Simulação
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
                <a
                  href="https://wa.me/5551981179752"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  Falar com Consultor
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Pronto para Começar?"
        description="Simule seu consórcio agora e descubra a contribuição ideal para você."
        primaryCTA={{ text: "Simular Consórcio", href: "/#simulador" }}
      />

      <Footer />
    </>
  );
}
