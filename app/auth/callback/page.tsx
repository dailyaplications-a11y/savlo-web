import type { Metadata } from "next"
import { redirect } from "next/navigation"

type CallbackSearchParams = Record<string, string | string[] | undefined>

const defaultSupabaseUrl = "https://fhvrnuqhutcluqhvbykc.supabase.co"

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export const dynamic = "force-dynamic"

export default async function AuthCallbackPage({
  searchParams,
}: {
  searchParams?: CallbackSearchParams | Promise<CallbackSearchParams>
}) {
  const resolvedSearchParams = await Promise.resolve(searchParams ?? {})
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim().replace(/\/$/, "") ||
    defaultSupabaseUrl
  const redirectUrl = new URL(
    "/auth/v1/callback",
    supabaseUrl,
  )
  const query = new URLSearchParams()

  for (const [key, value] of Object.entries(resolvedSearchParams)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        query.append(key, item)
      }
      continue
    }

    if (typeof value === "string") {
      query.append(key, value)
    }
  }

  const search = query.toString()
  if (search) {
    redirectUrl.search = search
  }

  redirect(redirectUrl.toString())
}
