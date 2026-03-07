import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como Funciona o Consórcio",
  description:
    "Entenda como funciona o consórcio passo a passo: grupos, sorteios mensais, lances e contemplação. Guia completo e simples do Patrimônio Programado.",
  openGraph: {
    title: "Como Funciona o Consórcio | Patrimônio Programado",
    description:
      "Guia completo sobre consórcio: grupos, sorteios, lances e contemplação explicados de forma simples.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Como Funciona o Consórcio | Patrimônio Programado",
    description:
      "Guia completo sobre consórcio: grupos, sorteios, lances e contemplação.",
  },
  alternates: { canonical: "/como-funciona" },
};

export default function ComoFuncionaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
