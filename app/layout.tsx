import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import RevealScript from "@/components/ui/RevealScript";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import LicenseGuard from "@/components/LicenseGuard";

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

const SITE_URL = "https://matheusmultiplica.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Patrimônio Programado | Consórcio Inteligente em Porto Alegre",
    template: "%s | Patrimônio Programado",
  },
  description:
    "Consórcio inteligente sem juros para imóveis, veículos e serviços. Simule seu consórcio online e construa patrimônio com estratégia. Atendimento personalizado em Porto Alegre, RS.",
  keywords: [
    "consórcio",
    "consórcio imobiliário",
    "consórcio de veículos",
    "consórcio empresarial",
    "consórcio Porto Alegre",
    "carta de crédito",
    "planejamento financeiro",
    "investimento",
    "Patrimônio Programado",
    "consórcio sem juros",
    "simulação de consórcio",
    "Matheus Rocha consórcio",
    "consórcio inteligente",
    "contemplação",
    "lance estratégico",
  ],
  authors: [{ name: "Matheus Rocha", url: SITE_URL }],
  creator: "Patrimônio Programado",
  publisher: "Patrimônio Programado",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Patrimônio Programado",
    title: "Patrimônio Programado | Consórcio Inteligente sem Juros",
    description:
      "Consórcio inteligente sem juros para imóveis, veículos e serviços. Simule online e construa patrimônio com estratégia personalizada.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Patrimônio Programado — Consórcio Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrimônio Programado | Consórcio Inteligente",
    description:
      "Consórcio sem juros para imóveis, veículos e serviços. Simule online e construa patrimônio.",
    images: ["/og-image.png"],
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
  category: "finance",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Patrimônio Programado",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-51-98117-9752",
        contactType: "customer service",
        availableLanguage: "Portuguese",
        areaServed: "BR",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Patrimônio Programado",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "pt-BR",
    },
    {
      "@type": "FinancialService",
      "@id": `${SITE_URL}/#business`,
      name: "Patrimônio Programado — Consórcio Inteligente",
      description:
        "Consultoria especializada em consórcio para imóveis, veículos e serviços. Mais de 7 administradoras, sem juros, com estratégias de contemplação.",
      url: SITE_URL,
      telephone: "+55-51-98117-9752",
      email: "mateusmutiplica@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Porto Alegre",
        addressRegion: "RS",
        addressCountry: "BR",
      },
      priceRange: "$$",
      areaServed: {
        "@type": "Country",
        name: "Brasil",
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Matheus Rocha",
      jobTitle: "Consultor de Consórcios",
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <LicenseGuard>
          <a href="#main-content" className="skip-link">
            Pular para o conteúdo principal
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <WhatsAppButton />
          <RevealScript />
        </LicenseGuard>
      </body>
    </html>
  );
}
