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
import { absoluteUrl, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Calm budgeting for anxious minds",
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Savlo | Calm budgeting for anxious minds",
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
    title: "Savlo | Calm budgeting for anxious minds",
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
}

export default function Page() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.supportEmail,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: siteConfig.name,
      applicationCategory: "FinanceApplication",
      operatingSystem: "iOS, Android",
      url: siteConfig.url,
      description: siteConfig.longDescription,
      screenshot: [
        absoluteUrl("/app_screen_today.png"),
        absoluteUrl("/app_screen_funds.png"),
      ],
      featureList: [
        "Voice expense check-ins",
        "Money Spaces",
        "Sinking Funds",
        "CSV and XLSX imports",
        "Data export",
      ],
    },
  ]

  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <SectionDivider />
        <ProductOverview />
        <SectionDivider />
        <FeaturesShowcase />
        <SectionDivider />
        <BehavioralSection />
        <SectionDivider />
        <TrustSection />
        <SectionDivider />
        <FeaturedReads />
        <SectionDivider />
        <CtaSection />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  )
}

function SectionDivider() {
  return (
    <div aria-hidden className="mx-auto max-w-6xl px-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  )
}
