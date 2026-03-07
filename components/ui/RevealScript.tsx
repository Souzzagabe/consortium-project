"use client";

import { useEffect } from "react";

export default function RevealScript() {
  useEffect(() => {
    const els = document.querySelectorAll(".css-reveal");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "-60px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
