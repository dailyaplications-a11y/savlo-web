import type { Metadata } from "next"
import { SiteHeader } from "@/components/savlo/site-header"
import { SiteFooter } from "@/components/savlo/site-footer"
import LegalPage from "@/components/savlo/legal-page"
import arrepentimientoData from "@/lib/legal/arrepentimiento-es.json"

// Página exigida por la Disposición 954/2025 (Subsecretaría de Defensa del
// Consumidor y Lealtad Comercial), que reemplazó a la Resolución 424/2020.
//
// Sólo existe en español: es una obligación del derecho argentino y el enlace
// tiene que decir literalmente "BOTÓN DE ARREPENTIMIENTO" para cumplirla, así
// que traducirla lo empeoraría. El pie de página la enlaza desde los cinco
// idiomas igual, porque la norma pide que sea alcanzable "a simple vista y en
// el primer acceso" — no que el visitante sepa buscarla en castellano.
export const metadata: Metadata = {
  title: arrepentimientoData.title,
  description: arrepentimientoData.description,
  alternates: {
    canonical: "/es/arrepentimiento",
  },
}

export default function ArrepentimientoPage() {
  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <SiteHeader locale="es" />
      <LegalPage
        data={arrepentimientoData}
        locale="es"
        type="delete-account"
      />
      <SiteFooter locale="es" />
    </div>
  )
}
