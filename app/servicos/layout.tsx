import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços de Consórcio | Imobiliário, Veículos e Empresarial",
  description:
    "Conheça os serviços do Patrimônio Programado: consórcio imobiliário de R$ 100 mil a R$ 500 mil, veículos de R$ 70 mil a R$ 1 milhão e serviços. Sem juros, com contemplação estratégica.",
  openGraph: {
    title: "Serviços de Consórcio | Patrimônio Programado",
    description:
      "Consórcio imobiliário, de veículos e empresarial sem juros. Crédito de até R$ 5 milhões com estratégias de contemplação.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serviços de Consórcio | Patrimônio Programado",
    description:
      "Consórcio imobiliário, de veículos e empresarial sem juros. Crédito de até R$ 5 milhões.",
  },
  alternates: { canonical: "/servicos" },
};

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
