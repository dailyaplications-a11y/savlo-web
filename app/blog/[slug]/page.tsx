import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteFooter } from "@/components/savlo/site-footer"
import { BlogArticle } from "@/components/savlo/blog/blog-article"
import { getPostBySlug, posts } from "@/lib/blog/posts"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Article not found",
    }
  }

  const url = `/blog/${post.slug}`
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
      locale: siteConfig.locale,
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

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return notFound()

  const articleUrl = absoluteUrl(`/blog/${post.slug}`)
  const authorUrl = absoluteUrl(siteConfig.author.url)
  const publishedAt = new Date(`${post.date}T00:00:00Z`).toISOString()
  const modifiedAt = new Date(`${post.dateModified}T00:00:00Z`).toISOString()

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
      datePublished: publishedAt,
      dateModified: modifiedAt,
      inLanguage: "en",
      image: [absoluteUrl(siteConfig.ogImage)],
      author: {
        "@type": "Organization",
        name: siteConfig.author.name,
        url: authorUrl,
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
        url: absoluteUrl("/blog"),
      },
      breadcrumb: {
        "@id": `${articleUrl}#breadcrumb`,
      },
      keywords: post.keywords.join(", "),
      wordCount: post.stats.words,
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
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: absoluteUrl("/blog"),
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
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <main>
        <BlogArticle post={post} />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
