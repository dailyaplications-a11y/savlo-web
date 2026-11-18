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
const title = "Savlo | Application de budget avec IA"
const description =
  "Découvre Savlo, l'appli de finances personnelles avec IA. Dicte ou tape une dépense en secondes et vois où va ton argent : comptes, budget et fonds."
const images = shareImages("fr")
const imageAlt = "L'appli Savlo : patrimoine, budget par catégorie et un fonds d'épargne"

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "application budget",
    "finances personnelles",
    "suivi des dépenses par voix",
    "fonds dédiés",
  ],
  alternates: metadataAlternates("/fr"),
  openGraph: {
    title,
    description,
    url: "/fr",
    siteName: siteConfig.name,
    locale: "fr_FR",
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

export default function FrenchHomePage() {
  const organizationId = absoluteUrl("/#organization")
  const websiteId = absoluteUrl("/fr#website")
  const softwareId = absoluteUrl("/fr#software")

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
      url: absoluteUrl("/fr"),
      description,
      inLanguage: "fr-FR",
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
      url: absoluteUrl("/fr"),
      description:
        "Savlo est une application pour le contrôle et la gestion quotidienne des finances en minutes avec enregistrement voix/texte, comptes indépendants, fonds dédiés, import de tableurs et export de données.",
      image: [images.square.url, images.card.url],
      screenshot: [images.square.url],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Essai gratuit de 14 jours, puis abonnement mensuel ou annuel",
        availability: "https://schema.org/PreOrder",
        url: absoluteUrl("/fr"),
      },
      publisher: {
        "@id": organizationId,
      },
      isAccessibleForFree: false,
      featureList: [
        "Enregistrement voix et texte",
        "Comptes indépendants",
        "Fonds dédiés",
        "Import CSV et XLSX",
        "Export des données",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": absoluteUrl("/fr#faq"),
      inLanguage: "fr-FR",
      mainEntity: faqStructuredData("fr"),
    },
  ]

  return (
    <div
      lang="fr-FR"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <main>
        <ProductStory locale="fr" />
        <FaqSection locale="fr" />
        <FeaturedReads locale="fr" />
      </main>
      <SiteFooter locale="fr" cta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  )
}
