import type { Metadata } from "next"
import { BlogIndex } from "@/components/savlo/blog/blog-index"
import { SiteFooter } from "@/components/savlo/site-footer"
import { SiteHeader } from "@/components/savlo/site-header"
import { portuguesePosts } from "@/lib/blog/portuguese-posts"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

const blogDescription =
  "Guias de orçamento, poupança e psicologia do dinheiro para pessoas que querem uma relação mais tranquila com as finanças."

export const metadata: Metadata = {
  title: "Blog",
  description: blogDescription,
  keywords: [
    "blog de finanças pessoais",
    "orçamento pessoal",
    "ansiedade financeira",
    "sinking funds",
    "app de orçamento",
  ],
  alternates: metadataAlternates("/pt/blog"),
  openGraph: {
    title: "Savlo Blog",
    description: blogDescription,
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    url: "/pt/blog",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        alt: "Prévia do blog do Savlo",
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

export default function PortugueseBlogPage() {
  const sortedPosts = [...portuguesePosts].sort((a, b) =>
    a.date < b.date ? 1 : -1,
  )
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": absoluteUrl("/pt/blog#blog"),
    url: absoluteUrl("/pt/blog"),
    name: "Savlo Blog",
    description: blogDescription,
    inLanguage: "pt-BR",
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
      url: absoluteUrl(`/pt/blog/${post.slug}`),
      datePublished: new Date(`${post.date}T00:00:00Z`).toISOString(),
      dateModified: new Date(`${post.dateModified}T00:00:00Z`).toISOString(),
      inLanguage: "pt-BR",
      author: {
        "@type": "Organization",
        name: siteConfig.author.name,
        url: absoluteUrl("/pt/author/savlo-team"),
      },
    })),
  }

  return (
    <div
      lang="pt-BR"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <SiteHeader locale="pt" />
      <main>
        <BlogIndex locale="pt" posts={portuguesePosts} />
      </main>
      <SiteFooter locale="pt" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
