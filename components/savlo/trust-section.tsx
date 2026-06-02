"use client"

import { useEffect, useRef } from "react"
import type { Locale } from "@/lib/i18n"
import { Reveal } from "./reveal"

type Principle = {
  title: string
  body: string
}

const principlesByLocale: Record<Locale, Principle[]> = {
  en: [
    {
      title: "No ads. Not now, not ever.",
      body:
        "Savlo is positioned as a member-supported product, not an ad-supported one. The public site does not trade your attention for growth tricks.",
    },
    {
      title: "We do not sell your data.",
      body:
        "The landing page is explicit about this: Savlo should not be described as a data-broker or attention-harvesting finance tool.",
    },
    {
      title: "You stay in control of your records.",
      body:
        "The product messaging emphasizes exports, separate Spaces, and a calmer interface that helps you inspect your money without locking you into dark patterns.",
    },
  ],
  es: [
    {
      title: "Sin anuncios. Ni ahora, ni nunca.",
      body:
        "Savlo se presenta como un producto sostenido por sus miembros, no por anuncios. El sitio público no intercambia tu atención por trucos de crecimiento.",
    },
    {
      title: "No vendemos tus datos.",
      body:
        "La landing es explícita en esto: Savlo no debe describirse como una herramienta financiera que comercializa datos o cosecha atención.",
    },
    {
      title: "Tú mantienes control de tus registros.",
      body:
        "El mensaje del producto enfatiza exportaciones, Spaces separados y una interfaz más calma para revisar tu dinero sin encerrarte en patrones oscuros.",
    },
  ],
  pt: [
    {
      title: "Sem anúncios. Agora, nem depois.",
      body:
        "O Savlo é apresentado como um produto sustentado pelos seus membros, não por anúncios. O site público não troca sua atenção por truques de crescimento.",
    },
    {
      title: "Não vendemos seus dados.",
      body:
        "A landing é explícita nisso: o Savlo não deve ser descrito como uma ferramenta financeira que comercializa dados ou captura atenção.",
    },
    {
      title: "Você continua no controle dos seus registros.",
      body:
        "A comunicação do produto enfatiza exportações, Spaces separados e uma interface mais calma para revisar seu dinheiro sem te prender em padrões obscuros.",
    },
  ],
  de: [
    {
      title: "Keine Anzeigen. Jetzt nicht. Nie.",
      body:
        "Savlo wird als von Mitgliedern getragenes Produkt praesentiert, nicht als werbefinanziertes. Die oeffentliche Seite tauscht deine Aufmerksamkeit nicht gegen Wachstums-Tricks ein.",
    },
    {
      title: "Wir verkaufen deine Daten nicht.",
      body:
        "Die Landing Page ist dabei eindeutig: Savlo sollte nicht als Datenhaendler oder Aufmerksamkeits-Magnet fuer Finanzen beschrieben werden.",
    },
    {
      title: "Du behaeltst die Kontrolle ueber deine Aufzeichnungen.",
      body:
        "Die Produktbotschaft betont Exporte, getrennte Spaces und eine ruhigere Oberflaeche, die dir hilft, dein Geld zu pruefen, ohne dich in dunkle Muster einzusperren.",
    },
  ],
}

const copy = {
  en: {
    eyebrow: "Trust, by default",
    heading: "Built quietly, with clear promises.",
    description:
      "Calm design only matters if the product language is honest. These are the promises the public site can stand behind today.",
    metrics: [
      ["Business model", "Member-funded"],
      ["Data policy", "No data selling"],
      ["Control", "Export ready"],
    ],
  },
  es: {
    eyebrow: "Confianza, por defecto",
    heading: "Construido en silencio, con promesas claras.",
    description:
      "El diseño calmado solo importa si el lenguaje del producto es honesto. Estas son las promesas que el sitio público puede sostener hoy.",
    metrics: [
      ["Modelo", "Sostenido por miembros"],
      ["Datos", "No se venden"],
      ["Control", "Listo para exportar"],
    ],
  },
  pt: {
    eyebrow: "Confiança, por padrão",
    heading: "Construído em silêncio, com promessas claras.",
    description:
      "O design calmo só importa se a linguagem do produto for honesta. Estas são as promessas que o site público consegue sustentar hoje.",
    metrics: [
      ["Modelo", "Sustentado por membros"],
      ["Dados", "Sem venda de dados"],
      ["Controle", "Pronto para exportar"],
    ],
  },
  de: {
    eyebrow: "Vertrauen von Anfang an",
    heading: "Still gebaut, mit klaren Zusagen.",
    description:
      "Ruhiges Design zaehlt nur, wenn die Produktsprache ehrlich ist. Das sind die Zusagen, zu denen die oeffentliche Seite heute stehen kann.",
    metrics: [
      ["Geschaeftsmodell", "Von Mitgliedern getragen"],
      ["Datenpolitik", "Kein Datenverkauf"],
      ["Kontrolle", "Exportbereit"],
    ],
  },
} as const

export function TrustSection({ locale = "en" }: { locale?: Locale }) {
  const principles = principlesByLocale[locale]
  const text = copy[locale]

  return (
    <section id="trust" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="mb-16 text-center sm:mb-20">
            <p className="text-xs uppercase tracking-[0.18em] text-primary/80">
              {text.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
              {text.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              {text.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-border/40 pt-8 text-sm sm:gap-12">
              {text.metrics.map(([label, value]) => (
                <Metric key={label} label={label} value={value} />
              ))}
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
  principle: Principle
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
