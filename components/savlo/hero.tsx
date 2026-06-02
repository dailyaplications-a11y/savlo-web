"use client"

import type { Locale } from "@/lib/i18n"
import { EntranceHalo } from "./entrance-halo"
import { PhonePair } from "./phone-pair"
import { AppStoreBadge, GooglePlayBadge } from "./store-badges"

/**
 * Hero — mobile-product focused layout, Cal AI-inspired.
 *
 * Left column: brand pill, editorial headline, short product description,
 *   App Store + Google Play badges.
 * Right column: two tilted phones with floating callout pills and a
 *   hand-drawn arrow illustrating the flow: voice check-in -> insight.
 *
 * The entrance animation ("un respiro") is an assembling dotted halo
 * behind the phones that settles into a slow 4.5s breath — a literal
 * nod to Savlo's mechanic of a one-minute evening check-in.
 */

export function Hero({ locale = "en" }: { locale?: Locale }) {
  const isSpanish = locale === "es"

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28"
    >
      {/* Ambient background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 960px 520px at 62% 42%, color-mix(in oklch, var(--primary) 6%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="relative z-10 lg:col-span-5">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/80 px-3 py-1.5 text-[11px] tracking-wide text-muted-foreground backdrop-blur"
            >
              <span
                aria-hidden
                className="relative flex h-1.5 w-1.5"
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {isSpanish
                ? "Finanzas conductuales · modo calma"
                : "Behavioral finance · Calm mode"}
            </div>

            <h1
              className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-foreground text-balance sm:text-6xl lg:text-[68px]"
            >
              {isSpanish ? (
                <>
                  Conoce Savlo.{" "}
                  <span className="block">
                    Entiende tu dinero{" "}
                    <em className="font-normal italic text-primary/90">
                      en un minuto
                    </em>{" "}
                    al día.
                  </span>
                </>
              ) : (
                <>
                  Meet Savlo.{" "}
                  <span className="block">
                    Understand your money{" "}
                    <em className="font-normal italic text-primary/90">
                      in one minute
                    </em>{" "}
                    a day.
                  </span>
                </>
              )}
            </h1>

            <p
              className="mt-5 max-w-[440px] text-pretty text-[15px] leading-relaxed text-muted-foreground"
            >
              {isSpanish
                ? "La app de presupuesto personal diseñada para mirar tu dinero con calma. Un check-in rápido por voz, separación inteligente en Spaces y Sinking Funds, y una racha suave para construir hábitos sin presión ni culpa."
                : "The personal budgeting app designed for peace of mind. A fast voice check-in, smart division into separate Spaces and Sinking Funds, and a gentle streak that helps you build financial habits without pressure or guilt."}
            </p>

            <div
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>

            <p
              className="mt-5 text-[12px] text-muted-foreground/80"
            >
              {isSpanish
                ? "Próximamente en iOS y Android · soporte nativo en español e inglés."
                : "Coming soon to iOS and Android · English & Spanish native support."}
            </p>
          </div>
          <div className="relative lg:col-span-7">
            <EntranceHalo />
            <div className="relative z-10">
              <PhonePair locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
