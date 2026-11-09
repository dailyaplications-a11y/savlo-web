import type { Metadata } from "next"
import { notInSearch } from "@/lib/site"
import { SiteFooter } from "@/components/savlo/site-footer"
import LegalPage from "@/components/savlo/legal-page"
import deleteAccountData from "@/lib/legal/delete-account-pt.json"

// reachable (footer, app, Google Play), but not a search result: lib/site.ts
export const metadata: Metadata = {
  robots: notInSearch,
  title: deleteAccountData.title,
  description: deleteAccountData.description,
  alternates: {
    canonical: "/pt/delete-account",
    languages: {
      en: "https://www.savloapp.com/delete-account",
      es: "https://www.savloapp.com/es/delete-account",
      "pt-BR": "https://www.savloapp.com/pt/delete-account",
      "de-DE": "https://www.savloapp.com/de/delete-account",
      "fr-FR": "https://www.savloapp.com/fr/delete-account",
      "x-default": "https://www.savloapp.com/delete-account",
    },
  },
}

export default function DeleteAccountPage() {
  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <LegalPage data={deleteAccountData} locale="pt" type="delete-account" />
      <SiteFooter locale="pt" />
    </div>
  )
}
