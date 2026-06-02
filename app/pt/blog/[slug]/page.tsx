import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogArticle } from "@/components/savlo/blog/blog-article"
import { SiteFooter } from "@/components/savlo/site-footer"
import { SiteHeader } from "@/components/savlo/site-header"
import {
  getPortuguesePostBySlug,
  portuguesePosts,
} from "@/lib/blog/portuguese-posts"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return portuguesePosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPortuguesePostBySlug(slug)

  if (!post) {
    return {
      title: "Artigo não encontrado",
    }
  }

  const url = `/pt/blog/${post.slug}`
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
      locale: "pt_BR",
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

export default async function PortugueseBlogArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = getPortuguesePostBySlug(slug)

  if (!post) return notFound()

  const articleUrl = absoluteUrl(`/pt/blog/${post.slug}`)

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
      inLanguage: "pt-BR",
      image: [absoluteUrl(siteConfig.ogImage)],
      author: {
        "@type": "Organization",
        name: siteConfig.author.name,
        url: absoluteUrl("/pt/author/savlo-team"),
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
        name: "Savlo Blog",
        url: absoluteUrl("/pt/blog"),
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
          name: "Início",
          item: absoluteUrl("/pt"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: absoluteUrl("/pt/blog"),
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
      lang="pt-BR"
      className="bg-grain relative min-h-screen bg-background text-foreground"
    >
      <SiteHeader locale="pt" />
      <main>
        <BlogArticle post={post} locale="pt" />
      </main>
      <SiteFooter locale="pt" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
