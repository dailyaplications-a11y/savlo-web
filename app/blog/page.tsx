import type { Metadata } from "next"
import { SiteHeader } from "@/components/savlo/site-header"
import { SiteFooter } from "@/components/savlo/site-footer"
import { BlogIndex } from "@/components/savlo/blog/blog-index"
import { absoluteUrl, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Budgeting, saving, and money psychology guides for people who want a calmer relationship with their finances.",
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
      "Calm personal finance guides on budgeting, saving, and money psychology.",
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
    description: "Calm guides on budgeting, saving, and behavioral finance.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <BlogIndex />
      </main>
      <SiteFooter />
    </div>
  )
}
