import { ArrowLeft, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import {
  AnimatedSection,
  CTASection,
} from "@/components/ui/PremiumComponents";

type ArticleData = {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
  gradient: string;
};

const articles: Record<string, ArticleData> = {
  "consorcio-vale-a-pena": {
    title: "Consórcio Vale a Pena? Descubra as Vantagens",
    description:
      "Entenda por que o consórcio é uma das melhores formas de adquirir bens sem pagar juros.",
    category: "Educação Financeira",
    date: "28 Fev 2026",
    readTime: "5 min",
    gradient: "from-brand to-brand-dark",
    content: [
      "O consórcio é uma das modalidades de aquisição de bens mais populares no Brasil, mas muitas pessoas ainda têm dúvidas se realmente vale a pena. A resposta curta é: sim, para muitas situações o consórcio é uma excelente escolha.",
      "A principal vantagem do consórcio é a ausência de juros. Diferente do financiamento, onde você paga taxas de juros que podem dobrar o valor do bem, no consórcio você paga apenas uma taxa administrativa, que geralmente fica entre 15% e 20% do valor total, diluída ao longo do prazo.",
      "Para quem tem planejamento financeiro e não precisa do bem imediatamente, o consórcio oferece parcelas mais baixas que as do financiamento. Isso significa que você pode adquirir um bem de maior valor com parcelas que cabem no seu orçamento.",
      "Outra grande vantagem é o poder de compra à vista. Quando você é contemplado, recebe uma carta de crédito que funciona como dinheiro à vista, o que permite negociar melhores condições e descontos na hora da compra.",
      "O consórcio também funciona como uma forma de poupança forçada. Você se compromete a pagar uma parcela mensal, criando disciplina financeira e construindo patrimônio de forma consistente.",
      "Para investidores, o consórcio pode ser uma estratégia inteligente de aquisição de bens para renda, como imóveis para aluguel, com um custo financeiro menor que o do financiamento tradicional.",
    ],
  },
  "consorcio-ou-financiamento": {
    title: "Consórcio ou Financiamento: Qual a Melhor Opção?",
    description:
      "Compare as duas modalidades de crédito e descubra qual faz mais sentido para você.",
    category: "Comparativo",
    date: "20 Fev 2026",
    readTime: "7 min",
    gradient: "from-cyan-500 to-blue-600",
    content: [
      "Na hora de adquirir um bem de alto valor, como imóvel ou veículo, duas opções se destacam: consórcio e financiamento. Cada modalidade tem suas vantagens e o ideal depende do seu perfil e necessidade.",
      "O financiamento é indicado para quem precisa do bem imediatamente. Você recebe o crédito na hora, mas paga juros que podem representar mais de 100% do valor original ao longo do contrato. As taxas de juros no Brasil estão entre as mais altas do mundo.",
      "O consórcio, por outro lado, é ideal para quem pode planejar a aquisição. Sem juros, você paga apenas a taxa administrativa, que é significativamente menor. A desvantagem é que você precisa esperar a contemplação, seja por sorteio ou lance.",
      "Vamos comparar com números: um financiamento imobiliário de R$ 200.000 a 8% ao ano em 240 meses resulta em parcelas iniciais de aproximadamente R$ 1.800 e um custo total superior a R$ 430.000. No consórcio, com taxa administrativa de 18%, o custo total seria R$ 236.000 — uma economia de quase R$ 200.000.",
      "Se você tem urgência e não pode esperar, o financiamento pode ser o caminho. Mas se você pode planejar e tem disciplina financeira, o consórcio vai economizar muito dinheiro no longo prazo.",
      "Uma estratégia inteligente é combinar as duas modalidades: usar o financiamento para necessidades imediatas e o consórcio para planejamento de médio e longo prazo.",
    ],
  },
  "como-ser-contemplado-mais-rapido": {
    title: "Como Ser Contemplado Mais Rápido no Consórcio?",
    description:
      "Dicas práticas para aumentar suas chances de contemplação no consórcio.",
    category: "Dicas",
    date: "12 Fev 2026",
    readTime: "6 min",
    gradient: "from-purple-500 to-purple-700",
    content: [
      "Uma das principais dúvidas de quem entra em um consórcio é: como ser contemplado mais rápido? Existem estratégias que podem aumentar significativamente suas chances. Vamos explorar as principais.",
      "Lance livre: É a forma mais comum de antecipar a contemplação. Você oferece um valor adicional ao fundo comum e, se seu lance for o maior do mês, você é contemplado. Dica: oferte lances entre 20% e 30% do valor da carta para ter boas chances.",
      "Lance embutido: Usando parte da sua própria carta de crédito como lance, você não precisa desembolsar dinheiro extra. Por exemplo, em uma carta de R$ 100.000, você pode usar R$ 20.000 como lance e receber R$ 80.000 de crédito.",
      "Mantenha as parcelas em dia: Estar adimplente é requisito para participar dos sorteios e lances. Qualquer atraso pode te tirar da assembleia mensal.",
      "Entre em um grupo novo: Grupos recém-formados têm menos participantes já contemplados, o que significa que suas chances de sorteio são maiores nas primeiras assembleias.",
      "Monitore os lances: Acompanhe os valores dos lances vencedores nos meses anteriores. Isso te dá uma referência de quanto precisa ofertar para ser contemplado.",
      "Considere a antecipação de parcelas: Adiantar parcelas não garante contemplação, mas reduz seu saldo devedor e pode ser usado como estratégia para ofertar lances maiores.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <>
        <section className="min-h-[60vh] flex items-center justify-center bg-dark">
          <div className="text-center px-4">
            <h1 className="text-3xl font-bold text-white mb-4">
              Artigo não encontrado
            </h1>
            <p className="text-navy-300 mb-8">
              O artigo que você procura não existe ou foi removido.
            </p>
            <Link href="/blog" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Voltar ao Blog
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden hero-gradient" aria-label="Cabeçalho do artigo">
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />
        <div className={`absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br ${article.gradient} opacity-20 rounded-full blur-[128px] gradient-orb`} aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-brand hover:text-brand/80 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
              Voltar ao Blog
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-sm font-semibold text-brand bg-brand/10 px-4 py-1.5 rounded-full">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-navy-400">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                {article.date}
              </span>
              <span className="flex items-center gap-1 text-sm text-navy-400">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {article.readTime} de leitura
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              {article.title}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-dark">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="space-y-6">
              {article.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg text-navy-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* CTA Card */}
          <AnimatedSection delay={0.3}>
            <div className="mt-16 glass-card rounded-3xl p-8 lg:p-10 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-brand/10 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-brand" aria-hidden="true" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Gostou do conteúdo?
              </h3>

              <p className="text-navy-300 mb-8 max-w-md mx-auto">
                Simule seu consórcio agora e comece a planejar seu futuro financeiro.
              </p>

              <Link
                href="/#simulador"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span className="flex items-center gap-2">
                  Simular Consórcio
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </article>
      </section>

      <CTASection
        title="Tem Mais Dúvidas?"
        description="Nossa equipe está pronta para te ajudar a entender tudo sobre consórcio."
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
