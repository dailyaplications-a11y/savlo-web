import type { Metadata } from "next"
import { ProductStory } from "@/components/savlo/story/product-story"
import { FeaturedReads } from "@/components/savlo/featured-reads"
import { FaqSection } from "@/components/savlo/faq/faq-section"
import { faqStructuredData } from "@/components/savlo/faq/faq-copy"
import { SiteFooter } from "@/components/savlo/site-footer"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "Savlo Budgeting App | Registre, poupe e planeje" },
  description:
    "O Savlo é um app para controle e gestão diária de suas finanças em minutos. Registre movimentos por voz ou texto rápido, organize seu dinheiro em contas independentes e otimize seus gastos sem esforço.",
  keywords: [
    "app de orçamento",
    "controle de gastos",
    "registro de gastos por voz",
    "sinking funds",
    "finanças pessoais",
    "contas independentes",
  ],
  alternates: metadataAlternates("/pt"),
  openGraph: {
    title: "Savlo | Controle e gestão diária de finanças em minutos",
    description:
      "Um app desenvolvido para dar a você o controle ativo e diário do seu dinheiro em minutos.",
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
    title: "Savlo | Controle e gestão diária de finanças em minutos",
    description:
      "Registre movimentos por voz ou texto, organize seu dinheiro em contas independentes e otimize seus gastos diariamente.",
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
      "@type": ["SoftwareApplication", "MobileApplication"],
      "@id": absoluteUrl("/pt#software"),
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Android",
      url: absoluteUrl("/pt"),
      description:
        "O Savlo é um app para controle e gestão diária de finanças em minutos, com registros por voz e texto rápido, contas independentes, Sinking Funds, importação de planilhas e exportação de dados.",
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
        description: "Teste gratuito de 14 dias; depois, assinatura mensal ou anual",
        availability: "https://schema.org/PreOrder",
        url: absoluteUrl("/pt"),
      },
      publisher: {
        "@id": organizationId,
      },
      isAccessibleForFree: false,
      featureList: [
        "Registro de movimentos por voz e texto",
        "Contas independentes",
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
      mainEntity: faqStructuredData("pt"),
    },
  ]

  return (
    <div
      lang="pt-BR"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <main>
        <ProductStory locale="pt" />
        <FaqSection locale="pt" />
        <FeaturedReads locale="pt" />
      </main>
      <SiteFooter locale="pt" cta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  )
}
