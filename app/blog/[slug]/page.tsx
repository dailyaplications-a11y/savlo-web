import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/savlo/site-header"
import { SiteFooter } from "@/components/savlo/site-footer"
import { BlogArticle } from "@/components/savlo/blog/blog-article"
import { getPostBySlug, posts } from "@/lib/blog/posts"
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
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      publishedTime: new Date(post.date + "T00:00:00").toISOString(),
      authors: ["Savlo Team"],
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    headline: post.title,
    description: post.description,
    datePublished: new Date(post.date + "T00:00:00").toISOString(),
    inLanguage: "en",
    image: [absoluteUrl(siteConfig.ogImage)],
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/savlo-logo.svg"),
      },
    },
    keywords: post.keywords.join(", "),
    wordCount: post.stats.words,
    articleSection: post.category,
    isAccessibleForFree: true,
  }

  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <SiteHeader />
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
