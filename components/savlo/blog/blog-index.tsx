"use client"

import Link from "next/link"
import { useMemo, useState, type FormEvent } from "react"
import {
  categories,
  formatBlogDateShort,
  posts,
  type BlogCategory,
} from "@/lib/blog/posts"
import { buildMailto } from "@/lib/site"
import { cn } from "@/lib/utils"

export function BlogIndex() {
  const [active, setActive] = useState<BlogCategory | "All">("All")
  const [email, setEmail] = useState("")

  const visible = useMemo(() => {
    const list =
      active === "All" ? posts : posts.filter((post) => post.category === active)
    return [...list].sort((a, b) => (a.date < b.date ? 1 : -1))
  }, [active])

  function onSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return

    window.location.href = buildMailto({
      subject: "Savlo Journal updates",
      bodyLines: [
        "Hi Savlo team,",
        "",
        "Please send me future Savlo Journal updates.",
        `My email: ${email}`,
        "Source: blog-journal",
      ],
    })
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-6 pb-32 pt-32 sm:pt-36">
      <header className="flex flex-col items-center text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"
          />
          Savlo Journal
        </p>
        <h1 className="font-serif text-5xl font-medium tracking-tight text-foreground sm:text-6xl">
          The Blog
        </h1>
        <p className="mt-3 text-[15px] text-primary">
          stay updated on calm personal finance
        </p>
        <p className="mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
          Guides, methods, and reflections on budgeting, saving, and the
          emotional relationship with money. No flashing red numbers and no
          guilt-based productivity framing.
        </p>
      </header>

      <nav
        aria-label="Categories"
        className="mt-14 flex flex-wrap items-center justify-center gap-2"
      >
        {categories.map((category) => {
          const isActive = category.label === active
          return (
            <button
              key={category.label}
              type="button"
              onClick={() => setActive(category.label)}
              className={cn(
                "btn-calm inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[13px] transition-colors",
                isActive
                  ? "border-primary/50 bg-primary/10 text-foreground"
                  : "border-border bg-surface/50 text-muted-foreground hover:border-primary/30 hover:text-foreground",
              )}
              aria-pressed={isActive}
            >
              <span>{category.label}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] tabular-nums",
                  isActive
                    ? "bg-primary/20 text-foreground"
                    : "bg-muted/40 text-muted-foreground",
                )}
              >
                {category.count}
              </span>
            </button>
          )
        })}
      </nav>

      <ol className="mt-16 flex flex-col gap-10">
        {visible.map((post) => (
          <li key={post.slug} className="group">
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col items-center text-center"
            >
              <h2 className="max-w-2xl text-balance text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-xl">
                {post.title}
              </h2>
              <time
                dateTime={post.date}
                className="mt-1.5 text-[12px] font-medium text-primary/80"
              >
                {formatBlogDateShort(post.date)}
              </time>
              <p className="mt-2 max-w-xl text-pretty text-[14px] leading-relaxed text-muted-foreground">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ol>

      {visible.length === 0 && (
        <p className="mt-20 text-center text-sm text-muted-foreground">
          No articles in this category yet. Check back soon.
        </p>
      )}

      <div className="mt-24 flex flex-col items-center gap-4 border-t border-border/60 pt-12 text-center">
        <h3 className="font-serif text-xl font-medium text-foreground">
          One note per month, zero noise
        </h3>
        <p className="max-w-md text-[14px] leading-relaxed text-muted-foreground">
          If you want future Savlo Journal updates, this form opens your mail
          app with a prefilled note to the team. No invisible newsletter
          backend, no silent subscriptions.
        </p>
        <form
          className="mt-2 flex w-full max-w-md items-center gap-2"
          onSubmit={onSubscribe}
        >
          <label htmlFor="newsletter" className="sr-only">
            Email
          </label>
          <input
            id="newsletter"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@quietmail.com"
            className="min-w-0 flex-1 rounded-full border border-border bg-surface/60 px-4 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="btn-calm rounded-full bg-primary px-5 py-2.5 text-[14px] font-medium text-primary-foreground hover:bg-primary-hover"
          >
            Email us
          </button>
        </form>
        <p className="text-[11px] text-muted-foreground">
          If you prefer reading now, start with{" "}
          <Link
            href="/blog/how-to-make-a-budget"
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            How to Make a Budget
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
