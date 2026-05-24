import type { Metadata } from "next"
import { SiteHeader } from "@/components/savlo/site-header"
import { SiteFooter } from "@/components/savlo/site-footer"
import { BlogIndex } from "@/components/savlo/blog/blog-index"

export const metadata: Metadata = {
  title: "Savlo Blog — Behavioral Finance, Budgeting & Calm Saving",
  description:
    "Guides on budgeting, the 50/30/20 rule, emergency funds, envelope method, and the psychology of money. No streaks. No guilt.",
  keywords: [
    "personal finance blog",
    "budgeting app",
    "how to budget",
    "50/30/20 rule",
    "emergency fund",
    "financial anxiety",
    "behavioral finance",
    "envelope budgeting",
  ],
  openGraph: {
    title: "Savlo Blog — Calm finances, month by month",
    description:
      "Budgeting, saving, and money psychology guides. Written with the same calm as the app.",
    type: "website",
    locale: "en_US",
    siteName: "Savlo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savlo Blog",
    description:
      "Applied behavioral finance: human budgeting, sustainable saving, zero red numbers.",
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
