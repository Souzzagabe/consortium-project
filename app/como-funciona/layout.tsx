import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como Funciona o Consórcio | Guia Completo",
  description:
    "Entenda como funciona o consórcio passo a passo: grupos, sorteios mensais, lances estratégicos e contemplação. Guia completo e simples para iniciantes.",
  openGraph: {
    title: "Como Funciona o Consórcio | Patrimônio Programado",
    description:
      "Guia completo sobre consórcio: grupos, sorteios, lances e contemplação explicados de forma simples e prática.",
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
