import Link from "next/link"
import type { Locale } from "@/lib/i18n"
import { blogDateLocale } from "@/lib/i18n"
import styles from "./post-row.module.css"

/*
 * One post in a list: its title in semibold and the date in gray under it.
 * The blog index and the end of every article draw the same row (owner,
 * 2026-11-06: "que el estilo de cada línea sea como acá"), so it lives here
 * once. The arrow is a desktop hover hint; a touch gets a press instead.
 */

/** "7 jun 2026", "Jun 7, 2026", "7. Juni 2026": the month in words reads faster than 7/6/2026. */
export function formatListDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(blogDateLocale(locale), {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`))
}

export function BlogPostRow({
  href,
  title,
  date,
  locale,
}: {
  href: string
  title: string
  /** ISO day the post came out, e.g. "2026-04-18". */
  date: string
  locale: Locale
}) {
  return (
    <Link href={href} className={styles.row}>
      <span className={styles.text}>
        <span className={styles.title}>{title}</span>
        <time dateTime={date} className={styles.date}>
          {formatListDate(date, locale)}
        </time>
      </span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className={styles.arrow}
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </Link>
  )
}
