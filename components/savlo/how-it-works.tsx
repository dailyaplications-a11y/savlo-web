import type { Locale } from "@/lib/i18n"
import { Reveal } from "./reveal"

type Step = {
  number: string
  title: string
  description: string
}

type SectionData = {
  eyebrow: string
  heading: string
  steps: Step[]
}

const dataByLocale: Record<Locale, SectionData> = {
  es: {
    eyebrow: "Cómo funciona",
    heading: "Tres acciones. Menos de un minuto.",
    steps: [
      {
        number: "01",
        title: "Decís lo que gastaste",
        description:
          "Escribís \"$8 de café en Starbucks\" o lo decís por voz. Savlo extrae el monto, la categoría y el comercio en menos de 3 segundos. Sin formularios, sin categorías para elegir.",
      },
      {
        number: "02",
        title: "Savlo lo organiza solo",
        description:
          "Cada gasto queda clasificado, sumado a tu balance y asignado a la cuenta correcta. Abrís la app y ves exactamente cuánto gastaste hoy, esta semana y este mes — sin tocar nada.",
      },
      {
        number: "03",
        title: "Sabés dónde está tu plata",
        description:
          "Tu balance real, tus gastos por categoría y tus fondos de ahorro: todo en una pantalla. En 10 segundos sabés si podés gastar más o si ya llegaste al límite.",
      },
    ],
  },
  en: {
    eyebrow: "How it works",
    heading: "Three actions. Under one minute.",
    steps: [
      {
        number: "01",
        title: "Tell it what you spent",
        description:
          "Type \"$8 coffee at Starbucks\" or say it out loud. Savlo pulls out the amount, category and merchant in under 3 seconds. No forms, no dropdowns to pick from.",
      },
      {
        number: "02",
        title: "Savlo organizes it automatically",
        description:
          "Every expense gets categorized, added to your balance and assigned to the right account. Open the app and see exactly what you spent today, this week and this month — without touching anything.",
      },
      {
        number: "03",
        title: "You know where your money is",
        description:
          "Your real balance, spending by category and savings funds — all on one screen. In 10 seconds you know if you can still spend or if you've already hit your limit.",
      },
    ],
  },
  pt: {
    eyebrow: "Como funciona",
    heading: "Três ações. Menos de um minuto.",
    steps: [
      {
        number: "01",
        title: "Você diz o que gastou",
        description:
          "Escreva \"R$8 de café no Starbucks\" ou diga em voz alta. O Savlo extrai o valor, a categoria e o estabelecimento em menos de 3 segundos. Sem formulários, sem categorias para escolher.",
      },
      {
        number: "02",
        title: "O Savlo organiza sozinho",
        description:
          "Cada gasto é classificado, somado ao seu saldo e atribuído à conta certa. Abra o app e veja exatamente quanto gastou hoje, esta semana e este mês — sem precisar fazer nada.",
      },
      {
        number: "03",
        title: "Você sabe onde está seu dinheiro",
        description:
          "Seu saldo real, gastos por categoria e fundos de poupança — tudo em uma tela. Em 10 segundos você sabe se ainda pode gastar ou se já chegou no limite.",
      },
    ],
  },
  de: {
    eyebrow: "So funktioniert es",
    heading: "Drei Aktionen. Unter einer Minute.",
    steps: [
      {
        number: "01",
        title: "Du sagst, was du ausgegeben hast",
        description:
          "Tippe \"8€ Kaffee bei Starbucks\" oder sag es laut. Savlo extrahiert Betrag, Kategorie und Händler in unter 3 Sekunden. Keine Formulare, keine Dropdowns.",
      },
      {
        number: "02",
        title: "Savlo organisiert alles automatisch",
        description:
          "Jede Ausgabe wird kategorisiert, zu deinem Guthaben addiert und dem richtigen Konto zugewiesen. Öffne die App und sieh genau, was du heute, diese Woche und diesen Monat ausgegeben hast.",
      },
      {
        number: "03",
        title: "Du weißt, wo dein Geld ist",
        description:
          "Dein echtes Guthaben, Ausgaben nach Kategorie und Sparfonds — alles auf einem Bildschirm. In 10 Sekunden weißt du, ob du noch ausgeben kannst oder dein Limit bereits erreicht hast.",
      },
    ],
  },
  fr: {
    eyebrow: "Comment ça marche",
    heading: "Trois actions. Moins d'une minute.",
    steps: [
      {
        number: "01",
        title: "Tu dis ce que tu as dépensé",
        description:
          "Écris \"8€ de café chez Starbucks\" ou dis-le à voix haute. Savlo extrait le montant, la catégorie et le commerçant en moins de 3 secondes. Aucun formulaire, aucune liste à parcourir.",
      },
      {
        number: "02",
        title: "Savlo organise tout automatiquement",
        description:
          "Chaque dépense est classée, ajoutée à ton solde et assignée au bon compte. Ouvre l'app et vois exactement ce que tu as dépensé aujourd'hui, cette semaine et ce mois-ci — sans rien faire.",
      },
      {
        number: "03",
        title: "Tu sais où est ton argent",
        description:
          "Ton vrai solde, tes dépenses par catégorie et tes fonds d'épargne — tout sur un seul écran. En 10 secondes tu sais si tu peux encore dépenser ou si tu as déjà atteint ta limite.",
      },
    ],
  },
}

export function HowItWorks({ locale = "en" }: { locale?: Locale }) {
  const { eyebrow, heading, steps } = dataByLocale[locale]

  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {eyebrow}
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            {heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-x-12">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <StepCard step={step} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <div className="relative text-center sm:text-left">
      {/* Connector line (desktop, between steps) */}
      {index < 2 && (
        <div
          aria-hidden
          className="absolute left-full top-5 hidden h-px w-12 -translate-y-px bg-gradient-to-r from-primary/30 to-transparent sm:block"
        />
      )}

      {/* Step number circle */}
      <div className="mx-auto mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-mono text-sm font-semibold text-primary sm:mx-0">
        {step.number}
      </div>

      <h3 className="font-serif text-xl leading-snug tracking-tight text-foreground">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {step.description}
      </p>
    </div>
  )
}
