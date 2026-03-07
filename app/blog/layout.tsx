import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Educação Financeira",
  description:
    "Artigos e dicas sobre consórcio, investimentos e planejamento financeiro. Aprenda a construir patrimônio com o Patrimônio Programado.",
  openGraph: {
    title: "Blog – Educação Financeira | Patrimônio Programado",
    description:
      "Artigos sobre consórcio, investimentos e planejamento financeiro para crescer seu patrimônio.",
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
