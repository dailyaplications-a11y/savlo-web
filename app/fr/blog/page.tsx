import type { Metadata } from "next"
import { BlogIndex } from "@/components/savlo/blog/blog-index"
import { SiteFooter } from "@/components/savlo/site-footer"
import { SiteHeader } from "@/components/savlo/site-header"
import { frenchPosts } from "@/lib/blog/french-posts"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

const blogDescription =
  "Guides sur le budget, l'épargne et la psychologie de l'argent pour les personnes qui veulent se sentir plus calmes avec leurs finances."

export const metadata: Metadata = {
  title: "Blog",
  description: blogDescription,
  keywords: [
    "blog finances personnelles",
    "application budget",
    "comment faire un budget",
    "règle 50/30/20",
    "fonds d'urgence",
    "anxiété financière",
    "finance comportementale",
    "suivi vocal des dépenses",
    "fonds dédiés",
  ],
  alternates: metadataAlternates("/fr/blog"),
  openGraph: {
    title: "Savlo Blog",
    description: blogDescription,
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
    url: "/fr/blog",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        alt: "Aperçu du blog Savlo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savlo Blog",
    description: blogDescription,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
}

export default function FrenchBlogPage() {
  const sortedPosts = [...frenchPosts].sort((a, b) => (a.date < b.date ? 1 : -1))
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": absoluteUrl("/fr/blog#blog"),
    url: absoluteUrl("/fr/blog"),
    name: "Savlo Blog",
    description: blogDescription,
    inLanguage: "fr-FR",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/savlo-icon.png"),
        width: 1024,
        height: 1024,
      },
    },
    blogPost: sortedPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/fr/blog/${post.slug}`),
      datePublished: new Date(`${post.date}T00:00:00Z`).toISOString(),
      dateModified: new Date(`${post.dateModified}T00:00:00Z`).toISOString(),
      inLanguage: "fr-FR",
      author: {
        "@type": "Organization",
        name: siteConfig.author.name,
        url: absoluteUrl("/fr/author/savlo-team"),
      },
    })),
  }

  return (
    <div
      lang="fr-FR"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <SiteHeader locale="fr" />
      <main>
        <BlogIndex locale="fr" posts={frenchPosts} />
      </main>
      <SiteFooter locale="fr" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
