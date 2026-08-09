import Link from "next/link"
import { type Locale } from "@/lib/i18n"

interface TocItem {
  id: string
  label: string
}

interface ContentBlock {
  type: "p" | "h3" | "ul" | "ol"
  text?: string
  items?: string[]
}

interface Section {
  id: string
  heading: string
  content: ContentBlock[]
}

interface SummaryItem {
  question: string
  answer: string
}

interface LegalPageData {
  title: string
  description: string
  lastUpdated: string
  tocItems?: TocItem[]
  toc?: TocItem[]
  intro?: { content: ContentBlock[] }
  summaryOfKeyPoints?: {
    heading: string
    subheading: string
    items: SummaryItem[]
  }
  sections: Section[]
  footerNote?: string
}

const breadcrumbLabels: Record<Locale, string> = {
  en: "Home",
  es: "Inicio",
  pt: "Início",
  de: "Startseite",
  fr: "Accueil",
}

function renderContentBlock(block: ContentBlock, index: number) {
  if (block.type === "p") {
    return (
      <p key={index} dangerouslySetInnerHTML={{ __html: formatText(block.text || "") }} />
    )
  }
  if (block.type === "h3") {
    return (
      <h3 key={index} className="font-semibold text-foreground text-[15px] pt-2">
        {block.text}
      </h3>
    )
  }
  if (block.type === "ul") {
    return (
      <ul key={index} className="pl-6 space-y-2 list-disc marker:text-primary">
        {block.items?.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: formatText(item) }} />
        ))}
      </ul>
    )
  }
  if (block.type === "ol") {
    return (
      <ol key={index} className="pl-6 space-y-2 list-decimal marker:text-primary">
        {block.items?.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: formatText(item) }} />
        ))}
      </ol>
    )
  }
  return null
}

function formatText(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong className="text-foreground">$1</strong>')
    .replace(/<strong>(.*?)<\/strong>/g, '<strong className="text-foreground">$1</strong>')
}

export default function LegalPage({
  data,
  locale,
  type,
}: {
  data: LegalPageData
  locale: Locale
  type: "terms" | "privacy" | "delete-account"
}) {
  const homeLabel = breadcrumbLabels[locale]
  const tocItems = data.tocItems || data.toc || []

  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:pt-36">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-[12px] text-muted-foreground">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href={locale === "en" ? "/" : `/${locale}`} className="transition-colors hover:text-foreground">
                {homeLabel}
              </Link>
            </li>
            <li aria-hidden>·</li>
            <li className="text-foreground/80">{data.title}</li>
          </ol>
        </nav>

        {/* Top Header */}
        <header className="border-b border-border/60 pb-10">
          <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl uppercase">
            {data.title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {type === "privacy" ? `Last updated ${data.lastUpdated}` : data.lastUpdated}
          </p>
        </header>

        {/* Document Body */}
        <div className="mt-10 space-y-10 leading-relaxed text-muted-foreground">
          {/* Intro / Acceptance section */}
          {data.intro && (
            <section className="space-y-5 text-[15px] text-foreground/90">
              {data.intro.content.map((block, i) => renderContentBlock(block, i))}
            </section>
          )}

          {/* Summary of Key Points (Privacy only) */}
          {data.summaryOfKeyPoints && (
            <section className="border-t border-border/40 pt-10">
              <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground uppercase">
                {data.summaryOfKeyPoints.heading}
              </h2>
              <p className="mt-4 italic text-sm text-muted-foreground">
                {data.summaryOfKeyPoints.subheading}
              </p>
              <div className="mt-6 space-y-6 text-[14px]">
                {data.summaryOfKeyPoints.items.map((item, i) => (
                  <div key={i}>
                    <p className="font-semibold text-foreground">{item.question}</p>
                    <p className="mt-1" dangerouslySetInnerHTML={{ __html: formatText(item.answer) }} />
                  </div>
                ))}
                <div className="border-t border-border/40 pt-4">
                  <p className="text-foreground font-medium">
                    {locale === "en"
                      ? "Want to learn more about what we do with any information we collect? "
                      : locale === "es"
                        ? "¿Quiere saber más sobre qué hacemos con la información que recopilamos? "
                        : locale === "pt"
                          ? "Quer saber mais sobre o que fazemos com as informações que coletamos? "
                          : locale === "de"
                            ? "Möchten Sie mehr darüber erfahren, was wir mit den von uns erfassten Informationen tun? "
                            : "Vous en savoir plus sur ce que nous faisons des informations que nous collectons ? "}
                    <a href="#table-of-contents" className="text-primary hover:underline font-semibold">
                      {locale === "en"
                        ? "Review the Privacy Notice in full"
                        : locale === "es"
                          ? "Consulte el Aviso de Privacidad completo"
                          : locale === "pt"
                            ? "Consulte o Aviso de Privacidade completo"
                            : locale === "de"
                              ? "Lesen Sie den vollständigen Datenschutzhinweis"
                              : "Consultez l'avis de confidentialité dans son intégrité"}
                    </a>.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Table of Contents */}
          {tocItems.length > 0 && (
            <section id="table-of-contents" className="border-t border-border/40 pt-10 scroll-mt-24">
              <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground uppercase">
                {locale === "en"
                  ? "TABLE OF CONTENTS"
                  : locale === "es"
                    ? "TABLA DE CONTENIDO"
                    : locale === "pt"
                      ? "TABELA DE CONTEÚDO"
                      : locale === "de"
                        ? "INHALTSVERZEICHNIS"
                        : "TABLE DES MATIÈRES"}
              </h2>
              <nav className="mt-6">
                <ul className="space-y-3.5 text-[14px]">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-primary hover:text-primary-hover hover:underline transition-colors font-medium"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </section>
          )}

          {/* Sections */}
          {data.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]"
            >
              <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
                {section.heading}
              </h2>
              {section.content.map((block, i) => renderContentBlock(block, i))}
            </section>
          ))}

          {/* Footer Note (Privacy only) */}
          {data.footerNote && (
            <div className="border-t border-border/20 pt-8 text-center text-[12px] text-muted-foreground/60">
              {data.footerNote}{" "}
              <a
                href="https://termly.io/products/privacy-policy-generator/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {locale === "en"
                  ? "Privacy Policy Generator"
                  : locale === "es"
                    ? "Generador de Políticas de Privacidad"
                    : locale === "pt"
                      ? "Gerador de Política de Privacidade"
                      : locale === "de"
                        ? "Datenschutzrichtlinie-Generator"
                        : "Générateur de politique de confidentialité"}
              </a>.
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
