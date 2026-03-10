import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Educação Financeira e Consórcio",
  description:
    "Artigos, dicas e guias completos sobre consórcio, investimentos e planejamento financeiro. Aprenda a construir patrimônio de forma inteligente.",
  openGraph: {
    title: "Blog – Educação Financeira | Patrimônio Programado",
    description:
      "Artigos sobre consórcio, investimentos e planejamento financeiro para crescer seu patrimônio de forma estratégica.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – Educação Financeira | Patrimônio Programado",
    description:
      "Artigos sobre consórcio, investimentos e planejamento financeiro.",
  },
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
