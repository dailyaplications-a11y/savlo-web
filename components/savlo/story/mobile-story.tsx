"use client"

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"
import type { Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { ArrowRight, GetAppLink, StoreLine, getAppCopy } from "../get-app"
import { LINE_ICONS, stepLines, type LineIcon } from "./mobile-copy"
import { PhoneFrame } from "./phone-frame"
import { AppScreen } from "./screens/app-screens"
import { STEP_ORDER, storyCopy } from "./story-copy"
import styles from "./mobile-story.module.css"

/*
 * The home page under 960 px (owner, 2026-11-05, after Polarsteps' phone
 * site). The storyboard needs a wide, steady window to walk its one phone
 * across the stage; a phone has neither the room nor the frames for it. Here
 * the same eight screens, in the same order, each stand in their own still
 * emulator: the phone straight up on a slanted band, its eyebrow, its title,
 * and two or three short lines with a glyph each. Nothing moves but the page.
 *
 * The screens are the storyboard's own (built in code, not captures), painted
 * once at their last frame (`still`, `progress={1}`).
 */

const PHONE_W = 300

export function MobileStory({ locale = "en", className }: { locale?: Locale; className?: string }) {
  const copy = storyCopy[locale] ?? storyCopy.en
  const lines = stepLines[locale] ?? stepLines.en
  const cta = getAppCopy[locale]

  const rootRef = useRef<HTMLElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  // The header floats as a pill once the hero's own button has gone by
  // (site-header.tsx reads data-intro, as it does on the storyboard).
  const [intro, setIntro] = useState(true)
  // How big the phones are: three quarters of the width on a phone, a little
  // over full size on a tablet. CSS steps stand in until this is measured.
  const [k, setK] = useState<number | null>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const io = new IntersectionObserver(([entry]) => setIntro(entry.isIntersecting), {
      rootMargin: "-80px 0px 0px 0px",
    })
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const measure = () => {
      const w = root.clientWidth
      const next = w >= 600 ? 1.07 : Math.min(1, Math.max(0.72, (w * 0.76) / PHONE_W))
      setK((prev) => (prev !== null && Math.abs(prev - next) < 0.002 ? prev : Math.round(next * 1000) / 1000))
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(root)
    return () => ro.disconnect()
  }, [])

  return (
    <section
      id="hero"
      ref={rootRef}
      data-hero="still"
      data-intro={intro}
      aria-labelledby="story-title"
      lang={locale}
      className={cn(styles.root, className)}
      style={k === null ? undefined : ({ "--k": k } as CSSProperties)}
    >
      {/* in-page links from the old sections still land in the right place */}
      <span id="philosophy" className={styles.anchor} aria-hidden />

      <header ref={heroRef} className={styles.hero}>
        <h1 id="story-title" className={styles.title}>
          {copy.intro.t1} <em>{copy.intro.t2}</em>
        </h1>
        <p className={styles.body}>{copy.intro.body}</p>
        <div className={styles.cta}>
          <GetAppLink className={styles.getButton}>
            {cta.cta}
            <ArrowRight size={18} />
          </GetAppLink>
          <StoreLine locale={locale} />
        </div>
      </header>

      <ol className={styles.steps} id="product">
        {STEP_ORDER.map((id, i) => {
          const s = copy.steps[id]
          return (
            <li
              key={id}
              id={i === 0 ? "features" : undefined}
              className={styles.step}
              data-first={i === 0 || undefined}
              data-rev={i % 2 === 1 || undefined}
              aria-labelledby={`step-${id}`}
            >
              <div className={styles.stage}>
                <span aria-hidden className={styles.band} />
                <div className={styles.phone}>
                  <PhoneFrame className={styles.frame}>
                    <AppScreen id={id} locale={locale} label={s.alt} state="on" progress={1} still />
                  </PhoneFrame>
                </div>
              </div>
              <div className={styles.copy}>
                <p className={styles.eyebrow}>{s.eyebrow}</p>
                <h2 id={`step-${id}`} className={styles.stepTitle}>
                  {s.t1} <em>{s.t2}</em>
                </h2>
                <ul className={styles.lines}>
                  {lines[id].map((text, j) => (
                    <li key={j} className={styles.line}>
                      <LineGlyph icon={LINE_ICONS[id][j]} />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

/** One line's glyph: 24 px, mint, 1.75 stroke (Phosphor's regular weight, drawn here). */
function LineGlyph({ icon }: { icon: LineIcon }) {
  return (
    <svg
      className={styles.glyph}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {GLYPHS[icon]}
    </svg>
  )
}

const GLYPHS: Record<LineIcon, ReactNode> = {
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11.5" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.9" />
    </>
  ),
  upload: (
    <>
      <path d="M12 15V4.5M7.5 9 12 4.5 16.5 9" />
      <path d="M4 14.5V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.5" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3.5 1.9 5.2 5.1 1.8-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.8z" />
      <path d="M18.5 16.5v4M16.5 18.5h4" />
    </>
  ),
  repeat: (
    <>
      <path d="M4.5 11a7.5 7.5 0 0 1 13-4.5l2 2.5" />
      <path d="M19.5 4.5V9H15" />
      <path d="M19.5 13a7.5 7.5 0 0 1-13 4.5l-2-2.5" />
      <path d="M4.5 19.5V15H9" />
    </>
  ),
  wallet: (
    <>
      <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h11.5a1 1 0 0 1 1 1v2.5" />
      <path d="M3.5 7.5V18a2 2 0 0 0 2 2H19a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 19 9H6a2.5 2.5 0 0 1-2.5-1.5Z" />
      <path d="M16.2 14.5h.01" />
    </>
  ),
  flow: (
    <>
      <path d="M7.5 19.5v-15M4 8l3.5-3.5L11 8" />
      <path d="M16.5 4.5v15M13 16l3.5 3.5L20 16" />
    </>
  ),
  rows: <path d="M9 6.5h11M9 12h11M9 17.5h11M4.5 6.5h.01M4.5 12h.01M4.5 17.5h.01" />,
  sankey: <path d="M4 5v14M4 7c8 0 8-2 16-2M4 12h16M4 17c8 0 8 2 16 2" />,
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  chat: (
    <>
      <path d="M5 4.5h14a1.5 1.5 0 0 1 1.5 1.5v9.5A1.5 1.5 0 0 1 19 17h-9l-5.5 3.5V6A1.5 1.5 0 0 1 5 4.5Z" />
      <path d="M8.5 9.5h7M8.5 12.5h4.5" />
    </>
  ),
  next: <path d="M4.5 12h15M13.5 6l6 6-6 6" />,
  gauge: (
    <>
      <path d="M3.8 17.5a8.5 8.5 0 1 1 16.4 0" />
      <path d="m12 15.5 3.8-4.6M12 15.5h.01" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 12h.01" />
    </>
  ),
  progress: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5A8.5 8.5 0 0 1 20.5 12H12Z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z" />
      <path d="M10 20.5a2 2 0 0 0 4 0" />
    </>
  ),
}
