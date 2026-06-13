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
          pill: "Control y manejo diario · en minutos",
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
            "La app que convierte el control financiero en un hábito diario rápido. Registra movimientos por voz o texto, organiza tu dinero en cuentas independientes y mantén tus gastos bajo control sin perder tiempo.",
          note: "Próximamente en iOS y Android · soporte multilingüe nativo.",
        }
      : locale === "pt"
        ? {
            pill: "Controle e gestão diária · em minutos",
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
              "O app que transforma o controle financeiro em um hábito diário rápido. Registre movimentos por voz ou texto, organize seu dinheiro em contas independentes e mantenha seus gastos sob controle sem perder tempo.",
            note: "Em breve no iOS e Android · experiência multilíngue nativa.",
          }
        : locale === "de"
          ? {
              pill: "Tägliche Finanzkontrolle · in Minuten",
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
                "Die App, die die Finanzkontrolle in eine schnelle tägliche Gewohnheit verwandelt. Erfassen Sie Ausgaben per Sprache oder Text, organisieren Sie Geld auf unabhängigen Konten und behalten Sie Ihre Ausgaben ohne Zeitverlust im Griff.",
              note: "Bald für iOS und Android · native mehrsprachige Unterstützung.",
            }
          : locale === "fr"
            ? {
                pill: "Contrôle et gestion quotidienne · en minutes",
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
                  "L'application qui transforme le contrôle financier en une habitude quotidienne rapide. Enregistrez vos mouvements par voix ou par texte, organisez votre argent sur des comptes indépendants et gardez vos dépenses sous contrôle sans perdre de temps.",
                note:
                  "Bient\u00f4t sur iOS et Android \u00b7 prise en charge multilingue native.",
              }
            : {
                pill: "Daily control · In minutes",
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
                  "The app that turns personal finance control into a quick daily habit. Log your transactions via voice or text, organize your money in independent accounts, and keep your spending under control without wasting time.",
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
