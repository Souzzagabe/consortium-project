import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import {
  AnimatedSection,
  PageHero,
  CTASection,
} from "@/components/ui/PremiumComponents";

const articles = [
  {
    slug: "consorcio-vale-a-pena",
    title: "Consórcio Vale a Pena? Descubra as Vantagens",
    excerpt:
      "Entenda por que o consórcio é uma das melhores formas de adquirir bens sem pagar juros e como ele pode se encaixar no seu planejamento financeiro.",
    category: "Educação Financeira",
    date: "28 Fev 2026",
    readTime: "5 min",
    gradient: "from-brand to-brand-dark",
  },
  {
    slug: "consorcio-ou-financiamento",
    title: "Consórcio ou Financiamento: Qual a Melhor Opção?",
    excerpt:
      "Compare as duas modalidades de crédito e descubra qual faz mais sentido para o seu bolso e seus objetivos de vida.",
    category: "Comparativo",
    date: "20 Fev 2026",
    readTime: "7 min",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    slug: "como-ser-contemplado-mais-rapido",
    title: "Como Ser Contemplado Mais Rápido no Consórcio?",
    excerpt:
      "Dicas práticas para aumentar suas chances de contemplação por lance e estratégias para antecipar o recebimento da carta de crédito.",
    category: "Dicas",
    date: "12 Fev 2026",
    readTime: "6 min",
    gradient: "from-purple-500 to-purple-700",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Blog"
        title="Artigos e"
        titleHighlight="Dicas Financeiras"
        description="Conteúdo educativo sobre consórcio, investimentos e planejamento financeiro para ajudar você a tomar as melhores decisões."
      />

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 lg:py-32 bg-dark relative overflow-hidden" aria-label="Artigos do blog">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand/5 rounded-full blur-[128px] gradient-orb" aria-hidden="true" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[128px] gradient-orb" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <AnimatedSection key={article.slug} delay={idx * 0.1}>
                <Link href={`/blog/${article.slug}`} className="group block h-full">
                  <article
                    className="glass-card rounded-2xl overflow-hidden h-full flex flex-col hover-lift"
                  >
                    {/* Thumbnail */}
                    <div
                      className={`h-48 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
                      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
                      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                        <div
                          className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
                        >
                          <BookOpen className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      {/* Meta */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-semibold text-brand bg-brand/10 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-navy-400">
                          <Clock className="w-3 h-3" aria-hidden="true" />
                          {article.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg font-bold text-white mb-3 group-hover:text-brand transition-colors line-clamp-2">
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-navy-300 leading-relaxed mb-4 flex-grow line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="flex items-center gap-1 text-xs text-navy-400">
                          <Calendar className="w-3 h-3" aria-hidden="true" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-brand font-medium group-hover:gap-2 transition-all">
                          Ler mais
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ficou com Dúvidas?"
        description="Entre em contato com nossa equipe e tire todas as suas dúvidas sobre consórcio."
        primaryCTA={{ text: "Simular Agora", href: "/#simulador" }}
        secondaryCTA={{
          text: "Falar com Consultor",
          href: "https://wa.me/555197147766",
          external: true,
        }}
      />

      <Footer />
    </>
  );
}
