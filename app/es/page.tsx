import type { Metadata } from "next"
import { ProductStory } from "@/components/savlo/story/product-story"
import { FeaturedReads } from "@/components/savlo/featured-reads"
import { FaqSection } from "@/components/savlo/faq/faq-section"
import { faqStructuredData } from "@/components/savlo/faq/faq-copy"
import { SiteFooter } from "@/components/savlo/site-footer"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "Savlo Budgeting App | Registra, ahorra y planifica" },
  description:
    "Savlo es una app para el control y manejo diario de tus finanzas en minutos. Registra movimientos por voz o texto rápido, organiza tu dinero en cuentas independientes y optimiza tus gastos sin esfuerzo.",
  keywords: [
    "app de finanzas",
    "control de gastos",
    "registro de gastos por voz",
    "sinking funds",
    "finanzas personales",
    "cuentas personales",
  ],
  alternates: metadataAlternates("/es"),
  openGraph: {
    title: "Savlo | Control y manejo diario de finanzas en minutos",
    description:
      "Una app diseñada para darte el control activo y diario de tu dinero en minutos.",
    url: "/es",
    siteName: siteConfig.name,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        alt: "Vista previa de la app de control financiero Savlo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savlo | Control y manejo diario de finanzas en minutos",
    description:
      "Registra movimientos por voz o texto, organiza tu dinero en cuentas independientes y optimiza tus gastos diariamente.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
}

export default function SpanishHomePage() {
  const organizationId = absoluteUrl("/#organization")
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": absoluteUrl("/es#website"),
      name: siteConfig.name,
      url: absoluteUrl("/es"),
      description: metadata.description,
      inLanguage: "es",
      publisher: {
        "@id": organizationId,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": ["SoftwareApplication", "MobileApplication"],
      "@id": absoluteUrl("/es#software"),
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Android",
      url: absoluteUrl("/es"),
      description:
        "Savlo es una app para el control y manejo diario de finanzas en minutos, con registros por voz y texto rápido, cuentas independientes, Sinking Funds, importaciones de planillas y exportación de datos.",
      image: absoluteUrl(siteConfig.ogImage),
      screenshot: [
        absoluteUrl("/app_screen_today.png"),
        absoluteUrl("/app_screen_funds.png"),
      ],
      inLanguage: "es",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Prueba gratuita de 14 días; después, suscripción mensual o anual",
        availability: "https://schema.org/PreOrder",
        url: absoluteUrl("/es"),
      },
      publisher: {
        "@id": organizationId,
      },
      isAccessibleForFree: false,
      featureList: [
        "Registro de movimientos por voz y texto",
        "Cuentas independientes",
        "Sinking Funds",
        "Importaciones CSV y XLSX",
        "Exportación de datos",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": absoluteUrl("/es#faq"),
      inLanguage: "es",
      mainEntity: faqStructuredData("es"),
    },
  ]

  return (
    <div
      lang="es"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <main>
        <ProductStory locale="es" />
        <FaqSection locale="es" />
        <FeaturedReads locale="es" />
      </main>
      <SiteFooter locale="es" cta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  )
}
