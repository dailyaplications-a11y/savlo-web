import type { Metadata } from "next"
import Link from "next/link"
import { SiteFooter } from "@/components/savlo/site-footer"
import { SiteHeader } from "@/components/savlo/site-header"
import { formatBlogDateShort } from "@/lib/blog/posts"
import { blogCategoryLabel } from "@/lib/blog/category-labels"
import { frenchPosts } from "@/lib/blog/french-posts"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

const authorPath = "/fr/author/savlo-team"

export const metadata: Metadata = {
  title: siteConfig.author.name,
  description:
    "Notes sur la finance comportementale et le budget apaisé de l'équipe derrière Savlo.",
  alternates: metadataAlternates(authorPath),
  openGraph: {
    title: siteConfig.author.name,
    description:
      "Guides sur le budget, l'épargne, l'anxiété financière et les fonds dédiés.",
    type: "profile",
    locale: "fr_FR",
    siteName: siteConfig.name,
    url: authorPath,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        alt: "Aperçu du profil auteur de Savlo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.author.name,
    description:
      "Guides sur le budget, l'épargne et la psychologie de l'argent.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
}

export default function FrenchAuthorPage() {
  const featuredPosts = frenchPosts.slice(0, 6)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${absoluteUrl(authorPath)}#profile`,
    url: absoluteUrl(authorPath),
    name: siteConfig.author.name,
    description: metadata.description,
    inLanguage: "fr-FR",
    mainEntity: {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.author.name,
      url: absoluteUrl(authorPath),
      email: siteConfig.supportEmail,
      image: absoluteUrl("/savlo-icon.png"),
      knowsAbout: [
        "Budget personnel",
        "Finance comportementale",
        "Anxiété financière",
        "Fonds dédiés",
        "Saisie des dépenses par voix",
      ],
    },
  }

  return (
    <div
      lang="fr-FR"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <SiteHeader locale="fr" />
      <main className="mx-auto w-full max-w-3xl px-6 pb-24 pt-32 sm:pt-36">
        <nav
          aria-label="Breadcrumb"
          className="mb-10 text-[12px] text-muted-foreground"
        >
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/fr" className="transition-colors hover:text-foreground">
                Accueil
              </Link>
            </li>
            <li aria-hidden>·</li>
            <li>
              <Link
                href="/fr/blog"
                className="transition-colors hover:text-foreground"
              >
                Blog
              </Link>
            </li>
            <li aria-hidden>·</li>
            <li className="text-foreground/80">{siteConfig.author.name}</li>
          </ol>
        </nav>

        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
            Auteur
          </p>
          <h1 className="mt-4 text-balance font-serif text-5xl font-medium leading-[1.04] tracking-tight text-foreground sm:text-6xl">
            {siteConfig.author.name}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Notes sur la finance comportementale et le budget apaisé de l'équipe derrière Savlo.
          </p>
        </header>

        <section className="mt-12 border-y border-border/60 py-8">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground">
            Focalisation éditoriale
          </h2>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
            <li>Des budgets qui réduisent l'évitement financier.</li>
            <li>Des fonds dédiés et une planification d'urgence.</li>
            <li>Des habitudes de suivi vocal.</li>
            <li>La finance comportementale pour des routines plus calmes.</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground">
            Guides récents
          </h2>
          <ol className="mt-6 flex flex-col gap-6">
            {featuredPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/fr/blog/${post.slug}`} className="group block">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/80">
                    {blogCategoryLabel("fr", post.category)} - Mis à jour{" "}
                    {formatBlogDateShort(post.dateModified, "fr-FR")}
                  </p>
                  <h3 className="mt-2 text-balance text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <SiteFooter locale="fr" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
