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
      caption: "CONTROL STREAKS",
      title: "Daily habit, total control.",
      body:
        "Log your transactions easily every day. Our streak system motivates you to keep your accounts updated consistently and in just a few minutes.",
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
        "Your accounts, your savings goals, and your definitions. Savlo is a mirror, not a coach.",
      Motif: ReticleMotif,
    },
  ],
  es: [
    {
      caption: "RACHAS DE CONTROL",
      title: "Hábito diario, control total.",
      body:
        "Registra tus movimientos diariamente de forma fácil. Nuestro sistema de rachas te motiva a mantener tus cuentas al día de manera constante y en pocos minutos.",
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
        "Tus cuentas, tus metas de ahorro y tus definiciones. Savlo es un espejo, no un coach.",
      Motif: ReticleMotif,
    },
  ],
  pt: [
    {
      caption: "SEQUÊNCIAS DE CONTROLE",
      title: "Hábito diário, controle total.",
      body:
        "Registre seus movimentos diariamente de forma fácil. Nosso sistema de sequências motiva você a manter suas contas em dia de maneira constante e em poucos minutos.",
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
        "Suas contas, suas metas de poupança e suas definições. O Savlo é um espelho, não um coach.",
      Motif: ReticleMotif,
    },
  ],
  de: [
    {
      caption: "KONTROLL-ROUTINEN",
      title: "Tägliche Gewohnheit, volle Kontrolle.",
      body:
        "Erfassen Sie Ihre Bewegungen täglich ganz einfach. Unser Streak-System motiviert Sie, Ihre Konten konsistent und in wenigen Minuten auf dem neuesten Stand zu halten.",
      Motif: EmberMotif,
    },
    {
      caption: "ZUERST BEOBACHTEN",
      title: "Heute beobachten, morgen entscheiden.",
      body:
        "Savlo zeigt Muster so, wie es ein hochwertiges Notizbuch tun wuerde - leise, und nur wenn du es oeffnest.",
      Motif: RippleMotif,
    },
    {
      caption: "LANGSAM KUMULIEREN",
      title: "Kleine Aenderungen, die sich summieren.",
      body:
        "Wir feiern Konstanz, nicht Willenskraft. Ein einziger bewusster Tausch ist mehr wert als ein Monat harter Einschraenkung.",
      Motif: SpiralMotif,
    },
    {
      caption: "DU ENTSCHEIDEST",
      title: "Du behaeltst die Kontrolle.",
      body:
        "Deine Konten, deine Sparziele und deine Definitionen. Savlo ist ein Spiegel, kein Coach.",
      Motif: ReticleMotif,
    },
  ],
  fr: [
    {
      caption: "SÉRIES DE CONTRÔLE",
      title: "Habitude quotidienne, contrôle total.",
      body:
        "Enregistrez facilement vos mouvements au quotidien. Notre système de séries vous motive à tenir vos comptes à jour de manière constante et en quelques minutes.",
      Motif: EmberMotif,
    },
    {
      caption: "OBSERVER D'ABORD",
      title: "Observer aujourd'hui, décider demain.",
      body:
        "Savlo révèle les schémas comme le ferait un bon carnet: en silence, et seulement quand tu l'ouvres.",
      Motif: RippleMotif,
    },
    {
      caption: "ACCUMULER DOUCEMENT",
      title: "Les petites habitudes s'additionnent.",
      body:
        "Nous célébrons la constance, pas la force de volonté. Un seul changement conscient vaut plus qu'un mois de restriction sévère.",
      Motif: SpiralMotif,
    },
    {
      caption: "C'EST TOI QUI DÉCIDES",
      title: "Tu gardes la main.",
      body:
        "Tes comptes, tes objectifs d'épargne et tes définitions. Savlo est un miroir, pas un coach.",
      Motif: ReticleMotif,
    },
  ],
}

const copy = {
  en: {
    eyebrow: "Our philosophy",
    firstLine: "Take control of your money.",
    emphasis: "Without wasting time.",
    description:
      "Most financial apps require hours of spreadsheets or complex manual classifications. Savlo is designed to give you absolute, daily control of your accounts in minutes, automating logging so you can optimize your finances effortlessly.",
  },
  es: {
    eyebrow: "Nuestra filosofía",
    firstLine: "Toma el control de tu dinero.",
    emphasis: "Sin perder tiempo.",
    description:
      "La mayoría de las apps de finanzas requieren horas de Excel o clasificaciones manuales complejas. Savlo está diseñada para darte control absoluto y diario de tus cuentas en minutos, automatizando el registro para que optimices tus finanzas sin esfuerzo.",
  },
  pt: {
    eyebrow: "Nossa filosofia",
    firstLine: "Tome o controle do seu dinheiro.",
    emphasis: "Sem perder tempo.",
    description:
      "A maioria dos aplicativos financeiros exige horas de planilhas ou classificações manuais complexas. O Savlo foi desenvolvido para dar a você controle absoluto e diário de suas contas em minutos, automatizando os registros para que você otimize suas finanças sem esforço.",
  },
  de: {
    eyebrow: "Unsere Philosophie",
    firstLine: "Übernehmen Sie die Kontrolle über Ihr Geld.",
    emphasis: "Ohne Zeit zu verlieren.",
    description:
      "Die meisten Finanz-Apps erfordern stundenlange Excel-Tabellen oder komplexe manuelle Klassifizierungen. Savlo wurde entwickelt, um Ihnen in wenigen Minuten die absolute tägliche Kontrolle über Ihre Konten zu geben. Die Erfassung wird automatisiert, sodass Sie Ihre Finanzen mühelos optimieren können.",
  },
  fr: {
    eyebrow: "Notre philosophie",
    firstLine: "Prenez le contrôle de votre argent.",
    emphasis: "Sans perdre de temps.",
    description:
      "La plupart des applications financières exigent des heures sur des tableurs ou des classifications manuelles complexes. Savlo est conçue pour vous donner le contrôle absolu et quotidien de vos comptes en quelques minutes, en automatisant la saisie pour optimiser vos finances sans effort.",
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
