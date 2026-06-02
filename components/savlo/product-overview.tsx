import type { Locale } from "@/lib/i18n"
import { AnimatedNumber } from "./animated-number"
import { Reveal } from "./reveal"

const copy = {
  en: {
    eyebrow: "Your week, gently summarized",
    heading: "Not a dashboard.",
    emphasis: "A reflection.",
    description:
      "Savlo organizes your money flow and returns it to you softly: the progress of your savings funds, your independent financial spaces, and your safe daily spending margin. Observed, never judged.",
    dailyMargin: "Daily Margin",
    today: "Today",
    safeToSpend: "Safe to spend",
    safeToSpendSuffix: " today",
    marginBody:
      "A single, honest metric. No flashing red alarms - just the exact amount of money you can spend today, guilt-free.",
    cashFlow: "Cash flow · last 8 weeks",
    income: "Income",
    spending: "Spending",
    saved: "Saved",
    spacesFunds: "Spaces & Funds",
    spacesTitle: "Your money separated by context",
    spacesBadge: "Simple, intuitive structure",
    categories: [
      { name: "Personal Space", amount: 1240, pct: 55 },
      { name: "Freelance Space", amount: 612, pct: 28, warm: true },
      { name: "Emergency Fund", amount: 450, pct: 75 },
      { name: "Vacation Fund", amount: 196, pct: 33 },
    ],
  },
  es: {
    eyebrow: "Tu semana, resumida con suavidad",
    heading: "No es un dashboard.",
    emphasis: "Es una reflexión.",
    description:
      "Savlo organiza tu flujo de dinero y te lo devuelve con calma: el progreso de tus fondos, tus espacios financieros separados y tu margen diario seguro. Observado, nunca juzgado.",
    dailyMargin: "Margen diario",
    today: "Hoy",
    safeToSpend: "Seguro para gastar",
    safeToSpendSuffix: " hoy",
    marginBody:
      "Una métrica simple y honesta. Sin alarmas rojas - solo el monto exacto que puedes gastar hoy, sin culpa.",
    cashFlow: "Flujo de caja · últimas 8 semanas",
    income: "Ingresos",
    spending: "Gastos",
    saved: "Ahorrado",
    spacesFunds: "Spaces & Funds",
    spacesTitle: "Tu dinero separado por contexto",
    spacesBadge: "Estructura simple e intuitiva",
    categories: [
      { name: "Espacio personal", amount: 1240, pct: 55 },
      { name: "Espacio freelance", amount: 612, pct: 28, warm: true },
      { name: "Fondo emergencia", amount: 450, pct: 75 },
      { name: "Fondo vacaciones", amount: 196, pct: 33 },
    ],
  },
  pt: {
    eyebrow: "Sua semana, resumida com leveza",
    heading: "Não é um dashboard.",
    emphasis: "É uma reflexão.",
    description:
      "O Savlo organiza o fluxo do seu dinheiro e devolve isso com calma: o progresso dos seus fundos, seus espaços financeiros separados e sua margem segura de gastos do dia. Observado, nunca julgado.",
    dailyMargin: "Margem diária",
    today: "Hoje",
    safeToSpend: "Seguro para gastar",
    safeToSpendSuffix: " hoje",
    marginBody:
      "Uma métrica simples e honesta. Sem alertas vermelhos piscando - só o valor exato que você pode gastar hoje, sem culpa.",
    cashFlow: "Fluxo de caixa · últimas 8 semanas",
    income: "Entradas",
    spending: "Gastos",
    saved: "Guardado",
    spacesFunds: "Spaces & Funds",
    spacesTitle: "Seu dinheiro separado por contexto",
    spacesBadge: "Estrutura simples e intuitiva",
    categories: [
      { name: "Espaço pessoal", amount: 1240, pct: 55 },
      { name: "Espaço freelance", amount: 612, pct: 28, warm: true },
      { name: "Fundo de emergência", amount: 450, pct: 75 },
      { name: "Fundo de viagem", amount: 196, pct: 33 },
    ],
  },

  de: {
    eyebrow: "Deine Woche, sanft zusammengefasst",
    heading: "Kein Dashboard.",
    emphasis: "Eine Reflexion.",
    description:
      "Savlo ordnet deinen Geldfluss und gibt ihn dir ruhig zurueck: den Fortschritt deiner Sparfonds, deine getrennten finanziellen Spaces und deine sichere taegliche Ausgabemarge. Beobachtet, nie beurteilt.",
    dailyMargin: "Taeglicher Spielraum",
    today: "Heute",
    safeToSpend: "Sicher auszugeben",
    safeToSpendSuffix: " heute",
    marginBody:
      "Eine einzige, ehrliche Kennzahl. Keine blinkenden roten Alarme - nur genau der Betrag, den du heute ohne Schuldgefuehl ausgeben kannst.",
    cashFlow: "Cashflow - letzte 8 Wochen",
    income: "Einnahmen",
    spending: "Ausgaben",
    saved: "Gespart",
    spacesFunds: "Spaces & Funds",
    spacesTitle: "Dein Geld nach Kontext getrennt",
    spacesBadge: "Einfache, intuitive Struktur",
    categories: [
      { name: "Persoenlicher Space", amount: 1240, pct: 55 },
      { name: "Freelance-Space", amount: 612, pct: 28, warm: true },
      { name: "Notfallfonds", amount: 450, pct: 75 },
      { name: "Urlaubsfonds", amount: 196, pct: 33 },
    ],
  },
} as const

export function ProductOverview({ locale = "en" }: { locale?: Locale }) {
  const text = copy[locale]

  return (
    <section id="product" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-primary/80 font-semibold">
            {text.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
            {text.heading}{" "}
            <span className="block">
              <em className="font-normal italic text-primary/90">
                {text.emphasis}
              </em>
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-muted-foreground text-sm sm:text-base leading-relaxed">
            {text.description}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          <Reveal delay={80} className="md:col-span-1">
            <article className="card-calm group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/70 p-6 animate-fade-up">
              <header className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-semibold">
                  {text.dailyMargin}
                </p>
                <span className="text-[11px] text-muted-foreground font-mono">
                  {text.today}
                </span>
              </header>
              <p className="mt-4 font-serif text-4xl tracking-tight">
                <AnimatedNumber value={45} prefix="$" duration={1800} />
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                <span className="text-primary font-medium">
                  {text.safeToSpend}
                </span>
                {text.safeToSpendSuffix}
              </p>

              <MiniWave className="mt-8" />

              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                {text.marginBody}
              </p>
            </article>
          </Reveal>

          <Reveal delay={160} className="md:col-span-2">
            <article className="card-calm relative h-full overflow-hidden rounded-2xl border border-border bg-surface/70 p-6 animate-fade-up">
              <header className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-semibold">
                    {text.cashFlow}
                  </p>
                  <p className="mt-1 font-serif text-2xl tracking-tight">
                    $2,510 <span className="text-muted-foreground">net</span>
                  </p>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                  <LegendDot color="primary" label={text.income} />
                  <LegendDot color="accent" label={text.spending} />
                </div>
              </header>

              <CashFlowBars className="mt-6" />

              <footer className="mt-5 grid grid-cols-3 gap-4 border-t border-border/60 pt-4 text-sm">
                <FooterStat label={text.income} value="$6,820" tone="primary" />
                <FooterStat label={text.spending} value="$4,310" tone="accent" />
                <FooterStat label={text.saved} value="$2,510" tone="muted" />
              </footer>
            </article>
          </Reveal>

          <Reveal delay={240} className="md:col-span-3">
            <article className="card-calm relative h-full overflow-hidden rounded-2xl border border-border bg-surface/70 p-6 animate-fade-up">
              <header className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-semibold">
                    {text.spacesFunds}
                  </p>
                  <p className="mt-1 font-serif text-2xl tracking-tight">
                    {text.spacesTitle}
                  </p>
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground font-medium">
                  {text.spacesBadge}
                </span>
              </header>

              <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {text.categories.map((c) => {
                  const isWarm = "warm" in c && c.warm

                  return (
                    <li
                      key={c.name}
                      className="rounded-xl border border-border/70 bg-surface-2/50 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground/90 font-medium">
                          {c.name}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {c.pct}%
                        </span>
                      </div>
                      <p className="mt-2 font-serif text-xl tracking-tight">
                        <AnimatedNumber
                          value={c.amount}
                          prefix="$"
                          duration={1400}
                        />
                      </p>
                      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-border/60">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${c.pct}%`,
                            background: isWarm
                              ? "color-mix(in oklch, var(--accent) 80%, transparent)"
                              : "color-mix(in oklch, var(--primary) 85%, transparent)",
                          }}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function FooterStat({
  label,
  value,
  tone,
}: {
  label: string
  value: string
  tone: "primary" | "accent" | "muted"
}) {
  const color =
    tone === "primary"
      ? "text-primary"
      : tone === "accent"
        ? "text-accent"
        : "text-foreground"
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-semibold">
        {label}
      </p>
      <p className={`mt-1 font-serif text-lg ${color}`}>{value}</p>
    </div>
  )
}

function LegendDot({
  color,
  label,
}: {
  color: "primary" | "accent"
  label: string
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          color === "primary" ? "bg-primary" : "bg-accent"
        }`}
      />
      {label}
    </span>
  )
}

function MiniWave({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 80"
      className={`h-20 w-full ${className ?? ""}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="mini-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,58 C40,52 70,62 110,48 C150,34 180,42 220,30 C260,18 300,24 320,14 L320,80 L0,80 Z"
        fill="url(#mini-fill)"
        opacity="0.7"
      />
      <path
        d="M0,58 C40,52 70,62 110,48 C150,34 180,42 220,30 C260,18 300,24 320,14"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{
          strokeDasharray: 700,
          strokeDashoffset: 700,
          animation:
            "drawLine 1600ms cubic-bezier(0.22,1,0.36,1) 300ms forwards",
          ["--dash" as string]: "700",
        }}
      />
    </svg>
  )
}

function CashFlowBars({ className }: { className?: string }) {
  return (
    <div className={`flex items-end gap-2 h-28 ${className ?? ""}`}>
      {bars.map((b, i) => (
        <div key={i} className="flex flex-1 flex-col items-stretch gap-1.5">
          <div
            className="rounded-sm"
            style={{
              height: `${b.in}%`,
              background:
                "color-mix(in oklch, var(--primary) 70%, transparent)",
              opacity: 0.55 + (i / bars.length) * 0.45,
            }}
          />
          <div
            className="rounded-sm"
            style={{
              height: `${b.out}%`,
              background:
                "color-mix(in oklch, var(--accent) 72%, transparent)",
              opacity: 0.5 + (i / bars.length) * 0.45,
            }}
          />
        </div>
      ))}
    </div>
  )
}

const bars = [
  { in: 38, out: 22 },
  { in: 44, out: 28 },
  { in: 32, out: 20 },
  { in: 52, out: 30 },
  { in: 46, out: 26 },
  { in: 60, out: 34 },
  { in: 54, out: 30 },
  { in: 66, out: 36 },
]
