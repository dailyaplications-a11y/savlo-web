"use client"

import Link from "next/link"
import { useEffect, useRef, type CSSProperties } from "react"
import type { Locale } from "@/lib/i18n"
import { blogDateLocale } from "@/lib/i18n"
import { BlogPostRow } from "./post-row"
import styles from "./keep-reading.module.css"

/*
 * The end of an article (owner, 2026-11-06): ONE section. It replaced
 * "Related guides", a "Back to blog" footer between two rules, and a
 * second "Keep reading" list under it, which repeated the first. Now: one
 * rule, the title with "All guides" on its line (the way to the blog), up
 * to three posts drawn like the blog index, and the article's update day.
 *
 * Coming into view, the rule draws from the left and the rows follow it in
 * a short wave. Only when the section starts below the screen: one already
 * in view (a short article, a reload down the page) stays still, and so
 * does everything with reduced motion or no script, so nothing waits on
 * JavaScript to be readable.
 */

export type KeepReadingPost = { href: string; title: string; date: string }

const stagger = (i: number) => ({ "--i": i }) as CSSProperties

export function KeepReading({
  locale,
  heading,
  allGuidesLabel,
  allGuidesHref,
  posts,
  updatedLabel,
  updatedDate,
}: {
  locale: Locale
  heading: string
  allGuidesLabel: string
  allGuidesHref: string
  posts: KeepReadingPost[]
  updatedLabel: string
  /** ISO day the article was last updated. */
  updatedDate: string
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = ref.current
    if (!section || typeof IntersectionObserver === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (section.getBoundingClientRect().top < window.innerHeight) return

    // set on the element, not in state: hiding it costs no render, and React
    // never writes this attribute, so it cannot undo it
    section.dataset.phase = "waiting"
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        section.dataset.phase = "shown"
        observer.disconnect()
      },
      { rootMargin: "0px 0px -15% 0px" },
    )
    observer.observe(section)
    return () => {
      observer.disconnect()
      delete section.dataset.phase
    }
  }, [])

  return (
    <section ref={ref} aria-labelledby="keep-reading-heading" className={styles.section}>
      <div className={`${styles.head} ${styles.reveal}`} style={stagger(0)}>
        <h2 id="keep-reading-heading" className={styles.heading}>
          {heading}
        </h2>
        <Link href={allGuidesHref} className={styles.all}>
          {allGuidesLabel}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className={styles.chevron}
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      {posts.length > 0 && (
        <ol className={styles.list}>
          {posts.map((post, i) => (
            <li key={post.href} className={styles.reveal} style={stagger(i + 1)}>
              <BlogPostRow href={post.href} title={post.title} date={post.date} locale={locale} />
            </li>
          ))}
        </ol>
      )}

      <p className={`${styles.updated} ${styles.reveal}`} style={stagger(posts.length + 1)}>
        {updatedLabel} <time dateTime={updatedDate}>{formatLongDate(updatedDate, locale)}</time>
      </p>
    </section>
  )
}

function formatLongDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(blogDateLocale(locale), {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`))
}
