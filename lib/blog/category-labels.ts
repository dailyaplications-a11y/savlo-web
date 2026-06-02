import type { Locale } from "@/lib/i18n"
import type { BlogCategory } from "./posts"

export type BlogCategoryLabel = BlogCategory | "All"

export const blogCategoryLabels: Record<Locale, Record<BlogCategoryLabel, string>> =
  {
    en: {
      All: "All",
      Budgeting: "Budgeting",
      Saving: "Saving",
      Debt: "Debt",
      "Money Psychology": "Money Psychology",
      Comparisons: "Comparisons",
      Goals: "Goals",
    },
    es: {
      All: "Todo",
      Budgeting: "Presupuesto",
      Saving: "Ahorro",
      Debt: "Deuda",
      "Money Psychology": "Psicología del dinero",
      Comparisons: "Comparativas",
      Goals: "Metas",
    },
    pt: {
      All: "Tudo",
      Budgeting: "Orçamento",
      Saving: "Poupança",
      Debt: "Dívida",
      "Money Psychology": "Psicologia do dinheiro",
      Comparisons: "Comparativos",
      Goals: "Metas",
    },
    de: {
      All: "Alle",
      Budgeting: "Budgetierung",
      Saving: "Sparen",
      Debt: "Schulden",
      "Money Psychology": "Geldpsychologie",
      Comparisons: "Vergleiche",
      Goals: "Ziele",
    },
    fr: {
      All: "Tout",
      Budgeting: "Budget",
      Saving: "Épargne",
      Debt: "Dette",
      "Money Psychology": "Psychologie de l'argent",
      Comparisons: "Comparatifs",
      Goals: "Objectifs",
    },
  }

export function blogCategoryLabel(locale: Locale, category: BlogCategory) {
  return blogCategoryLabels[locale][category]
}
