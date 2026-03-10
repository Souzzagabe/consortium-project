import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços de Consórcio",
  description:
    "Conheça os serviços do Patrimônio Programado: consórcio imobiliário, de veículos e empresarial. Sem juros e crédito de até R$ 5 milhões.",
  openGraph: {
    title: "Serviços de Consórcio | Patrimônio Programado",
    description:
      "Consórcio imobiliário, de veículos e empresarial. Realize seus sonhos sem juros com o Patrimônio Programado.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serviços de Consórcio | Patrimônio Programado",
    description:
      "Consórcio imobiliário, de veículos e empresarial sem juros.",
  },
  alternates: { canonical: "/servicos" },
};

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
