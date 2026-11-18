import type { Metadata } from "next"
import { ProductStory } from "@/components/savlo/story/product-story"
import { FeaturedReads } from "@/components/savlo/featured-reads"
import { FaqSection } from "@/components/savlo/faq/faq-section"
import { faqStructuredData } from "@/components/savlo/faq/faq-copy"
import { SiteFooter } from "@/components/savlo/site-footer"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, shareImages, siteConfig } from "@/lib/site"

// Marca primero, una categoría y < 60 caracteres; el mismo título en
// og:title (si difieren, Google elige o reescribe: mostraba "Control y manejo
// diario de finanzas en minutos | Savlo"); descripción de ~150 caracteres.
const title = "Savlo | App de finanzas personales con IA"
const description =
  "Conoce Savlo, la app de finanzas personales con IA. Dicta o escribe un gasto en segundos y mira en qué se va tu dinero: cuentas, presupuesto y fondos."
const images = shareImages("es")
const imageAlt = "La app Savlo: el patrimonio en la pantalla Hoy y un gasto dicho en voz alta, guardado en segundos"

export const metadata: Metadata = {
  title: { absolute: title },
  description,
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
    title,
    description,
    url: "/es",
    siteName: siteConfig.name,
    locale: "es_ES",
    type: "website",
    images: [
      { ...images.card, alt: imageAlt },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [images.card.url],
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
      image: [images.square.url, images.card.url],
      screenshot: [images.square.url],
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
