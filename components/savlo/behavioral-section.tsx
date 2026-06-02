import type { Locale } from "@/lib/i18n"
import { Reveal } from "./reveal"

type Tenet = {
  caption: string
  title: string
  body: string
  Motif: React.ComponentType
}

const tenetsByLocale: Record<Locale, Tenet[]> = {
  en: [
    {
      caption: "GENTLE STREAKS",
      title: "Gentle habits, zero guilt.",
      body:
        "A supportive daily check-in to build lasting habits, with no anxiety-inducing red notifications or penalization. Your money deserves a steadier tone.",
      Motif: EmberMotif,
    },
    {
      caption: "OBSERVE FIRST",
      title: "Observe today, decide tomorrow.",
      body:
        "Savlo surfaces patterns the way a high-quality notebook would - quietly, and only when you open it.",
      Motif: RippleMotif,
    },
    {
      caption: "COMPOUND SLOWLY",
      title: "Small changes, compounded.",
      body:
        "We celebrate consistency, not willpower. A single mindful swap is worth more than a month of severe restriction.",
      Motif: SpiralMotif,
    },
    {
      caption: "YOU DECIDE",
      title: "You stay in charge.",
      body:
        "Your spaces, your savings goals, and your definitions. Savlo is a mirror, not a coach.",
      Motif: ReticleMotif,
    },
  ],
  es: [
    {
      caption: "RACHAS SUAVES",
      title: "Hábitos suaves, cero culpa.",
      body:
        "Un check-in diario de apoyo para construir hábitos duraderos, sin notificaciones rojas que generen ansiedad ni penalizaciones. Tu dinero merece un tono más estable.",
      Motif: EmberMotif,
    },
    {
      caption: "OBSERVA PRIMERO",
      title: "Observa hoy, decide mañana.",
      body:
        "Savlo muestra patrones como lo haría un buen cuaderno: en silencio, y solo cuando lo abres.",
      Motif: RippleMotif,
    },
    {
      caption: "COMPONER DESPACIO",
      title: "Cambios pequeños, acumulados.",
      body:
        "Celebramos la constancia, no la fuerza de voluntad. Un intercambio consciente vale más que un mes de restricción severa.",
      Motif: SpiralMotif,
    },
    {
      caption: "TÚ DECIDES",
      title: "Tú sigues a cargo.",
      body:
        "Tus espacios, tus metas de ahorro y tus definiciones. Savlo es un espejo, no un coach.",
      Motif: ReticleMotif,
    },
  ],
  pt: [
    {
      caption: "SEQUÊNCIAS GENTIS",
      title: "Hábitos gentis, zero culpa.",
      body:
        "Um check-in diário de apoio para construir hábitos duradouros, sem notificações vermelhas que gerem ansiedade nem penalizações. Seu dinheiro merece um tom mais estável.",
      Motif: EmberMotif,
    },
    {
      caption: "OBSERVE PRIMEIRO",
      title: "Observe hoje, decida amanhã.",
      body:
        "O Savlo mostra padrões como um bom caderno mostraria: em silêncio, e só quando você abre.",
      Motif: RippleMotif,
    },
    {
      caption: "COMPOSTO DEVAGAR",
      title: "Pequenas mudanças, acumuladas.",
      body:
        "Celebramos a constância, não a força de vontade. Uma única troca consciente vale mais do que um mês de restrição severa.",
      Motif: SpiralMotif,
    },
    {
      caption: "VOCÊ DECIDE",
      title: "Você continua no comando.",
      body:
        "Seus espaços, suas metas de poupança e suas definições. O Savlo é um espelho, não um coach.",
      Motif: ReticleMotif,
    },
  ],
}

const copy = {
  en: {
    eyebrow: "Our philosophy",
    firstLine: "We don't judge your spending.",
    emphasis: "We help you understand it.",
    description:
      "Most money apps treat every dollar as a test you're failing. Savlo is built on behavioral finance research: awareness, not pressure, is what creates lasting change. So we show you the shape of your habits - and then we step back.",
  },
  es: {
    eyebrow: "Nuestra filosofía",
    firstLine: "No juzgamos tus gastos.",
    emphasis: "Te ayudamos a entenderlos.",
    description:
      "La mayoría de las apps de dinero tratan cada dólar como una prueba que estás fallando. Savlo se apoya en finanzas conductuales: la conciencia, no la presión, es lo que crea cambios duraderos. Te mostramos la forma de tus hábitos y luego damos un paso atrás.",
  },
  pt: {
    eyebrow: "Nossa filosofia",
    firstLine: "Não julgamos seus gastos.",
    emphasis: "Ajudamos você a entendê-los.",
    description:
      "A maioria dos apps de dinheiro trata cada real como uma prova que você está perdendo. O Savlo foi construído com base em finanças comportamentais: consciência, não pressão, é o que cria mudança duradoura. Então mostramos a forma dos seus hábitos e depois damos um passo atrás.",
  },
} as const

export function BehavioralSection({ locale = "en" }: { locale?: Locale }) {
  const tenets = tenetsByLocale[locale]
  const text = copy[locale]

  return (
    <section id="philosophy" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[360px] max-w-4xl -translate-y-1/2 opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(500px 240px at 50% 50%, color-mix(in oklch, var(--primary) 16%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-baseline gap-3">
            <span className="h-px w-10 bg-primary/60" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-primary/80">
              {text.eyebrow}
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
            {text.firstLine}
            <br />
            <span className="text-primary/90 italic">{text.emphasis}</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {text.description}
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {tenets.map((t, i) => (
            <Reveal key={t.title} delay={220 + i * 80}>
              <TenetFrame tenet={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function TenetFrame({ tenet }: { tenet: Tenet }) {
  const { Motif, caption, title, body } = tenet
  return (
    <figure className="flex flex-col items-center text-center">
      <div className="relative w-full max-w-[260px] aspect-square">
        <CornerBrackets />
        <div className="absolute inset-4 flex items-center justify-center">
          <Motif />
        </div>
      </div>

      <figcaption className="mt-8 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        {caption}
      </figcaption>

      <span aria-hidden className="mt-5 block h-px w-12 bg-border" />

      <h3 className="mt-5 font-serif text-lg leading-snug tracking-tight text-foreground text-pretty">
        {title}
      </h3>
      <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-muted-foreground text-pretty">
        {body}
      </p>
    </figure>
  )
}

function CornerBrackets() {
  const stroke = "color-mix(in oklch, var(--muted-foreground) 70%, transparent)"
  const common = "absolute h-5 w-5 border-[color:var(--bracket)]"
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{ ["--bracket" as string]: stroke }}
    >
      <span className={`${common} left-0 top-0 border-l border-t`} />
      <span className={`${common} right-0 top-0 border-r border-t`} />
      <span className={`${common} left-0 bottom-0 border-l border-b`} />
      <span className={`${common} right-0 bottom-0 border-r border-b`} />
    </div>
  )
}

function MotifSvg({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full"
      role="img"
      aria-hidden
    >
      {children}
    </svg>
  )
}

function EmberMotif() {
  return (
    <MotifSvg>
      <defs>
        <radialGradient id="ember-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.55" />
          <stop offset="45%" stopColor="var(--primary)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#ember-halo)" />
      <g
        stroke="color-mix(in oklch, var(--muted-foreground) 40%, transparent)"
        strokeWidth="1"
        strokeLinecap="round"
      >
        <path d="M 42 100 L 58 100" />
        <path d="M 142 100 L 158 100" />
      </g>
      <circle cx="100" cy="100" r="6" fill="var(--primary)" opacity="0.9" />
      <circle
        cx="100"
        cy="100"
        r="16"
        fill="none"
        stroke="color-mix(in oklch, var(--primary) 50%, transparent)"
        strokeWidth="1"
      />
    </MotifSvg>
  )
}

function RippleMotif() {
  return (
    <MotifSvg>
      {[12, 28, 48, 70, 90].map((r, i) => (
        <circle
          key={r}
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="color-mix(in oklch, var(--primary) 55%, transparent)"
          strokeWidth="1"
          opacity={0.85 - i * 0.15}
        />
      ))}
      <circle cx="100" cy="100" r="4" fill="var(--primary)" />
      <line
        x1="10"
        x2="190"
        y1="100"
        y2="100"
        stroke="color-mix(in oklch, var(--border) 70%, transparent)"
        strokeWidth="1"
        strokeDasharray="2 5"
      />
    </MotifSvg>
  )
}

function SpiralMotif() {
  const dots: { cx: number; cy: number; r: number; o: number }[] = []
  const cx = 100
  const cy = 100
  const turns = 2.2
  const total = 18
  for (let i = 0; i < total; i++) {
    const t = i / total
    const angle = t * turns * Math.PI * 2
    const radius = 6 + t * 72
    const x = cx + Math.cos(angle) * radius
    const y = cy + Math.sin(angle) * radius
    dots.push({
      cx: x,
      cy: y,
      r: 1.2 + t * 3.8,
      o: 0.25 + t * 0.75,
    })
  }
  return (
    <MotifSvg>
      <path
        d={(() => {
          let d = ""
          for (let i = 0; i < 120; i++) {
            const t = i / 120
            const angle = t * turns * Math.PI * 2
            const radius = 6 + t * 72
            const x = cx + Math.cos(angle) * radius
            const y = cy + Math.sin(angle) * radius
            d += (i === 0 ? "M " : "L ") + x.toFixed(2) + " " + y.toFixed(2) + " "
          }
          return d
        })()}
        fill="none"
        stroke="color-mix(in oklch, var(--primary) 30%, transparent)"
        strokeWidth="0.8"
      />
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill="var(--primary)"
          opacity={d.o}
        />
      ))}
    </MotifSvg>
  )
}

function ReticleMotif() {
  return (
    <MotifSvg>
      <circle
        cx="100"
        cy="100"
        r="72"
        fill="none"
        stroke="color-mix(in oklch, var(--primary) 60%, transparent)"
        strokeWidth="1"
      />
      <circle
        cx="100"
        cy="100"
        r="48"
        fill="none"
        stroke="color-mix(in oklch, var(--primary) 40%, transparent)"
        strokeWidth="1"
        strokeDasharray="3 5"
      />
      <circle
        cx="100"
        cy="100"
        r="10"
        fill="color-mix(in oklch, var(--primary) 20%, transparent)"
        stroke="var(--primary)"
        strokeWidth="1"
      />
      <line
        x1="100"
        x2="100"
        y1="16"
        y2="40"
        stroke="color-mix(in oklch, var(--muted-foreground) 80%, transparent)"
        strokeWidth="1"
      />
      <line
        x1="100"
        x2="100"
        y1="160"
        y2="184"
        stroke="color-mix(in oklch, var(--muted-foreground) 80%, transparent)"
        strokeWidth="1"
      />
      <line
        x1="16"
        x2="40"
        y1="100"
        y2="100"
        stroke="color-mix(in oklch, var(--muted-foreground) 80%, transparent)"
        strokeWidth="1"
      />
      <line
        x1="160"
        x2="184"
        y1="100"
        y2="100"
        stroke="color-mix(in oklch, var(--muted-foreground) 80%, transparent)"
        strokeWidth="1"
      />
      <circle cx="100" cy="100" r="2.5" fill="var(--primary)" />
    </MotifSvg>
  )
}
