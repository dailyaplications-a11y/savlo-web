import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogArticle } from "@/components/savlo/blog/blog-article"
import { SiteFooter } from "@/components/savlo/site-footer"
import { SiteHeader } from "@/components/savlo/site-header"
import {
  getSpanishPostBySlug,
  spanishPosts,
} from "@/lib/blog/spanish-posts"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return spanishPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getSpanishPostBySlug(slug)

  if (!post) {
    return {
      title: "Artículo no encontrado",
    }
  }

  const url = `/es/blog/${post.slug}`
  const image = absoluteUrl(siteConfig.ogImage)

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: metadataAlternates(url),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "es_ES",
      siteName: siteConfig.name,
      publishedTime: new Date(`${post.date}T00:00:00Z`).toISOString(),
      modifiedTime: new Date(`${post.dateModified}T00:00:00Z`).toISOString(),
      authors: [siteConfig.author.name],
      tags: post.keywords,
      url,
      images: [
        {
          url: image,
          alt: `${post.title} - Savlo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image],
    },
  }
}

export default async function SpanishBlogArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = getSpanishPostBySlug(slug)

  if (!post) return notFound()

  const articleUrl = absoluteUrl(`/es/blog/${post.slug}`)

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${articleUrl}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": articleUrl,
      },
      url: articleUrl,
      headline: post.title,
      description: post.description,
      datePublished: new Date(`${post.date}T00:00:00Z`).toISOString(),
      dateModified: new Date(`${post.dateModified}T00:00:00Z`).toISOString(),
      inLanguage: "es",
      image: [absoluteUrl(siteConfig.ogImage)],
      author: {
        "@type": "Organization",
        name: siteConfig.author.name,
        url: absoluteUrl("/es/author/savlo-team"),
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/savlo-icon.png"),
          width: 1024,
          height: 1024,
        },
      },
      isPartOf: {
        "@type": "Blog",
        name: "Savlo Blog en español",
        url: absoluteUrl("/es/blog"),
      },
      breadcrumb: {
        "@id": `${articleUrl}#breadcrumb`,
      },
      keywords: post.keywords.join(", "),
      articleSection: post.category,
      isAccessibleForFree: true,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${articleUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: absoluteUrl("/es"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: absoluteUrl("/es/blog"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: articleUrl,
        },
      ],
    },
  ]

  return (
    <div
      lang="es"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <SiteHeader locale="es" />
      <main>
        <BlogArticle post={post} locale="es" />
      </main>
      <SiteFooter locale="es" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
