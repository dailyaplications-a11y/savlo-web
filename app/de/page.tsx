import type { Metadata } from "next"
import { ProductStory } from "@/components/savlo/story/product-story"
import { FeaturedReads } from "@/components/savlo/featured-reads"
import { FaqSection } from "@/components/savlo/faq/faq-section"
import { faqStructuredData } from "@/components/savlo/faq/faq-copy"
import { SiteFooter } from "@/components/savlo/site-footer"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, shareImages, siteConfig } from "@/lib/site"

// Brand first, one category, < 60 characters; the same title in og:title;
// a ~150-character description (see app/page.tsx).
const title = "Savlo | Haushaltsbuch & Budget-App mit KI"
const description =
  "Lerne Savlo kennen, die Finanz-App mit KI. Sprich oder tippe eine Ausgabe in Sekunden ein und sieh, wohin dein Geld geht: Konten, Budget und Fonds."
const images = shareImages("de")
const imageAlt = "Die Savlo-App: Vermögen, Budget nach Kategorie und ein Sparfonds"

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "Budget App",
    "Haushaltsbuch App",
    "persönliche Finanzen",
    "Ausgaben per Sprache",
    "Sinking Funds",
  ],
  alternates: metadataAlternates("/de"),
  openGraph: {
    title,
    description,
    url: "/de",
    siteName: siteConfig.name,
    locale: "de_DE",
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
      "@type": ["SoftwareApplication", "MobileApplication"],
      "@id": softwareId,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Android",
      url: absoluteUrl("/de"),
      description:
        "Savlo ist eine App für die tägliche Finanzkontrolle und -verwaltung in Minuten mit Sprach- und Texteingabe, unabhängigen Konten, Sinking Funds, Tabellenimport und Datenexport.",
      image: [images.square.url, images.card.url],
      screenshot: [images.square.url],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "14 Tage kostenlos testen, danach Monats- oder Jahresabo",
        availability: "https://schema.org/PreOrder",
        url: absoluteUrl("/de"),
      },
      publisher: {
        "@id": organizationId,
      },
      isAccessibleForFree: false,
      featureList: [
        "Sprach- und Texteingabe",
        "Unabhängige Konten",
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
      mainEntity: faqStructuredData("de"),
    },
  ]

  return (
    <div
      lang="de-DE"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <main>
        <ProductStory locale="de" />
        <FaqSection locale="de" />
        <FeaturedReads locale="de" />
      </main>
      <SiteFooter locale="de" cta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  )
}
