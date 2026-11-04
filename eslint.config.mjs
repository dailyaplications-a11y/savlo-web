import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // The blog is long-form copy written in JSX: straight quotes and
      // apostrophes render fine, and escaping ~100 of them only hurts reading.
      "react/no-unescaped-entities": "off",
      // React Compiler advisories (react-hooks v6). The site does not run the
      // compiler, so they are surfaced as warnings to clean up, not failures.
      "react-hooks/refs": "warn",
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/use-memo": "warn",
      "react-hooks/purity": "warn",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".lighthouseci/**",
    "seo-reports/**",
  ]),
])
