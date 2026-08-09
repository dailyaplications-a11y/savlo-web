"use client"

import Link from "next/link"
import type { Locale } from "@/lib/i18n"
import { siteConfig } from "@/lib/site"
import { AppStoreBadge, GooglePlayBadge } from "./store-badges"
import { Reveal } from "./reveal"

const copy = {
  en: {
    eyebrow: "Take control today",
    heading: "Your finances. Under control.",
    description:
      "Download Savlo and start tracking your money in under a minute — voice, text, or both.",
    explore: "Prefer to explore first?",
    guide: "Start with the budget guide",
    guideHref: "/blog/how-to-make-a-budget",
    contact: "Questions?",
    contactEmail: siteConfig.supportEmail,
  },
  es: {
    eyebrow: "Toma el control hoy",
    heading: "Tus finanzas. Bajo control.",
    description:
      "Descarga Savlo y empezá a registrar tu dinero en menos de un minuto — por voz, texto o los dos.",
    explore: "¿Querés explorar primero?",
    guide: "Empezá con la guía de presupuesto",
    guideHref: "/es/blog/how-to-make-a-budget",
    contact: "¿Preguntas?",
    contactEmail: siteConfig.supportEmail,
  },
  pt: {
    eyebrow: "Assuma o controle hoje",
    heading: "Suas finanças. Sob controle.",
    description:
      "Baixe o Savlo e comece a registrar seu dinheiro em menos de um minuto — por voz, texto ou os dois.",
    explore: "Prefere explorar primeiro?",
    guide: "Comece com o guia de orçamento",
    guideHref: "/pt/blog/how-to-make-a-budget",
    contact: "Dúvidas?",
    contactEmail: siteConfig.supportEmail,
  },
  de: {
    eyebrow: "Übernimm heute die Kontrolle",
    heading: "Deine Finanzen. Unter Kontrolle.",
    description:
      "Lade Savlo herunter und fang an, dein Geld in unter einer Minute zu verfolgen — per Sprache, Text oder beides.",
    explore: "Lieber erst stöbern?",
    guide: "Starte mit dem Budget-Leitfaden",
    guideHref: "/de/blog/how-to-make-a-budget",
    contact: "Fragen?",
    contactEmail: siteConfig.supportEmail,
  },
  fr: {
    eyebrow: "Prends le contrôle aujourd'hui",
    heading: "Tes finances. Sous contrôle.",
    description:
      "Télécharge Savlo et commence à suivre ton argent en moins d'une minute — par la voix, le texte ou les deux.",
    explore: "Tu préfères commencer par les guides ?",
    guide: "Commence par le guide budget",
    guideHref: "/fr/blog/how-to-make-a-budget",
    contact: "Des questions ?",
    contactEmail: siteConfig.supportEmail,
  },
} as const

export function CtaSection({ locale = "en" }: { locale?: Locale }) {
  const text = copy[locale]

  return (
    <section id="cta" className="relative py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[420px] max-w-3xl -translate-y-1/2 opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(520px 260px at 50% 50%, color-mix(in oklch, var(--primary) 22%, transparent), transparent 60%), radial-gradient(400px 220px at 70% 50%, color-mix(in oklch, var(--accent) 12%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-primary/80">
            {text.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
            {text.heading}
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-5 max-w-md text-pretty text-muted-foreground">
            {text.description}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-10 flex flex-wrap items-start justify-center gap-4">
            <AppStoreBadge locale={locale} />
            <GooglePlayBadge locale={locale} />
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-8 flex flex-col items-center gap-2 text-xs text-muted-foreground">
            <p>
              {text.explore}{" "}
              <Link
                href={text.guideHref}
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                {text.guide}
              </Link>
            </p>
            <p>
              {text.contact}{" "}
              <a
                href={`mailto:${text.contactEmail}`}
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                {text.contactEmail}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
