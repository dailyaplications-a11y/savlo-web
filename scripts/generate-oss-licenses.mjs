#!/usr/bin/env node
// Genera `lib/legal/oss-licenses.json`: el inventario completo del software de
// terceros que viaja DENTRO del paquete de la app móvil, con el texto verbatim
// de cada aviso.
//
// La fuente es el `NOTICES` que arma el propio build de Flutter (paquetes de
// pub + terceros del engine: Skia, ICU, HarfBuzz, ANGLE…), más las OFL de las
// tipografías de marca, que viajan como assets nuestros y por eso el NOTICES
// no las alcanza. No se escribe ninguna entrada a mano: si no está en el
// bundle, no está acá; si está en el bundle, está acá.
//
//   node scripts/generate-oss-licenses.mjs [--notices <ruta a NOTICES.Z>]
//
// Correrlo cada vez que cambien las dependencias (el NOTICES.Z lo regenera un
// `flutter build apk --release`).

import { gunzipSync } from "node:zlib"
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const webRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const appRoot = resolve(webRoot, "..")

const NOTICES_CANDIDATES = [
  "build/app/intermediates/flutter/release/flutter_assets/NOTICES.Z",
  "build/app/intermediates/assets/release/mergeReleaseAssets/flutter_assets/NOTICES.Z",
  "build/flutter_assets/NOTICES.Z",
]

function resolveNoticesPath() {
  const flag = process.argv.indexOf("--notices")
  if (flag !== -1 && process.argv[flag + 1]) return resolve(process.argv[flag + 1])
  for (const candidate of NOTICES_CANDIDATES) {
    const full = resolve(appRoot, candidate)
    if (existsSync(full)) return full
  }
  throw new Error(
    `No encontré ningún NOTICES.Z. Corré \`flutter build apk --release\` primero, o pasá --notices <ruta>.\nBuscado en:\n${NOTICES_CANDIDATES.join("\n")}`,
  )
}

// El separador del NOTICES son EXACTAMENTE 80 guiones en su propia línea. No
// vale partir por substring: el aviso de minizip trae adentro una línea de 81
// que partiría ese bloque al medio y dejaría un paquete llamado "-".
const SEPARATOR = /^-{80}$/m

function parseNotices(text) {
  return text
    .split(SEPARATOR)
    .map((chunk) => chunk.replace(/^\n+/, "").replace(/\s+$/, ""))
    .filter((chunk) => chunk.trim().length > 0)
    .map((chunk) => {
      const lines = chunk.split("\n")
      const packages = []
      let i = 0
      while (i < lines.length && lines[i].trim().length > 0) {
        packages.push(lines[i].trim())
        i += 1
      }
      return { packages, text: lines.slice(i).join("\n").replace(/^\n+/, "") }
    })
    .filter((entry) => entry.packages.length > 0 && entry.text.trim().length > 0)
}

// Familia de licencia por huella del texto. El ORDEN importa: varias licencias
// comparten párrafos enteros, así que las pruebas específicas van primero.
const FAMILIES = [
  ["OFL-1.1", (l) => l.includes("sil open font license")],
  [
    "Apache-2.0",
    (l) =>
      (l.includes("apache license") && l.includes("version 2.0")) ||
      l.includes("spdx-license-identifier: apache-2.0"),
  ],
  ["MPL-2.0", (l) => l.includes("mozilla public license")],
  ["LGPL", (l) => l.includes("gnu lesser general public license")],
  ["GPL", (l) => l.includes("gnu general public license")],
  ["FTL", (l) => l.includes("freetype project license")],
  ["BSD-3-Clause", (l) => l.includes("governed by a bsd-style license")],
  [
    "ISC",
    (l) => l.includes("permission to use, copy, modify, and/or distribute this software for any purpose"),
  ],
  [
    "MIT",
    (l) => l.includes("permission is hereby granted, without written agreement and without license or royalty fees"),
  ],
  ["MIT", (l) => l.includes("spdx-license-identifier: mit")],
  [
    "MIT",
    (l) =>
      l.includes("permission is hereby granted, free of charge") &&
      (l.includes("without restriction") || l.includes("to deal in the software")),
  ],
  ["Zlib", (l) => l.includes("altered source versions must be plainly marked")],
  ["Zlib", (l) => l.includes("this software is provided 'as-is', without any express or implied warranty")],
  [
    "BSD-3-Clause",
    (l) =>
      l.includes("redistribution and use in source and binary forms") &&
      (l.includes("neither the name") ||
        l.includes("may not be used to endorse or promote") ||
        l.includes("names of the authors")),
  ],
  ["BSD-2-Clause", (l) => l.includes("redistribution and use in source and binary forms")],
  ["BSL-1.0", (l) => l.includes("boost software license")],
  ["Unicode", (l) => l.includes("unicode") && (l.includes("data files") || l.includes("terms of use"))],
  [
    "MIT",
    (l) =>
      l.includes("permission to use, copy, modify") &&
      (l.includes("without fee is hereby granted") || l.includes("and distribute this software")),
  ],
  ["CC0", (l) => l.includes("creative commons") || l.includes("cc0")],
  ["Public domain", (l) => l.includes("public domain")],
  ["libpng", (l) => l.includes("libpng")],
]

function classify(text) {
  const l = text.replace(/\s+/g, " ").trim().toLowerCase()
  for (const [family, matches] of FAMILIES) {
    if (matches(l)) return family
  }
  // Lo que queda son encabezados de copyright a secas, o punteros al LICENSE
  // del propio proyecto ("see the accompanying README.ijg"). No otorgan
  // permisos por sí solos: se reproducen igual y se cuentan aparte.
  return "Copyright notice"
}

// Peso legal, no orden alfabético: primero lo que impone obligaciones reales.
const FAMILY_ORDER = [
  "GPL",
  "LGPL",
  "MPL-2.0",
  "Apache-2.0",
  "OFL-1.1",
  "MIT",
  "BSD-3-Clause",
  "BSD-2-Clause",
  "ISC",
  "Zlib",
  "BSL-1.0",
  "libpng",
  "FTL",
  "Unicode",
  "CC0",
  "Public domain",
  "Copyright notice",
]

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

// `pubspec.lock` es lo único que sabe la versión de cada paquete de pub, y de
// paso separa las dos poblaciones que el NOTICES mezcla en una lista sola: las
// dependencias que elegimos nosotros y los terceros que trae el engine de
// Flutter (Skia, ICU, ANGLE…), que no salen de pub y no tienen versión propia.
function readLockedVersions() {
  const lock = readFileSync(resolve(appRoot, "pubspec.lock"), "utf8")
  const versions = new Map()
  let current = null
  for (const line of lock.split("\n")) {
    const pkg = /^ {2}([a-z0-9_]+):\s*$/.exec(line)
    if (pkg) {
      current = pkg[1]
      continue
    }
    const version = /^ {4}version:\s*"?([^"\s]+)"?\s*$/.exec(line)
    if (version && current) {
      versions.set(current, version[1])
      current = null
    }
  }
  return versions
}

const noticesPath = resolveNoticesPath()
const entries = parseNotices(gunzipSync(readFileSync(noticesPath)).toString("utf8"))
const lockedVersions = readLockedVersions()

// Las tipografías de marca van como assets (`assets/fonts/`), no como paquete
// de pub: el NOTICES del build no las ve y hay que sumarlas a mano.
const FONT_PACKAGES = {
  "OFL-DMSans.txt": "DM Sans",
  "OFL-Fraunces.txt": "Fraunces",
  "OFL-Inter.txt": "Inter",
  "OFL-NotoColorEmoji.txt": "Noto Color Emoji",
  // Los glifos de la app: fuentes de Phosphor Icons empaquetadas como assets.
  "MIT-Phosphor.txt": "Phosphor Icons",
}
const fontsDir = resolve(appRoot, "assets/fonts")
for (const file of readdirSync(fontsDir).filter((f) => /^(OFL|MIT)-.+\.txt$/.test(f))) {
  const name = FONT_PACKAGES[file]
  if (!name) throw new Error(`Tipografía sin nombre declarado en FONT_PACKAGES: ${file}`)
  entries.push({
    packages: [name],
    text: readFileSync(resolve(fontsDir, file), "utf8").replace(/\r\n/g, "\n").trim(),
  })
}

const byPackage = new Map()
for (const entry of entries) {
  const family = classify(entry.text)
  for (const name of entry.packages) {
    if (!byPackage.has(name)) {
      byPackage.set(name, { name, slug: slugify(name), families: new Set(), notices: [] })
    }
    const pkg = byPackage.get(name)
    pkg.families.add(family)
    pkg.notices.push({
      family,
      text: entry.text,
      shared: entry.packages.filter((other) => other !== name),
    })
  }
}

const fontNames = new Set(Object.values(FONT_PACKAGES))

const collator = new Intl.Collator("en", { sensitivity: "base" })
const packages = [...byPackage.values()]
  .sort((a, b) => collator.compare(a.name, b.name))
  .map((pkg) => ({
    name: pkg.name,
    slug: pkg.slug,
    origin: fontNames.has(pkg.name) ? "font" : lockedVersions.has(pkg.name) ? "package" : "engine",
    version: lockedVersions.get(pkg.name) ?? null,
    families: [...pkg.families].sort((a, b) => FAMILY_ORDER.indexOf(a) - FAMILY_ORDER.indexOf(b)),
    notices: pkg.notices,
  }))

const slugs = new Set()
for (const pkg of packages) {
  if (slugs.has(pkg.slug)) throw new Error(`Slug repetido: ${pkg.slug} (${pkg.name})`)
  slugs.add(pkg.slug)
}

const familyCounts = new Map()
for (const pkg of packages) {
  for (const family of pkg.families) {
    familyCounts.set(family, (familyCounts.get(family) ?? 0) + 1)
  }
}

const versionMatch = /^version:\s*([0-9]+\.[0-9]+\.[0-9]+)/m.exec(
  readFileSync(resolve(appRoot, "pubspec.yaml"), "utf8"),
)
if (!versionMatch) throw new Error("No pude leer `version:` de pubspec.yaml")

const payload = {
  appVersion: versionMatch[1],
  generatedAt: new Date().toISOString().slice(0, 10),
  packageCount: packages.length,
  noticeCount: packages.reduce((total, pkg) => total + pkg.notices.length, 0),
  originCounts: {
    package: packages.filter((pkg) => pkg.origin === "package").length,
    engine: packages.filter((pkg) => pkg.origin === "engine").length,
    font: packages.filter((pkg) => pkg.origin === "font").length,
  },
  families: FAMILY_ORDER.filter((family) => familyCounts.has(family)).map((family) => ({
    family,
    packageCount: familyCounts.get(family),
  })),
  packages,
}

const out = resolve(webRoot, "lib/legal/oss-licenses.json")
writeFileSync(out, `${JSON.stringify(payload)}\n`, "utf8")

console.log(`NOTICES: ${noticesPath}`)
console.log(`${payload.packageCount} componentes · ${payload.noticeCount} avisos · app ${payload.appVersion}`)
console.log(payload.families.map((f) => `${f.family}: ${f.packageCount}`).join(" · "))
console.log(`→ ${out}`)
