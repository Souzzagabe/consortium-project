import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planos de Consórcio",
  description:
    "Compare planos de consórcio de R$ 100 mil a R$ 5 milhões. Sem juros, prazo fixo de 240 meses e crédito inteligente. Simule seu plano no Patrimônio Programado.",
  openGraph: {
    title: "Planos de Consórcio | Patrimônio Programado",
    description:
      "Planos de consórcio de R$ 30 mil a R$ 500 mil com parcelas fixas e sem juros.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planos de Consórcio | Patrimônio Programado",
    description:
      "Planos de consórcio de R$ 30 mil a R$ 500 mil com parcelas fixas e sem juros.",
  },
  alternates: { canonical: "/planos" },
};

export default function PlanosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
