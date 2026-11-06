import type { Metadata } from "next"
import { ProductStory } from "@/components/savlo/story/product-story"
import { FeaturedReads } from "@/components/savlo/featured-reads"
import { FaqSection } from "@/components/savlo/faq/faq-section"
import { faqStructuredData } from "@/components/savlo/faq/faq-copy"
import { SiteFooter } from "@/components/savlo/site-footer"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  // brand first, then what it is and does (under ~60 characters, so search
  // results show it whole)
  title: { absolute: "Savlo Budgeting App | Track, Save & Plan Your Money" },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: metadataAlternates("/"),
  openGraph: {
    title: "Savlo | Budgeting app and expense tracker",
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        alt: "Savlo budgeting app preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savlo | Daily personal finance control in minutes",
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
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
      name: siteConfig.name,
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
      image: absoluteUrl(siteConfig.ogImage),
      screenshot: [
        absoluteUrl("/app_screen_today.png"),
        absoluteUrl("/app_screen_funds.png"),
      ],
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
