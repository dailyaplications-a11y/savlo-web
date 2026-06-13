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
    question: "Is Savlo available now?",
    answer:
      "Savlo is currently presented as coming soon to iOS and Android. You can join the waitlist from the App Store and Google Play buttons on this site.",
  },
  {
    question: "Does Savlo require bank linking?",
    answer:
      "The public Savlo site emphasizes easy voice or text logging, CSV and XLSX imports, and user-controlled records rather than mandatory bank linking.",
  },
  {
    question: "Who is Savlo built for?",
    answer:
      "Savlo is built for busy people who want active control and daily management of their finances in minutes, without the hassle and complexity of traditional tools.",
  },
  {
    question: "Can Savlo help with sinking funds?",
    answer:
      "Yes. Savlo highlights Sinking Funds as a core way to turn predictable expenses into smaller, steadier savings goals directly inside your accounts.",
  },
] as const

export const metadata: Metadata = {
  title: "Daily personal finance control and management in minutes",
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: metadataAlternates("/"),
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
      "@type": "SoftwareApplication",
      "@id": softwareId,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      applicationCategory: "FinanceApplication",
      operatingSystem: "iOS, Android",
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
        availability: "https://schema.org/PreOrder",
        url: siteConfig.url,
      },
      publisher: {
        "@id": organizationId,
      },
      isAccessibleForFree: true,
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
        <FaqSection />
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

function FaqSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
            Questions
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
            A few calm answers before you join the waitlist.
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
