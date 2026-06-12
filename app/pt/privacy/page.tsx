import type { Metadata } from "next"
import { SiteHeader } from "@/components/savlo/site-header"
import { SiteFooter } from "@/components/savlo/site-footer"
import LegalPage from "@/components/savlo/legal-page"
import privacyData from "@/lib/legal/privacy-pt.json"

export const metadata: Metadata = {
  title: privacyData.title,
  description: privacyData.description,
  alternates: {
    canonical: "/pt/privacy",
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
      <SiteHeader locale="pt" />
      <LegalPage data={privacyData} locale="pt" type="privacy" />
      <SiteFooter locale="pt" />
    </div>
  )
}
