import {
  createContext,
  memo,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
  type ReactNode,
} from "react"
import type { Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { formatCount, formatMoney, formatPercent, type StepId } from "../story-copy"
import { EntryArt, FlagUS, Flame, Icon, SavloAiMark } from "./icons"
import { screenCopy, screenDates, type ScreenCopy, type ScreenDates } from "./screen-copy"
import s from "./app-screens.module.css"

/*
 * The storyboard's eight screens, built as the app builds them instead of
 * shown as captures: real type, real tokens, every edge sharp at any zoom.
 *
 * Each screen is laid out at the phone's own size, 360 × 780 dp (the captures
 * are 1080 × 2340 at 3×), with the app's measures, and the whole device is
 * scaled into the frame. While its step is on (`on`), the screen comes alive
 * the way the app does: the chart draws, the pills fill, the dial lights up.
 * Off, it resets out of sight.
 *
 * Three screens are driven by the scroll instead (voice, import, Savlo AI):
 * `progress`, 0..1 across their long step, walks the flow phase by phase. A
 * phase that writes something (the question typed, the words of a reply, the
 * rows landing) plays it at once on its own clock (`useRun`): the scroll
 * reaches the phase, it doesn't crawl through it.
 */

type Props = {
  id: StepId
  state: "before" | "on" | "after"
  locale: Locale
  label: string
  progress?: number
  /**
   * Painted once, as its last frame, and never animated: the phone and tablet
   * page shows every screen in its own still emulator (owner, 2026-11-05).
   * Pass `progress={1}` with it so a driven screen stands at its final phase.
   */
  still?: boolean
}

/** A still screen's runs are already complete. */
const StillScreen = createContext(false)

/**
 * A phase's sequence, 0..1 over `ms` from the moment the phase is reached
 * (`on`). Back out of the phase and it waits at 0; with reduced motion, or on
 * a still screen, it is complete as soon as it starts.
 */
function useRun(on: boolean, ms: number) {
  const still = useContext(StillScreen)
  const [k, setK] = useState(still && on ? 1 : 0)
  useIsoLayoutEffect(() => {
    if (!on) {
      setK(0)
      return
    }
    if (still || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setK(1)
      return
    }
    const start = performance.now()
    let frame = requestAnimationFrame(function tick(now) {
      const t = Math.min(1, (now - start) / ms)
      setK(Math.round(t * 200) / 200) // React drops the frames where it didn't move
      if (t < 1) frame = requestAnimationFrame(tick)
    })
    return () => cancelAnimationFrame(frame)
  }, [on, ms, still])
  return k
}

/** How many of `count` things a run has shown: the first at once, the last at its end. */
const runCount = (on: boolean, k: number, count: number) => (on ? Math.min(count, Math.floor(k * count) + 1) : 0)

// memo: while the visitor scrolls through a driven step only its progress
// changes, and only that screen should render again
export const AppScreen = memo(function AppScreen({ id, state, locale, label, progress = 0, still = false }: Props) {
  const t = screenCopy[locale] ?? screenCopy.en
  const d = screenDates[locale] ?? screenDates.en
  const money = (v: number, compact = false) => formatMoney(locale, v, { compact })
  const Screen = SCREENS[id]

  return (
    <div
      className={s.screen}
      data-state={state}
      data-still={still || undefined}
      role="img"
      aria-label={label}
      aria-hidden={state === "on" ? undefined : true}
    >
      <div className={s.device} data-on={state === "on"} aria-hidden>
        <StillScreen.Provider value={still}>
          <Screen t={t} d={d} money={money} locale={locale} progress={progress} />
        </StillScreen.Provider>
      </div>
    </div>
  )
})

type Ctx = {
  t: ScreenCopy
  d: ScreenDates
  money: (v: number, compact?: boolean) => string
  locale: Locale
  progress: number
}

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect

const SCREENS: Record<StepId, ComponentType<Ctx>> = {
  voice: Voice,
  import: Import,
  today: Today,
  reports: Reports,
  ai: Assistant,
  budget: Budget,
  funds: Fund,
  recurring: Recurring,
}

/* ── shared pieces ─────────────────────────────────────────────── */

function Emoji({ children, size }: { children: string; size: number }) {
  return (
    <span className={s.emoji} style={{ fontSize: size }}>
      {children}
    </span>
  )
}

function Circle({ children, size = 37, className }: { children: ReactNode; size?: number; className?: string }) {
  return (
    <span className={cn(s.circle, className)} style={{ width: size, height: size }}>
      {children}
    </span>
  )
}

/** The currency pill (SavloCurrencySelector), the same on Today and Recurring. */
function CurrencyChip() {
  return (
    <span className={s.currency}>
      <FlagUS width={15} />
      <b>USD</b>
      <Icon.caretDown size={14.7} stroke={2.25} />
    </span>
  )
}

/*
 * A title shares its row with the actions: it takes what they leave and a
 * longer language shrinks it to fit (CSS, against the box it really has), as
 * the app does with SavloShrinkToFitText, instead of cutting it.
 */
function Title({ children, chars }: { children: ReactNode; chars: number }) {
  return (
    <span className={s.titleBox} style={{ "--chars": chars } as CSSProperties}>
      <h3 className={cn(s.display, s.screenTitle)}>{children}</h3>
    </span>
  )
}

function HomeIndicator() {
  return <span className={s.homeBar} />
}

function NavBar({ t, active }: { t: ScreenCopy; active: "today" | "budget" }) {
  const items = [
    { key: "today", label: t.nav.today, icon: <Icon.home size={23} filled={active === "today"} /> },
    { key: "accounts", label: t.nav.accounts, icon: <Icon.stack size={23} /> },
    { key: "budget", label: t.nav.budget, icon: <Icon.pie size={23} filled={active === "budget"} /> },
    { key: "more", label: t.nav.more, icon: <Icon.dots size={23} /> },
  ] as const
  return (
    <>
      <span className={s.aiFab}>
        <SavloAiMark size={30} />
      </span>
      <nav className={s.nav}>
        {items.map((it) => (
          <span key={it.key} className={s.navItem} data-active={it.key === active}>
            {it.icon}
            <span className={s.navLabel}>{it.label}</span>
          </span>
        ))}
      </nav>
      <span className={s.fab}>
        <Icon.plus size={26} stroke={1.8} />
      </span>
      <HomeIndicator />
    </>
  )
}

/* ── Log: voice ────────────────────────────────────────────────── */

/*
 * The app's voice capture (VoiceEntryScreen v3), one screen that transforms
 * phase by phase, driven here by the scroll through the voice step. It starts
 * where the visitor already is, on Today (the phone under the hero shows this
 * screen at 0), and gets there the way the app does:
 *   plus       a finger taps the "+" and the sheet rises (the 6b design of
 *              hoy_fab_menu.dart, with its breathing wave)
 *   pick       the finger taps Voice; the sheet and Today give way
 *   idle       the mesh breathes, "Tap the mic and speak"
 *   listening  a wave leaves the mic, the edges glow, the mic turns into a
 *              tick, "Listening" with its three dots
 *   words      the transcript arrives word by word (amounts in mint)
 *   analyzing  the filler dissolves, amounts and places fly into the Savlo AI
 *              icon, which spins
 *   editor     the icon lands as a seal by "1 movement" and the manual editor
 *              rises, already filled in
 * Each threshold flips a flag; CSS plays the move in between (a tap is one
 * move: the finger lands, presses, and what it pressed answers). The words
 * are heard at once, on their own clock, when their phase comes.
 */
const VOICE = { plus: 0.1, pick: 0.26, listen: 0.4, words: 0.5, analyze: 0.64, editor: 0.78 }
const VOICE_WORDS_MS = 1500
// the quick-entry wave: seven bars, each at its share of the wave's height
const ENTRY_WAVE = [0.45, 0.8, 1, 0.6, 0.9, 0.5, 0.7]
// the app's VoiceGeometry on a 360 × 780 screen: the transcript box runs from
// 23.7 % of the height to 45 % below that, and the words are centred in it
const MIC = { x: 180, y: 692, size: 76 }
const AI_ICON = { x: 180, y: 370, size: 72 }
const SEAL = { x: 34, y: 256, size: 22 }
const TRANSCRIPT = { left: 30, top: 185, width: 300, height: 351 }

function Voice(ctx: Ctx) {
  const { t, progress } = ctx
  const v = t.voice
  const words = v.words
  const listening = progress >= VOICE.listen
  const speaking = progress >= VOICE.words
  const analyzing = progress >= VOICE.analyze
  const editor = progress >= VOICE.editor
  const said = useRun(speaking, VOICE_WORDS_MS)
  const heard = analyzing ? words.length : runCount(speaking, said, words.length)

  // Where each word sits, to fly it into the AI icon (layout coordinates: the
  // device's own dp, untouched by the phone's scale and tilt).
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [flights, setFlights] = useState<{ x: number; y: number }[]>([])
  useIsoLayoutEffect(() => {
    const measure = () =>
      setFlights(
        wordRefs.current.map((el) =>
          el
            ? {
                x: AI_ICON.x - TRANSCRIPT.left - (el.offsetLeft + el.offsetWidth / 2),
                y: AI_ICON.y - TRANSCRIPT.top - (el.offsetTop + el.offsetHeight / 2),
              }
            : { x: 0, y: 0 },
        ),
      )
    measure()
    document.fonts?.ready.then(measure).catch(() => {})
  }, [words])

  let entity = 0
  return (
    <div
      className={cn(s.page, s.voice)}
      data-listen={listening && !analyzing}
      data-analyze={analyzing}
      data-editor={editor}
    >
      <span className={s.voiceGlow} />
      <span className={s.voiceCalm} />
      <span className={s.voiceEdge} />
      <span className={s.voiceWave} style={{ left: MIC.x, top: MIC.y }} />

      <div className={s.voiceCopy} data-show={!listening}>
        <p className={s.voiceTitle}>{v.title}</p>
        <p className={s.voiceHint}>{v.hint}</p>
      </div>

      <p className={s.listening} data-show={listening && heard === 0}>
        {v.listening}
        <span className={s.dots}>
          <i />
          <i />
          <i />
        </span>
      </p>

      <p
        className={s.transcript}
        style={{ left: TRANSCRIPT.left, top: TRANSCRIPT.top, width: TRANSCRIPT.width, height: TRANSCRIPT.height }}
      >
        {words.map(([word, kind], i) => {
          const order = kind === "f" ? -1 : entity++
          const flight = flights[i] ?? { x: 0, y: 0 }
          return (
            <span
              key={`${word}-${i}`}
              ref={(el) => {
                wordRefs.current[i] = el
              }}
              className={s.token}
              data-kind={kind}
              data-in={i < heard}
              style={{ "--fx": `${flight.x}px`, "--fy": `${flight.y}px`, "--order": order } as CSSProperties}
            >
              {word}
            </span>
          )
        })}
      </p>

      <span
        className={s.aiStage}
        style={
          {
            left: AI_ICON.x - AI_ICON.size / 2,
            top: AI_ICON.y - AI_ICON.size / 2,
            "--sx": `${SEAL.x - AI_ICON.x}px`,
            "--sy": `${SEAL.y - AI_ICON.y}px`,
            "--ss": SEAL.size / AI_ICON.size,
          } as CSSProperties
        }
      >
        <span className={s.aiHalo} />
        {/* one beat per word it swallows (the app: 1 → 1.16 and back) */}
        <span className={s.aiBeat} style={{ "--beat": 0 } as CSSProperties}>
          <span className={s.aiBeat} style={{ "--beat": 1 } as CSSProperties}>
            {/* always turning slowly; the inner turn adds the analysing speed */}
            <span className={s.aiTurn}>
              <span className={s.aiTurnFast}>
                <SavloAiMark size={AI_ICON.size} />
              </span>
            </span>
          </span>
        </span>
      </span>

      <VoiceEditor t={t} />

      <span
        className={s.micWrap}
        style={{ left: MIC.x - MIC.size / 2, top: MIC.y - MIC.size / 2, width: MIC.size, height: MIC.size }}
      >
        <span className={s.micRings}>
          <span />
          <span />
        </span>
        <span className={s.mic}>
          <span className={s.micGlyph}>
            <Icon.mic size={28} stroke={1.9} />
          </span>
          <span className={s.micTick}>
            <Icon.check size={30} stroke={2.2} />
          </span>
        </span>
      </span>

      <Circle size={40} className={s.voiceClose}>
        <Icon.close size={18} stroke={1.8} />
      </Circle>
      <HomeIndicator />

      <EntrySheet ctx={ctx} />
    </div>
  )
}

/*
 * How the visitor gets to the capture: Today, the "+" tapped, the sheet that
 * asks how to record, Voice tapped. It lies over the capture and gives way to
 * it; Today here is the same screen the hero shows, so the step starts from
 * the very picture that was already on the phone.
 */
function EntrySheet({ ctx }: { ctx: Ctx }) {
  const { t, progress: p } = ctx
  const e = t.entry
  return (
    <div className={s.entry} data-plus={p >= VOICE.plus} data-pick={p >= VOICE.pick}>
      <div className={s.entryToday}>
        <Today {...ctx} />
        <span className={s.touch} data-at="plus" style={{ left: 321, top: 728 }} />
      </div>
      <span className={s.entryScrim} />

      <div className={s.entrySheet}>
        <span className={s.entryHandle} />
        <p className={s.entryEyebrow}>{e.eyebrow}</p>
        <h4 className={cn(s.display, s.entryTitle)}>{e.title}</h4>

        <div className={s.entryVoice}>
          <EntryArt.voice size={32} />
          <span className={s.entryVoiceText}>
            <b>{e.voice}</b>
            <span>{e.voiceHint}</span>
          </span>
          <span className={s.entryWave}>
            {ENTRY_WAVE.map((h, i) => (
              <i key={i} style={{ height: `${h * 100}%`, "--i": i } as CSSProperties} />
            ))}
          </span>
          <span className={s.touch} data-at="pick" style={{ left: "38%", top: "50%" }} />
        </div>

        <div className={s.entryTiles}>
          {(
            [
              [EntryArt.text, e.text, 38, -3],
              [EntryArt.import, e.import, 38, -3],
              [EntryArt.manual, e.manual, 34, -1],
            ] as const
          ).map(([Art, label, size, nudge]) => (
            <span key={label} className={s.entryTile}>
              <span className={s.entryArt}>
                <span style={{ left: nudge, top: nudge }}>
                  <Art size={size} />
                </span>
              </span>
              <span className={s.entryLabelBox}>
                <span className={s.entryLabel} style={{ "--chars": label.length } as CSSProperties}>
                  {label}
                </span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// The manual editor the capture becomes, filled in by Savlo AI.
function VoiceEditor({ t }: { t: ScreenCopy }) {
  const e = t.voice.editor
  return (
    <div className={s.editor}>
      <p className={s.edCount} style={{ "--r": 0 } as CSSProperties}>
        {e.count}
      </p>
      <Fit as="div" min={0.74} className={s.edKinds} style={{ "--r": 1 } as CSSProperties}>
        <span data-active>{e.kinds[0]}</span>
        <span>{e.kinds[1]}</span>
        <span>{e.kinds[2]}</span>
      </Fit>
      <Fit as="div" min={0.84} className={s.edMeta} style={{ "--r": 2 } as CSSProperties}>
        {[e.date, e.account, e.repeat].map((m) => (
          <span key={m}>
            {m}
            <Icon.caretDown size={14} stroke={1.8} />
          </span>
        ))}
      </Fit>
      <p className={cn(s.money, s.edDescription)} style={{ "--r": 3 } as CSSProperties}>
        {e.description}
      </p>
      <div className={s.edAmountRow} style={{ "--r": 4 } as CSSProperties}>
        <span className={cn(s.money, s.edAmount)}>24</span>
        <span className={s.edCurrency}>USD</span>
      </div>
      <span className={s.edCategory} style={{ "--r": 5 } as CSSProperties}>
        <Emoji size={20}>🍔</Emoji>
        {e.category}
        <Icon.caretRight size={15} stroke={1.8} />
      </span>
      <span className={s.edFund} style={{ "--r": 6 } as CSSProperties}>
        <span className={s.edFundIcon}>
          <Emoji size={13}>✈️</Emoji>
        </span>
        {e.fund}
        <Icon.caretRight size={15} stroke={1.8} />
      </span>
      <span className={s.edSave} style={{ "--r": 7 } as CSSProperties}>
        <Icon.check size={20} stroke={2.2} />
        {e.save}
      </span>
    </div>
  )
}

/* ── Log: import ───────────────────────────────────────────────── */

/*
 * The import, driven by the scroll through its long step, screen by screen
 * as the app goes: "Upload your history" (the card is tapped) → "Understanding
 * your file", its five findings ticking off → "Importing your movements", the
 * rows landing under the progress pill → "Movements imported" with "Review
 * recurring" → "Recurring found", each rule checking in, "Create N recurring".
 * The scroll brings each screen; the findings, the rows and the rules play at
 * once on their own clocks (IMPORT_RUN, ms).
 */
const IMPORT = { tap: 0.08, reading: 0.14, importing: 0.4, imported: 0.58, recurring: 0.72 }
const IMPORT_RUN = { checks: 1600, rows: 1800, rules: 1400 }
const IMPORT_ROWS = 660
const IMPORT_FILE = "movements-2025-2026.csv"
// the tile tint each category wears in the app's rows
const TILE: Record<string, string> = {
  "🚗": "#3a1f2c",
  "🍽️": "#15304d",
  "🎮": "#28361c",
  "🛍️": "#33204a",
  "📺": "#3a2a1c",
  "💼": "#3a281a",
  "🏠": "#14383a",
  "🛜": "#15304d",
  "🏋️": "#1d2f4a",
  "📱": "#15304d",
}

function Import({ t, money, locale, progress: p }: Ctx) {
  const f = t.imp.flow
  const stages = ["upload", "reading", "importing", "recurring"] as const
  const stage = p < IMPORT.reading ? 0 : p < IMPORT.importing ? 1 : p < IMPORT.recurring ? 2 : 3
  const at = (i: number) => (i === stage ? "on" : i < stage ? "before" : "after")

  // a later phase finds the earlier one finished, however fast it came
  const reading = p >= IMPORT.reading
  const importing = p >= IMPORT.importing
  const done = p >= IMPORT.imported
  const recurring = p >= IMPORT.recurring
  const read = useRun(reading, IMPORT_RUN.checks)
  const flowed = useRun(importing, IMPORT_RUN.rows)
  const found = useRun(recurring, IMPORT_RUN.rules)

  const checked = importing ? f.checks.length : runCount(reading, read, f.checks.length + 1) - 1 // the last one spins first
  const landed = done ? f.movements.length : runCount(importing, flowed, f.movements.length)
  const share = done ? 1 : flowed
  const count = Math.round(share * IMPORT_ROWS)
  const rules = runCount(recurring, found, f.recurring.length)
  const monthly = f.recurring.reduce((a, [, , v]) => a + Math.abs(v), 0)
  const n = formatCount(locale, f.recurring.length)

  return (
    <div className={s.page}>
      {/* 1 · upload: the drop card is tapped */}
      <section className={s.impScreen} data-state={at(0)}>
        <span className={s.back}>
          <Icon.arrowLeft size={22} />
        </span>
        <UploadBody t={t} tapped={p >= IMPORT.tap} />
      </section>

      {/* 2 · reading the file */}
      <section className={s.impScreen} data-state={at(1)}>
        <span className={s.back}>
          <Icon.arrowLeft size={22} />
        </span>
        <p className={s.aiEyebrow}>
          <SavloAiMark size={18} />
          Savlo AI · {f.reading}
        </p>
        <h3 className={cn(s.display, s.impHead)}>
          <FitLine>{f.understanding}</FitLine>
        </h3>
        <Fit as="p" className={s.impFile}>
          {IMPORT_FILE} · {f.rows}
        </Fit>
        <span className={s.readDoc}>
          <Doc label="CSV" className={s.docSolo} accent />
        </span>
        <div className={s.findHead}>
          <span>{f.finding}</span>
          <span>
            {Math.min(f.checks.length, Math.max(1, checked + 1))} {f.of} {f.checks.length}
          </span>
        </div>
        <ul className={s.checks}>
          {f.checks.map(([label, found], i) => {
            const state = i < checked ? "done" : i === checked ? "active" : "pending"
            return (
              <li key={label} data-state={state}>
                <span className={s.checkMark}>
                  {state === "done" ? <Icon.check size={13} stroke={2.6} /> : null}
                </span>
                <span className={s.checkLabel}>{label}</span>
                {state === "done" ? (
                  <span className={s.checkFound}>
                    <Fit>{found}</Fit>
                  </span>
                ) : null}
                {state === "active" ? <span className={s.checkLoading} /> : null}
              </li>
            )
          })}
        </ul>
        <HomeIndicator />
      </section>

      {/* 3 · importing, then imported */}
      <section className={s.impScreen} data-state={at(2)} data-done={done}>
        <span className={s.impTop}>
          <Icon.arrowLeft size={22} />
          <span className={s.impCancel} data-show={!done}>
            {f.cancel}
          </span>
        </span>
        <h3 className={cn(s.display, s.impHead, s.impHeadSwap)}>
          <span data-show={!done}>{f.importing}</span>
          <span data-show={done}>
            <FitLine>{f.imported}</FitLine>
          </span>
        </h3>
        <Fit as="p" className={cn(s.impFile, s.impFileLow)}>
          {IMPORT_FILE} → {f.account}
        </Fit>
        <div className={cn(s.findHead, s.justHead)}>
          <span>{f.justImported}</span>
          <span>
            {formatCount(locale, count)} {f.of} {formatCount(locale, IMPORT_ROWS)}
          </span>
        </div>
        <ul className={s.impRows}>
          {f.movements.map(([emoji, name, cat, amount], i) => {
            // the list fills from the top; what hasn't landed is the app's skeleton
            const shown = i < landed
            return (
              <li key={name} data-in={shown} style={{ "--i": i } as CSSProperties}>
                <span className={s.rowSkel} aria-hidden>
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <span className={s.tile} style={{ background: TILE[emoji] }}>
                  <Emoji size={20}>{emoji}</Emoji>
                </span>
                <span className={s.rowText}>
                  <b>
                    <Fit min={0.8}>{name}</Fit>
                  </b>
                  <span>
                    {cat} · {f.dates[Math.min(2, Math.floor(i / 3))]}
                  </span>
                </span>
                <b className={cn(s.money, s.rowAmount)}>{money(amount)}</b>
              </li>
            )
          })}
        </ul>
        <div className={s.impPill} data-done={done}>
          <span className={s.pillFace} data-show={!done}>
            <span className={s.pillRing} style={{ "--p": share } as CSSProperties}>
              <svg viewBox="0 0 44 44" aria-hidden>
                <circle cx="22" cy="22" r="20" className={s.pillRingTrack} />
                <circle cx="22" cy="22" r="20" className={s.pillRingValue} pathLength={1} />
              </svg>
              <SavloAiMark size={20} />
            </span>
            <span className={s.pillText}>
              <b>
                <Fit>{f.preparing}</Fit>
              </b>
              <span>{f.importingPill}</span>
            </span>
            <span className={s.pillCount}>
              <b>{Math.round(share * 100)}%</b>
              <span>
                {formatCount(locale, count)}/{formatCount(locale, IMPORT_ROWS)}
              </span>
            </span>
          </span>
          <span className={s.pillFace} data-show={done}>
            <Avatars emojis={["💼", "🏠", "📱"]} />
            <span className={s.pillText}>
              <b>
                <Fit>{f.review}</Fit>
              </b>
              <span>
                {/* what comes next, only while it fits whole */}
                <Fit min={0.9} short={`${n} ${f.detected}`}>
                  {n} {f.detected} · {f.next}: {f.recurring[f.recurring.length - 1][1]}
                </Fit>
              </span>
            </span>
            <span className={s.pillGo}>
              <Icon.arrowRight size={20} stroke={1.9} />
            </span>
          </span>
        </div>
        <HomeIndicator />
      </section>

      {/* 4 · the recurring found */}
      <section className={s.impScreen} data-state={at(3)}>
        <span className={s.back}>
          <Icon.arrowLeft size={22} />
        </span>
        <p className={s.aiEyebrow}>
          <SavloAiMark size={18} />
          Savlo AI · {f.recurringEyebrow}
        </p>
        <h3 className={cn(s.display, s.impHead)}>
          <FitLine>{f.recurringTitle}</FitLine>
        </h3>
        <p className={s.recBody}>{f.recurringBody}</p>
        <div className={cn(s.findHead, s.recHead)}>
          <span>
            {f.newLabel} <em>{n}</em>
          </span>
          <span>{f.clearAll}</span>
        </div>
        <ul className={cn(s.impRows, s.recRows)}>
          {f.recurring.map(([emoji, name, amount], i) => (
            <li key={name} data-in={i < rules}>
              <span className={s.tile} style={{ background: TILE[emoji] }}>
                <Emoji size={20}>{emoji}</Emoji>
              </span>
              <span className={s.rowText}>
                <b>
                  <Fit min={0.8}>{name}</Fit>
                </b>
                <span>{f.monthly}</span>
              </span>
              <b className={cn(s.money, s.rowAmount)} data-income={amount > 0 || undefined}>
                {amount > 0 ? "+" : ""}
                {money(amount)}
              </b>
              <span className={s.ruleCheck}>
                <Icon.check size={13} stroke={2.6} />
              </span>
            </li>
          ))}
        </ul>
        <div className={cn(s.impPill, s.recPill)} data-show={rules > 0}>
          <span className={s.pillFace} data-show>
            <Avatars emojis={["💼", "🏠", "🛜"]} />
            <span className={s.pillText}>
              <b>
                <Fit>{f.create.replace("{n}", n)}</Fit>
              </b>
              <span>
                ≈ {money(Math.round(monthly))} {f.aMonth}
              </span>
            </span>
            <span className={s.pillGo}>
              <Icon.arrowRight size={20} stroke={1.9} />
            </span>
          </span>
        </div>
        <p className={s.notNow}>{f.notNow}</p>
        <HomeIndicator />
      </section>

      {/* the stage the scroll is on, for the eye and for tests */}
      <span hidden data-stage={stages[stage]} />
    </div>
  )
}

/*
 * One line that shrinks to its box, as SavloShrinkToFitText does: measured
 * once laid out (and again when the fonts land), never cut.
 */
function FitLine({ children, max = 31 }: { children: ReactNode; max?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  useIsoLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const fit = () => {
      el.style.fontSize = `${max}px`
      const room = el.clientWidth
      const need = el.scrollWidth
      if (need > room) el.style.fontSize = `${Math.max(18, Math.floor(((max * room) / need) * 10) / 10)}px`
    }
    fit()
    document.fonts?.ready.then(fit).catch(() => {})
  }, [children, max])
  return (
    <span ref={ref} className={s.fitLine}>
      {children}
    </span>
  )
}

/*
 * A label of the app on one line, in whatever language: it shrinks to its box
 * (down to `min` of its own size) instead of being cut, as the app's rule for
 * its own labels. If even that is not enough it says `short`, when there is
 * one; the CSS ellipsis stays as the last net. Re-measured on every render
 * (one per phase) and when the fonts land. `as` with a className makes a row
 * shrink as a whole (its children inherit the size).
 */
function Fit({
  children,
  short,
  min = 0.8,
  as: Tag = "span",
  className,
  style,
}: {
  children: ReactNode
  short?: ReactNode
  min?: number
  as?: "span" | "div" | "p"
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLElement>(null)
  const [brief, setBrief] = useState(false)
  useIsoLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const fit = () => {
      el.style.fontSize = ""
      const base = parseFloat(getComputedStyle(el).fontSize)
      let size = base
      // padding and gaps don't shrink with the letters: a few passes close in
      for (let i = 0; i < 4 && el.scrollWidth > el.clientWidth + 0.5 && size > base * min; i++) {
        size = Math.max(base * min, Math.floor(size * (el.clientWidth / el.scrollWidth) * 10) / 10)
        el.style.fontSize = `${size}px`
      }
      if (short != null && !brief && el.scrollWidth > el.clientWidth + 0.5) setBrief(true)
    }
    fit()
    document.fonts?.ready.then(fit).catch(() => {})
  })
  return (
    <Tag
      ref={ref as never}
      className={className ? cn(s.fitRow, className) : s.fit}
      style={style}
    >
      {brief ? short : children}
    </Tag>
  )
}

function Avatars({ emojis }: { emojis: string[] }) {
  return (
    <span className={s.avatars}>
      {emojis.map((e) => (
        <span key={e} style={{ background: TILE[e] }}>
          <Emoji size={15}>{e}</Emoji>
        </span>
      ))}
    </span>
  )
}

// "Upload your history": the step's first screen, its card pressed when the
// visitor scrolls on, as a finger would.
function UploadBody({ t, tapped }: { t: ScreenCopy; tapped: boolean }) {
  return (
    <>
      <div className={s.impFlow}>
        <p className={s.eyebrow}>{t.imp.eyebrow}</p>
        <h3 className={cn(s.display, s.impTitle)}>{t.imp.title}</h3>
        <p className={s.impBody}>{t.imp.body}</p>

        <div className={s.dropCard} data-tapped={tapped}>
          <span className={s.dropGlow} />
          <div className={s.docs}>
            <Doc label="XLS" className={s.docLeft} />
            <Doc label="XLSX" className={s.docRight} />
            <Doc label="CSV" className={s.docMid} accent />
          </div>
          <p className={s.dropTitle}>{t.imp.choose}</p>
          <p className={s.dropSub}>{t.imp.formats}</p>
        </div>

        <p className={cn(s.eyebrow, s.impDoes)}>{t.imp.does}</p>
        <ol className={s.impSteps}>
          {t.imp.steps.map(([title, sub], i) => (
            <li key={title}>
              <span className={s.impNum}>{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className={s.impStepTitle}>{title}</span>
                <span className={s.impStepSub}>{sub}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
      <p className={s.impPrivacy}>{t.imp.privacy}</p>
      <HomeIndicator />
    </>
  )
}

function Doc({ label, className, accent }: { label: string; className: string; accent?: boolean }) {
  return (
    <span className={cn(s.doc, className)}>
      <span className={s.docFold} />
      <span className={s.docLine} style={{ width: 22 }} />
      <span className={s.docLine} style={{ width: 30 }} />
      <span className={s.docLine} style={{ width: 26 }} />
      <span className={s.docLabel} data-accent={accent}>
        {label}
      </span>
    </span>
  )
}

/* ── Understand: Today ─────────────────────────────────────────── */

// Net worth, last 30 days, in dp on the screen: flat around $47.4K, the
// salary lands on Oct 1, and it settles at $50,829 today.
const NW_LINE =
  "M18 371 C26 372 40 373 52 374 S70 376 82 377 S96 375 102 371 S110 370 116 373 S150 377 168 379 S196 381 203 381 " +
  "L206 352 C208 300 210 262 212.5 257 C215 254 217 290 220 299 S232 302 246 303 S262 303 272 305 S296 306 307 311"
const NW_AREA = `${NW_LINE} L307 388 L18 388 Z`
// daily flow under the chart: [x, height]; positive = money in
const FLOW: [number, number][] = [
  [24, -8], [33, -4], [42, -4], [52, -7], [70, -5], [79, -5], [89, -7], [101, 13], [110, -7], [119, -3],
  [128, -6], [148, -6], [157, -6], [167, -4], [176, -3], [186, -2], [206, 17], [216, -18], [226, -9],
  [235, -7], [245, -5], [255, -6], [272, -3], [282, -4], [292, -7], [301, -5],
]

function Today({ t, d, money, locale }: Ctx) {
  const fillId = useId()
  return (
    <div className={s.page}>
      <div className={s.titleRow}>
        <Title chars={t.today.title.length}>{t.today.title}</Title>
        <span className={s.titleActions}>
          <span className={s.streak}>
            <Flame size={17} />1
          </span>
          <Circle>
            <Icon.presentation size={19} />
          </Circle>
          <Circle>
            <Icon.search size={19} />
          </Circle>
        </span>
      </div>

      <div className={s.nwHead}>
        <p className={s.eyebrow}>{t.today.netWorth}</p>
        <span className={s.nwTools}>
          <Circle size={29.6} className={s.infoCircle}>
            <Icon.info size={14.7} stroke={2.25} />
          </Circle>
          <CurrencyChip />
        </span>
      </div>
      <p className={cn(s.money, s.nwAmount)}>{money(50829)}</p>
      <p className={s.nwDelta}>
        <Icon.arrowUpRight size={13} stroke={1.8} />
        <span className={s.money}>+{money(3100, true)}</span> ({formatPercent(locale, 0.065, 1)}) {t.today.lastDays}
      </p>

      <svg className={s.nwChart} viewBox="0 0 360 470" aria-hidden>
        <defs>
          <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2E8BC0" stopOpacity=".28" />
            <stop offset="1" stopColor="#2E8BC0" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[251, 289, 327, 365].map((y, i) => (
          <g key={y}>
            <line x1="18" x2="300" y1={y} y2={y} className={s.grid} />
            <text x="342" y={y + 3.5} textAnchor="end" className={s.axis}>
              {money([54000, 52000, 50000, 48000][i], true)}
            </text>
          </g>
        ))}
        <path d={NW_AREA} className={s.nwArea} fill={`url(#${fillId})`} />
        <path d={NW_LINE} className={s.nwLine} pathLength={1} />
        <circle cx="307" cy="311" r="4.6" className={s.nwDot} />
        <line x1="18" x2="306" y1="420" y2="420" className={s.flowBase} />
        {FLOW.map(([x, h], i) => (
          <rect
            key={x}
            className={s.flowBar}
            data-in={h > 0}
            x={x - 2.4}
            y={h > 0 ? 420 - h : 420}
            width="4.8"
            height={Math.abs(h)}
            rx="1.2"
            style={{ "--i": i, transformOrigin: `${x}px 420px` } as CSSProperties}
          />
        ))}
        {d.axis.map((label, i) => (
          <text key={label} x={[19, 100, 200][i]} y="455" className={s.axisDate}>
            {label}
          </text>
        ))}
        <text x="307" y="455" textAnchor="end" className={s.axisToday}>
          {t.today.title}
        </text>
      </svg>

      <div className={s.flowRow}>
        <span>{t.today.flow}</span>
        <span className={s.flowLegend}>
          <i data-in />
          <b className={s.money}>+{money(7100, true)}</b>
          <i />
          <b className={s.money}>−{money(4000, true)}</b>
        </span>
      </div>

      <div className={s.ranges}>
        {["1M", "3M", "1Y", t.today.all].map((r, i) => (
          <span key={r} data-active={i === 0}>
            {r}
          </span>
        ))}
      </div>

      {/* Activity / Funds: SavloDataSegmentedControl, the carved rail and its raised piece */}
      <div className={cn(s.segment, s.carved)}>
        <span className={cn(s.segmentThumb, s.raised)} />
        <span data-active>
          <b>{t.today.activity}</b>
          <span>
            −{money(67)} {t.today.todaySuffix}
          </span>
        </span>
        <span>
          <b>{t.today.funds}</b>
          <span>
            {t.today.fundsLine} · {money(1800, true)}
          </span>
        </span>
      </div>

      <div className={s.miniCards}>
        <span className={s.miniCard}>
          <span className={s.miniHead}>
            <i data-tone="in" />
            {t.today.income}
            <Icon.caretRight size={13} />
          </span>
          <span className={cn(s.money, s.miniAmount)} data-dim>
            {money(0)}
          </span>
        </span>
        <span className={s.miniCard}>
          <span className={s.miniHead}>
            <i data-tone="out" />
            {t.today.expenses}
          </span>
          <span className={cn(s.money, s.miniAmount)}>{money(67)}</span>
        </span>
        <span className={s.miniCard} />
      </div>

      <NavBar t={t} active="today" />
    </div>
  )
}

/* ── Understand: Reports ───────────────────────────────────────── */

const band = (x1: number, a: number, b: number, x2: number, c: number, e: number) => {
  const m = (x1 + x2) / 2
  return `M${x1} ${a} C${m} ${a} ${m} ${c} ${x2} ${c} L${x2} ${e} C${m} ${e} ${m} ${b} ${x1} ${b} Z`
}

function Reports({ t, money, locale }: Ctx) {
  const uid = useId()
  const id = (name: string) => `${uid}-${name}`
  const url = (name: string) => `url(#${id(name)})`
  const cats = [
    { emoji: "🏠", name: t.reports.cats[0], value: 43412, pct: 0.65, y: 318 },
    { emoji: "🍽️", name: t.reports.cats[1], value: 10479, pct: 0.16, y: 437 },
    { emoji: "🛍️", name: t.reports.cats[2], value: 2813, pct: 0.04, y: 503 },
    { emoji: "💡", name: t.reports.cats[3], value: 2538, pct: 0.04, y: 558 },
    { emoji: "", name: t.reports.other, value: 7689, pct: 0.11, y: 619 },
  ]
  return (
    <div className={s.page}>
      <div className={s.titleRow}>
        <span className={s.titleLead}>
          <Icon.arrowLeft size={22} />
          <Title chars={t.reports.title.length}>{t.reports.title}</Title>
        </span>
        <span className={s.filterPill}>
          {t.reports.all}
          <Icon.sliders size={17} />
        </span>
      </div>

      <div className={s.cashHead}>
        <p className={s.cashLabel}>{t.reports.cashFlow}</p>
        <span className={s.cashTools}>
          <span className={s.squareBtn}>
            <Icon.share size={18} />
          </span>
          <span className={s.toggle}>
            <span>
              <Icon.bars size={18} />
            </span>
            <span data-active>
              <Icon.tree size={18} />
            </span>
          </span>
        </span>
      </div>
      <p className={cn(s.money, s.cashAmount)}>{money(48829)}</p>
      <p className={s.cashInOut}>
        {t.reports.inOut[0]} <b className={s.money}>{money(115760)}</b> · {t.reports.inOut[1]}{" "}
        <b className={s.money}>{money(66931)}</b>
      </p>

      <div className={s.sankey}>
        <svg viewBox="0 0 360 780" aria-hidden>
          <defs>
            <linearGradient id={id("salary")} x1="0" x2="1">
              <stop offset="0" stopColor="#2F5E56" />
              <stop offset="1" stopColor="#3B6B62" />
            </linearGradient>
            <linearGradient id={id("house")} x1="0" x2="1">
              <stop offset="0" stopColor="#1B5F6E" />
              <stop offset="1" stopColor="#1C4B5E" />
            </linearGradient>
            <linearGradient id={id("rest")} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2C5A4C" stopOpacity=".85" />
              <stop offset="1" stopColor="#2C5A4C" stopOpacity="0" />
            </linearGradient>
            <linearGradient id={id("avail")} x1="0" y1="0" x2="0" y2="1">
              <stop offset=".8" stopColor="#E9E1D6" />
              <stop offset="1" stopColor="#E9E1D6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={band(33, 262, 561, 199, 382, 684)} fill={url("salary")} opacity=".9" />
          <path d={band(211, 382, 500, 360, 262, 392)} fill={url("house")} />
          <path d={band(211, 500, 528, 360, 432, 474)} fill="#2A4E86" />
          <path d={band(211, 528, 535, 360, 497, 507)} fill="#6B3F9F" />
          <path d={band(211, 535, 541, 360, 552, 561)} fill="#1F4C8A" />
          <path d={band(211, 541, 566, 360, 604, 642)} fill="#2C3B4E" />
          <path d={band(211, 566, 690, 360, 660, 790)} fill={url("rest")} />
          <rect x="21" y="262" width="12.5" height="299" rx="6.25" fill="#86E0B5" />
          <rect x="199" y="382" width="12.5" height="304" rx="6.25" fill={url("avail")} />
        </svg>
        <span className={s.skLabel} style={{ left: 44, top: 393 }}>
          <span className={s.skName}>
            <Emoji size={12}>💼</Emoji> {t.reports.salary}
          </span>
          <span className={s.skValue}>
            <b className={s.money}>{money(113500)}</b> <em>{formatPercent(locale, 0.98)}</em>
          </span>
        </span>
        <span className={s.skLabel} data-center style={{ left: 205, top: 341 }}>
          <span className={s.skName}>{t.reports.available}</span>
          <span className={s.skValue}>
            <b className={s.money}>{money(115760)}</b>
          </span>
        </span>
        {cats.map((c) => (
          <span key={c.name} className={s.skLabel} data-end style={{ right: 10, top: c.y - 17 }}>
            <span className={s.skName}>
              {c.emoji ? <Emoji size={12}>{c.emoji}</Emoji> : null} {c.name}
            </span>
            <span className={s.skValue}>
              <b className={s.money}>{money(c.value)}</b> <em>{formatPercent(locale, c.pct)}</em>
            </span>
          </span>
        ))}
      </div>

      <span className={s.viewAll}>
        <span className={s.viewIcon}>
          <Icon.listSearch size={18} stroke={1.8} />
        </span>
        <Fit>{t.reports.viewMovements}</Fit>
      </span>
      <HomeIndicator />
    </div>
  )
}

/* ── Understand: Savlo AI ──────────────────────────────────────── */

/*
 * The conversation, driven by the scroll through its long step, as the app's
 * chat plays it: the question is typed into the composer and sent; it lands
 * as a bubble, the thread takes its title, "Savlo AI" checks your data, the
 * answer streams word by word (figures in bold) and a chart card closes it,
 * with the actions and "Deepen" below. Like the app, the thread scrolls to
 * keep the newest line in view. The typing and the stream play at once on
 * their own clocks (CHAT_RUN, ms) when the scroll reaches them.
 */
// the reply ("Savlo AI" and its status line) arrives with the sent question
const CHAT = { type: 0.08, sent: 0.3, stream: 0.42, card: 0.64, done: 0.8 }
const CHAT_RUN = { type: 1100, stream: 1800 }

function Assistant({ t, money, progress }: Ctx) {
  const c = t.ai.chat
  const typing = progress >= CHAT.type
  const sent = progress >= CHAT.sent
  const streaming = progress >= CHAT.stream
  const card = progress >= CHAT.card
  const done = progress >= CHAT.done
  const keys = useRun(typing, CHAT_RUN.type)
  const flow = useRun(streaming, CHAT_RUN.stream)
  const words = answerWords(c.answer)
  const typed = sent ? c.question.length : Math.round(keys * c.question.length)
  const streamed = card ? words.length : Math.round(flow * words.length)
  const thinking = sent && streamed === 0

  // keep the newest line in view, as the thread scrolls in the app
  const boxRef = useRef<HTMLDivElement>(null)
  const threadRef = useRef<HTMLDivElement>(null)
  useIsoLayoutEffect(() => {
    const box = boxRef.current
    const thread = threadRef.current
    if (!box || !thread) return
    thread.style.transform = `translate3d(0, ${Math.min(0, box.clientHeight - thread.offsetHeight)}px, 0)`
  })

  return (
    <div className={cn(s.page, s.chat)} data-sent={sent}>
      <div className={s.aiTop}>
        <Icon.menu size={22} stroke={1.7} />
        <span className={s.threadTitle}>{c.thread}</span>
        <span className={s.threadTools}>
          <Icon.dotsH size={20} />
          <Icon.close size={22} stroke={1.7} />
        </span>
      </div>

      {/* the empty chat: what the step opens on */}
      <div className={s.chatEmpty}>
        <SavloAiMark size={31} className={s.aiMark} />
        <h3 className={s.aiHello}>
          {t.ai.l1}
          <br />
          <em className={s.display}>{t.ai.l2em}</em> {t.ai.l2}
        </h3>
        <div className={s.aiDataHead}>
          <span className={s.eyebrow}>{t.ai.fromData}</span>
          <span>{t.ai.dataLine}</span>
        </div>
        <ul className={s.asks}>
          {t.ai.asks.map(([q, sub]) => (
            <li key={q}>
              <span>
                <span className={s.askQ}>{q}</span>
                <span className={s.askSub}>{sub}</span>
              </span>
              <Icon.arrowUpRight size={16} />
            </li>
          ))}
        </ul>
      </div>

      <div ref={boxRef} className={s.threadBox}>
        <div ref={threadRef} className={s.thread}>
          {sent ? (
            <>
              <p className={s.userBubble}>{c.question}</p>
              {/* copy and edit, a notch smaller and dimmer than the answer's;
                  edit stays faint while Savlo answers */}
              <span className={s.userTools} data-answering={!done || undefined}>
                <span>
                  <Icon.copy size={16} />
                </span>
                <span>
                  <Icon.pencil size={16} />
                </span>
              </span>
              <p className={s.aiWho} data-streaming={!done || undefined}>
                <span className={s.aiWhoMark}>
                  <SavloAiMark size={22} />
                </span>
                Savlo AI
              </p>
              {thinking ? <p className={s.aiStatus}>{c.status}</p> : null}
              {streamed > 0 ? (
                <p className={s.aiAnswer}>
                  {words.slice(0, streamed).map((w, i) => (
                    <span key={i} className={s.aiWord} data-bold={w.bold || undefined}>
                      {/* no space before the punctuation that follows a bold figure */}
                      {w.text}
                      {/^[.,;:!?)]/.test(words[i + 1]?.text ?? "") ? "" : " "}
                    </span>
                  ))}
                </p>
              ) : null}
              {card ? <CashFlowSection c={c} money={money} /> : null}
              {done ? (
                <>
                  <span className={s.msgTools}>
                    <Icon.copy size={19} />
                    <Icon.share size={19} />
                    <Icon.thumbUp size={19} />
                    <Icon.thumbDown size={19} />
                  </span>
                  <p className={cn(s.eyebrow, s.deepen)}>{c.deepen}</p>
                  <ul className={s.follow}>
                    {c.follow.map((q, i) => (
                      <li key={q} style={{ "--i": i } as CSSProperties}>
                        {q}
                        <Icon.arrowUpRight size={16} />
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </>
          ) : null}
        </div>
      </div>

      <div className={s.composer} data-typing={typed > 0 && !sent}>
        {typed > 0 && !sent ? (
          <span className={s.composerText}>
            {c.question.slice(0, typed)}
            <i className={s.caret} />
          </span>
        ) : (
          <span>{sent ? c.keepAsking : t.ai.composer}</span>
        )}
        {typed > 0 && !sent ? (
          <span className={s.sendBtn}>
            <Icon.arrowUp size={20} stroke={2} />
          </span>
        ) : sent && !done ? (
          <span className={s.sendBtn}>
            <i className={s.stopGlyph} />
          </span>
        ) : (
          <Circle size={44} className={s.composerMic}>
            <Icon.mic size={20} />
          </Circle>
        )}
      </div>
      <p className={s.disclaimer}>{t.ai.disclaimer}</p>
      <HomeIndicator />
    </div>
  )
}

/** "**$412** on Food" → words, each knowing if it is bold (the app's figures). */
function answerWords(text: string) {
  const out: { text: string; bold: boolean }[] = []
  text.split("**").forEach((part, i) => {
    for (const w of part.split(/\s+/)) if (w) out.push({ text: w, bold: i % 2 === 1 })
  })
  return out
}

// The last twelve months, in thousands: what came in and what went out
const CF_IN = [8.6, 9.4, 9.5, 9.6, 9.3, 9.6, 9.8, 9.7, 9.9, 9.6, 9.8, 9.0]
const CF_OUT = [5.2, 6.0, 5.8, 5.9, 5.7, 5.8, 6.0, 5.9, 5.7, 5.6, 5.6, 4.4]
const SAVINGS = 0.42
const SAVINGS_TICKS = 44

/*
 * What the chat embeds: not a chart of its own but Reports' Cash flow
 * section (ReportsEmbeddedSection), the same one the Reports screen shows in
 * its bars view. The chat's header drops the section number and states the
 * window's dates under the title; the rest is the section as it is: the
 * figure, money in above the dashed line in mint and money out below in
 * orange, the month in course hatched, IN / OUT and the savings rate.
 */
function CashFlowSection({ c, money }: { c: ScreenCopy["ai"]["chat"]; money: Ctx["money"] }) {
  const sec = c.section
  const uid = useId()
  const W = 321
  const zero = 88
  const up = 78 / 10 // dp per thousand above the line
  const down = 50 / 6.2
  const bw = 11
  const step = (W - 20 - bw) / (CF_IN.length - 1)
  const x = (i: number) => 10 + i * step
  const last = CF_IN.length - 1
  return (
    <div className={s.cfSection}>
      <div className={s.cfHead}>
        <span>
          <span className={s.cfTitle}>{sec.title}</span>
          <span className={s.cfDates}>{sec.dates}</span>
        </span>
        <span className={s.toggle}>
          <span data-active>
            <Icon.bars size={17} />
          </span>
          <span>
            <Icon.tree size={17} />
          </span>
        </span>
      </div>
      <p className={cn(s.money, s.cfAmount)}>{money(48829)}</p>
      <p className={s.cfInOut}>
        {sec.inOut[0]} <b className={s.money}>{money(115760)}</b> · {sec.inOut[1]} <b className={s.money}>{money(66931)}</b>
      </p>

      <svg className={s.cfChart} viewBox={`0 0 ${W} 176`} aria-hidden>
        <defs>
          <linearGradient id={`${uid}-in`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8be3b9" />
            <stop offset="1" stopColor="#3c9a76" />
          </linearGradient>
          <linearGradient id={`${uid}-out`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#b5622c" />
            <stop offset="1" stopColor="#f4a261" />
          </linearGradient>
          {/* the month in course: the same bars, hatched */}
          <pattern id={`${uid}-hatch-in`} width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="5" height="5" fill="#2f6f58" />
            <rect width="2.2" height="5" fill="#7fd6ad" />
          </pattern>
          <pattern id={`${uid}-hatch-out`} width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="5" height="5" fill="#7d4a2b" />
            <rect width="2.2" height="5" fill="#e8955a" />
          </pattern>
        </defs>
        {CF_IN.map((v, i) => {
          const hi = v * up
          const lo = CF_OUT[i] * down
          const now = i === last
          return (
            <g key={i} className={s.cfBar} style={{ "--i": i, transformOrigin: `${x(i) + bw / 2}px ${zero}px` } as CSSProperties}>
              <rect x={x(i)} y={zero - 3 - hi} width={bw} height={hi} rx={bw / 2} fill={now ? `url(#${uid}-hatch-in)` : `url(#${uid}-in)`} />
              <rect x={x(i)} y={zero + 3} width={bw} height={lo} rx={bw / 2} fill={now ? `url(#${uid}-hatch-out)` : `url(#${uid}-out)`} />
            </g>
          )
        })}
        <line x1="0" x2={W} y1={zero} y2={zero} className={s.cfZero} />
        {sec.months.map((m, i) =>
          i % 2 === 1 ? (
            <text key={m} x={x(i) + bw / 2} y="170" textAnchor="middle" className={s.cfMonth} data-now={i === last || undefined}>
              {m}
            </text>
          ) : null,
        )}
      </svg>

      <div className={s.cfStats}>
        <span>
          <span className={s.cfStatLabel}>
            <i data-tone="in" />
            {sec.in}
          </span>
          <b className={s.money}>{money(115760)}</b>
        </span>
        <span>
          <span className={s.cfStatLabel}>
            <i data-tone="out" />
            {sec.out}
          </span>
          <b className={s.money}>{money(66931)}</b>
        </span>
      </div>

      <div className={s.cfSavings}>
        <span>{sec.savings}</span>
        <b>{Math.round(SAVINGS * 100)}%</b>
      </div>
      <div className={s.cfTicks}>
        {Array.from({ length: SAVINGS_TICKS }, (_, i) => (
          <i
            key={i}
            data-fill={i < SAVINGS * SAVINGS_TICKS || undefined}
            data-mark={i === Math.round(SAVINGS * SAVINGS_TICKS) || undefined}
            data-major={i % 8 === 0 || undefined}
            style={{ "--i": i } as CSSProperties}
          />
        ))}
      </div>
      <div className={s.cfScale}>
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  )
}

/* ── Grow: Budget ──────────────────────────────────────────────── */

const PILLS = [
  { emoji: "🏠", spent: "2.4K", pct: 0.94, limit: "2.5K", color: "#2BC8D4" },
  { emoji: "🍽️", spent: "278", pct: 0.46, limit: "600", color: "#4A9BF5" },
  { emoji: "💡", spent: "96", pct: 0.64, limit: "150", color: "#4A9BF5" },
  { emoji: "💊", spent: "84", pct: 0.7, limit: "120", color: "#4A9BF5" },
  { emoji: "🛍️", spent: "57", pct: 0.34, limit: "170", color: "#BC6FE8" },
  { emoji: "🚗", spent: "39", pct: 0.39, limit: "100", color: "#ED5FA8" },
  { emoji: "📺", spent: "22", pct: 0.4, limit: "55", color: "#F0904F" },
]
/*
 * BudgetProgressRow on this screen (× 0.917): the pill is 316 wide and 51
 * tall, its content starts 14.4 in, the emoji is 18.6, then 11 of air (13
 * here: the web's emoji box is a hair narrower than Flutter's).
 */
const PILL_W = 316
const PILL_H = 51

/**
 * The pill's ink, as the app derives it (_getDarkContrast): the fill's own hue
 * at 15 % lightness, its saturation × 1.15 kept within 65–100 %. The figure
 * wears it whole; the percentage and the limit on the fill, at 55 %.
 */
function pillInk(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const d = max - min
  const l = (max + min) / 2
  const sat = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1))
  const hue = d === 0 ? 0 : max === r ? ((g - b) / d + 6) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4
  const hsl = `${Math.round(hue * 60)} ${Math.round(Math.min(1, Math.max(0.65, sat * 1.15)) * 100)}% 15%`
  return { ink: `hsl(${hsl})`, soft: `hsl(${hsl} / 0.55)` }
}

/** The fill never shrinks under what it carries: emoji, figure, and a margin off its round end. */
const pillMinFill = (spent: string, pct: string) =>
  (14.4 * 2 + 18.6 + 13 + Math.max(13.3 * spent.length, 8.7 * pct.length) * 0.66 + PILL_H * 0.16) / PILL_W

function Budget({ t, money, locale }: Ctx) {
  const ring = 2 * Math.PI * 30
  return (
    <div className={s.page}>
      <div className={s.titleRow}>
        <span
          className={cn(s.titleBox, s.budgetTabs)}
          style={{ "--chars": t.budget.tab.length + t.budget.funds.length + 1.5 } as CSSProperties}
        >
          <h3 className={cn(s.display, s.screenTitle)} data-active>
            {t.budget.tab}
          </h3>
          <span className={cn(s.display, s.screenTitle)}>{t.budget.funds}</span>
        </span>
        <span className={s.titleActions}>
          <Circle className={s.mintCircle}>
            <Icon.plus size={20} />
          </Circle>
          <Circle>
            <Icon.search size={19} />
          </Circle>
        </span>
      </div>
      <div className={s.monthRow}>
        <span className={s.monthPill}>
          {t.budget.month}
          <Icon.caretDown size={15} stroke={1.8} />
        </span>
        <Circle>
          <Icon.sliders size={18} />
        </Circle>
      </div>

      <div className={s.overall}>
        <div>
          <p className={s.eyebrow}>{t.budget.overall}</p>
          <p className={s.overallAmount}>
            <span className={s.money}>{money(2956)}</span>
            <span className={cn(s.money, s.overallOf)}> / {money(3871)}</span>
          </p>
          <p className={s.overallLeft}>
            <i />
            <span className={s.money}>{money(915)}</span> {t.budget.left}
          </p>
        </div>
        <span className={s.ring}>
          <svg viewBox="0 0 68 68" aria-hidden>
            <circle cx="34" cy="34" r="30" className={s.ringTrack} />
            <circle
              cx="34"
              cy="34"
              r="30"
              className={s.ringValue}
              style={{ "--len": ring, "--to": ring * (1 - 0.76) } as CSSProperties}
            />
          </svg>
          <b>{formatPercent(locale, 0.76)}</b>
          {/* a long word gives up tracking first, then size */}
          <small style={t.budget.spent.length > 6 ? { letterSpacing: "0.06em" } : undefined}>
            <Fit>{t.budget.spent}</Fit>
          </small>
        </span>
      </div>

      <p className={cn(s.eyebrow, s.byCat)}>
        {t.budget.byCategory} <b>10</b>
      </p>
      <ul className={s.pills}>
        {PILLS.map((p, i) => {
          const pct = formatPercent(locale, p.pct)
          const { ink, soft } = pillInk(p.color)
          return (
            <li key={p.emoji} className={s.pill} style={{ "--i": i } as CSSProperties}>
              {/* the limit's track: the app's dashed capsule, 1.1 wide, 4.6 on and 3.7 off */}
              <svg className={s.pillTrack} viewBox={`0 0 ${PILL_W} ${PILL_H}`} aria-hidden>
                <rect x="0.55" y="0.55" width={PILL_W - 1.1} height={PILL_H - 1.1} rx={(PILL_H - 1.1) / 2} />
              </svg>
              <span className={s.pillLimit}>{p.limit}</span>
              <span
                className={s.pillFill}
                style={
                  {
                    "--w": `${Math.max(p.pct, pillMinFill(p.spent, pct)) * 100}%`,
                    "--fill": p.color,
                    color: ink,
                  } as CSSProperties
                }
              >
                <Emoji size={18.6}>{p.emoji}</Emoji>
                <span className={s.pillFigures}>
                  <b>{p.spent}</b>
                  <small style={{ color: soft }}>{pct}</small>
                </span>
                {/* the limit again, dark where the fill covers it: the label changes colour at the fill's edge */}
                <span className={s.pillLimit} style={{ color: soft }} aria-hidden>
                  {p.limit}
                </span>
              </span>
            </li>
          )
        })}
      </ul>

      <NavBar t={t} active="budget" />
    </div>
  )
}

/* ── Grow: a fund ──────────────────────────────────────────────── */

const TICKS = 96

function Fund({ t, d, money }: Ctx) {
  return (
    <div className={s.page}>
      <div className={s.fundTop}>
        <Icon.arrowLeft size={22} />
        <Icon.dotsV size={22} />
      </div>
      <h3 className={s.fundName}>
        <Emoji size={27}>✈️</Emoji>
        <span className={s.display}>{t.fund.name}</span>
      </h3>
      <p className={s.fundDue}>{t.fund.due}</p>

      <div className={s.dial}>
        <span className={s.dialGlow} />
        <svg viewBox="-130 -130 260 260" aria-hidden>
          {Array.from({ length: TICKS }, (_, i) => {
            const major = i % 12 === 0
            const filled = i < TICKS * 0.6
            return (
              <line
                key={i}
                x1="0"
                x2="0"
                y1={major ? -125 : -122}
                y2={-111}
                className={s.tick}
                data-fill={filled}
                data-major={major}
                transform={`rotate(${(i * 360) / TICKS})`}
                style={{ "--i": i } as CSSProperties}
              />
            )
          })}
        </svg>
        <span className={s.dialCopy}>
          <b className={s.display}>60%</b>
          <span>{t.fund.goal}</span>
          <span className={s.money}>
            {money(1800)} {t.fund.of} {money(3000)}
          </span>
        </span>
      </div>

      <div className={s.fundStats}>
        <span>
          <b className={s.money}>{money(93)}</b>
          {t.fund.aWeek}
        </span>
        <span>
          <b className={s.money} data-mint>
            +{money(1800)}
          </b>
          {t.fund.vsPlan}
        </span>
        <span>
          <b>{d.fundDate}</b>
          {t.fund.target}
        </span>
      </div>

      <div className={s.activityHead}>
        <h4 className={s.display}>{t.fund.activity}</h4>
        <span>
          {t.fund.moves}
          <span className={s.usdSwap}>
            USD
            <Icon.swap size={14} />
          </span>
        </span>
      </div>
      <p className={s.activityMonth}>{t.fund.month}</p>
      <div className={s.moveRow}>
        <span className={s.moveIcon}>
          <Icon.arrowDownLeft size={17} />
        </span>
        <span className={s.moveText}>
          <b>{t.fund.rowTitle}</b>
          <span>{t.fund.rowSub}</span>
        </span>
        <b className={cn(s.money, s.moveAmount)}>+{money(1800)}</b>
      </div>

      <div className={s.fundCta}>
        <Circle size={51}>
          <Icon.arrowDown size={21} />
        </Circle>
        <span className={s.addMoney}>
          <Icon.plus size={20} stroke={1.8} />
          <b>{t.fund.add}</b>
        </span>
      </div>
      <HomeIndicator />
    </div>
  )
}

/* ── Grow: recurring ───────────────────────────────────────────── */

const CAL_COLS = [40, 87, 133, 180, 227, 273, 320]
const CAL_ROW = 72.4 // one week of _CalendarDayCell
const CAL_CHARGES = [
  { day: 12, col: 1, row: 0, emoji: "📱", amount: 26 },
  { day: 15, col: 4, row: 0, emoji: "💡", amount: 64 },
  { day: 18, col: 0, row: 1, emoji: "📺", amount: 15 },
  { day: 21, col: 3, row: 1, emoji: "📚", amount: 59 },
]
// The bar under a day's amount, as the app sizes it: the heaviest day of the
// fortnight spans the cell (40.7 here), the rest by their share, never under 15 %.
const CAL_BAR = 40.7
const CAL_HEAVIEST = Math.max(...CAL_CHARGES.map((c) => c.amount))

function Recurring({ t, d, money }: Ctx) {
  const rows = [
    { emoji: "📱", amount: 26, soon: true },
    { emoji: "💡", amount: 64 },
    { emoji: "📺", amount: 15.49 },
    { emoji: "📚", amount: 59 },
  ]
  return (
    <div className={s.page}>
      <div className={s.titleRow}>
        <span className={s.titleLead}>
          <Icon.arrowLeft size={22} />
          <Title chars={t.recurring.title.length}>{t.recurring.title}</Title>
        </span>
        <span className={s.titleActions}>
          <CurrencyChip />
          <Circle size={39}>
            <Icon.plus size={20} />
          </Circle>
        </span>
      </div>

      <div className={s.weekNav}>
        <Circle size={33}>
          <Icon.caretLeft size={16} stroke={1.9} />
        </Circle>
        <Circle size={33}>
          <Icon.caretRight size={16} stroke={1.9} />
        </Circle>
        <span className={s.weekRange}>
          <i />
          {d.range} <em>· 2026</em>
        </span>
        <span className={cn(s.capsule, s.carved)}>
          <span className={cn(s.capsuleThumb, s.raised)} />
          <Icon.calendar size={14.7} stroke={2.25} />
          <Icon.list size={14.7} stroke={2.25} />
        </span>
      </div>

      <div className={s.calendar}>
        {d.week.map((w, i) => (
          <span key={w} className={s.calWeekday} style={{ left: CAL_COLS[i] }}>
            {w}
          </span>
        ))}
        {[11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((day, i) => (
          <span
            key={day}
            className={s.calDay}
            data-today={day === 11}
            style={{ left: CAL_COLS[i % 7], top: 22 + (i < 7 ? 0 : CAL_ROW) }}
          >
            {day}
          </span>
        ))}
        {CAL_CHARGES.map((c, i) => (
          <span
            key={c.day}
            className={s.calCharge}
            style={
              {
                left: CAL_COLS[c.col],
                top: 42.7 + c.row * CAL_ROW,
                "--i": i,
                "--bar": `${CAL_BAR * Math.max(0.15, c.amount / CAL_HEAVIEST)}px`,
              } as CSSProperties
            }
          >
            <span className={s.calChip}>
              <Emoji size={12.8}>{c.emoji}</Emoji>
            </span>
            <span>{money(c.amount)}</span>
          </span>
        ))}
      </div>

      <p className={cn(s.eyebrow, s.perMonth)}>{t.recurring.perMonth}</p>
      <div className={s.perMonthRow}>
        <span>
          {t.recurring.expenses}
          <b className={s.money}>{money(1445)}</b>
        </span>
        <span>
          {t.recurring.income}
          <b className={s.money} data-mint>
            {money(3200)}
          </b>
        </span>
        <span>
          {t.recurring.total}:
          <b className={s.money} data-mint>
            {money(1755)}
          </b>
        </span>
      </div>

      <p className={s.upcoming}>{t.recurring.upcoming}</p>
      <ul className={s.charges}>
        {rows.map((r, i) => (
          <li key={r.emoji} style={{ "--i": i } as CSSProperties}>
            <span className={s.chargeDay}>{d.days[i]}</span>
            <span className={s.chargeRow}>
              <span className={s.chargeIcon}>
                <Emoji size={22}>{r.emoji}</Emoji>
              </span>
              <span className={s.chargeText}>
                <b>{t.recurring.items[i]}</b>
                <span>{t.recurring.monthly}</span>
                {r.soon ? <span data-mint>{t.recurring.tomorrow}</span> : null}
              </span>
              <b className={cn(s.money, s.chargeAmount)}>{money(r.amount)}</b>
              <Icon.dotsV size={18} />
            </span>
          </li>
        ))}
      </ul>
      <HomeIndicator />
    </div>
  )
}
