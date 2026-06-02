import type { Metadata } from "next"
import Link from "next/link"
import { SiteFooter } from "@/components/savlo/site-footer"
import { SiteHeader } from "@/components/savlo/site-header"
import { formatBlogDateShort, posts } from "@/lib/blog/posts"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

const authorUrl = siteConfig.author.url

export const metadata: Metadata = {
  title: siteConfig.author.name,
  description: siteConfig.author.description,
  alternates: metadataAlternates(authorUrl),
  openGraph: {
    title: `${siteConfig.author.name} | Savlo`,
    description: siteConfig.author.description,
    type: "profile",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: authorUrl,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        alt: "Savlo author profile preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.author.name} | Savlo`,
    description: siteConfig.author.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
}

export default function SavloTeamAuthorPage() {
  const featuredPosts = posts.slice(0, 6)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${absoluteUrl(authorUrl)}#profile`,
    url: absoluteUrl(authorUrl),
    name: siteConfig.author.name,
    description: siteConfig.author.description,
    mainEntity: {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.author.name,
      url: absoluteUrl(authorUrl),
      email: siteConfig.supportEmail,
      image: absoluteUrl("/savlo-icon.png"),
      knowsAbout: [
        "Personal budgeting",
        "Behavioral finance",
        "Financial anxiety",
        "Sinking funds",
        "Voice expense tracking",
      ],
    },
  }

  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-6 pb-24 pt-32 sm:pt-36">
        <nav
          aria-label="Breadcrumb"
          className="mb-10 text-[12px] text-muted-foreground"
        >
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden>&middot;</li>
            <li>
              <Link
                href="/blog"
                className="transition-colors hover:text-foreground"
              >
                Blog
              </Link>
            </li>
            <li aria-hidden>&middot;</li>
            <li className="text-foreground/80">{siteConfig.author.name}</li>
          </ol>
        </nav>

        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
            Author
          </p>
          <h1 className="mt-4 text-balance font-serif text-5xl font-medium leading-[1.04] tracking-tight text-foreground sm:text-6xl">
            {siteConfig.author.name}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            {siteConfig.author.description}
          </p>
        </header>

        <section className="mt-12 border-y border-border/60 py-8">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground">
            Editorial focus
          </h2>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
            <li>Budgeting systems that reduce avoidance.</li>
            <li>Sinking funds and emergency planning.</li>
            <li>Voice-first expense tracking habits.</li>
            <li>Behavioral finance for calmer money routines.</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground">
            Recent guides
          </h2>
          <ol className="mt-6 flex flex-col gap-6">
            {featuredPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/80">
                    {post.category} - Updated{" "}
                    {formatBlogDateShort(post.dateModified)}
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
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
