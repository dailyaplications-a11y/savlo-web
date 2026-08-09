import type { Metadata } from "next"
import { SiteHeader } from "@/components/savlo/site-header"
import { SiteFooter } from "@/components/savlo/site-footer"
import LegalPage from "@/components/savlo/legal-page"
import deleteAccountData from "@/lib/legal/delete-account-fr.json"

export const metadata: Metadata = {
  title: deleteAccountData.title,
  description: deleteAccountData.description,
  alternates: {
    canonical: "/fr/delete-account",
    languages: {
      en: "https://savloapp.com/delete-account",
      es: "https://savloapp.com/es/delete-account",
      "pt-BR": "https://savloapp.com/pt/delete-account",
      "de-DE": "https://savloapp.com/de/delete-account",
      "fr-FR": "https://savloapp.com/fr/delete-account",
      "x-default": "https://savloapp.com/delete-account",
    },
  },
}

export default function DeleteAccountPage() {
  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <SiteHeader locale="fr" />
      <LegalPage data={deleteAccountData} locale="fr" type="delete-account" />
      <SiteFooter locale="fr" />
    </div>
  )
}
