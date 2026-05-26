import Link from "next/link"
import { posts } from "@/lib/blog/posts"

const featuredSlugs = [
  "how-to-make-a-budget",
  "voice-expense-tracking",
  "sinking-funds",
]

const featuredPosts = featuredSlugs
  .map((slug) => posts.find((post) => post.slug === slug))
  .filter((post): post is (typeof posts)[number] => post !== undefined)

export function FeaturedReads() {
  return (
    <section id="guides" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
            Learn with Savlo
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
            Start with the questions people ask before they choose a budgeting app.
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
            These guides strengthen Savlo&apos;s core topics: budgeting, voice expense tracking, and calmer long-term saving.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full rounded-2xl border border-border bg-surface/70 p-6 transition-colors hover:border-primary/30 hover:bg-surface"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/80">
                  {post.category}
                </p>
                <h3 className="mt-3 text-balance font-serif text-2xl tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <span className="mt-5 inline-flex text-sm font-medium text-foreground">
                  Read the guide
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
