import type { Metadata } from "next"
import { SiteHeader } from "@/components/savlo/site-header"
import { SiteFooter } from "@/components/savlo/site-footer"
import { BlogIndex } from "@/components/savlo/blog/blog-index"
import { posts } from "@/lib/blog/posts"
import { metadataAlternates } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

const blogDescription =
  "Budgeting, saving, debt, and money psychology guides for organizing your personal finances."

export const metadata: Metadata = {
  title: "Blog",
  description: blogDescription,
  keywords: [
    "personal finance blog",
    "budgeting app",
    "how to budget",
    "50/30/20 rule",
    "emergency fund",
    "financial anxiety",
    "behavioral finance",
    "voice expense tracking",
    "sinking funds",
  ],
  openGraph: {
    title: "Savlo Blog",
    description:
      "Personal finance guides on budgeting, saving, and money psychology.",
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: "/blog",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        alt: "Savlo blog preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savlo Blog",
    description: "Guides on budgeting, saving, and behavioral finance.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  alternates: metadataAlternates("/blog"),
}

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": absoluteUrl("/blog#blog"),
    url: absoluteUrl("/blog"),
    name: "Savlo Blog",
    description: blogDescription,
    inLanguage: "en",
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
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: new Date(`${post.date}T00:00:00Z`).toISOString(),
      dateModified: new Date(`${post.dateModified}T00:00:00Z`).toISOString(),
      author: {
        "@type": "Organization",
        name: siteConfig.author.name,
        url: absoluteUrl(siteConfig.author.url),
      },
    })),
  }

  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <BlogIndex />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
