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
    question: "O Savlo já está disponível?",
    answer:
      "O Savlo é apresentado hoje como um app em breve para iOS e Android. Você pode entrar na lista de espera pelos botões da App Store e Google Play neste site.",
  },
  {
    question: "O Savlo exige conexão com banco?",
    answer:
      "O site público do Savlo enfatiza check-ins por voz, importações CSV/XLSX e registros controlados pela própria pessoa usuária, não conexão bancária obrigatória.",
  },
  {
    question: "Para quem o app foi feito?",
    answer:
      "O Savlo foi pensado para pessoas que querem orçar com mais calma, especialmente se ferramentas tradicionais de finanças pessoais parecem rígidas ou ansiosas.",
  },
  {
    question: "O Savlo ajuda com sinking funds?",
    answer:
      "Sim. O Savlo apresenta Sinking Funds como uma forma central de transformar gastos grandes e previsíveis em aportes menores e mais constantes.",
  },
] as const

export const metadata: Metadata = {
  title: "Orçamento pessoal em calma",
  description:
    "O Savlo é um app de orçamento pessoal para mentes ansiosas: registre gastos por voz, separe seu dinheiro em espaços e sinking funds e volte a olhar suas finanças sem culpa.",
  keywords: [
    "app de orçamento",
    "orçamento pessoal",
    "ansiedade financeira",
    "registro de gastos por voz",
    "sinking funds",
    "finanças pessoais",
  ],
  alternates: metadataAlternates("/pt"),
  openGraph: {
    title: "Savlo | Orçamento pessoal em calma",
    description:
      "Um app de orçamento pessoal pensado para olhar seu dinheiro com menos pressão.",
    url: "/pt",
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        alt: "Prévia do app de orçamento Savlo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savlo | Orçamento pessoal em calma",
    description:
      "Registre gastos por voz, organize seu dinheiro e crie hábitos sem culpa.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
}

export default function PortugueseHomePage() {
  const organizationId = absoluteUrl("/#organization")
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": absoluteUrl("/pt#website"),
      name: siteConfig.name,
      url: absoluteUrl("/pt"),
      description: metadata.description,
      inLanguage: "pt-BR",
      publisher: {
        "@id": organizationId,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": absoluteUrl("/pt#software"),
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      applicationCategory: "FinanceApplication",
      operatingSystem: "iOS, Android",
      url: absoluteUrl("/pt"),
      description:
        "O Savlo é um app de orçamento pessoal inspirado em finanças comportamentais, com check-ins por voz, espaços separados, Sinking Funds, importação de planilhas e exportação de dados.",
      image: absoluteUrl(siteConfig.ogImage),
      screenshot: [
        absoluteUrl("/app_screen_today.png"),
        absoluteUrl("/app_screen_funds.png"),
      ],
      inLanguage: "pt-BR",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        url: absoluteUrl("/pt"),
      },
      publisher: {
        "@id": organizationId,
      },
      isAccessibleForFree: true,
      featureList: [
        "Registro de gastos por voz",
        "Espaços de dinheiro",
        "Sinking Funds",
        "Importações CSV e XLSX",
        "Exportação de dados",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": absoluteUrl("/pt#faq"),
      inLanguage: "pt-BR",
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
      lang="pt-BR"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <SiteHeader locale="pt" />
      <main>
        <Hero locale="pt" />
        <SectionDivider />
        <ProductOverview locale="pt" />
        <SectionDivider />
        <FeaturesShowcase locale="pt" />
        <SectionDivider />
        <BehavioralSection locale="pt" />
        <SectionDivider />
        <TrustSection locale="pt" />
        <SectionDivider />
        <FeaturedReads locale="pt" />
        <SectionDivider />
        <FaqSection />
        <SectionDivider />
        <CtaSection locale="pt" />
      </main>
      <SiteFooter locale="pt" />
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
            Perguntas
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
            Algumas respostas calmas antes de entrar na lista de espera.
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
