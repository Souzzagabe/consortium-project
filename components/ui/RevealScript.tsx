"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealScript() {
  const pathname = usePathname();

  useEffect(() => {
    // Synchronously reveal elements already in the viewport.
    // In production (no Strict Mode), IntersectionObserver fires asynchronously
    // and can miss elements that are already on screen when the observer is set up.
    const allEls = document.querySelectorAll<HTMLElement>(".css-reveal:not(.visible)");
    const vh = window.innerHeight;
    allEls.forEach((el) => {
      const { top, bottom } = el.getBoundingClientRect();
      if (top < vh && bottom > 0) {
        el.classList.add("visible");
      }
    });

    // IntersectionObserver handles elements below the fold as the user scrolls.
    const hiddenEls = document.querySelectorAll<HTMLElement>(".css-reveal:not(.visible)");
    if (!hiddenEls.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px", threshold: 0.05 }
    );

    hiddenEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
