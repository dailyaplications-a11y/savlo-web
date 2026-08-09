"use client"

import Image from "next/image"
import type { Locale } from "@/lib/i18n"
import { Reveal } from "./reveal"

type FeatureCardData = {
  eyebrow: string
  titleLine1: string
  titleLine2: string
  description: string
  bullets: string[]
  imageAlt: string
  imageSrc: string | null
  imagePlaceholder?: string
  imageRight: boolean
}

type SectionCopy = {
  eyebrow: string
  heading: string
  description: string
}

const sectionCopy: Record<Locale, SectionCopy> = {
  es: {
    eyebrow: "Funciones",
    heading: "Todo lo que necesitas,\nnada que no.",
    description:
      "Registra gastos e ingresos en tiempo real sin saltar entre herramientas u hojas de cálculo.",
  },
  en: {
    eyebrow: "Features",
    heading: "Everything you need,\nnothing you don't.",
    description:
      "Track expenses and income in real time without juggling multiple tools or spreadsheets.",
  },
  pt: {
    eyebrow: "Funcionalidades",
    heading: "Tudo o que você precisa,\nnada a mais.",
    description:
      "Registre gastos e receitas em tempo real sem precisar de várias ferramentas ou planilhas.",
  },
  de: {
    eyebrow: "Funktionen",
    heading: "Alles was du brauchst,\nnichts was du nicht brauchst.",
    description:
      "Erfasse Ausgaben und Einnahmen in Echtzeit ohne zwischen Tools oder Tabellen zu wechseln.",
  },
  fr: {
    eyebrow: "Fonctionnalités",
    heading: "Tout ce qu'il vous faut,\nrien de plus.",
    description:
      "Suivez vos dépenses et revenus en temps réel sans jongler avec des outils ou des tableurs.",
  },
}

const cardsByLocale: Record<Locale, FeatureCardData[]> = {
  es: [
    {
      eyebrow: "Registro instantáneo",
      titleLine1: "Habla o escribe.",
      titleLine2: "Savlo registra solo.",
      description:
        "Dile 'gasté $12 en el almuerzo' y listo. La IA extrae monto, categoría y comercio en menos de 3 segundos. Sin formularios, sin fricciones.",
      bullets: [
        "Funciona con voz y texto libre",
        "Clasificación automática por IA",
        "Registro en menos de 5 segundos",
      ],
      imageAlt: "Pantalla de registro por voz en Savlo",
      imageSrc: "/app_screen_today.png",
      imagePlaceholder: undefined,
      imageRight: false,
    },
    {
      eyebrow: "Importación CSV",
      titleLine1: "Trae tu historial bancario.",
      titleLine2: "Savlo lo clasifica solo.",
      description:
        "Exportá el estado de cuenta de tu banco en CSV o XLSX y arrástralo a Savlo. La IA lee cada movimiento y lo categoriza automáticamente — sin mapeos, sin trabajo manual.",
      bullets: [
        "Compatible con archivos CSV y XLSX",
        "Categorización automática con IA",
        "Carga histórica desde cualquier banco",
      ],
      imageAlt: "Pantalla de importación CSV en Savlo",
      imageSrc: null,
      imagePlaceholder:
        "Pantalla de importación: lista de movimientos importados con categorías asignadas automáticamente — Restaurantes, Transporte, Supermercado — y barra de progreso al 100%",
      imageRight: true,
    },
    {
      eyebrow: "IA financiera",
      titleLine1: "Pregúntale a Savlo",
      titleLine2: "lo que quieras.",
      description:
        "¿En qué gastas más? ¿Cuánto llevas este mes? Savlo analiza tus datos y te responde al instante con información real y accionable.",
      bullets: [
        "Análisis de patrones de gasto",
        "Preguntas en lenguaje natural",
        "Respuestas basadas en tus datos reales",
      ],
      imageAlt: "Asistente IA de Savlo respondiendo preguntas financieras",
      imageSrc: null,
      imagePlaceholder:
        "Pantalla del chat con IA: pregunta '¿cuánto gasté en restaurantes este mes?' con respuesta detallada y gráfico de categorías visible",
      imageRight: false,
    },
    {
      eyebrow: "Control de presupuesto",
      titleLine1: "Pon límites.",
      titleLine2: "Mantente al día.",
      description:
        "Define límites de gasto por categoría y ve tu progreso en tiempo real. Sabe exactamente dónde estás antes de gastar de más.",
      bullets: [
        "Límites por categoría personalizables",
        "Barras de progreso visuales",
        "Alertas antes de exceder el límite",
      ],
      imageAlt: "Pantalla de presupuesto por categoría en Savlo",
      imageSrc: null,
      imagePlaceholder:
        "Vista de categorías con barras de progreso — Restaurantes 72%, Transporte 45%, Entretenimiento 91% con alerta de límite",
      imageRight: true,
    },
  ],
  en: [
    {
      eyebrow: "Instant logging",
      titleLine1: "Speak or type.",
      titleLine2: "Savlo does the rest.",
      description:
        "Say 'spent $12 on lunch' and you're done. AI extracts amount, category, and merchant in under 3 seconds. No forms, no friction.",
      bullets: [
        "Works with free-form voice and text",
        "Automatic AI categorization",
        "Logged in under 5 seconds",
      ],
      imageAlt: "Savlo voice logging screen",
      imageSrc: "/app_screen_today.png",
      imagePlaceholder: undefined,
      imageRight: false,
    },
    {
      eyebrow: "CSV Import",
      titleLine1: "Bring your bank history.",
      titleLine2: "Savlo sorts it out.",
      description:
        "Export your bank statement as CSV or XLSX and drop it into Savlo. AI reads every transaction and categorizes it automatically — no mapping, no manual work.",
      bullets: [
        "Supports CSV and XLSX files",
        "Automatic AI categorization",
        "Import history from any bank",
      ],
      imageAlt: "Savlo CSV import screen",
      imageSrc: null,
      imagePlaceholder:
        "Import screen: list of imported transactions with auto-assigned categories — Restaurants, Transport, Groceries — and a 100% progress bar",
      imageRight: true,
    },
    {
      eyebrow: "Financial AI",
      titleLine1: "Ask Savlo",
      titleLine2: "anything.",
      description:
        "What do you spend the most on? How much have you spent this month? Savlo analyzes your data and answers instantly with real, actionable insights.",
      bullets: [
        "Spending pattern analysis",
        "Natural language questions",
        "Answers based on your real data",
      ],
      imageAlt: "Savlo AI assistant answering financial questions",
      imageSrc: null,
      imagePlaceholder:
        "AI chat screen: question 'how much did I spend on restaurants this month?' with detailed answer and category breakdown chart",
      imageRight: false,
    },
    {
      eyebrow: "Budget control",
      titleLine1: "Set limits.",
      titleLine2: "Stay on track.",
      description:
        "Define spending limits by category and track your progress in real time. Know exactly where you stand before you overspend.",
      bullets: [
        "Customizable limits per category",
        "Visual progress bars",
        "Alerts before exceeding the limit",
      ],
      imageAlt: "Savlo budget by category screen",
      imageSrc: null,
      imagePlaceholder:
        "Category view with progress bars — Restaurants 72%, Transport 45%, Entertainment 91% with limit alert notification",
      imageRight: true,
    },
  ],
  pt: [
    {
      eyebrow: "Registro instantâneo",
      titleLine1: "Fale ou escreva.",
      titleLine2: "O Savlo registra sozinho.",
      description:
        "Diga 'gastei R$12 no almoço' e pronto. A IA extrai valor, categoria e estabelecimento em menos de 3 segundos. Sem formulários, sem complicações.",
      bullets: [
        "Funciona com voz e texto livre",
        "Categorização automática por IA",
        "Registro em menos de 5 segundos",
      ],
      imageAlt: "Tela de registro por voz no Savlo",
      imageSrc: "/app_screen_today.png",
      imagePlaceholder: undefined,
      imageRight: false,
    },
    {
      eyebrow: "Importação CSV",
      titleLine1: "Traga seu histórico bancário.",
      titleLine2: "O Savlo classifica tudo.",
      description:
        "Exporte o extrato do seu banco em CSV ou XLSX e arraste para o Savlo. A IA lê cada transação e categoriza automaticamente — sem mapeamentos, sem trabalho manual.",
      bullets: [
        "Compatível com arquivos CSV e XLSX",
        "Categorização automática com IA",
        "Importe histórico de qualquer banco",
      ],
      imageAlt: "Tela de importação CSV no Savlo",
      imageSrc: null,
      imagePlaceholder:
        "Tela de importação: lista de transações importadas com categorias atribuídas automaticamente — Restaurantes, Transporte, Supermercado — e barra de progresso a 100%",
      imageRight: true,
    },
    {
      eyebrow: "IA financeira",
      titleLine1: "Pergunte ao Savlo",
      titleLine2: "o que quiser.",
      description:
        "No que você gasta mais? Quanto gastou esse mês? O Savlo analisa seus dados e responde na hora com informações reais e acionáveis.",
      bullets: [
        "Análise de padrões de gasto",
        "Perguntas em linguagem natural",
        "Respostas baseadas nos seus dados reais",
      ],
      imageAlt: "Assistente IA do Savlo respondendo perguntas financeiras",
      imageSrc: null,
      imagePlaceholder:
        "Tela do chat com IA: pergunta 'quanto gastei em restaurantes esse mês?' com resposta detalhada e gráfico de categorias visível",
      imageRight: false,
    },
    {
      eyebrow: "Controle de orçamento",
      titleLine1: "Defina limites.",
      titleLine2: "Fique no controle.",
      description:
        "Defina limites de gasto por categoria e veja seu progresso em tempo real. Saiba exatamente onde está antes de gastar demais.",
      bullets: [
        "Limites personalizáveis por categoria",
        "Barras de progresso visuais",
        "Alertas antes de exceder o limite",
      ],
      imageAlt: "Tela de orçamento por categoria no Savlo",
      imageSrc: null,
      imagePlaceholder:
        "Vista de categorias com barras de progresso — Restaurantes 72%, Transporte 45%, Entretenimento 91% com alerta de limite",
      imageRight: true,
    },
  ],
  de: [
    {
      eyebrow: "Soforterfassung",
      titleLine1: "Sprechen oder tippen.",
      titleLine2: "Savlo erledigt den Rest.",
      description:
        "Sag 'habe 12€ fürs Mittagessen ausgegeben' und fertig. Die KI extrahiert Betrag, Kategorie und Händler in unter 3 Sekunden. Kein Formular, keine Reibung.",
      bullets: [
        "Funktioniert mit freier Sprache und Text",
        "Automatische KI-Kategorisierung",
        "Erfasst in unter 5 Sekunden",
      ],
      imageAlt: "Savlo Spracheingabe-Bildschirm",
      imageSrc: "/app_screen_today.png",
      imagePlaceholder: undefined,
      imageRight: false,
    },
    {
      eyebrow: "CSV-Import",
      titleLine1: "Bring deinen Kontoauszug.",
      titleLine2: "Savlo sortiert alles.",
      description:
        "Exportiere deinen Kontoauszug als CSV oder XLSX und ziehe ihn in Savlo. Die KI liest jede Transaktion und kategorisiert sie automatisch — kein Mapping, kein manueller Aufwand.",
      bullets: [
        "Unterstützt CSV- und XLSX-Dateien",
        "Automatische KI-Kategorisierung",
        "Verlauf aus jeder Bank importieren",
      ],
      imageAlt: "Savlo CSV-Import Bildschirm",
      imageSrc: null,
      imagePlaceholder:
        "Import-Bildschirm: Liste importierter Transaktionen mit automatisch zugewiesenen Kategorien — Restaurants, Transport, Lebensmittel — und 100% Fortschrittsbalken",
      imageRight: true,
    },
    {
      eyebrow: "Finanz-KI",
      titleLine1: "Frag Savlo",
      titleLine2: "was auch immer.",
      description:
        "Wofür gibst du am meisten aus? Wie viel hast du diesen Monat ausgegeben? Savlo analysiert deine Daten und antwortet sofort mit echten, umsetzbaren Erkenntnissen.",
      bullets: [
        "Analyse von Ausgabemustern",
        "Fragen in natürlicher Sprache",
        "Antworten basierend auf deinen echten Daten",
      ],
      imageAlt: "Savlo KI-Assistent beantwortet Finanzfragen",
      imageSrc: null,
      imagePlaceholder:
        "KI-Chat: Frage 'Wie viel habe ich diesen Monat für Restaurants ausgegeben?' mit detaillierter Antwort und Kategoriendiagramm",
      imageRight: false,
    },
    {
      eyebrow: "Budgetkontrolle",
      titleLine1: "Limits setzen.",
      titleLine2: "Den Überblick behalten.",
      description:
        "Definiere Ausgabenlimits pro Kategorie und verfolge deinen Fortschritt in Echtzeit. Wisse genau wo du stehst, bevor du zu viel ausgibst.",
      bullets: [
        "Anpassbare Limits pro Kategorie",
        "Visuelle Fortschrittsbalken",
        "Warnungen bevor das Limit überschritten wird",
      ],
      imageAlt: "Savlo Budget-Kategorien Bildschirm",
      imageSrc: null,
      imagePlaceholder:
        "Kategorie-Ansicht mit Fortschrittsbalken — Restaurants 72%, Transport 45%, Unterhaltung 91% mit Limit-Warnung",
      imageRight: true,
    },
  ],
  fr: [
    {
      eyebrow: "Saisie instantanée",
      titleLine1: "Parle ou écris.",
      titleLine2: "Savlo s'occupe du reste.",
      description:
        "Dis 'j'ai dépensé 12€ pour le déjeuner' et c'est tout. L'IA extrait le montant, la catégorie et le commerçant en moins de 3 secondes. Sans formulaires, sans friction.",
      bullets: [
        "Fonctionne avec la voix et le texte libre",
        "Catégorisation automatique par IA",
        "Enregistré en moins de 5 secondes",
      ],
      imageAlt: "Écran de saisie vocale Savlo",
      imageSrc: "/app_screen_today.png",
      imagePlaceholder: undefined,
      imageRight: false,
    },
    {
      eyebrow: "Import CSV",
      titleLine1: "Importe ton historique bancaire.",
      titleLine2: "Savlo classe tout.",
      description:
        "Exporte ton relevé bancaire en CSV ou XLSX et glisse-le dans Savlo. L'IA lit chaque transaction et la catégorise automatiquement — sans mapping, sans travail manuel.",
      bullets: [
        "Compatible avec les fichiers CSV et XLSX",
        "Catégorisation automatique par IA",
        "Importe l'historique de n'importe quelle banque",
      ],
      imageAlt: "Écran d'import CSV Savlo",
      imageSrc: null,
      imagePlaceholder:
        "Écran d'import : liste de transactions importées avec catégories assignées automatiquement — Restaurants, Transport, Courses — et barre de progression à 100%",
      imageRight: true,
    },
    {
      eyebrow: "IA financière",
      titleLine1: "Demande à Savlo",
      titleLine2: "ce que tu veux.",
      description:
        "Sur quoi dépenses-tu le plus ? Combien as-tu dépensé ce mois-ci ? Savlo analyse tes données et répond instantanément avec des informations réelles et actionnables.",
      bullets: [
        "Analyse des habitudes de dépenses",
        "Questions en langage naturel",
        "Réponses basées sur tes vraies données",
      ],
      imageAlt: "Assistant IA Savlo répondant aux questions financières",
      imageSrc: null,
      imagePlaceholder:
        "Écran de chat IA : question 'combien j'ai dépensé en restaurants ce mois ?' avec réponse détaillée et graphique de catégories",
      imageRight: false,
    },
    {
      eyebrow: "Contrôle du budget",
      titleLine1: "Fixe des limites.",
      titleLine2: "Reste dans le budget.",
      description:
        "Définis des limites de dépenses par catégorie et suis tes progrès en temps réel. Sache exactement où tu en es avant de dépasser.",
      bullets: [
        "Limites personnalisables par catégorie",
        "Barres de progression visuelles",
        "Alertes avant de dépasser la limite",
      ],
      imageAlt: "Écran budget par catégorie Savlo",
      imageSrc: null,
      imagePlaceholder:
        "Vue catégories avec barres de progression — Restaurants 72%, Transport 45%, Divertissement 91% avec alerte de limite",
      imageRight: true,
    },
  ],
}

export function FeatureCards({ locale = "en" }: { locale?: Locale }) {
  const text = sectionCopy[locale]
  const cards = cardsByLocale[locale]

  return (
    <section id="features-detail" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {text.eyebrow}
          </span>
          <h2 className="mt-6 whitespace-pre-line font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            {text.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            {text.description}
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-5">
          {cards.map((card, i) => (
            <Reveal key={card.eyebrow} delay={i * 50}>
              <FeatureCard card={card} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ card }: { card: FeatureCardData }) {
  const { imageRight } = card

  return (
    <article className="py-12 sm:py-16">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
        {/* Text side */}
        <div
          className={[
            "flex flex-col justify-center",
            imageRight ? "order-1" : "order-1 lg:order-2",
          ].join(" ")}
        >
          <div className="flex items-center gap-2.5">
            <span className="h-px w-6 bg-primary/60" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-primary/80">
              {card.eyebrow}
            </span>
          </div>

          <h3 className="mt-5 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
            {card.titleLine1}
            <br />
            <em className="font-normal italic text-primary/90">
              {card.titleLine2}
            </em>
          </h3>

          <p className="mt-4 max-w-md text-pretty text-muted-foreground leading-relaxed">
            {card.description}
          </p>

          <ul className="mt-6 space-y-2.5">
            {card.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <CheckIcon />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Phone side — no background card */}
        <div
          className={[
            "relative flex items-center justify-center py-8",
            imageRight ? "order-2" : "order-2 lg:order-1",
          ].join(" ")}
        >
          <PhoneMock
            src={card.imageSrc}
            alt={card.imageAlt}
            placeholder={card.imagePlaceholder}
          />
        </div>
      </div>
    </article>
  )
}

function PhoneMock({
  src,
  alt,
  placeholder,
}: {
  src: string | null
  alt: string
  placeholder?: string
}) {
  return (
    <div className="relative w-[240px] sm:w-[265px]">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-16 opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 300px 480px at 50% 40%, color-mix(in oklch, var(--primary) 18%, transparent), transparent 62%)",
        }}
      />

      {/* Samsung Galaxy A25 5G frame — 1080×2340 (19.5:9), no outer card */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: "1080 / 2340",
          borderRadius: "36px",
          border: "8px solid #08111e",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.06), 0 40px 80px -20px rgba(0,0,0,0.7), 0 12px 32px -8px rgba(0,0,0,0.5)",
        }}
      >
        {/* Punch-hole camera */}
        <div
          aria-hidden
          className="absolute left-1/2 top-2.5 z-10 h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-black"
        />

        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(min-width: 640px) 265px, 240px"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d1b2a] p-5">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary/70">
                Screenshot
              </span>
            </div>
            <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
              {placeholder}
            </p>
          </div>
        )}

        {/* Bottom fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--background))",
          }}
        />
      </div>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="10" cy="10" r="8" opacity="0.2" fill="currentColor" stroke="none" />
      <path d="M6.5 10.5 9 13l4.5-5" />
    </svg>
  )
}
