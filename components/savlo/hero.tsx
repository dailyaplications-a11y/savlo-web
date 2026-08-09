"use client"

import Image from "next/image"
import type { Locale } from "@/lib/i18n"
import { AppStoreBadge, GooglePlayBadge } from "./store-badges"

const copy: Record<Locale, {
  line1: string
  line2: string
  description: string
}> = {
  es: {
    line1: "Convierte el control de tus finanzas personales",
    line2: "en un hábito diario.",
    description:
      "Habla o escribe lo que gastas — Savlo lo clasifica al instante, organiza tus cuentas y te muestra el panorama real de tu dinero. Sin planillas, sin complicaciones.",
  },
  en: {
    line1: "Turn managing your personal finances",
    line2: "into a daily habit.",
    description:
      "Speak or type what you spend — Savlo classifies it instantly, organizes your accounts and shows you the real picture of your money. No spreadsheets, no hassle.",
  },
  pt: {
    line1: "Transforme o controle das suas finanças pessoais",
    line2: "em um hábito diário.",
    description:
      "Fale ou escreva o que gastou — o Savlo classifica na hora, organiza suas contas e mostra o panorama real do seu dinheiro. Sem planilhas, sem complicações.",
  },
  de: {
    line1: "Mach die Kontrolle über deine persönlichen Finanzen",
    line2: "zur täglichen Gewohnheit.",
    description:
      "Sprich oder tippe deine Ausgaben — Savlo kategorisiert sofort, organisiert deine Konten und zeigt dir das echte Bild deiner Finanzen. Ohne Tabellen, ohne Aufwand.",
  },
  fr: {
    line1: "Fais du contrôle de tes finances personnelles",
    line2: "une habitude quotidienne.",
    description:
      "Parle ou écris tes dépenses — Savlo les classe instantanément, organise tes comptes et te montre la vraie image de ton argent. Sans tableurs, sans complications.",
  },
}

export function Hero({ locale = "en" }: { locale?: Locale }) {
  const c = copy[locale] ?? copy.en

  return (
    <section
      id="hero"
      className="relative overflow-x-hidden pt-20 pb-16 sm:pt-24 sm:pb-20"
    >
      {/* Subtle ambient wash behind phone */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 800px 600px at 72% 44%, color-mix(in oklch, var(--primary) 7%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-4">
          {/* ── Left — text ─────────────────────────────────── */}
          <div className="relative z-10 pb-8 lg:col-span-5 lg:pb-0">
            {/* Headline */}
            <h1 className="mt-6 font-serif text-5xl leading-[1.04] tracking-tight text-foreground text-balance sm:text-6xl lg:text-[62px]">
              {c.line1}
              <br />
              <em className="font-normal italic text-primary/90">{c.line2}</em>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-[420px] text-pretty text-[15px] leading-relaxed text-muted-foreground">
              {c.description}
            </p>

            {/* Store badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AppStoreBadge locale={locale} />
              <GooglePlayBadge locale={locale} />
            </div>
          </div>

          {/* ── Right — single large phone ───────────────────── */}
          <div className="relative flex justify-center lg:col-span-7 lg:justify-end">
            <HeroPhone />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroPhone() {
  return (
    <div className="relative w-[230px] sm:w-[250px] lg:w-[270px]">
      {/* Glow behind phone */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-20 opacity-55 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 420px 620px at 50% 35%, color-mix(in oklch, var(--primary) 20%, transparent), transparent 62%)",
        }}
      />

      {/* Samsung Galaxy A25 5G frame — 1080×2340 (19.5:9) */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: "1080 / 2340",
          borderRadius: "40px",
          border: "9px solid #08111e",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.07), 0 48px 96px -24px rgba(0,0,0,0.75), 0 16px 40px -10px rgba(0,0,0,0.55)",
        }}
      >
        {/* Punch-hole camera — Samsung Galaxy A25 center top */}
        <div
          aria-hidden
          className="absolute left-1/2 top-3 z-10 h-[11px] w-[11px] -translate-x-1/2 rounded-full bg-black"
        />

        <Image
          src="/app_screen_today.png"
          alt="Savlo — pantalla principal"
          fill
          className="object-cover object-top"
          priority
          fetchPriority="high"
          sizes="(min-width: 1024px) 370px, (min-width: 640px) 330px, 290px"
        />

        {/* Gradient fade at bottom */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-44"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, var(--background) 100%)",
          }}
        />
      </div>
    </div>
  )
}
