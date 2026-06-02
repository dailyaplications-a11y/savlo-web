import type { Metadata } from "next"
import { SiteHeader } from "@/components/savlo/site-header"
import { Hero } from "@/components/savlo/hero"
import { ProductOverview } from "@/components/savlo/product-overview"
import { FeaturesShowcase } from "@/components/savlo/features-showcase"
import { TrustSection } from "@/components/savlo/trust-section"
import { BehavioralSection } from "@/components/savlo/behavioral-section"
import { FeaturedReads } from "@/components/savlo/featured-reads"
import { CtaSection } from "@/components/savlo/cta-section"
import { SiteFooter } from "@/components/savlo/site-footer"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

const faqItems = [
  {
    question: "¿Savlo ya está disponible?",
    answer:
      "Savlo se presenta actualmente como una app próximamente disponible para iOS y Android. Puedes pedir acceso anticipado desde esta página.",
  },
  {
    question: "¿Savlo obliga a conectar el banco?",
    answer:
      "El sitio público de Savlo enfatiza check-ins por voz, importaciones CSV/XLSX y registros controlados por la persona usuaria, no una conexión bancaria obligatoria.",
  },
  {
    question: "¿Para quién está pensada la app?",
    answer:
      "Savlo está pensada para personas que quieren presupuestar con más calma, especialmente si las herramientas tradicionales de finanzas personales se sienten rígidas o ansiosas.",
  },
  {
    question: "¿Savlo sirve para sinking funds?",
    answer:
      "Sí. Savlo presenta los Sinking Funds como una forma central de convertir gastos grandes y previsibles en aportes más pequeños y constantes.",
  },
] as const

export const metadata: Metadata = {
  title: "Presupuesto personal en calma",
  description:
    "Savlo es una app de presupuesto personal para mentes ansiosas: registra gastos por voz, separa tu dinero en espacios y sinking funds, y vuelve a mirar tus finanzas sin culpa.",
  keywords: [
    "app de presupuesto",
    "presupuesto personal",
    "ansiedad financiera",
    "registro de gastos por voz",
    "sinking funds",
    "finanzas personales",
  ],
  alternates: metadataAlternates("/es"),
  openGraph: {
    title: "Savlo | Presupuesto personal en calma",
    description:
      "Una app de presupuesto personal diseñada para mirar tu dinero con menos presión.",
    url: "/es",
    siteName: siteConfig.name,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        alt: "Vista previa de la app de presupuesto Savlo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savlo | Presupuesto personal en calma",
    description:
      "Registra gastos por voz, organiza tu dinero y construye hábitos sin culpa.",
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
      "@type": "SoftwareApplication",
      "@id": absoluteUrl("/es#software"),
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      applicationCategory: "FinanceApplication",
      operatingSystem: "iOS, Android",
      url: absoluteUrl("/es"),
      description:
        "Savlo es una app de presupuesto personal informada por finanzas conductuales, con check-ins por voz, espacios separados, Sinking Funds, importaciones de planillas y exportación de datos.",
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
        availability: "https://schema.org/PreOrder",
        url: absoluteUrl("/es"),
      },
      publisher: {
        "@id": organizationId,
      },
      isAccessibleForFree: true,
      featureList: [
        "Registro de gastos por voz",
        "Spaces de dinero",
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
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ]

  return (
    <div
      lang="es"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <SiteHeader locale="es" />
      <main>
        <Hero locale="es" />
        <SectionDivider />
        <ProductOverview locale="es" />
        <SectionDivider />
        <FeaturesShowcase locale="es" />
        <SectionDivider />
        <BehavioralSection locale="es" />
        <SectionDivider />
        <TrustSection locale="es" />
        <SectionDivider />
        <FeaturedReads locale="es" />
        <SectionDivider />
        <FaqSection />
        <SectionDivider />
        <CtaSection locale="es" />
      </main>
      <SiteFooter locale="es" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  )
}

function FaqSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
            Preguntas
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
            Respuestas rápidas antes de pedir acceso.
          </h2>
        </div>
        <dl className="lg:col-span-8">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="border-b border-border/70 py-6 first:border-t"
            >
              <dt className="text-base font-semibold text-foreground">
                {item.question}
              </dt>
              <dd className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function SectionDivider() {
  return (
    <div aria-hidden className="mx-auto max-w-6xl px-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  )
}
