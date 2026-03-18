import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import RevealScript from "@/components/ui/RevealScript";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0E1A23" },
    { media: "(prefers-color-scheme: light)", color: "#0E1A23" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const SITE_URL = "https://matheusmultiplica.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Matheus Multiplica | Consórcio Inteligente sem Juros em Porto Alegre",
    template: "%s | Matheus Multiplica",
  },
  description:
    "Consórcio inteligente sem juros para imóveis, veículos e serviços em Porto Alegre. Simule online, compare 7 administradoras e construa patrimônio com o Método Patrimônio Programado. Atendimento personalizado.",
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
    "Matheus Multiplica",
    "consórcio sem juros",
    "simulação de consórcio",
    "Matheus Rocha consórcio",
    "consórcio inteligente",
    "contemplação",
    "lance estratégico",
    "carta contemplada",
    "consórcio RS",
    "consórcio Embracon",
    "consórcio Itaú",
  ],
  authors: [{ name: "Matheus Rocha", url: SITE_URL }],
  creator: "Matheus Multiplica",
  publisher: "Matheus Multiplica",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Matheus Multiplica",
    title: "Matheus Multiplica | Consórcio Inteligente sem Juros",
    description:
      "Consórcio inteligente sem juros para imóveis, veículos e serviços. Simule online e construa patrimônio com estratégia personalizada em Porto Alegre.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Matheus Multiplica — Consórcio Inteligente sem Juros em Porto Alegre",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Multiplica | Consórcio Inteligente sem Juros",
    description:
      "Consórcio sem juros para imóveis, veículos e serviços. Simule online e construa patrimônio com estratégia.",
    images: [{ url: "/og-image.png", alt: "Matheus Multiplica — Consórcio Inteligente" }],
    creator: "@matheusmultiplica",
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
  verification: {
    google: "3GX0Jbay8Oz5WrIJtvvwTPn__6jv7zmmemxXPRQyeb4",
  },
  other: {
    "geo.region": "BR-RS",
    "geo.placename": "Porto Alegre",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Matheus Multiplica",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-51-97147-766",
        contactType: "customer service",
        availableLanguage: "Portuguese",
        areaServed: "BR",
        contactOption: "TollFree",
      },
      sameAs: [
        "https://wa.me/555197147766",
      ],
      foundingDate: "2022",
      founder: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Matheus Multiplica",
      description: "Consórcio inteligente sem juros para imóveis, veículos e serviços em Porto Alegre.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "pt-BR",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FinancialService",
      "@id": `${SITE_URL}/#business`,
      name: "Matheus Multiplica — Consórcio Inteligente",
      description:
        "Consultoria especializada em consórcio para imóveis, veículos e serviços. Mais de 7 administradoras, sem juros, com estratégias de contemplação acelerada.",
      url: SITE_URL,
      telephone: "+55-51-97147-766",
      email: "mateusmutiplica@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Porto Alegre",
        addressRegion: "RS",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -30.0346,
        longitude: -51.2177,
      },
      priceRange: "$$",
      areaServed: {
        "@type": "Country",
        name: "Brasil",
      },
      serviceType: [
        "Consórcio Imobiliário",
        "Consórcio de Veículos",
        "Consórcio Empresarial",
        "Consultoria Financeira",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Planos de Consórcio",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Consórcio Imobiliário",
              description: "Cartas de crédito de R$ 100 mil a R$ 5 milhões para imóveis",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Consórcio de Veículos",
              description: "Cartas de crédito de R$ 70 mil a R$ 1 milhão para veículos",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Matheus Rocha",
      jobTitle: "Consultor de Consórcios",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      knowsAbout: [
        "Consórcio",
        "Planejamento Financeiro",
        "Patrimônio Programado",
        "Contemplação Estratégica",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: SITE_URL,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" dir="ltr">
      <head>
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="preconnect" href="https://wa.me" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <WhatsAppButton />
        <RevealScript />
      </body>
    </html>
  );
}
