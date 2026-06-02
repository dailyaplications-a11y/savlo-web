import type { Metadata } from "next"
import { BlogIndex } from "@/components/savlo/blog/blog-index"
import { SiteFooter } from "@/components/savlo/site-footer"
import { SiteHeader } from "@/components/savlo/site-header"
import { spanishPosts } from "@/lib/blog/spanish-posts"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

const blogDescription =
  "Guías de presupuesto, ahorro y psicología del dinero para personas que quieren una relación más tranquila con sus finanzas."

export const metadata: Metadata = {
  title: "Blog en español",
  description: blogDescription,
  keywords: [
    "blog de finanzas personales",
    "presupuesto personal",
    "ansiedad financiera",
    "sinking funds",
    "app de presupuesto",
  ],
  alternates: metadataAlternates("/es/blog"),
  openGraph: {
    title: "Savlo Blog en español",
    description: blogDescription,
    type: "website",
    locale: "es_ES",
    siteName: siteConfig.name,
    url: "/es/blog",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        alt: "Vista previa del blog de Savlo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savlo Blog en español",
    description: blogDescription,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
}

export default function SpanishBlogPage() {
  const sortedPosts = [...spanishPosts].sort((a, b) =>
    a.date < b.date ? 1 : -1,
  )
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": absoluteUrl("/es/blog#blog"),
    url: absoluteUrl("/es/blog"),
    name: "Savlo Blog en español",
    description: blogDescription,
    inLanguage: "es",
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
      url: absoluteUrl(`/es/blog/${post.slug}`),
      datePublished: new Date(`${post.date}T00:00:00Z`).toISOString(),
      dateModified: new Date(`${post.dateModified}T00:00:00Z`).toISOString(),
      inLanguage: "es",
      author: {
        "@type": "Organization",
        name: siteConfig.author.name,
        url: absoluteUrl("/es/author/savlo-team"),
      },
    })),
  }

  return (
    <div
      lang="es"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <SiteHeader locale="es" />
      <main>
        <BlogIndex locale="es" posts={spanishPosts} />
      </main>
      <SiteFooter locale="es" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
