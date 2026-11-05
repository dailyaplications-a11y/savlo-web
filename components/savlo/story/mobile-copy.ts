import type { Locale } from "@/lib/i18n"
import type { StepId } from "./story-copy"

/*
 * The phone and tablet page (under 960 px) shows each step in its own still
 * emulator, its eyebrow and title from story-copy.ts, and under them the
 * step's body split into two or three short lines, each with its glyph. The
 * lines say what the body says, nothing more (owner, 2026-11-05). Spanish is
 * neutral with tuteo, French "tu", German "du", Portuguese "você".
 */

export type LineIcon =
  | "mic"
  | "check"
  | "upload"
  | "spark"
  | "repeat"
  | "wallet"
  | "flow"
  | "rows"
  | "sankey"
  | "eye"
  | "chat"
  | "next"
  | "gauge"
  | "target"
  | "progress"
  | "calendar"
  | "bell"

export const LINE_ICONS: Record<StepId, LineIcon[]> = {
  voice: ["mic", "check"],
  import: ["upload", "spark", "repeat"],
  today: ["wallet", "flow", "rows"],
  reports: ["sankey", "eye"],
  ai: ["chat", "next"],
  budget: ["gauge", "spark"],
  funds: ["target", "progress"],
  recurring: ["calendar", "bell"],
}

export const stepLines: Record<Locale, Record<StepId, string[]>> = {
  en: {
    voice: ["Tell Savlo what you spent, the way you'd say it out loud.", "It finds the amount, the category and the account."],
    import: ["Drop in the spreadsheet you already keep.", "Savlo reads the format and sorts it all out.", "And finds your recurring movements."],
    today: ["What you have, across all your accounts.", "What came in and went out this month.", "Your funds and your latest movements."],
    reports: ["From your income to every category.", "In one picture you read at a glance."],
    ai: ["Answers from your own numbers, not generic tips.", "And what to do next."],
    budget: ["Spend knowing what's left.", "Set them yourself, or let Savlo suggest them."],
    funds: ["A trip, emergencies, car insurance.", "Each fund shows how much you have and how much is left."],
    recurring: ["Rent, subscriptions and bills on one calendar.", "Before they reach your account."],
  },
  es: {
    voice: ["Cuéntale a Savlo lo que gastaste, como lo dirías en voz alta.", "Encuentra el monto, la categoría y la cuenta."],
    import: ["Sube la hoja de cálculo que ya usas.", "Savlo entiende el formato y lo ordena todo.", "Y encuentra tus movimientos recurrentes."],
    today: ["Cuánto tienes, sumando todas tus cuentas.", "Cuánto entró y salió este mes.", "Tus fondos y tus últimos movimientos."],
    reports: ["De tus ingresos a cada categoría.", "En una imagen que se entiende de un vistazo."],
    ai: ["Respuestas con tus propios números, no consejos genéricos.", "Y qué hacer después."],
    budget: ["Gasta sabiendo cuánto te queda.", "Defínelos tú, o deja que Savlo los sugiera."],
    funds: ["Viaje, emergencias, el seguro del auto.", "Cada fondo muestra cuánto llevas y cuánto te falta."],
    recurring: ["Alquiler, suscripciones y servicios en un solo calendario.", "Antes de que lleguen a tu cuenta."],
  },
  pt: {
    voice: ["Conte ao Savlo o que você gastou, do jeito que falaria em voz alta.", "Ele encontra o valor, a categoria e a conta."],
    import: ["Envie a planilha que você já usa.", "O Savlo entende o formato e organiza tudo.", "E encontra seus movimentos recorrentes."],
    today: ["Quanto você tem, somando todas as suas contas.", "Quanto entrou e saiu este mês.", "Seus fundos e seus últimos movimentos."],
    reports: ["Da sua renda a cada categoria.", "Em uma imagem que você entende num relance."],
    ai: ["Respostas com os seus próprios números, não dicas genéricas.", "E o que fazer em seguida."],
    budget: ["Gaste sabendo quanto ainda sobra.", "Defina você mesmo, ou deixe o Savlo sugerir."],
    funds: ["Viagem, emergências, o seguro do carro.", "Cada fundo mostra quanto você já tem e quanto falta."],
    recurring: ["Aluguel, assinaturas e contas em um só calendário.", "Antes de chegarem à sua conta."],
  },
  de: {
    voice: ["Erzähl Savlo, was du ausgegeben hast, so wie du es laut sagen würdest.", "Savlo findet Betrag, Kategorie und Konto."],
    import: ["Lade die Tabelle hoch, die du schon führst.", "Savlo erkennt das Format und ordnet alles.", "Und findet deine wiederkehrenden Bewegungen."],
    today: ["Wie viel du hast, über alle deine Konten.", "Was diesen Monat rein- und rausging.", "Deine Fonds und deine letzten Bewegungen."],
    reports: ["Von deinen Einnahmen bis zu jeder Kategorie.", "In einem Bild, das du auf einen Blick verstehst."],
    ai: ["Antworten aus deinen eigenen Zahlen statt allgemeiner Tipps.", "Und was du als Nächstes tun kannst."],
    budget: ["Gib aus und wisse, was dir bleibt.", "Leg sie selbst fest oder lass Savlo sie vorschlagen."],
    funds: ["Reise, Notfälle, die Autoversicherung.", "Jeder Fonds zeigt, wie viel du hast und wie viel noch fehlt."],
    recurring: ["Miete, Abos und Rechnungen in einem Kalender.", "Bevor sie dein Konto erreichen."],
  },
  fr: {
    voice: ["Dis à Savlo ce que tu as dépensé, comme tu le dirais à voix haute.", "Il trouve le montant, la catégorie et le compte."],
    import: ["Dépose le tableur que tu tiens déjà.", "Savlo lit le format et classe tout.", "Et repère tes mouvements récurrents."],
    today: ["Ce que tu as, sur tous tes comptes.", "Ce qui est entré et sorti ce mois-ci.", "Tes fonds et tes derniers mouvements."],
    reports: ["De tes revenus à chaque catégorie.", "En une image qui se lit d'un coup d'œil."],
    ai: ["Des réponses tirées de tes propres chiffres, pas des conseils génériques.", "Avec la prochaine étape."],
    budget: ["Dépense en sachant ce qu'il te reste.", "Fixe-les toi-même, ou laisse Savlo les suggérer."],
    funds: ["Un voyage, les imprévus, l'assurance auto.", "Chaque fonds montre où tu en es et ce qu'il te manque."],
    recurring: ["Loyer, abonnements et factures sur un seul calendrier.", "Avant qu'ils n'arrivent sur ton compte."],
  },
}
