import { Home, Car, Building2, Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/layout/Footer";
import {
  AnimatedSection,
  PageHero,
  CTASection,
} from "@/components/ui/PremiumComponents";

const servicos = [
  {
    id: "imobiliario",
    title: "Consórcio Imobiliário",
    description:
      "O consórcio imobiliário é a forma mais inteligente de adquirir imóveis sem pagar juros. Seja para a casa dos sonhos, apartamento, terreno ou imóvel comercial, nosso consórcio oferece as melhores condições do mercado.",
    beneficios: [
      "Sem juros — pague apenas taxa administrativa",
      "Cartas de crédito de R$ 50.000 a R$ 500.000",
      "Prazos flexíveis de 60 a 120 meses",
      "Possibilidade de usar FGTS para lance",
      "Poder de compra à vista ao ser contemplado",
      "Parcelas que cabem no seu orçamento",
    ],
    icon: Home,
    gradient: "from-emerald-500 to-emerald-600",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    id: "veiculos",
    title: "Consórcio de Veículos",
    description:
      "Planeje a compra do seu carro, moto ou caminhão sem surpresas. O consórcio de veículos oferece parcelas fixas e sem juros, com a flexibilidade para escolher o veículo que desejar ao ser contemplado.",
    beneficios: [
      "Carros, motos, caminhões e utilitários",
      "Cartas de crédito de R$ 5.000 a R$ 300.000",
      "Prazos de 12 a 84 meses",
      "Sem entrada obrigatória",
      "Contemplação por sorteio ou lance",
      "Pode usar para veículos novos ou usados",
    ],
    icon: Car,
    gradient: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    id: "empresarial",
    title: "Consórcio Empresarial",
    description:
      "Expanda seu negócio com crédito inteligente. O consórcio empresarial é ideal para aquisição de equipamentos, reforma de espaço comercial, frota de veículos ou capital para investimento no crescimento da sua empresa.",
    beneficios: [
      "Equipamentos, máquinas e tecnologia",
      "Reforma e ampliação comercial",
      "Frota de veículos empresariais",
      "Cartas de crédito personalizadas",
      "Condições especiais para pessoa jurídica",
      "Planejamento financeiro empresarial",
    ],
    icon: Building2,
    gradient: "from-purple-500 to-purple-600",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
];

export default function ServicosPage() {
  return (
    <>
      <PageHero
        badge="Nossos Serviços"
        title="Soluções em Consórcio para"
        titleHighlight="Cada Objetivo"
        description="Oferecemos diferentes modalidades de consórcio para que você realize seus sonhos de forma planejada e sem juros."
      />

      {/* Services Detail */}
      <section className="py-12 sm:py-16 lg:py-32 bg-dark relative overflow-hidden" aria-labelledby="servicos-detail-heading">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[128px] gradient-orb" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[128px] gradient-orb" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 lg:space-y-32">
          <h2 id="servicos-detail-heading" className="sr-only">Detalhes dos serviços</h2>
          {servicos.map((s, i) => {
            const IconComponent = s.icon;
            const isReversed = i % 2 === 1;

            return (
              <AnimatedSection key={s.id} delay={i * 0.1}>
                <div
                  id={s.id}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
                >
                  {/* Content */}
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div
                      className={`w-16 h-16 rounded-2xl ${s.iconBg} flex items-center justify-center mb-6`}
                    >
                      <IconComponent className={`w-8 h-8 ${s.iconColor}`} aria-hidden="true" />
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
                      {s.title}
                    </h2>

                    <p className="text-lg text-navy-300 leading-relaxed mb-8">
                      {s.description}
                    </p>

                    <ul className="space-y-4 mb-10">
                      {s.beneficios.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-brand" aria-hidden="true" />
                          </div>
                          <span className="text-navy-300">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/#simulador"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <span className="flex items-center gap-2">
                        Simular {s.title.replace("Consórcio ", "")}
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </Link>
                  </div>

                  {/* Visual Card */}
                  <div className={isReversed ? "lg:order-1" : ""}>
                    <div
                      className="relative hover-scale"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${s.gradient} rounded-3xl blur-2xl opacity-20`}
                      />
                      <div className="relative glass-card rounded-3xl p-8 lg:p-12 overflow-hidden">
                        <div
                          className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${s.gradient} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`}
                        />

                        <div className="relative text-center">
                          <div
                            className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-6 shadow-lg`}
                          >
                            <IconComponent className="w-12 h-12 text-white" aria-hidden="true" />
                          </div>

                          <h3 className="text-2xl font-bold text-white mb-3">
                            {s.title}
                          </h3>

                          <div className="flex items-center justify-center gap-2 text-sm text-navy-400">
                            <Sparkles className="w-4 h-4 text-brand" aria-hidden="true" />
                            <span>Sem juros • Parcelas fixas</span>
                          </div>

                          <div className="mt-8 pt-6 border-t border-white/5">
                            <p className="text-sm text-navy-400 mb-1">
                              Créditos a partir de
                            </p>
                            <p className="text-3xl font-bold gradient-text">
                              {s.id === "imobiliario"
                                ? "R$ 50.000"
                                : s.id === "veiculos"
                                ? "R$ 5.000"
                                : "R$ 30.000"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <LeadForm />

      <CTASection
        title="Pronto para Realizar Seu Sonho?"
        description="Faça uma simulação gratuita e descubra a melhor opção para você."
        primaryCTA={{ text: "Simular Agora", href: "/#simulador" }}
        secondaryCTA={{
          text: "Falar com Consultor",
          href: "https://wa.me/5551981179752",
          external: true,
        }}
      />

      <Footer />
    </>
  );
}
