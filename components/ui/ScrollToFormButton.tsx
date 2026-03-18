"use client";

import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function ScrollToFormButton({ children, className }: Props) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button type="button" onClick={handleClick} className={className} aria-label="Ir para o simulador de consórcio">
      {children}
    </button>
  );
}
