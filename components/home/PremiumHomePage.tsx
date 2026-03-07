import Link from "next/link";
import {
  TrendingUp,
  Home,
  Car,
  Wallet,
  ArrowRight,
  Shield,
  PiggyBank,
  Target,
  Award,
  Users,
  Sparkles,
  Zap,
} from "lucide-react";
import SimulatorCard from "./SimulatorCard";

// ============================================
// HERO SECTION (Server-rendered, no JS)
// ============================================

function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden hero-gradient" aria-label="Seção principal">
      <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />
      <div className="gradient-orb absolute top-1/4 -left-32 w-96 h-96 bg-brand/20 rounded-full blur-[128px]" aria-hidden="true" />
      <div className="gradient-orb absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[128px]" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left hero-animate">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                Consórcio Inteligente
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 text-balance">
              Construa seu{" "}
              <span className="gradient-text">Patrimônio</span>{" "}
              com Estratégia
            </h1>

            <p className="text-lg sm:text-xl text-navy-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              Crédito inteligente e planejado para realizar seus sonhos.
              Sem juros, sem burocracia, com estratégias personalizadas de contemplação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#simulador" className="btn-primary group">
                <span className="flex items-center gap-2">
                  Simular Agora
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Link>
              <Link href="/como-funciona" className="btn-secondary">
                Como Funciona
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-navy-400">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand" aria-hidden="true" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-brand" aria-hidden="true" />
                <span>+10.000 Clientes</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-brand" aria-hidden="true" />
                <span>Regulado pelo BC</span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Simulator */}
          <div className="hero-animate-delay">
            <SimulatorCard />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce" aria-hidden="true">
        <div className="w-6 h-10 rounded-full border-2 border-navy-400/50 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-brand" />
        </div>
      </div>
    </section>
  );
}

// ============================================
// BENEFITS SECTION
// ============================================

const benefits = [
  {
    icon: PiggyBank,
    title: "Sem Juros Abusivos",
    description: "Diferente do financiamento, você paga apenas uma pequena taxa administrativa.",
    color: "text-brand",
    bg: "bg-brand/10",
  },
  {
    icon: Target,
    title: "Contemplação Estratégica",
    description: "Use lances para acelerar sua contemplação ou aguarde por sorteio mensal.",
    color: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Administradoras reguladas pelo Banco Central com garantia de entrega.",
    color: "text-accent-purple",
    bg: "bg-accent-purple/10",
  },
  {
    icon: Zap,
    title: "Poder de Compra à Vista",
    description: "Ao ser contemplado, negocie como comprador à vista e ganhe descontos.",
    color: "text-brand-light",
    bg: "bg-brand-light/10",
  },
];

function BenefitsSection() {
  return (
    <section className="py-16 lg:py-32 bg-dark relative overflow-hidden cv-auto" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="css-reveal text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-semibold text-brand uppercase tracking-wider mb-4">
            Por que escolher consórcio
          </span>
          <h2 id="benefits-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Vantagens que fazem a{" "}
            <span className="gradient-text">diferença</span>
          </h2>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto text-pretty">
            O consórcio é a forma mais inteligente de construir patrimônio.
            Conheça os benefícios que só quem planeja consegue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="css-reveal glass-card rounded-2xl p-5 sm:p-6 h-full flex flex-col hover-lift"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${benefit.bg} flex items-center justify-center mb-4 sm:mb-5`}
              >
                <benefit.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${benefit.color}`} aria-hidden="true" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                {benefit.title}
              </h3>
              <p className="text-navy-300 text-sm leading-relaxed flex-grow">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONSORTIUM TYPES SECTION
// ============================================

const consortiumTypes = [
  {
    icon: Home,
    title: "Imobiliário",
    description: "Casa própria, apartamento, terreno ou imóvel comercial. Realize o sonho da casa própria.",
    values: "R$ 50 mil a R$ 500 mil",
    color: "from-brand to-brand-dark",
  },
  {
    icon: Car,
    title: "Veículos",
    description: "Carro, moto ou caminhão. Renove sua frota com planejamento inteligente.",
    values: "R$ 30 mil a R$ 300 mil",
    color: "from-accent-blue to-accent-purple",
  },
  {
    icon: Wallet,
    title: "Serviços",
    description: "Viagens, reformas, educação ou outros objetivos. Flexibilidade para seus planos.",
    values: "R$ 15 mil a R$ 100 mil",
    color: "from-accent-cyan to-accent-blue",
  },
];

function ConsortiumTypesSection() {
  return (
    <section className="py-16 lg:py-32 bg-dark-card relative cv-auto" aria-labelledby="types-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="css-reveal text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-semibold text-brand uppercase tracking-wider mb-4">
            Tipos de Consórcio
          </span>
          <h2 id="types-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Escolha o consórcio{" "}
            <span className="gradient-text">ideal</span>
          </h2>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto">
            Oferecemos diferentes modalidades para atender seus objetivos de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {consortiumTypes.map((type, index) => (
            <div
              key={type.title}
              className="css-reveal group relative rounded-3xl overflow-hidden h-full hover-scale"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative m-[1px] bg-dark-lighter rounded-3xl p-6 sm:p-8 h-full flex flex-col">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-5 sm:mb-6`}
                >
                  <type.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-navy-300 text-sm sm:text-base mb-6 leading-relaxed flex-grow">
                  {type.description}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark/50 border border-dark-border self-start mb-5">
                  <TrendingUp className="w-4 h-4 text-brand" aria-hidden="true" />
                  <span className="text-sm font-medium text-white">{type.values}</span>
                </div>
                <Link
                  href="/#simulador"
                  className="mt-auto flex items-center gap-2 text-brand font-medium group/cta"
                >
                  <span>Simular agora</span>
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-2 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// HOW IT WORKS SECTION
// ============================================

const steps = [
  { number: "01", title: "Escolha seu plano", description: "Selecione o valor da carta de crédito e o prazo que melhor se encaixa no seu orçamento." },
  { number: "02", title: "Participe do grupo", description: "Entre em um grupo de consórcio e pague suas parcelas mensais normalmente." },
  { number: "03", title: "Seja contemplado", description: "Por sorteio mensal ou através de lance, você recebe sua carta de crédito." },
  { number: "04", title: "Realize seu sonho", description: "Use a carta para adquirir seu bem com poder de compra à vista." },
];

function HowItWorksSection() {
  return (
    <section className="py-16 lg:py-32 bg-dark relative overflow-hidden cv-auto" aria-labelledby="steps-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-card/50 to-transparent h-1/2" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="css-reveal text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-semibold text-brand uppercase tracking-wider mb-4">
            Passo a Passo
          </span>
          <h2 id="steps-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Como funciona o{" "}
            <span className="gradient-text">consórcio</span>
          </h2>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto">
            Um processo simples e transparente para você conquistar seus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand via-accent-cyan to-brand opacity-30" aria-hidden="true" />
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="css-reveal relative text-center"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full gradient-brand flex items-center justify-center shadow-lg shadow-brand/30">
                <span className="text-lg sm:text-xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-navy-300 text-xs sm:text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="css-reveal text-center mt-16" style={{ transitionDelay: "0.6s" }}>
          <Link href="/como-funciona" className="btn-secondary inline-flex items-center gap-2">
            Saiba mais detalhes
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============================================
// STATS SECTION
// ============================================

const stats = [
  { value: "10.000+", label: "Clientes Satisfeitos" },
  { value: "R$ 50M+", label: "Crédito Liberado" },
  { value: "98%", label: "Taxa de Satisfação" },
  { value: "15+", label: "Anos de Experiência" },
];

function StatsSection() {
  return (
    <section className="py-12 lg:py-24 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="css-reveal text-center"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand mb-2">
                {stat.value}
              </p>
              <p className="text-sm sm:text-base text-navy-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// TESTIMONIALS SECTION
// ============================================

const testimonials = [
  { name: "Maria Silva", role: "Empresária", content: "Consegui minha casa própria em apenas 18 meses. O consórcio foi a melhor decisão financeira que já tomei.", rating: 5 },
  { name: "João Santos", role: "Engenheiro", content: "A estratégia de lance me ajudou a ser contemplado rapidamente. Equipe super atenciosa e profissional.", rating: 5 },
  { name: "Ana Oliveira", role: "Médica", content: "Renovei toda minha frota de veículos sem pagar juros absurdos. Recomendo para todos!", rating: 5 },
];

function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-32 bg-dark relative overflow-hidden cv-auto" aria-labelledby="testimonials-heading">
      <div className="gradient-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[100px]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="css-reveal text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-semibold text-brand uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            O que nossos clientes{" "}
            <span className="gradient-text">dizem</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="css-reveal glass-card rounded-2xl p-6 sm:p-8 h-full flex flex-col hover-lift-sm"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4" role="img" aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-navy-200 leading-relaxed mb-6 flex-grow">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full gradient-brand flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm sm:text-base">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-navy-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// FINAL CTA SECTION
// ============================================

function FinalCTASection() {
  return (
    <section className="py-16 lg:py-32 relative overflow-hidden" aria-label="Chamada para ação">
      <div className="absolute inset-0 gradient-brand opacity-90" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="css-reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Pronto para construir seu patrimônio?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Faça uma simulação gratuita agora e descubra como o consórcio pode
            transformar seus sonhos em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#simulador"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-dark font-bold rounded-full hover:bg-navy-100 transition-colors shadow-2xl"
            >
              Simular Gratuitamente
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <a
              href="https://wa.me/5551981179752"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
            >
              Falar com Consultor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// MAIN COMPONENT (Server Component — zero JS except SimulatorCard)
// ============================================

export default function PremiumHomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ConsortiumTypesSection />
      <StatsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}