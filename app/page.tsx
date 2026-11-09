import type { Metadata } from "next"
import { ProductStory } from "@/components/savlo/story/product-story"
import { FeaturedReads } from "@/components/savlo/featured-reads"
import { FaqSection } from "@/components/savlo/faq/faq-section"
import { faqStructuredData } from "@/components/savlo/faq/faq-copy"
import { SiteFooter } from "@/components/savlo/site-footer"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, shareImages, siteConfig } from "@/lib/site"

// The search result is the first screen of the site (2026-11-09): the brand
// first, then one category phrase, under 60 characters so it shows whole; the
// same words in og:title, so Google has no second title to pick from; a
// description of ~150 characters that ends before Google cuts it.
const title = "Savlo | AI Budgeting App & Expense Tracker"
const description =
  "Meet Savlo, the AI-powered personal finance app. Say or type an expense in seconds and see where your money goes across accounts, budgets and funds."
const images = shareImages("en")
const imageAlt = "Savlo app: net worth, budget by category and a savings fund"

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [...siteConfig.keywords],
  alternates: metadataAlternates("/"),
  openGraph: {
    title,
    description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      { ...images.card, alt: imageAlt },
      { ...images.square, alt: imageAlt },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [images.card.url],
  },
}

export default function Page() {
  const organizationId = absoluteUrl("/#organization")
  const websiteId = absoluteUrl("/#website")
  const softwareId = absoluteUrl("/#software")

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
      // the site name Google prints above the result (it printed the bare
      // domain, "savloapp.com"); alternateName is the fallback it may use
      name: siteConfig.name,
      alternateName: ["Savlo App", "savloapp.com"],
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en",
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
      url: siteConfig.url,
      description: siteConfig.longDescription,
      image: [images.square.url, images.card.url],
      screenshot: [images.square.url],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "14-day free trial, then a monthly or annual subscription",
        availability: "https://schema.org/PreOrder",
        url: siteConfig.url,
      },
      publisher: {
        "@id": organizationId,
      },
      isAccessibleForFree: false,
      featureList: [
        "Voice and text logging",
        "Independent accounts",
        "Sinking Funds",
        "CSV and XLSX imports",
        "Data export",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": absoluteUrl("/#faq"),
      mainEntity: faqStructuredData("en"),
    },
  ]

  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <main>
        <ProductStory />
        <FaqSection />
        <FeaturedReads />
      </main>
      <SiteFooter cta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  )
}
