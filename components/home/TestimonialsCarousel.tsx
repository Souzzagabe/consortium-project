"use client";

import { useRef } from "react";
import Image from "next/image";

/* ── Opportunity data ───────────────────────────────────── */
const opportunities = [
  { type: "Imóvel",   credit: "R$ 700.000,00",    parcela: "R$ 2.968,00",  image: "/carroussel/casa.jpeg"        },
  { type: "Imóvel",   credit: "R$ 1.000.000,00",  parcela: "R$ 4.240,00",  image: "/carroussel/casaluxo.jpeg"    },
  { type: "Caminhão", credit: "R$ 840.000,00",    parcela: "R$ 6.913,20",  image: "/carroussel/camnha1.jpeg"     },
  { type: "Trator",   credit: "R$ 210.000,00",    parcela: "R$ 1.728,30",  image: "/carroussel/trator.jpeg"      },
  { type: "Imóvel",   credit: "R$ 500.000,00",    parcela: "R$ 2.120,00",  image: "/carroussel/casafamilia.jpeg" },
  { type: "Veículo",  credit: "R$ 180.000,00",    parcela: "R$ 1.481,40",  image: "/carroussel/carro.jpeg"       },
];

const allCards = [...opportunities, ...opportunities];

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
              className="shrink-0 w-[280px] sm:w-[320px] glass-card rounded-2xl overflow-hidden flex flex-col"
              aria-label={`Consórcio de ${o.type} ${o.credit}`}
            >
              {/* Image — transparent/clean bg via gradient mask */}
              <div className="relative w-full h-[180px] sm:h-[200px] flex items-center justify-center bg-gradient-to-b from-brand/10 to-transparent">
                <div className="relative w-[85%] h-[85%]">
                  <Image
                    src={o.image}
                    alt={`Consórcio de ${o.type} — crédito de ${o.credit}`}
                    fill
                    className="object-contain drop-shadow-[0_4px_20px_rgba(0,191,111,0.15)]"
                    sizes="(max-width: 640px) 280px, 320px"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col items-center text-center flex-1">
                {/* Badge */}
                <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3 py-1 rounded-full mb-3">
                  {o.type}
                </span>

                {/* Credit */}
                <p className="text-[11px] text-navy-400 mb-1">Crédito</p>
                <p className="text-xl sm:text-2xl font-bold gradient-text mb-4">
                  {o.credit}
                </p>

                {/* Parcela */}
                <div className="w-full border-t border-white/10 pt-3 mt-auto">
                  <p className="text-[11px] text-navy-400 mb-1">Parcela a partir de</p>
                  <p className="text-lg sm:text-xl font-semibold text-white">
                    {o.parcela}<span className="text-sm text-navy-400 font-normal">/mês</span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
