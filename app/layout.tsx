import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import RevealScript from "@/components/ui/RevealScript";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0E1A23",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://patrimônioprogramado.com.br"),
  title: {
    default: "Patrimônio Programado | Consórcio Inteligente",
    template: "%s | Patrimônio Programado",
  },
  description:
    "Crédito inteligente e confiável para seus sonhos — consórcio imobiliário, veículos e empresarial. Simule seu consórcio agora e construa patrimônio sem juros.",
  keywords: [
    "consórcio",
    "consórcio imobiliário",
    "consórcio de veículos",
    "consórcio empresarial",
    "carta de crédito",
    "planejamento financeiro",
    "investimento",
    "Patrimônio Programado",
    "crescimento financeiro",
    "simulação de consórcio",
    "consórcio sem juros",
  ],
  authors: [{ name: "Patrimônio Programado" }],
  creator: "Patrimônio Programado",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Patrimônio Programado",
    title: "Patrimônio Programado | Consórcio Inteligente",
    description:
      "Crédito inteligente e confiável para seus sonhos — consórcio imobiliário, veículos e empresarial.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrimônio Programado | Consórcio Inteligente",
    description:
      "Crédito inteligente e confiável para seus sonhos — consórcio imobiliário, veículos e empresarial.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <RevealScript />
      </body>
    </html>
  );
}
