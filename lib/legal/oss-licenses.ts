import { readFileSync } from "node:fs"
import { join } from "node:path"

export type OssNotice = {
  family: string
  text: string
  /** Otros componentes que comparten este mismo aviso, palabra por palabra. */
  shared: string[]
}

export type OssPackage = {
  name: string
  slug: string
  origin: "package" | "engine" | "font"
  version: string | null
  families: string[]
  notices: OssNotice[]
}

export type OssLicenseData = {
  appVersion: string
  generatedAt: string
  packageCount: number
  noticeCount: number
  originCounts: Record<OssPackage["origin"], number>
  families: { family: string; packageCount: number }[]
  packages: OssPackage[]
}

// Se lee del disco en vez de `import ... from "*.json"` a propósito: son ~2 MB
// de avisos verbatim, y meterlos por el grafo de módulos hace que TypeScript
// infiera un tipo literal gigante y que el bundler los copie a cada chunk que
// los toque. Acá el JSON se lee una vez, en build, y sale tipado.
export const ossLicenses: OssLicenseData = JSON.parse(
  readFileSync(join(process.cwd(), "lib/legal/oss-licenses.json"), "utf8"),
)
