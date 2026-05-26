import { buildLlmsFull } from "@/lib/llms"

export const revalidate = 86400

export function GET() {
  return new Response(buildLlmsFull(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
