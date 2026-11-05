"use client"

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
} from "react"
import type { Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { ArrowRight, GetAppLink, StoreLine, getAppCopy } from "../get-app"
import { MobileStory } from "./mobile-story"
import { PhoneFrame } from "./phone-frame"
import { AppScreen } from "./screens/app-screens"
import {
  CHAPTER_ROT,
  CHAPTER_SIDE,
  CHAPTER_START,
  STEP_GEOMETRY,
  STEP_ORDER,
  storyCopy,
  type Chapter,
  type StepId,
} from "./story-copy"
import styles from "./product-story.module.css"

/*
 * The home page opens on this storyboard. One sticky stage, one phone that
 * carries the story: it peeks up from the floor under the hero, stands, and
 * then walks from side to side as the chapters change, leaning a little
 * differently for every screen.
 *
 * Scroll only decides WHICH step is on (and, in the long ones, which phase);
 * CSS transitions do the in-betweens. That keeps React out of the frame loop
 * (one re-render per step or phase) and lets every move keep its own easing.
 * After the last step the stage lets go and scrolls away with the page, and
 * the next section follows it up under the visitor's own scroll (no swap, no
 * guided jump: those turned a habitual swipe into a leap past the guides).
 */

// px of scroll each step holds the stage: most of a screen, so one swipe
// doesn't carry the visitor past a step without seeing it
const STEP = 800
const INTRO = 0.65 // the hero holds a little less than a step
const N = STEP_ORDER.length
// Three steps are longer and the scroll walks their flow on the phone, phase
// by phase: voice (from Today, the "+" and its sheet, to the capture:
// listening → words → Savlo AI → the editor), import (the file read, the
// movements landing, the recurring found) and Savlo AI (a question sent, the
// answer, its chart). What a phase writes (the question typed, the words of
// the answer, the rows) plays at once on its own clock when the phase comes.
const DRIVEN: Partial<Record<StepId, number>> = { voice: 2.4, import: 2.2, ai: 1.8 }
const SPANS = STEP_ORDER.map((id) => DRIVEN[id] ?? 1)
const STARTS = SPANS.map((_, i) => SPANS.slice(0, i).reduce((a, b) => a + b, 0)) // in steps
const PINNED = Math.round((INTRO + SPANS.reduce((a, b) => a + b, 0)) * STEP)
const DRIVEN_INDEXES = STEP_ORDER.flatMap((id, i) => (DRIVEN[id] ? [i] : []))
/** How far into a driven step the scroll is, 0..1, in 2 % steps. */
const progressIn = (u: number, i: number) => Math.round(clamp((u - STARTS[i]) / SPANS[i], 0, 1) * 50) / 50

/** Which step a scroll position (in steps past the hero) falls in. */
function stepAt(u: number) {
  let i = 0
  while (i < N - 1 && u >= STARTS[i + 1]) i++
  return i
}
const PHONE_W = 300
const PHONE_H = 618
const DESKTOP = 960

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect

const chapterOf = (step: number) => (step >= CHAPTER_START[2] ? 2 : step >= CHAPTER_START[1] ? 1 : 0)
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))

type Geo = { vw: number; sh: number; textH: number; introH: number; dpr: number }
type Tab = { x: number; w: number }

const DESKTOP_QUERY = `(min-width: ${DESKTOP}px)`
const subscribeDesktop = (onChange: () => void) => {
  const q = window.matchMedia(DESKTOP_QUERY)
  q.addEventListener("change", onChange)
  return () => q.removeEventListener("change", onChange)
}

/**
 * The home page's story. From 960 px up, the storyboard; under it (a phone, a
 * tablet), the same eight screens in still emulators (mobile-story.tsx): the
 * storyboard wants a wide, steady window it doesn't get there (owner,
 * 2026-11-05). The server can't know the width, so it sends both and CSS
 * shows the right one; once hydrated, the other is unmounted, with its
 * listeners and its screens.
 */
export function ProductStory({ locale = "en" }: { locale?: Locale }) {
  const desktop = useSyncExternalStore<boolean | null>(
    subscribeDesktop,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => null,
  )
  return (
    <div id="story-root" className={styles.root}>
      {desktop !== false ? (
        <div className={styles.desktopOnly}>
          <Storyboard locale={locale} />
        </div>
      ) : null}
      {desktop !== true ? <MobileStory locale={locale} /> : null}
    </div>
  )
}

function Storyboard({ locale = "en" }: { locale?: Locale }) {
  const copy = storyCopy[locale] ?? storyCopy.en
  const cta = getAppCopy[locale]

  const sectionRef = useRef<HTMLElement>(null)
  // 100svh, measured: what is on screen even with the browser's bars out
  const seenRef = useRef<HTMLSpanElement>(null)
  const introRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const [active, setActive] = useState(-1)
  const [geo, setGeo] = useState<Geo>({ vw: 1440, sh: 900, textH: 300, introH: 640, dpr: 1 })
  const [tabs, setTabs] = useState<Tab[]>([])
  const [ready, setReady] = useState(false)
  // how far into each driven step the scroll is, 0..1, by step index
  const [driven, setDriven] = useState<Record<number, number>>({})
  // the stage has let go and is scrolling away with the page
  const [past, setPast] = useState(false)

  const activeRef = useRef(-1)
  const drivenRef = useRef<Record<number, number>>({})
  const pastRef = useRef(false)
  const lock = useRef<{ until: number; top: number } | null>(null)

  const sync = useCallback(() => {
    const section = sectionRef.current
    if (!section) return
    const y = -section.getBoundingClientRect().top

    // the frame the stage starts to leave, the bar trades the screen's edge
    // for the stage's, where it already stands (no jump)
    const leaving = y > PINNED
    if (leaving !== pastRef.current) {
      pastRef.current = leaving
      setPast(leaving)
    }

    const held = lock.current
    if (held && (performance.now() > held.until || Math.abs(window.scrollY - held.top) < 3)) {
      lock.current = null
    }
    const u = (y - INTRO * STEP) / STEP
    if (!lock.current) {
      const next = u < 0 ? -1 : stepAt(u)
      if (next !== activeRef.current) {
        activeRef.current = next
        setActive(next)
      }
    }
    const prev = drivenRef.current
    if (DRIVEN_INDEXES.some((i) => progressIn(u, i) !== (prev[i] ?? 0))) {
      const next = Object.fromEntries(DRIVEN_INDEXES.map((i) => [i, progressIn(u, i)]))
      drivenRef.current = next
      setDriven(next)
    }
  }, [])

  const measure = useCallback(() => {
    // The composition is laid out for the SMALL viewport (browser bars out):
    // it never moves when a mobile browser hides or shows its bar mid-scroll,
    // and the stage behind it is tall enough (100lvh) to fill the screen
    // either way. (It used to be laid out in a 100svh stage, which left an
    // empty band under it, and cut the phone flat, once the bar went away.)
    const sh = seenRef.current?.offsetHeight || window.innerHeight
    const vw = document.documentElement.clientWidth || window.innerWidth
    const textH = textRef.current?.offsetHeight || 300
    const introH = introRef.current?.offsetHeight || 640
    // browser zoom changes it too, and fires the resize that lands here
    const dpr = window.devicePixelRatio || 1
    setGeo((g) =>
      g.vw === vw && g.sh === sh && g.textH === textH && g.introH === introH && g.dpr === dpr
        ? g
        : { vw, sh, textH, introH, dpr },
    )
    const next = tabRefs.current.map((b) => (b ? { x: b.offsetLeft, w: b.offsetWidth } : { x: 0, w: 0 }))
    setTabs((prev) =>
      prev.length === next.length && prev.every((t, i) => t.x === next[i].x && t.w === next[i].w) ? prev : next,
    )
  }, [])

  useIsoLayoutEffect(() => {
    measure()
    sync()
    // Transitions switch on only after the first real layout, so a page that
    // reloads mid-story doesn't watch the phone fly in from the defaults.
    let raf2 = 0
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setReady(true))
    })
    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [measure, sync])

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        sync()
      })
    }
    const unlock = () => {
      lock.current = null
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("wheel", unlock, { passive: true })
    window.addEventListener("touchstart", unlock, { passive: true })

    const ro = new ResizeObserver(() => {
      measure()
      sync()
    })
    for (const el of [seenRef.current, textRef.current, introRef.current, tabsRef.current]) {
      if (el) ro.observe(el)
    }
    document.fonts?.ready.then(measure).catch(() => {})

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("wheel", unlock)
      window.removeEventListener("touchstart", unlock)
      ro.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [measure, sync])

  const goTo = useCallback((step: number) => {
    const section = sectionRef.current
    if (!section) return
    const top = Math.round(
      window.scrollY + section.getBoundingClientRect().top + (INTRO + STARTS[step]) * STEP + STEP * 0.3,
    )
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    lock.current = { until: performance.now() + 2600, top }
    activeRef.current = step
    setActive(step)
    window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" })
  }, [])

  /* ── where everything stands for this step ───────────────────── */

  const { vw, sh, textH, introH, dpr } = geo
  const mobile = vw < DESKTOP
  const intro = active < 0
  const chapter = intro ? 0 : chapterOf(active)
  const sign = CHAPTER_SIDE[chapter] === "left" ? -1 : 1
  const current = STEP_ORDER[Math.max(0, active)]
  const lean = STEP_GEOMETRY[current].tilt
  // Under the hero the phone already shows the first step's screen, whose flow
  // opens on Today: the step then plays on from the picture that was there.
  const shown = intro ? 0 : active

  // On a phone or a tablet the device stands under the step's copy; on a
  // phone held sideways there is no "under", so it stands beside it.
  const landscape = mobile && vw > sh * 1.25 && sh < 560
  const tablet = mobile && !landscape && vw >= 600
  const mobileTop = tablet ? 96 + textH + 40 : Math.max(96 + textH + 28, sh * 0.42)
  const scale = landscape
    ? clamp((sh - 100) / PHONE_H, 0.4, 0.86)
    : tablet
    ? // the whole device above the tabs: a tablet has the height for it
      clamp((sh - mobileTop - 104) / PHONE_H, 0.6, 1.1)
    : mobile
      ? // as wide as the phone allows, but on a short one at least ~70 % of it
        // shows above the tabs instead of a sliver of its top
        clamp(Math.min((vw * 0.64) / PHONE_W, (sh - mobileTop - 72) / (PHONE_H * 0.72)), 0.55, 0.86)
      : // a big monitor gets a bigger device (up to 1.2), not more empty stage
        clamp((sh / 2 - 132) / (PHONE_H / 2), 0.6, 1.2)
  const phoneH = PHONE_H * scale
  // A tilted (3D) layer is rasterised at its own CSS scale, not at the
  // screen's: on a 2× or 3× display the phone came out as a 1× bitmap
  // stretched, visibly softer than the page around it. So the device is laid
  // out SS times bigger (zoom, real layout: text is hinted at that size) and
  // shrunk back with a transform, which is enough for a sharp raster at the
  // screen's density. 2 at least, 3 at most (the texture grows with SS²).
  // Not on a phone: a tilted layer is never rasterised below the screen's own
  // density, and there the device is drawn SMALLER than that (scale < 1), so
  // 1 is already sharp. Zoomed 3× on a 2.75× phone it was a ~2500 × 5200 px
  // texture per layer: the GPU fell behind, tiles came in black or late, and
  // every screen visibly built itself piece by piece. A tablet, which draws
  // the device near full size, gets 2.
  const ss = mobile ? (scale > 0.9 ? 2 : 1) : clamp(Math.ceil(dpr * scale - 0.05), 2, 3)
  // Under the hero the phone shows whatever the copy leaves free, at least a
  // recognisable slice of the screen and never more than about two fifths of
  // it: the hero reads first, and there is always air between the button and it.
  const HERO_AIR = 64
  // (on a window too short for both, the hero alone: the phone waits below)
  const peekTop = sh - clamp(sh - introH - HERO_AIR, Math.min(110, sh - introH - HERO_AIR), PHONE_H * 0.44 * scale + 12)
  // On a window taller than the hero needs, the copy centres in the space
  // above the phone instead of hugging the top.
  const introShift = Math.max(0, Math.round((peekTop - HERO_AIR - introH) / 2))

  let phoneX = 0
  let phoneY = peekTop + phoneH / 2 - sh / 2
  const textGap = 40
  const textW = Math.min(450 * Math.max(1, scale), vw / 2 - 64)

  if (!mobile) {
    const half = vw / 2
    const dx = Math.min(270 * Math.max(1, scale), half - (PHONE_W / 2) * scale - 56)
    if (!intro) {
      phoneX = sign * dx
      // a little above centre, but on a short window (a 768 laptop) never up
      // under the header: the lean lifts a corner another ~12 px
      phoneY = Math.max(-48, 104 + phoneH / 2 - sh / 2)
    }
  } else if (!intro && landscape) {
    // the right half, between the header and the foot
    phoneX = vw / 4 - 8
    phoneY = 88 + phoneH / 2 - sh / 2
  } else if (!intro) {
    phoneY = mobileTop + phoneH / 2 - sh / 2
  }

  const k = mobile ? 0.5 : 1
  // The roll (Z) tips every line of the screen off the pixel grid; under ~2×
  // no supersampling saves 6–9 px text resampled at an angle, and the screen
  // reads soft next to the page. There the device keeps its turn and its
  // nod (Y, X: still 3D, rows stay level) and drops the roll; a retina screen
  // keeps the whole lean.
  const roll = dpr >= 1.75 ? lean[2] * k : 0
  const tilt = intro
    ? "perspective(1400px) rotateY(0deg) rotateX(32deg) rotateZ(0deg) scale(1.18)"
    : `perspective(1600px) rotateY(${lean[0] * k}deg) rotateX(${lean[1] * k}deg) rotateZ(${roll}deg) scale(1)`

  const tab = tabs[chapter]

  // On a desktop a new chapter sends the phone across the stage (0.95 s) to
  // where the old words were, and the new words stand where it was: they wait
  // until it has mostly left, or it sweeps over them. Within a chapter the
  // phone stays and they come at once. Kept until the next change, so a
  // re-render mid-move (a driven phase) doesn't shorten it.
  const crossing = useRef({ chapter, active, delay: 0.16 })
  if (crossing.current.chapter !== chapter || crossing.current.active !== active) {
    const across = crossing.current.chapter !== chapter && !mobile && !intro && crossing.current.active >= 0
    crossing.current = { chapter, active, delay: across ? 0.5 : 0.16 }
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      data-hero="board"
      aria-labelledby="story-title"
      className={styles.story}
      style={{ "--pinned": `${PINNED}px`, "--copy-in": `${crossing.current.delay}s` } as CSSProperties}
      data-ready={ready}
      data-intro={intro}
      data-past={past || undefined}
      data-chapter={chapter}
      data-landscape={landscape || undefined}
    >
      <span ref={seenRef} aria-hidden className={styles.seen} />
      {/* in-page links from the old sections still land in the right place */}
      <span id="philosophy" className={styles.anchor} style={{ top: 0 }} aria-hidden />
      <span id="product" className={styles.anchor} style={{ top: INTRO * STEP + 40 }} aria-hidden />
      <span id="features" className={styles.anchor} style={{ top: INTRO * STEP + 60 }} aria-hidden />

      <div className={styles.stage}>
        <div className={styles.exit}>
          {/* ambient light: the hero's floor glow, then one tint per chapter */}
          <div aria-hidden className={styles.floorGlow} />
          <div aria-hidden className={cn(styles.ring, styles.ringNear)} />
          <div aria-hidden className={cn(styles.ring, styles.ringFar)} />
          <div aria-hidden className={cn(styles.tint, styles.tintMint)} data-on={!intro && chapter === 0} />
          <div aria-hidden className={cn(styles.tint, styles.tintSteel)} data-on={!intro && chapter === 1} />
          <div aria-hidden className={cn(styles.tint, styles.tintAmber)} data-on={!intro && chapter === 2} />

          {/* hero: three things and air around them (a title, one line, the way in) */}
          <header ref={introRef} className={styles.intro} style={introShift ? { top: introShift } : undefined}>
            <h1 id="story-title" className={cn(styles.introTitle, styles.rise1)}>
              {copy.intro.t1} <em>{copy.intro.t2}</em>
            </h1>
            <p className={cn(styles.introBody, styles.rise2)}>{copy.intro.body}</p>
            <div className={cn(styles.introCta, styles.rise3)}>
              <GetAppLink className={styles.getButton} tabIndex={intro ? 0 : -1} ariaHidden={!intro}>
                {cta.cta}
                <ArrowRight size={18} />
              </GetAppLink>
              <StoreLine locale={locale} className={styles.introStores} />
            </div>
          </header>

          {/*
            Step copy. On a desktop every step stands on its own chapter's
            side, so on a chapter change the old words fade where they are and
            the new ones appear where they belong: only the phone crosses the
            stage. On a phone they stack in one grid cell, as tall as the
            tallest step, and the device sits below.
          */}
          <div ref={textRef} className={styles.copy}>
            {STEP_ORDER.map((id, i) => {
              const s = copy.steps[id]
              const end = CHAPTER_SIDE[chapterOf(i)] === "right"
              return (
                <article
                  key={id}
                  className={styles.step}
                  data-state={i === active ? "on" : i < active ? "before" : "after"}
                  style={
                    mobile
                      ? undefined
                      : {
                          width: textW,
                          marginLeft: end ? -(textGap + textW) : textGap,
                          textAlign: end ? "right" : "left",
                        }
                  }
                >
                  <p className={styles.eyebrow}>{s.eyebrow}</p>
                  <h2 className={styles.stepTitle}>
                    {s.t1} <em>{s.t2}</em>
                  </h2>
                  <p className={styles.stepBody} data-align={end ? "end" : "start"}>
                    {s.body}
                  </p>
                </article>
              )
            })}
          </div>

          {/* the one device */}
          <div
            className={styles.phonePos}
            style={{ transform: `translate3d(${phoneX}px, ${phoneY}px, 0) scale(${scale})` }}
          >
            <div className={styles.peek} style={{ zoom: ss, scale: `${1 / ss}` }}>
              <div className={styles.phoneTilt} style={{ transform: tilt }}>
                <PhoneFrame>
                  {/* the app's own screens, built live; under the hero, Today (the voice flow's first frame) */}
                  {STEP_ORDER.map((id, i) => (
                    <AppScreen
                      key={id}
                      id={id}
                      locale={locale}
                      label={intro ? copy.steps.today.alt : copy.steps[id].alt}
                      state={i === shown ? "on" : i < shown ? "before" : "after"}
                      progress={driven[i]}
                    />
                  ))}
                </PhoneFrame>
              </div>
            </div>
          </div>

          <div className={styles.cueWrap}>
            <button
              type="button"
              className={styles.cue}
              onClick={() => goTo(0)}
              tabIndex={intro ? 0 : -1}
              aria-hidden={!intro}
            >
              <svg className={styles.nudge} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
              {copy.intro.cue}
            </button>
          </div>
        </div>
      </div>

      {/*
        Outside the stage and fixed to the screen's bottom edge: a mobile
        browser moves a fixed bar with its own toolbar as it slides, where a
        bar inside the stage sat as high as the small viewport and left a
        strip of empty ground under it once the toolbar hid.
      */}
      <nav className={styles.selector} aria-label={copy.chaptersLabel} aria-hidden={intro || undefined}>
        <div ref={tabsRef} className={styles.tabs}>
          <span
            aria-hidden
            className={styles.tabPill}
            style={
              tab
                ? { width: tab.w, transform: `translate3d(${tab.x}px, 0, 0) rotate(${CHAPTER_ROT[chapter]}deg)` }
                : { opacity: 0 }
            }
          />
          {copy.chapters.map((c, i) => (
            <button
              key={c.label}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              type="button"
              className={styles.tab}
              data-selected={i === chapter}
              aria-current={!intro && i === chapter ? "step" : undefined}
              tabIndex={intro ? -1 : 0}
              onClick={() => goTo(CHAPTER_START[i])}
              style={i === chapter ? { transform: `rotate(${CHAPTER_ROT[chapter]}deg)` } : undefined}
            >
              <ChapterIcon icon={c.icon} />
              {c.label}
            </button>
          ))}
        </div>
      </nav>
    </section>
  )
}

function ChapterIcon({ icon }: { icon: Chapter["icon"] }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {icon === "log" ? (
        <>
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
        </>
      ) : icon === "see" ? (
        <>
          <path d="M3 20h18" />
          <path d="m4 15 5-5 4 3 7-7" />
          <path d="M15 6h5v5" />
        </>
      ) : (
        <>
          <path d="M12 21v-9" />
          <path d="M12 12c0-4 3-7 8-7 0 5-3 7-8 7Z" />
          <path d="M12 15c0-3-2.5-5.5-7-5.5 0 4 2.5 5.5 7 5.5Z" />
        </>
      )}
    </svg>
  )
}
