import type { Metadata } from "next"
import { notInSearch } from "@/lib/site"
import { SiteFooter } from "@/components/savlo/site-footer"
import LegalPage from "@/components/savlo/legal-page"
import data from "@/lib/legal/arrepentimiento-fr.json"
import { ARREPENTIMIENTO_LANGUAGES } from "@/lib/legal/arrepentimiento"

// A translation of /es/arrepentimiento (Argentina, Disposition 954/2025): the
// Spanish page is the legally binding one, and this one says so and links to it.
// reachable (footer, app, Google Play), but not a search result: lib/site.ts
export const metadata: Metadata = {
  robots: notInSearch,
  title: data.title,
  description: data.description,
  alternates: { canonical: "/fr/arrepentimiento", languages: ARREPENTIMIENTO_LANGUAGES },
}

export default function WithdrawalPage() {
  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <LegalPage data={data} locale="fr" type="delete-account" />
      <SiteFooter locale="fr" />
    </div>
  )
}
