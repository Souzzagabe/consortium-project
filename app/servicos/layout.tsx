import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços de Consórcio | Imobiliário, Veículos e Empresarial",
  description:
    "Consórcio imobiliário de R$ 100 mil a R$ 5 milhões, veículos de R$ 70 mil a R$ 1 milhão e empresarial. Sem juros, com contemplação estratégica. Consultor certificado em Porto Alegre.",
  openGraph: {
    title: "Serviços de Consórcio | Matheus Multiplica",
    description:
      "Consórcio imobiliário, de veículos e empresarial sem juros. Crédito de até R$ 5 milhões com estratégias de contemplação acelerada.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serviços de Consórcio | Matheus Multiplica",
    description:
      "Consórcio imobiliário, de veículos e empresarial sem juros. Crédito de até R$ 5 milhões.",
  },
  alternates: { canonical: "/servicos" },
};

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
