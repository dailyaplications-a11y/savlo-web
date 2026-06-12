import type { Metadata } from "next"
import { SiteHeader } from "@/components/savlo/site-header"
import { SiteFooter } from "@/components/savlo/site-footer"
import LegalPage from "@/components/savlo/legal-page"
import termsData from "@/lib/legal/terms-fr.json"

export const metadata: Metadata = {
  title: termsData.title,
  description: termsData.description,
  alternates: {
    canonical: "/fr/terms",
    languages: {
      en: "https://savloapp.com/terms",
      es: "https://savloapp.com/es/terms",
      "pt-BR": "https://savloapp.com/pt/terms",
      "de-DE": "https://savloapp.com/de/terms",
      "fr-FR": "https://savloapp.com/fr/terms",
      "x-default": "https://savloapp.com/terms",
    },
  },
}

export default function TermsPage() {
  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <SiteHeader locale="fr" />
      <LegalPage data={termsData} locale="fr" type="terms" />
      <SiteFooter locale="fr" />
    </div>
  )
}
