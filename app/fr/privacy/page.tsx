import type { Metadata } from "next"
import { SiteHeader } from "@/components/savlo/site-header"
import { SiteFooter } from "@/components/savlo/site-footer"
import LegalPage from "@/components/savlo/legal-page"
import privacyData from "@/lib/legal/privacy-fr.json"

export const metadata: Metadata = {
  title: privacyData.title,
  description: privacyData.description,
  alternates: {
    canonical: "/fr/privacy",
    languages: {
      en: "https://savloapp.com/privacy",
      es: "https://savloapp.com/es/privacy",
      "pt-BR": "https://savloapp.com/pt/privacy",
      "de-DE": "https://savloapp.com/de/privacy",
      "fr-FR": "https://savloapp.com/fr/privacy",
      "x-default": "https://savloapp.com/privacy",
    },
  },
}

export default function PrivacyPage() {
  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <SiteHeader locale="fr" />
      <LegalPage data={privacyData} locale="fr" type="privacy" />
      <SiteFooter locale="fr" />
    </div>
  )
}
