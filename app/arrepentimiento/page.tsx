import type { Metadata } from "next"
import { SiteFooter } from "@/components/savlo/site-footer"
import LegalPage from "@/components/savlo/legal-page"
import data from "@/lib/legal/arrepentimiento-en.json"
import { ARREPENTIMIENTO_LANGUAGES } from "@/lib/legal/arrepentimiento"

// A translation of /es/arrepentimiento, the page Argentina's Disposition
// 954/2025 requires. The Spanish one is the legally binding version (this one
// says so and links to it); the label "BOTÓN DE ARREPENTIMIENTO" stays literal.
export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: "/arrepentimiento", languages: ARREPENTIMIENTO_LANGUAGES },
}

export default function WithdrawalPage() {
  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <LegalPage data={data} locale="en" type="delete-account" />
      <SiteFooter locale="en" />
    </div>
  )
}
