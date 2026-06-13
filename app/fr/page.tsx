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
    question: "Savlo est-il déjà disponible ?",
    answer:
      "Savlo est présenté actuellement comme bientôt disponible sur iOS et Android. Les boutons App Store et Google Play te permettent de rejoindre la liste d'attente.",
  },
  {
    question: "Dois-je connecter mon compte bancaire ?",
    answer:
      "Le site public met en avant des enregistrements faciles par voix ou par texte, des imports CSV et XLSX, et des saisies contrôlées par l'utilisateur plutôt qu'une connexion bancaire obligatoire.",
  },
  {
    question: "Pour qui Savlo est-il conçu ?",
    answer:
      "Savlo s'adresse aux personnes occupées qui recherchent un contrôle actif et une gestion quotidienne de leurs finances en quelques minutes, sans les tracas ni la rigidité des outils traditionnels.",
  },
  {
    question: "Savlo aide-t-il avec les fonds dédiés ?",
    answer:
      "Oui. Savlo met en avant les fonds dédiés comme une manière centrale de transformer des dépenses planifiables en réserves régulières directement au sein de vos comptes.",
  },
] as const

const description =
  "Savlo est une application pour le contrôle et la gestion quotidienne des finances en minutes. Suivez vos dépenses par voix ou texte, organisez votre argent sur des comptes indépendants et optimisez votre budget sans effort."

export const metadata: Metadata = {
  title: "Contrôle et gestion quotidienne des finances en minutes",
  description,
  keywords: [
    "application budget",
    "finances personnelles",
    "anxiété financière",
    "suivi des dépenses par voix",
    "fonds dédiés",
    "finance comportementale",
  ],
  alternates: metadataAlternates("/fr"),
  openGraph: {
    title: "Savlo | Contrôle quotidien des finances en minutes",
    description,
    url: "/fr",
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        alt: "Aperçu de l'application Savlo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savlo | Contrôle quotidien des finances en minutes",
    description,
    images: [absoluteUrl(siteConfig.ogImage)],
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
      "@type": "SoftwareApplication",
      "@id": softwareId,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      applicationCategory: "FinanceApplication",
      operatingSystem: "iOS, Android",
      url: absoluteUrl("/fr"),
      description:
        "Savlo est une application pour le contrôle et la gestion quotidienne des finances en minutes avec enregistrement voix/texte, comptes indépendants, fonds dédiés, import de tableurs et export de données.",
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
        url: absoluteUrl("/fr"),
      },
      publisher: {
        "@id": organizationId,
      },
      isAccessibleForFree: true,
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
      lang="fr-FR"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <SiteHeader locale="fr" />
      <main>
        <Hero locale="fr" />
        <SectionDivider />
        <ProductOverview locale="fr" />
        <SectionDivider />
        <FeaturesShowcase locale="fr" />
        <SectionDivider />
        <BehavioralSection locale="fr" />
        <SectionDivider />
        <TrustSection locale="fr" />
        <SectionDivider />
        <FeaturedReads locale="fr" />
        <SectionDivider />
        <FaqSection />
        <SectionDivider />
        <CtaSection locale="fr" />
      </main>
      <SiteFooter locale="fr" />
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
            Quelques réponses calmes avant de rejoindre la liste d'attente.
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
