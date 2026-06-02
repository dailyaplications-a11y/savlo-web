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
    question: "Ist Savlo schon verfuegbar?",
    answer:
      "Savlo wird derzeit als bald verfuegbar fuer iOS und Android praesentiert. Ueber die Buttons fuer App Store und Google Play kannst du dich auf die Warteliste setzen lassen.",
  },
  {
    question: "Muss ich mein Bankkonto verbinden?",
    answer:
      "Die oeffentliche Savlo-Seite betont Sprach-Check-ins, CSV- und XLSX-Importe sowie vom Nutzer kontrollierte Eintraege statt einer zwingenden Bankverknuepfung.",
  },
  {
    question: "Fuer wen ist Savlo gemacht?",
    answer:
      "Savlo richtet sich an Menschen, die ihr Budget ruhiger verwalten wollen, besonders wenn klassische Finanz-Tools sich starr, laut oder schuldorientiert anfuehlen.",
  },
  {
    question: "Hilft Savlo bei Sinking Funds?",
    answer:
      "Ja. Savlo zeigt Sinking Funds als zentrale Methode, um planbare groessere Ausgaben in kleinere, stetige Ruecklagen zu verwandeln.",
  },
] as const

const description =
  "Savlo ist eine ruhige App fuer persoenliches Budgetieren fuer angespannte Koepfe: Ausgaben per Sprache erfassen, Geld in Spaces und Sinking Funds trennen und finanzielle Gewohnheiten ohne Schuldgefuehl aufbauen."

export const metadata: Metadata = {
  title: "Ruhiges Budgetieren fuer angespannte Koepfe",
  description,
  keywords: [
    "Budget App",
    "persoenliche Finanzen",
    "finanzielle Angst",
    "Ausgaben per Sprache",
    "Sinking Funds",
    "Verhaltensfinanzen",
  ],
  alternates: metadataAlternates("/de"),
  openGraph: {
    title: "Savlo | Ruhiges Budgetieren fuer angespannte Koepfe",
    description,
    url: "/de",
    siteName: siteConfig.name,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        alt: "Savlo Budget-App Vorschau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savlo | Ruhiges Budgetieren fuer angespannte Koepfe",
    description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
}

export default function GermanHomePage() {
  const organizationId = absoluteUrl("/#organization")
  const websiteId = absoluteUrl("/de#website")
  const softwareId = absoluteUrl("/de#software")

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.supportEmail,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/savlo-icon.png"),
        width: 1024,
        height: 1024,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      name: siteConfig.name,
      url: absoluteUrl("/de"),
      description,
      inLanguage: "de-DE",
      publisher: {
        "@id": organizationId,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": softwareId,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      applicationCategory: "FinanceApplication",
      operatingSystem: "iOS, Android",
      url: absoluteUrl("/de"),
      description:
        "Savlo ist eine verhaltensfinanzierte Budget-App mit Sprach-Check-ins, getrennten Spaces, Sinking Funds, Tabellenimport und Datenexport.",
      image: absoluteUrl(siteConfig.ogImage),
      screenshot: [
        absoluteUrl("/app_screen_today.png"),
        absoluteUrl("/app_screen_funds.png"),
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        url: absoluteUrl("/de"),
      },
      publisher: {
        "@id": organizationId,
      },
      isAccessibleForFree: true,
      featureList: [
        "Sprach-Check-ins",
        "Geld-Space",
        "Sinking Funds",
        "CSV- und XLSX-Importe",
        "Datenexport",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": absoluteUrl("/de#faq"),
      inLanguage: "de-DE",
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
      lang="de-DE"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <SiteHeader locale="de" />
      <main>
        <Hero locale="de" />
        <SectionDivider />
        <ProductOverview locale="de" />
        <SectionDivider />
        <FeaturesShowcase locale="de" />
        <SectionDivider />
        <BehavioralSection locale="de" />
        <SectionDivider />
        <TrustSection locale="de" />
        <SectionDivider />
        <FeaturedReads locale="de" />
        <SectionDivider />
        <FaqSection />
        <SectionDivider />
        <CtaSection locale="de" />
      </main>
      <SiteFooter locale="de" />
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
            Fragen
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
            Ein paar ruhige Antworten, bevor du auf die Warteliste gehst.
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
