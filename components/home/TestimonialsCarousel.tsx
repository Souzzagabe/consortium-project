"use client";

import { useRef } from "react";

/* ── Opportunity data ───────────────────────────────────── */
const opportunities = [
  { type: "Imóvel",  credit: "R$ 200.000",   parcela: "R$ 849",    icon: "house"   },
  { type: "Veículo", credit: "R$ 70.000",    parcela: "R$ 593",    icon: "car"     },
  { type: "Imóvel",  credit: "R$ 350.000",   parcela: "R$ 1.485",  icon: "building"},
  { type: "Veículo", credit: "R$ 150.000",   parcela: "R$ 1.272",  icon: "truck"   },
  { type: "Imóvel",  credit: "R$ 500.000",   parcela: "R$ 2.122",  icon: "house"   },
  { type: "Imóvel",  credit: "R$ 750.000",   parcela: "R$ 3.180",  icon: "building"},
  { type: "Veículo", credit: "R$ 300.000",   parcela: "R$ 2.544",  icon: "car"     },
  { type: "Imóvel",  credit: "R$ 1.000.000", parcela: "R$ 4.240",  icon: "house"   },
];

const allCards = [...opportunities, ...opportunities];

/* ── Inline SVG icons (no external images needed) ────── */
function OpportunityIcon({ icon }: { icon: string }) {
  const cls = "w-12 h-12 sm:w-14 sm:h-14 text-brand";
  switch (icon) {
    case "house":
      return (
        <svg className={cls} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 24L24 8l18 16" />
          <path d="M10 22v16a2 2 0 002 2h24a2 2 0 002-2V22" />
          <rect x="18" y="28" width="12" height="12" rx="1" />
        </svg>
      );
    case "building":
      return (
        <svg className={cls} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="6" width="32" height="36" rx="2" />
          <rect x="14" y="12" width="6" height="5" rx="1" />
          <rect x="28" y="12" width="6" height="5" rx="1" />
          <rect x="14" y="22" width="6" height="5" rx="1" />
          <rect x="28" y="22" width="6" height="5" rx="1" />
          <rect x="19" y="34" width="10" height="8" rx="1" />
        </svg>
      );
    case "car":
      return (
        <svg className={cls} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 28l3-10a3 3 0 013-2h24a3 3 0 013 2l3 10" />
          <rect x="4" y="28" width="40" height="10" rx="3" />
          <circle cx="14" cy="38" r="3" fill="currentColor" />
          <circle cx="34" cy="38" r="3" fill="currentColor" />
        </svg>
      );
    case "truck":
      return (
        <svg className={cls} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="14" width="28" height="18" rx="2" />
          <path d="M30 22h8l6 6v4a2 2 0 01-2 2h-12" />
          <circle cx="12" cy="36" r="3" fill="currentColor" />
          <circle cx="38" cy="36" r="3" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
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
      aria-labelledby="opportunities-heading"
    >
      <div
        className="gradient-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[100px]"
        aria-hidden="true"
      />

      {/* Heading */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="css-reveal text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-semibold text-brand uppercase tracking-wider mb-4">
            Oportunidades
          </span>
          <h2
            id="opportunities-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Conheça nossos{" "}
            <span className="gradient-text">consórcios</span>
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Créditos para imóveis e veículos com as menores taxas do mercado, sem juros e sem entrada.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-10"
          style={{ background: "linear-gradient(to right, var(--color-dark), transparent)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-10"
          style={{ background: "linear-gradient(to left, var(--color-dark), transparent)" }}
          aria-hidden="true"
        />

        <div
          ref={trackRef}
          className="flex gap-6 marquee-track"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
          aria-label="Carrossel de oportunidades de consórcio"
        >
          {allCards.map((o, i) => (
            <article
              key={i}
              className="shrink-0 w-[260px] sm:w-[300px] glass-card rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center"
              aria-label={`Consórcio de ${o.type} ${o.credit}`}
            >
              {/* Icon */}
              <div className="mb-4 p-3 rounded-2xl bg-brand/10">
                <OpportunityIcon icon={o.icon} />
              </div>

              {/* Badge */}
              <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3 py-1 rounded-full mb-4">
                {o.type}
              </span>

              {/* Credit */}
              <p className="text-xs text-navy-400 mb-1">Crédito</p>
              <p className="text-2xl sm:text-3xl font-bold gradient-text mb-4">
                {o.credit}
              </p>

              {/* Parcela */}
              <div className="w-full border-t border-white/10 pt-4">
                <p className="text-xs text-navy-400 mb-1">Parcela a partir de</p>
                <p className="text-lg sm:text-xl font-semibold text-white">
                  {o.parcela}<span className="text-sm text-navy-400 font-normal">/mês</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
