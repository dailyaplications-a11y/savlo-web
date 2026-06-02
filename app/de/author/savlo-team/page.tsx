import type { Metadata } from "next"
import Link from "next/link"
import { SiteFooter } from "@/components/savlo/site-footer"
import { SiteHeader } from "@/components/savlo/site-header"
import { formatBlogDateShort } from "@/lib/blog/posts"
import { blogCategoryLabel } from "@/lib/blog/category-labels"
import { germanPosts } from "@/lib/blog/german-posts"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

const authorPath = "/de/author/savlo-team"

export const metadata: Metadata = {
  title: siteConfig.author.name,
  description:
    "Notizen zu Verhaltensfinanzen und ruhigem Budgetieren vom Team hinter Savlo.",
  alternates: metadataAlternates(authorPath),
  openGraph: {
    title: siteConfig.author.name,
    description:
      "Leitfaeden zu Budget, Sparen, finanzieller Angst und Sinking Funds.",
    type: "profile",
    locale: "de_DE",
    siteName: siteConfig.name,
    url: authorPath,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        alt: "Savlo Autorprofil Vorschau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.author.name,
    description:
      "Leitfaeden zu Budget, Sparen und Geldpsychologie.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
}

export default function GermanAuthorPage() {
  const featuredPosts = germanPosts.slice(0, 6)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${absoluteUrl(authorPath)}#profile`,
    url: absoluteUrl(authorPath),
    name: siteConfig.author.name,
    description: metadata.description,
    inLanguage: "de-DE",
    mainEntity: {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.author.name,
      url: absoluteUrl(authorPath),
      email: siteConfig.supportEmail,
      image: absoluteUrl("/savlo-icon.png"),
      knowsAbout: [
        "Persoenliches Budgetieren",
        "Verhaltensfinanzen",
        "Finanzielle Angst",
        "Sinking Funds",
        "Ausgaben per Sprache",
      ],
    },
  }

  return (
    <div
      lang="de-DE"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <SiteHeader locale="de" />
      <main className="mx-auto w-full max-w-3xl px-6 pb-24 pt-32 sm:pt-36">
        <nav
          aria-label="Breadcrumb"
          className="mb-10 text-[12px] text-muted-foreground"
        >
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/de" className="transition-colors hover:text-foreground">
                Startseite
              </Link>
            </li>
            <li aria-hidden>·</li>
            <li>
              <Link
                href="/de/blog"
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
            Autor
          </p>
          <h1 className="mt-4 text-balance font-serif text-5xl font-medium leading-[1.04] tracking-tight text-foreground sm:text-6xl">
            {siteConfig.author.name}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Notizen zu Verhaltensfinanzen und ruhigem Budgetieren vom Team hinter Savlo.
          </p>
        </header>

        <section className="mt-12 border-y border-border/60 py-8">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground">
            Editorialer Fokus
          </h2>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
            <li>Budget-Systeme, die Vermeidung reduzieren.</li>
            <li>Sinking Funds und Notfallplanung.</li>
            <li>Gewohnheiten fuer Ausgaben per Sprache.</li>
            <li>Verhaltensfinanzen fuer ruhigere Geldroutinen.</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground">
            Aktuelle Leitfaeden
          </h2>
          <ol className="mt-6 flex flex-col gap-6">
            {featuredPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/de/blog/${post.slug}`} className="group block">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/80">
                    {blogCategoryLabel("de", post.category)} - Aktualisiert{" "}
                    {formatBlogDateShort(post.dateModified, "de-DE")}
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
      <SiteFooter locale="de" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
