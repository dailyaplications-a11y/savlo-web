"use client"

import Image from "next/image"
import type { ReactNode } from "react"
import type { Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

/**
 * Cal AI-style phone pair: two tilted phones (back & front) with
 * floating callout pills and a hand-drawn curvy arrow connecting them.
 *
 * Left phone: the daily voice check-in.
 * Right phone: Savlo's response — insight + fondo + micro-plan.
 */

export function PhonePair({ locale = "en" }: { locale?: Locale }) {
  const copy =
    locale === "es"
      ? {
          voice: "Voz en español e inglés",
          calm: "Modo calma",
          fund: "Fondo vacaciones",
          today: "+$12 hoy",
          plan: "Plan suave",
        }
      : {
          voice: "Spanish & English voice",
          calm: "Calm mode",
          fund: "Vacation fund",
          today: "+$12 today",
          plan: "Gentle plan",
        }

  return (
    <div className="relative mx-auto h-[580px] w-full max-w-[640px] sm:h-[640px]">
      {/* Connecting hand-drawn arrow */}
      <CurvyArrow />

      {/* Left phone — Daily check-in (voice) */}
      <div
        className="absolute left-0 top-10 sm:left-4 sm:top-8"
        style={{
          transformOrigin: "60% 60%",
        }}
      >
        <PhoneFrame rotate="-7deg" fullBleed>
          <Image
            src="/app_screen_today.png"
            width={1440}
            height={3120}
            sizes="(min-width: 640px) 260px, 244px"
            className="h-full w-full object-cover select-none"
            alt="Savlo Today Screen"
            priority
            fetchPriority="high"
            decoding="async"
          />
        </PhoneFrame>

        <Callout className="-left-6 top-14">
          <Dot className="bg-primary" /> {copy.voice}
        </Callout>
        <Callout className="-bottom-2 left-10">
          {copy.calm}
        </Callout>
      </div>

      {/* Right phone — Savlo response */}
      <div
        className="absolute right-0 top-0 sm:right-2"
        style={{
          transformOrigin: "40% 60%",
        }}
      >
        <PhoneFrame rotate="6deg" fullBleed>
          <Image
            src="/app_screen_funds.png"
            width={1440}
            height={3120}
            sizes="(min-width: 640px) 260px, 244px"
            className="h-full w-full object-cover select-none"
            alt="Savlo Funds Screen"
            loading="eager"
            decoding="async"
          />
        </PhoneFrame>

        <Callout className="-right-2 top-6 sm:-right-6">
          <Dot className="bg-warning" /> {copy.fund}
        </Callout>
        <Callout className="bottom-20 -right-4 sm:-right-10">
          {copy.today}
        </Callout>
        <Callout className="bottom-2 right-14">
          <Dot className="bg-primary" /> {copy.plan}
        </Callout>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Phone frame                                                         */
/* ------------------------------------------------------------------ */

function PhoneFrame({
  children,
  rotate,
  fullBleed = false,
}: {
  children: ReactNode
  rotate: string
  fullBleed?: boolean
}) {
  return (
    <div
      className="relative h-[500px] w-[244px] sm:h-[540px] sm:w-[260px]"
      style={{ transform: `rotate(${rotate})` }}
    >
      {/* Outer shell */}
      <div
        className="absolute inset-0 rounded-[44px] border border-white/10 bg-surface-2 p-[5px]"
        style={{
          boxShadow:
            "0 36px 80px -32px rgba(0,0,0,0.55), 0 8px 24px -8px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-background">
          {!fullBleed && (
            <>
              {/* Status bar */}
              <div className="flex items-center justify-between px-6 pt-3 text-[10px] font-medium tabular-nums text-foreground/70">
                <span>9:41</span>
                <span className="inline-flex items-center gap-1">
                  <span className="inline-block h-1 w-1 rounded-full bg-foreground/70" />
                  <span className="inline-block h-1 w-1.5 rounded-full bg-foreground/70" />
                  <span className="inline-block h-1 w-2 rounded-full bg-foreground/70" />
                </span>
              </div>
              {/* Dynamic-island-ish pill */}
              <div
                aria-hidden
                className="absolute left-1/2 top-1.5 h-5 w-[82px] -translate-x-1/2 rounded-full bg-black"
              />
            </>
          )}
          {/* Content */}
          <div className={fullBleed ? "absolute inset-0" : "absolute inset-0 px-4 pt-9 pb-6"}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Screen 1 — daily voice check-in                                    */
/* ------------------------------------------------------------------ */

function CheckinScreen() {
  return (
    <div className="relative flex h-full flex-col">
      <div className="mt-2">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Tuesday · check-in
        </p>
        <h3 className="mt-1 font-serif text-[20px] leading-tight text-foreground">
          How was your day?
        </h3>
      </div>

      {/* Mic with pulse ring */}
      <div className="mt-8 flex flex-col items-center">
        <div className="relative">
          <span
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              animation:
                "micPulse 1800ms cubic-bezier(0.4, 0, 0.4, 1) 1400ms infinite",
            }}
          />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_0_6px_color-mix(in_oklch,var(--primary)_18%,transparent)]">
            <MicIcon />
          </div>
        </div>
        <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-primary">
          Listening
        </p>
      </div>

      {/* Waveform */}
      <div className="mt-4 flex h-10 items-end justify-center gap-[3px]">
        {Array.from({ length: 22 }).map((_, i) => {
          const env = Math.sin((i / 22) * Math.PI) * 0.85 + 0.15
          return (
            <span
              key={i}
              className="w-[3px] origin-bottom rounded-full bg-primary/80"
              style={{
                height: `${Math.round(env * 34)}px`,
                animation: `waveBar 900ms ease-in-out ${i * 60}ms infinite`,
                transformOrigin: "50% 100%",
              }}
            />
          )
        })}
      </div>

      {/* Live transcript */}
      <div className="mt-4 rounded-2xl border border-border/60 bg-surface px-4 py-3">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Live Transcript
        </p>
        <p className="mt-1.5 text-[13px] leading-snug text-foreground">
          &ldquo;Cinco cincuenta en un café con leche
          <span
            aria-hidden
            className="ml-0.5 inline-block h-3 w-[1.5px] translate-y-[1px] bg-foreground align-middle"
            style={{ animation: "caretBlink 900ms steps(2) infinite" }}
          />
          &rdquo;
        </p>
      </div>

      <div className="mt-auto flex items-center justify-center gap-1 text-[10px] tracking-[0.2em] text-muted-foreground">
        <span>HOLD TO SPEAK</span>
      </div>
    </div>
  )
}

function MicIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Screen 2 — Savlo reflection / response                             */
/* ------------------------------------------------------------------ */

function ReflectionScreen() {
  return (
    <div className="flex h-full flex-col">
      <div className="mt-2">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Today's reflection
        </p>
        <h3 className="mt-1 font-serif text-[20px] leading-tight text-foreground">
          A calm{" "}
          <em className="font-normal italic text-primary/90">day.</em>
        </h3>
      </div>

      {/* Expense card (committed from voice) */}
      <div className="mt-4 rounded-2xl border border-border/60 bg-surface px-4 py-3">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>Voice expense</span>
          <span>now</span>
        </div>
        <div className="mt-2 flex items-end justify-between">
          <div>
            <p className="text-[13px] text-foreground">Latte</p>
            <p className="text-[11px] text-muted-foreground">
              Food & drink
            </p>
          </div>
          <p className="font-serif text-[22px] tabular-nums text-foreground">
            $5.50
          </p>
        </div>
      </div>

      {/* Fondo progress */}
      <div className="mt-3 rounded-2xl border border-border/60 bg-surface px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Fund · Vacation
            </p>
            <p className="mt-1 font-serif text-[16px] text-foreground">
              $412 <span className="text-muted-foreground">of $600</span>
            </p>
          </div>
          <FondoRing percent={68} />
        </div>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-border/60">
          <div
            className="h-full rounded-full bg-primary"
            style={{
              width: "68%",
              animation: "fadeIn 1000ms ease-out 1600ms both",
              transformOrigin: "left",
            }}
          />
        </div>
      </div>

      {/* Micro-plan */}
      <div className="mt-auto rounded-2xl border border-border/60 bg-surface px-4 py-3">
        <div className="flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-semibold">
            Tomorrow's plan
          </p>
          <img src="/savlo_ai_icon.svg" className="h-4.5 w-4.5 opacity-90 object-contain" alt="Savlo AI" />
        </div>
        <p className="mt-1.5 font-serif text-[14px] leading-snug text-foreground">
          <em className="italic">A glass of water</em> with lunch instead of soda.
        </p>
        <div className="mt-3 flex items-center gap-2 text-[10px] text-muted-foreground">
          <span className="inline-block h-1 w-1 rounded-full bg-primary" />
          A small change. No pressure.
        </div>
      </div>
    </div>
  )
}

function FondoRing({ percent }: { percent: number }) {
  const r = 18
  const c = 2 * Math.PI * r
  const offset = c * (1 - percent / 100)
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" aria-hidden>
      <circle
        cx="26"
        cy="26"
        r={r}
        fill="none"
        stroke="color-mix(in oklch, var(--primary) 15%, transparent)"
        strokeWidth="3"
      />
      <circle
        cx="26"
        cy="26"
        r={r}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
        transform="rotate(-90 26 26)"
        style={{
          animation: "fadeIn 800ms ease-out 1600ms both",
        }}
      />
      <text
        x="26"
        y="29"
        textAnchor="middle"
        fontSize="10"
        fill="currentColor"
        className="fill-foreground font-sans tabular-nums"
      >
        {percent}%
      </text>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Hand-drawn arrow between phones                                    */
/* ------------------------------------------------------------------ */

function CurvyArrow() {
  return (
    <svg
      viewBox="0 0 640 640"
      className="pointer-events-none absolute left-1/2 top-1/2 z-[5] hidden h-[440px] w-[300px] -translate-x-1/2 -translate-y-1/2 sm:block"
      fill="none"
      aria-hidden
    >
      <path
        d="M60 220 C 140 260, 170 360, 230 380 S 360 360, 440 300 S 560 200, 600 180"
        stroke="color-mix(in oklch, var(--muted-foreground) 80%, transparent)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="260"
        strokeDashoffset="260"
        fill="none"
        style={{
          animation:
            "arrowDraw 1800ms cubic-bezier(0.65, 0.05, 0.36, 1) 2000ms forwards",
        }}
      />
      {/* Arrow head */}
      <g
        style={{
          opacity: 0,
          animation: "fadeIn 600ms ease-out 3600ms forwards",
        }}
      >
        <path
          d="M594 172 L602 182 L592 188"
          stroke="color-mix(in oklch, var(--muted-foreground) 80%, transparent)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Callout pill                                                       */
/* ------------------------------------------------------------------ */

function Callout({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "absolute z-10 inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-surface px-3 py-1.5 text-[11px] tracking-tight text-foreground shadow-lg shadow-black/30 backdrop-blur",
        className,
      )}
    >
      {children}
    </span>
  )
}

function Dot({ className }: { className?: string }) {
  return (
    <span className={cn("h-1.5 w-1.5 rounded-full", className)} aria-hidden />
  )
}
