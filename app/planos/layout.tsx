import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cartas Contempladas | Crédito Disponível para Compra Imediata",
  description:
    "Cartas de crédito contempladas prontas para uso: de R$ 270 mil a R$ 15 milhões. Consórcio sem juros das melhores administradoras: Bradesco, Embracon, Caixa e Itaú. Negocie agora.",
  openGraph: {
    title: "Cartas Contempladas | Matheus Multiplica",
    description:
      "Cartas de crédito contempladas de R$ 270 mil a R$ 15 milhões sem juros. Bradesco, Embracon, Caixa e Itaú. Negocie direto com consultor.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cartas Contempladas | Matheus Multiplica",
    description:
      "Cartas contempladas de R$ 270 mil a R$ 15 milhões sem juros. Negocie agora.",
  },
  alternates: { canonical: "/planos" },
};

export default function PlanosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
