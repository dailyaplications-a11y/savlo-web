import Link from "next/link"
import type { Locale } from "@/lib/i18n"
import { blogCategoryLabel } from "@/lib/blog/category-labels"
import { posts } from "@/lib/blog/posts"
import { frenchPosts } from "@/lib/blog/french-posts"
import { germanPosts } from "@/lib/blog/german-posts"
import { portuguesePosts } from "@/lib/blog/portuguese-posts"
import { spanishPosts } from "@/lib/blog/spanish-posts"

const featuredSlugs = [
  "how-to-make-a-budget",
  "voice-expense-tracking",
  "sinking-funds",
]

const englishFeaturedPosts = featuredSlugs
  .map((slug) => posts.find((post) => post.slug === slug))
  .filter((post): post is (typeof posts)[number] => post !== undefined)

const spanishFeaturedPosts = featuredSlugs
  .map((slug) => spanishPosts.find((post) => post.slug === slug))
  .filter((post): post is (typeof spanishPosts)[number] => post !== undefined)

const portugueseFeaturedPosts = featuredSlugs
  .map((slug) => portuguesePosts.find((post) => post.slug === slug))
  .filter(
    (post): post is (typeof portuguesePosts)[number] => post !== undefined,
  )

const germanFeaturedPosts = featuredSlugs
  .map((slug) => germanPosts.find((post) => post.slug === slug))
  .filter((post): post is (typeof germanPosts)[number] => post !== undefined)

const frenchFeaturedPosts = featuredSlugs
  .map((slug) => frenchPosts.find((post) => post.slug === slug))
  .filter((post): post is (typeof frenchPosts)[number] => post !== undefined)

const copy = {
  en: {
    eyebrow: "Learn with Savlo",
    heading:
      "Start with the questions people ask before they choose a budgeting app.",
    description:
      "These guides strengthen Savlo's core topics: budgeting, voice expense tracking, and calmer long-term saving.",
    cta: "Read the guide",
    hrefPrefix: "/blog",
  },
  es: {
    eyebrow: "Aprende con Savlo",
    heading:
      "Empieza por las preguntas que aparecen antes de elegir una app de presupuesto.",
    description:
      "Estas guías refuerzan los temas centrales de Savlo: presupuesto, registro por voz y ahorro de largo plazo con más calma.",
    cta: "Leer la guía",
    hrefPrefix: "/es/blog",
  },
  pt: {
    eyebrow: "Aprenda com o Savlo",
    heading:
      "Comece pelas perguntas que aparecem antes de escolher um app de orçamento.",
    description:
      "Estes guias fortalecem os temas centrais do Savlo: orçamento, registro de gastos por voz e poupança de longo prazo com mais calma.",
    cta: "Ler o guia",
    hrefPrefix: "/pt/blog",
  },
  de: {
    eyebrow: "Mit Savlo lernen",
    heading:
      "Starte mit den Fragen, die vor der Wahl einer Budget-App auftauchen.",
    description:
      "Diese Leitfaeden staerken die Kernthemen von Savlo: Budgetierung, Sprach-Erfassung und ruhiges Sparen mit Blick auf die Zukunft.",
    cta: "Leitfaden lesen",
    hrefPrefix: "/de/blog",
  },
  fr: {
    eyebrow: "Lire avec Savlo",
    heading:
      "Commence par les questions que les gens se posent avant de choisir une app de budget.",
    description:
      "Ces guides renforcent les thèmes centraux de Savlo: budget, suivi vocal des dépenses et épargne longue durée avec plus de calme.",
    cta: "Lire le guide",
    hrefPrefix: "/fr/blog",
  },
} as const

export function FeaturedReads({ locale = "en" }: { locale?: Locale }) {
  const text = copy[locale]
  const featuredPosts =
    locale === "es"
      ? spanishFeaturedPosts
      : locale === "pt"
        ? portugueseFeaturedPosts
        : locale === "de"
          ? germanFeaturedPosts
          : locale === "fr"
            ? frenchFeaturedPosts
          : englishFeaturedPosts

  return (
    <section id="guides" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
            {text.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
            {text.heading}
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
            {text.description}
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`${text.hrefPrefix}/${post.slug}`}
                className="group block h-full rounded-2xl border border-border bg-surface/70 p-6 transition-colors hover:border-primary/30 hover:bg-surface"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/80">
                  {blogCategoryLabel(locale, post.category)}
                </p>
                <h3 className="mt-3 text-balance font-serif text-2xl tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <span className="mt-5 inline-flex text-sm font-medium text-foreground">
                  {text.cta}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
