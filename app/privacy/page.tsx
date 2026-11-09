import type { Metadata } from "next"
import { SiteFooter } from "@/components/savlo/site-footer"
import LegalPage from "@/components/savlo/legal-page"
import privacyData from "@/lib/legal/privacy-en.json"

export const metadata: Metadata = {
  title: privacyData.title,
  description: privacyData.description,
  alternates: {
    canonical: "/privacy",
    languages: {
      en: "https://www.savloapp.com/privacy",
      es: "https://www.savloapp.com/es/privacy",
      "pt-BR": "https://www.savloapp.com/pt/privacy",
      "de-DE": "https://www.savloapp.com/de/privacy",
      "fr-FR": "https://www.savloapp.com/fr/privacy",
      "x-default": "https://www.savloapp.com/privacy",
    },
  },
}

export default function PrivacyPage() {
  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <LegalPage data={privacyData} locale="en" type="privacy" />
      <SiteFooter />
    </div>
  )
}
