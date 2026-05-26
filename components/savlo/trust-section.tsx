"use client"

import { useEffect, useRef } from "react"
import { Reveal } from "./reveal"

const principles = [
  {
    title: "No ads. Not now, not ever.",
    body: "Savlo is positioned as a member-supported product, not an ad-supported one. The public site does not trade your attention for growth tricks.",
  },
  {
    title: "We do not sell your data.",
    body: "The landing page is explicit about this: Savlo should not be described as a data-broker or attention-harvesting finance tool.",
  },
  {
    title: "You stay in control of your records.",
    body: "The product messaging emphasizes exports, separate Spaces, and a calmer interface that helps you inspect your money without locking you into dark patterns.",
  },
]

export function TrustSection() {
  return (
    <section id="trust" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="mb-16 text-center sm:mb-20">
            <p className="text-xs uppercase tracking-[0.18em] text-primary/80">
              Trust, by default
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
              Built quietly, with clear promises.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Calm design only matters if the product language is honest. These
              are the promises the public site can stand behind today.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-border/40 pt-8 text-sm sm:gap-12">
              <Metric label="Business model" value="Member-funded" />
              <Metric label="Data policy" value="No data selling" />
              <Metric label="Control" value="Export ready" />
            </div>
          </div>
        </Reveal>

        <div className="space-y-5">
          {principles.map((principle, index) => (
            <PrincipleCard
              key={principle.title}
              principle={principle}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 font-serif text-lg tracking-tight">{value}</p>
    </div>
  )
}

function PrincipleCard({
  principle,
  index,
}: {
  principle: (typeof principles)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

    if (reduceMotion) {
      el.style.transform = "scale(1)"
      el.style.opacity = "1"
      return
    }

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 4)

    let running = true
    const loop = () => {
      if (!running) return

      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      const itemCenter = rect.top + rect.height / 2
      const viewportCenter = vh / 2
      const falloff = vh * 0.6
      const distance = Math.abs(itemCenter - viewportCenter)
      const raw = 1 - Math.min(distance / falloff, 1)
      const progress = easeOut(raw)
      const scale = 0.95 + progress * 0.07
      const opacity = 0.5 + progress * 0.5

      el.style.transform = `scale(${scale.toFixed(4)})`
      el.style.opacity = opacity.toFixed(4)

      requestAnimationFrame(loop)
    }

    loop()

    return () => {
      running = false
    }
  }, [])

  return (
    <Reveal delay={index * 80}>
      <div
        ref={ref}
        className="card-calm group relative overflow-hidden rounded-2xl border border-border bg-surface/70 p-6 transition-all duration-500 sm:p-8"
        style={{
          transformOrigin: "center center",
          willChange: "transform, opacity",
        }}
      >
        <div className="mb-4 flex items-start gap-4">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-surface-2/60 transition-colors duration-500 group-hover:border-primary/40 group-hover:bg-surface-2/80">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span
              className="absolute -right-1 -top-1 flex h-2 w-2"
              style={{
                animation: "dotPulse 2s ease-in-out infinite",
              }}
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
              <span className="relative h-2 w-2 rounded-full bg-primary/40" />
            </span>
          </div>

          <h3 className="font-serif text-lg leading-tight tracking-tight transition-colors duration-500 group-hover:text-primary sm:text-xl">
            {principle.title}
          </h3>
        </div>

        <p className="ml-14 text-sm leading-relaxed text-muted-foreground transition-all duration-500 group-hover:text-muted-foreground/90 sm:text-base">
          {principle.body}
        </p>

        <div
          className="absolute bottom-0 left-0 h-px bg-primary transition-all duration-500"
          style={{
            width: "0%",
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.width = "24px"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.width = "0%"
          }}
        />

        <style>{`
          @keyframes dotPulse {
            0%, 100% {
              opacity: 0.6;
            }
            50% {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </Reveal>
  )
}
