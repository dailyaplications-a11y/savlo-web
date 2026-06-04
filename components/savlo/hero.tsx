"use client"

import type { Locale } from "@/lib/i18n"
import { EntranceHalo } from "./entrance-halo"
import { PhonePair } from "./phone-pair"
import { AppStoreBadge, GooglePlayBadge } from "./store-badges"

/**
 * Hero - mobile-product focused layout, Cal AI-inspired.
 *
 * Left column: brand pill, editorial headline, short product description,
 *   App Store + Google Play badges.
 * Right column: two tilted phones with floating callout pills and a
 *   hand-drawn arrow illustrating the flow: voice check-in -> insight.
 *
 * The entrance animation ("un respiro") is an assembling dotted halo
 * behind the phones that settles into a slow 4.5s breath - a literal
 * nod to Savlo's mechanic of a one-minute evening check-in.
 */

export function Hero({ locale = "en" }: { locale?: Locale }) {
  const copy =
    locale === "es"
      ? {
          pill: "Finanzas conductuales · modo calma",
          titleFirst: "Conoce Savlo.",
          titleSecond: (
            <>
              Entiende tu dinero{" "}
              <em className="font-normal italic text-primary/90">
                en un minuto
              </em>{" "}
              al día.
            </>
          ),
          description:
            "La app de presupuesto personal diseñada para mirar tu dinero con calma. Un check-in rápido por voz, separación inteligente en Spaces y Sinking Funds, y una racha suave para construir hábitos sin presión ni culpa.",
          note: "Próximamente en iOS y Android · soporte multilingüe nativo.",
        }
      : locale === "pt"
        ? {
            pill: "Finanças comportamentais · modo calmo",
            titleFirst: "Conheça o Savlo.",
            titleSecond: (
              <>
                Entenda seu dinheiro{" "}
                <em className="font-normal italic text-primary/90">
                  em um minuto
                </em>{" "}
                por dia.
              </>
            ),
            description:
              "O app de orçamento pessoal feito para trazer calma. Um check-in rápido por voz, divisão inteligente em Spaces e Sinking Funds, e uma sequência gentil para criar hábitos sem pressão nem culpa.",
            note: "Em breve no iOS e Android · experiência multilíngue nativa.",
          }
        : locale === "de"
          ? {
              pill: "Verhaltensfinanzen · Ruhemodus",
              titleFirst: "Lerne Savlo kennen.",
              titleSecond: (
                <>
                  Verstehe dein Geld{" "}
                  <em className="font-normal italic text-primary/90">
                    in einer Minute
                  </em>{" "}
                  am Tag.
                </>
              ),
              description:
                "Die persönliche Budget-App für mehr Ruhe im Umgang mit Geld. Ein schneller Sprach-Check-in, intelligente Trennung in Spaces und Sinking Funds, und ein sanfter Rhythmus für Gewohnheiten ohne Druck oder Schuld.",
              note: "Bald für iOS und Android · native mehrsprachige Unterstützung.",
            }
          : locale === "fr"
            ? {
                pill: "Finance comportementale \u00b7 mode calme",
                titleFirst: "D\u00e9couvre Savlo.",
                titleSecond: (
                  <>
                    Comprends ton argent{" "}
                    <em className="font-normal italic text-primary/90">
                      en une minute
                    </em>{" "}
                    par jour.
                  </>
                ),
                description:
                  "L'application de budget personnel con\u00e7ue pour plus de s\u00e9r\u00e9nit\u00e9. Un check-in vocal rapide, une s\u00e9paration intelligente en Spaces et Sinking Funds, et un rythme doux pour cr\u00e9er des habitudes sans pression ni culpabilit\u00e9.",
                note:
                  "Bient\u00f4t sur iOS et Android \u00b7 prise en charge multilingue native.",
              }
            : {
                pill: "Behavioral finance · Calm mode",
                titleFirst: "Meet Savlo.",
                titleSecond: (
                  <>
                    Understand your money{" "}
                    <em className="font-normal italic text-primary/90">
                      in one minute
                    </em>{" "}
                    a day.
                  </>
                ),
                description:
                  "The personal budgeting app designed for peace of mind. A fast voice check-in, smart division into separate Spaces and Sinking Funds, and a gentle streak that helps you build financial habits without pressure or guilt.",
                note:
                  "Coming soon to iOS and Android · English & Spanish native support.",
              }

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
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/80 px-3 py-1.5 text-[11px] tracking-wide text-muted-foreground backdrop-blur">
              <span aria-hidden className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {copy.pill}
            </div>

            <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-foreground text-balance sm:text-6xl lg:text-[68px]">
              {copy.titleFirst}{" "}
              <span className="block">{copy.titleSecond}</span>
            </h1>

            <p className="mt-5 max-w-[440px] text-pretty text-[15px] leading-relaxed text-muted-foreground">
              {copy.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <AppStoreBadge locale={locale} />
              <GooglePlayBadge locale={locale} />
            </div>

            <p className="mt-5 text-[12px] text-muted-foreground/80">
              {copy.note}
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
