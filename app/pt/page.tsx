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
const title = "Savlo | App de finanças pessoais com IA"
const description =
  "Conheça o Savlo, o app de finanças pessoais com IA. Fale ou digite um gasto em segundos e veja para onde vai seu dinheiro: contas, orçamento e fundos."
const images = shareImages("pt")
const imageAlt = "O app Savlo: patrimônio, orçamento por categoria e um fundo de poupança"

export const metadata: Metadata = {
  title: { absolute: title },
  description,
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
    title,
    description,
    url: "/pt",
    siteName: siteConfig.name,
    locale: "pt_BR",
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
      image: [images.square.url, images.card.url],
      screenshot: [images.square.url],
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
