import type { Locale } from "@/lib/i18n"

/*
 * Content of the product storyboard. The phone screens are real captures of
 * the release app (English UI, demo data); everything around them is
 * localized. Spanish is neutral with tuteo, French uses "tu", German "du",
 * Portuguese "você". A movement is a movement, a fund is a fund.
 */

export type StepId =
  | "voice"
  | "import"
  | "today"
  | "reports"
  | "ai"
  | "budget"
  | "funds"
  | "recurring"

export type Chapter = { label: string; icon: "log" | "see" | "grow" }

export type Step = {
  id: StepId
  chapter: 0 | 1 | 2
  eyebrow: string
  t1: string
  t2: string
  body: string
  alt: string
}

/**
 * Where the phone leans on each step. Only the phone: no card floats beside it
 * (owner, 2026-11-03), the screen is the whole picture.
 */
export const STEP_GEOMETRY: Record<StepId, { tilt: [number, number, number] }> = {
  voice: { tilt: [18, 5, -5] },
  import: { tilt: [12, 3, 3] },
  today: { tilt: [-18, 5, 5] },
  reports: { tilt: [-11, 3, -3] },
  ai: { tilt: [-17, 4, 4] },
  budget: { tilt: [17, 5, -4] },
  funds: { tilt: [11, 3, 3] },
  recurring: { tilt: [18, 5, -5] },
}

export const STEP_ORDER: StepId[] = [
  "voice",
  "import",
  "today",
  "reports",
  "ai",
  "budget",
  "funds",
  "recurring",
]

/** First step of each chapter, for the chapter selector. */
export const CHAPTER_START = [0, 2, 5] as const
/** Which side the phone stands on, per chapter. */
export const CHAPTER_SIDE = ["left", "right", "left"] as const
/** The selected pill leans a little, like a hand-placed sticker. */
export const CHAPTER_ROT = [-3, 2, -2] as const

type StoryCopy = {
  /** The page hero: the story opens on it, with the phone peeking from the floor. */
  intro: { t1: string; t2: string; body: string; cue: string }
  chaptersLabel: string
  chapters: [Chapter, Chapter, Chapter]
  steps: Record<StepId, Omit<Step, "id" | "chapter">>
}

const CHAPTER_ICONS = ["log", "see", "grow"] as const

function chapters(labels: [string, string, string]): StoryCopy["chapters"] {
  return labels.map((label, i) => ({ label, icon: CHAPTER_ICONS[i] })) as StoryCopy["chapters"]
}

export const storyCopy: Record<Locale, StoryCopy> = {
  en: {
    intro: {
      t1: "Your finances,",
      t2: "a daily habit.",
      body: "Log, track and understand your money in minutes a day.",
      cue: "Explore the app",
    },
    chaptersLabel: "Chapters",
    chapters: chapters(["Log", "Understand", "Grow"]),
    steps: {
      voice: {
        eyebrow: "Voice entry",
        t1: "Say it.",
        t2: "It's saved.",
        body: "Tell Savlo what you spent, the way you'd say it out loud. It finds the amount, the category and the account.",
        alt: "Savlo voice entry: tap the mic and speak",
      },
      import: {
        eyebrow: "Import",
        t1: "Bring your history",
        t2: "with you.",
        body: "Drop in the spreadsheet you already keep. Savlo reads the format, sorts it all out and finds your recurring movements.",
        alt: "Savlo import: upload your history from CSV, XLSX or XLS",
      },
      today: {
        eyebrow: "Today",
        t1: "How your money is doing,",
        t2: "today.",
        body: "What you have, what came in and went out this month, your funds and your latest movements.",
        alt: "Savlo Today: net worth of $50,829 with a 30-day chart",
      },
      reports: {
        eyebrow: "Reports",
        t1: "See where",
        t2: "it all flows.",
        body: "From your income to every category, in one picture you read at a glance.",
        alt: "Savlo Reports: cash flow from salary to categories",
      },
      ai: {
        eyebrow: "Savlo AI",
        t1: "Ask your money",
        t2: "anything.",
        body: "Answers from your own numbers, not generic tips, with what to do next.",
        alt: "Savlo AI: how can I help you today?",
      },
      budget: {
        eyebrow: "Budget",
        t1: "Set your monthly",
        t2: "spending limits.",
        body: "Spend knowing what's left. Set them yourself, or let Savlo suggest them.",
        alt: "Savlo Budget: $2,956 of $3,871 spent, by category",
      },
      funds: {
        eyebrow: "Funds",
        t1: "Set money aside",
        t2: "for a specific goal.",
        body: "A trip, emergencies, car insurance: each fund shows how much you have and how much is left.",
        alt: "Savlo Funds: a trip fund at 60% of $3,000",
      },
      recurring: {
        eyebrow: "Recurring",
        t1: "No payment",
        t2: "catches you off guard.",
        body: "Rent, subscriptions and bills on one calendar, before they reach your account.",
        alt: "Savlo Recurring: calendar of upcoming payments",
      },
    },
  },
  es: {
    intro: {
      t1: "Tus finanzas,",
      t2: "un hábito diario.",
      body: "Registra, controla y entiende tu dinero en minutos al día.",
      cue: "Explora la app",
    },
    chaptersLabel: "Capítulos",
    chapters: chapters(["Registra", "Entiende", "Crece"]),
    steps: {
      voice: {
        eyebrow: "Registro por voz",
        t1: "Dilo.",
        t2: "Ya está guardado.",
        body: "Cuéntale a Savlo lo que gastaste, como lo dirías en voz alta. Encuentra el monto, la categoría y la cuenta.",
        alt: "Registro por voz en Savlo: toca el micrófono y habla",
      },
      import: {
        eyebrow: "Importar",
        t1: "Trae tu historial",
        t2: "contigo.",
        body: "Sube la hoja de cálculo que ya usas. Savlo entiende el formato, lo ordena todo y encuentra tus movimientos recurrentes.",
        alt: "Importar en Savlo: sube tu historial desde CSV, XLSX o XLS",
      },
      today: {
        eyebrow: "Hoy",
        t1: "Cómo está tu dinero,",
        t2: "hoy.",
        body: "Cuánto tienes, cuánto entró y salió este mes, tus fondos y tus últimos movimientos.",
        alt: "Hoy en Savlo: patrimonio de $50,829 con el gráfico de 30 días",
      },
      reports: {
        eyebrow: "Reportes",
        t1: "Mira hacia dónde",
        t2: "fluye tu dinero.",
        body: "De tus ingresos a cada categoría, en una imagen que se entiende de un vistazo.",
        alt: "Reportes de Savlo: flujo de dinero del sueldo a cada categoría",
      },
      ai: {
        eyebrow: "Savlo AI",
        t1: "Pregúntale a tu dinero",
        t2: "lo que quieras.",
        body: "Respuestas con tus propios números, no consejos genéricos, y qué hacer después.",
        alt: "Savlo AI: ¿en qué puedo ayudarte hoy?",
      },
      budget: {
        eyebrow: "Presupuesto",
        t1: "Define tus límites",
        t2: "de gasto mensual.",
        body: "Gasta sabiendo cuánto te queda. Defínelos tú, o deja que Savlo los sugiera.",
        alt: "Presupuesto en Savlo: $2,956 de $3,871 gastados, por categoría",
      },
      funds: {
        eyebrow: "Fondos",
        t1: "Aparta dinero",
        t2: "con un objetivo concreto.",
        body: "Viaje, emergencias, el seguro del auto: cada fondo muestra cuánto llevas y cuánto te falta.",
        alt: "Fondos en Savlo: un fondo de viaje al 60 % de $3,000",
      },
      recurring: {
        eyebrow: "Recurrentes",
        t1: "Ningún pago",
        t2: "te toma por sorpresa.",
        body: "Alquiler, suscripciones y servicios en un solo calendario, antes de que lleguen a tu cuenta.",
        alt: "Recurrentes en Savlo: calendario de próximos pagos",
      },
    },
  },
  pt: {
    intro: {
      t1: "Suas finanças,",
      t2: "um hábito diário.",
      body: "Registre, acompanhe e entenda seu dinheiro em minutos por dia.",
      cue: "Explore o app",
    },
    chaptersLabel: "Capítulos",
    chapters: chapters(["Registre", "Entenda", "Cresça"]),
    steps: {
      voice: {
        eyebrow: "Registro por voz",
        t1: "Fale.",
        t2: "Já está salvo.",
        body: "Conte ao Savlo o que você gastou, do jeito que falaria em voz alta. Ele encontra o valor, a categoria e a conta.",
        alt: "Registro por voz no Savlo: toque no microfone e fale",
      },
      import: {
        eyebrow: "Importar",
        t1: "Traga seu histórico",
        t2: "com você.",
        body: "Envie a planilha que você já usa. O Savlo entende o formato, organiza tudo e encontra seus movimentos recorrentes.",
        alt: "Importação no Savlo: envie seu histórico em CSV, XLSX ou XLS",
      },
      today: {
        eyebrow: "Hoje",
        t1: "Como está seu dinheiro,",
        t2: "hoje.",
        body: "Quanto você tem, quanto entrou e saiu este mês, seus fundos e seus últimos movimentos.",
        alt: "Hoje no Savlo: patrimônio de $50,829 com o gráfico de 30 dias",
      },
      reports: {
        eyebrow: "Relatórios",
        t1: "Veja para onde",
        t2: "tudo flui.",
        body: "Da sua renda a cada categoria, em uma imagem que você entende num relance.",
        alt: "Relatórios do Savlo: fluxo do salário até cada categoria",
      },
      ai: {
        eyebrow: "Savlo AI",
        t1: "Pergunte ao seu dinheiro",
        t2: "qualquer coisa.",
        body: "Respostas com os seus próprios números, não dicas genéricas, e o que fazer em seguida.",
        alt: "Savlo AI: como posso ajudar você hoje?",
      },
      budget: {
        eyebrow: "Orçamento",
        t1: "Defina seus limites",
        t2: "de gasto mensal.",
        body: "Gaste sabendo quanto ainda sobra. Defina você mesmo, ou deixe o Savlo sugerir.",
        alt: "Orçamento no Savlo: $2,956 de $3,871 gastos, por categoria",
      },
      funds: {
        eyebrow: "Fundos",
        t1: "Separe dinheiro",
        t2: "com um objetivo concreto.",
        body: "Viagem, emergências, o seguro do carro: cada fundo mostra quanto você já tem e quanto falta.",
        alt: "Fundos no Savlo: um fundo de viagem em 60% de $3,000",
      },
      recurring: {
        eyebrow: "Recorrentes",
        t1: "Nenhum pagamento",
        t2: "pega você de surpresa.",
        body: "Aluguel, assinaturas e contas em um só calendário, antes de chegarem à sua conta.",
        alt: "Recorrentes no Savlo: calendário dos próximos pagamentos",
      },
    },
  },
  de: {
    intro: {
      t1: "Deine Finanzen,",
      t2: "eine tägliche Gewohnheit.",
      body: "Erfasse, verfolge und verstehe dein Geld in wenigen Minuten am Tag.",
      cue: "App entdecken",
    },
    chaptersLabel: "Kapitel",
    chapters: chapters(["Erfassen", "Verstehen", "Wachsen"]),
    steps: {
      voice: {
        eyebrow: "Spracheingabe",
        t1: "Sag es.",
        t2: "Schon gespeichert.",
        body: "Erzähl Savlo, was du ausgegeben hast, so wie du es laut sagen würdest. Savlo findet Betrag, Kategorie und Konto.",
        alt: "Spracheingabe in Savlo: Mikrofon antippen und sprechen",
      },
      import: {
        eyebrow: "Import",
        t1: "Nimm deine Historie",
        t2: "einfach mit.",
        body: "Lade die Tabelle hoch, die du schon führst. Savlo erkennt das Format, ordnet alles und findet deine wiederkehrenden Bewegungen.",
        alt: "Import in Savlo: Historie als CSV, XLSX oder XLS hochladen",
      },
      today: {
        eyebrow: "Heute",
        t1: "So steht dein Geld,",
        t2: "heute.",
        body: "Wie viel du hast, was diesen Monat rein- und rausging, deine Fonds und deine letzten Bewegungen.",
        alt: "Heute in Savlo: Vermögen von $50,829 mit 30-Tage-Verlauf",
      },
      reports: {
        eyebrow: "Berichte",
        t1: "Sieh, wohin",
        t2: "alles fließt.",
        body: "Von deinen Einnahmen bis zu jeder Kategorie, in einem Bild, das du auf einen Blick verstehst.",
        alt: "Berichte in Savlo: Geldfluss vom Gehalt bis zu jeder Kategorie",
      },
      ai: {
        eyebrow: "Savlo AI",
        t1: "Frag dein Geld",
        t2: "einfach alles.",
        body: "Antworten aus deinen eigenen Zahlen statt allgemeiner Tipps, und was du als Nächstes tun kannst.",
        alt: "Savlo AI: Wie kann ich dir heute helfen?",
      },
      budget: {
        eyebrow: "Budget",
        t1: "Leg deine monatlichen",
        t2: "Ausgabenlimits fest.",
        body: "Gib aus und wisse, was dir bleibt. Leg sie selbst fest oder lass Savlo sie vorschlagen.",
        alt: "Budget in Savlo: $2,956 von $3,871 ausgegeben, nach Kategorie",
      },
      funds: {
        eyebrow: "Fonds",
        t1: "Leg Geld zurück",
        t2: "für ein konkretes Ziel.",
        body: "Reise, Notfälle, die Autoversicherung: Jeder Fonds zeigt, wie viel du hast und wie viel noch fehlt.",
        alt: "Fonds in Savlo: ein Reisefonds bei 60 % von $3,000",
      },
      recurring: {
        eyebrow: "Wiederkehrend",
        t1: "Keine Zahlung",
        t2: "überrascht dich.",
        body: "Miete, Abos und Rechnungen in einem Kalender, bevor sie dein Konto erreichen.",
        alt: "Wiederkehrende Zahlungen in Savlo: Kalender der nächsten Zahlungen",
      },
    },
  },
  fr: {
    intro: {
      t1: "Tes finances,",
      t2: "une habitude quotidienne.",
      body: "Enregistre, suis et comprends ton argent en quelques minutes par jour.",
      cue: "Découvrir l'app",
    },
    chaptersLabel: "Chapitres",
    chapters: chapters(["Saisir", "Comprendre", "Grandir"]),
    steps: {
      voice: {
        eyebrow: "Saisie vocale",
        t1: "Dis-le.",
        t2: "C'est enregistré.",
        body: "Dis à Savlo ce que tu as dépensé, comme tu le dirais à voix haute. Il trouve le montant, la catégorie et le compte.",
        alt: "Saisie vocale dans Savlo : touche le micro et parle",
      },
      import: {
        eyebrow: "Import",
        t1: "Emporte ton historique",
        t2: "avec toi.",
        body: "Dépose le tableur que tu tiens déjà. Savlo lit le format, classe tout et repère tes mouvements récurrents.",
        alt: "Import dans Savlo : ton historique en CSV, XLSX ou XLS",
      },
      today: {
        eyebrow: "Aujourd'hui",
        t1: "Où en est ton argent,",
        t2: "aujourd'hui.",
        body: "Ce que tu as, ce qui est entré et sorti ce mois-ci, tes fonds et tes derniers mouvements.",
        alt: "Aujourd'hui dans Savlo : patrimoine de $50,829 sur 30 jours",
      },
      reports: {
        eyebrow: "Rapports",
        t1: "Vois où",
        t2: "tout s'écoule.",
        body: "De tes revenus à chaque catégorie, en une image qui se lit d'un coup d'œil.",
        alt: "Rapports de Savlo : flux du salaire vers chaque catégorie",
      },
      ai: {
        eyebrow: "Savlo AI",
        t1: "Demande tout",
        t2: "à ton argent.",
        body: "Des réponses tirées de tes propres chiffres, pas des conseils génériques, avec la prochaine étape.",
        alt: "Savlo AI : comment puis-je t'aider aujourd'hui ?",
      },
      budget: {
        eyebrow: "Budget",
        t1: "Fixe tes limites",
        t2: "de dépenses du mois.",
        body: "Dépense en sachant ce qu'il te reste. Fixe-les toi-même, ou laisse Savlo les suggérer.",
        alt: "Budget dans Savlo : $2,956 dépensés sur $3,871, par catégorie",
      },
      funds: {
        eyebrow: "Fonds",
        t1: "Mets de l'argent de côté",
        t2: "pour un objectif précis.",
        body: "Un voyage, les imprévus, l'assurance auto : chaque fonds montre où tu en es et ce qu'il te manque.",
        alt: "Fonds dans Savlo : un fonds voyage à 60 % de $3,000",
      },
      recurring: {
        eyebrow: "Récurrents",
        t1: "Aucun paiement",
        t2: "ne te prend par surprise.",
        body: "Loyer, abonnements et factures sur un seul calendrier, avant qu'ils n'arrivent sur ton compte.",
        alt: "Paiements récurrents dans Savlo : calendrier des prochains paiements",
      },
    },
  },
}

/*
 * Money on the landing follows the reader's language, symbol in front:
 * en/es "$1,800", pt/de "$1.800", fr "$1 800". Spanish has no phone country
 * here, so it groups like English. The minus is always U+2212.
 */
const NUMBER_LOCALE: Record<Locale, string> = {
  en: "en-US",
  es: "en-US",
  pt: "pt-BR",
  de: "de-DE",
  fr: "fr-FR",
}

export function formatMoney(locale: Locale, value: number, opts: { compact?: boolean } = {}) {
  const abs = Math.abs(value)
  const hasCents = !opts.compact && Math.round(abs * 100) % 100 !== 0
  const body = new Intl.NumberFormat(NUMBER_LOCALE[locale], {
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: opts.compact ? 1 : hasCents ? 2 : 0,
    notation: opts.compact ? "compact" : "standard",
  }).format(abs)
  return `${value < 0 ? "−" : ""}$${body}`
}

export function formatPercent(locale: Locale, value: number, digits = 0) {
  return new Intl.NumberFormat(NUMBER_LOCALE[locale], {
    style: "percent",
    maximumFractionDigits: digits,
  }).format(value)
}

export function formatCount(locale: Locale, value: number) {
  return new Intl.NumberFormat(NUMBER_LOCALE[locale]).format(value)
}
