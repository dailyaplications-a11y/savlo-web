import type { Metadata } from "next"
import { BlogIndex } from "@/components/savlo/blog/blog-index"
import { SiteFooter } from "@/components/savlo/site-footer"
import { SiteHeader } from "@/components/savlo/site-header"
import { germanPosts } from "@/lib/blog/german-posts"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

const blogDescription =
  "Leitfaeden zu Budget, Sparen und Geldpsychologie fuer Menschen, die sich mit ihren Finanzen ruhiger fuehlen wollen."

export const metadata: Metadata = {
  title: "Blog",
  description: blogDescription,
  keywords: [
    "Blog persoenliche Finanzen",
    "Budget App",
    "wie man ein Budget erstellt",
    "50/30/20-Regel",
    "Notgroschen",
    "finanzielle Angst",
    "Verhaltensfinanzen",
    "Sprach-Check-ins",
    "Sinking Funds",
  ],
  alternates: metadataAlternates("/de/blog"),
  openGraph: {
    title: "Savlo Blog",
    description: blogDescription,
    type: "website",
    locale: "de_DE",
    siteName: siteConfig.name,
    url: "/de/blog",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        alt: "Vorschau des Savlo Blogs",
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

export default function GermanBlogPage() {
  const sortedPosts = [...germanPosts].sort((a, b) => (a.date < b.date ? 1 : -1))
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": absoluteUrl("/de/blog#blog"),
    url: absoluteUrl("/de/blog"),
    name: "Savlo Blog",
    description: blogDescription,
    inLanguage: "de-DE",
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
      url: absoluteUrl(`/de/blog/${post.slug}`),
      datePublished: new Date(`${post.date}T00:00:00Z`).toISOString(),
      dateModified: new Date(`${post.dateModified}T00:00:00Z`).toISOString(),
      inLanguage: "de-DE",
      author: {
        "@type": "Organization",
        name: siteConfig.author.name,
        url: absoluteUrl("/de/author/savlo-team"),
      },
    })),
  }

  return (
    <div
      lang="de-DE"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <SiteHeader locale="de" />
      <main>
        <BlogIndex locale="de" posts={germanPosts} />
      </main>
      <SiteFooter locale="de" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
