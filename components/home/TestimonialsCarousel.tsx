"use client";

import { useRef } from "react";

const testimonials = [
  { name: "Maria Silva", role: "Empresária", content: "Consegui minha casa própria em apenas 18 meses. O consórcio foi a melhor decisão financeira que já tomei.", rating: 5 },
  { name: "João Santos", role: "Engenheiro", content: "A estratégia de lance me ajudou a ser contemplado rapidamente. Equipe super atenciosa e profissional.", rating: 5 },
  { name: "Ana Oliveira", role: "Médica", content: "Renovei toda minha frota de veículos sem pagar juros absurdos. Recomendo para todos!", rating: 5 },
  { name: "Carlos Mendes", role: "Empresário", content: "Planejei a expansão da minha empresa com o consórcio empresarial. Sem juros e com total segurança.", rating: 5 },
  { name: "Fernanda Lima", role: "Professora", content: "Realizei o sonho do apartamento próprio sem comprometer meu orçamento. Atendimento impecável!", rating: 5 },
  { name: "Roberto Costa", role: "Médico", content: "Renovei meu consultório com o consórcio empresarial. Processo simples e sem burocracia.", rating: 5 },
];

// Duplicate for seamless infinite loop
const allCards = [...testimonials, ...testimonials];

function StarRating({ rating, name }: { rating: number; name: string }) {
  return (
    <div className="flex gap-1 mb-4" role="img" aria-label={`Avaliação de ${name}: ${rating} de 5 estrelas`}>
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const pause = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };
  const resume = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  return (
    <section
      className="py-16 lg:py-32 bg-dark relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="gradient-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[100px]"
        aria-hidden="true"
      />

      {/* Heading */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="css-reveal text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-semibold text-brand uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            O que nossos clientes{" "}
            <span className="gradient-text">dizem</span>
          </h2>
        </div>
      </div>

      {/* Carousel — full-width, overflow hidden with edge fades */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-10"
          style={{ background: "linear-gradient(to right, var(--color-dark), transparent)" }}
          aria-hidden="true"
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-10"
          style={{ background: "linear-gradient(to left, var(--color-dark), transparent)" }}
          aria-hidden="true"
        />

        {/* Scrolling track — duplicated cards for seamless loop */}
        <div
          ref={trackRef}
          className="flex gap-6 marquee-track"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
          aria-label="Carrossel de depoimentos"
        >
          {allCards.map((t, i) => (
            <article
              key={i}
              className="shrink-0 w-[300px] sm:w-[360px] glass-card rounded-2xl p-6 sm:p-8 flex flex-col"
              aria-label={`Depoimento de ${t.name}`}
            >
              <StarRating rating={t.rating} name={t.name} />
              <p className="text-navy-200 leading-relaxed mb-6 flex-grow text-sm sm:text-base">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full gradient-brand flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-white font-bold text-sm sm:text-base">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">{t.name}</p>
                  <p className="text-sm text-navy-400">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
