import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planos de Consórcio | Compare e Simule Online",
  description:
    "Compare planos de consórcio de R$ 70 mil a R$ 5 milhões. Sem juros, prazo de 240 meses e contribuições que cabem no seu orçamento. Simule seu plano no Patrimônio Programado.",
  openGraph: {
    title: "Planos de Consórcio | Patrimônio Programado",
    description:
      "Planos de consórcio de R$ 70 mil a R$ 5 milhões sem juros. Compare contribuições e encontre o plano ideal.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planos de Consórcio | Patrimônio Programado",
    description:
      "Planos de consórcio de R$ 70 mil a R$ 5 milhões sem juros. Simule online.",
  },
  alternates: { canonical: "/planos" },
};

export default function PlanosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
