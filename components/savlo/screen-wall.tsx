"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"
import type { Locale } from "@/lib/i18n"
import { ArrowRight, GetAppLink, StoreLine, getAppCopy } from "./get-app"
import styles from "./site-footer.module.css"

/*
 * The last call to action, standing on a wall of real Savlo screens that
 * drift past in alternating columns. The footer continues on the same ground.
 * The drift only runs while the wall is on screen.
 */

const copy: Record<Locale, { t1: string; t2: string }> = {
  en: { t1: "One minute a day.", t2: "Start the habit today." },
  es: { t1: "Un minuto al día.", t2: "Empieza el hábito hoy." },
  pt: { t1: "Um minuto por dia.", t2: "Comece o hábito hoje." },
  de: { t1: "Eine Minute am Tag.", t2: "Starte die Gewohnheit heute." },
  fr: { t1: "Une minute par jour.", t2: "Commence l'habitude aujourd'hui." },
}

const SCREENS = [
  "today",
  "reports",
  "budget",
  "funds",
  "recurring",
  "ai-answer",
  "import",
  "import-done",
  "voice-result",
  "fund-created",
  "recurring-list",
  "today-year",
  "reports-bars",
  "ai",
]

// Seven columns of four screens, each repeated once so a -50 % drift loops
// without a seam. Neighbouring columns start three screens apart.
const COLUMNS = Array.from({ length: 7 }, (_, c) => {
  const set = Array.from({ length: 4 }, (_, k) => SCREENS[(c * 3 + k) % SCREENS.length])
  return { reverse: c % 2 === 1, offset: c % 2 ? -260 : 0, screens: [...set, ...set] }
})

export function ScreenWallCta({ locale }: { locale: Locale }) {
  const c = copy[locale]
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
        if (entry.intersectionRatio > 0.2) setSeen(true)
      },
      { threshold: [0, 0.2] },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} id="cta" className={styles.wallSection} data-run={visible} data-seen={seen} aria-labelledby="cta-title">
      <div aria-hidden className={styles.wall}>
        {COLUMNS.map((col, i) => (
          <div
            key={i}
            className={styles.wallCol}
            data-reverse={col.reverse}
            style={{ marginTop: col.offset, "--i": i } as CSSProperties}
          >
            {col.screens.map((s, k) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={k} src={`/story/wall/${s}.webp`} alt="" loading="lazy" decoding="async" width={220} height={476} />
            ))}
          </div>
        ))}
      </div>
      <div aria-hidden className={styles.wallSpot} />
      <div aria-hidden className={styles.wallFade} />

      <div className={styles.ctaBody}>
        <h2 id="cta-title" className={styles.ctaTitle}>
          {c.t1} <em>{c.t2}</em>
        </h2>
        <div className={styles.ctaActions}>
          <GetAppLink className={styles.ctaButton}>
            {getAppCopy[locale].cta}
            <ArrowRight size={18} />
          </GetAppLink>
          <StoreLine locale={locale} />
        </div>
      </div>
    </section>
  )
}
