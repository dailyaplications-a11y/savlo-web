"use client"

import { useEffect, useRef, useState } from "react"

// El filtro toca el DOM ya renderizado en el servidor en lugar de recibir la
// lista por props. Son 1,3 MB de texto de licencias: pasarlos por un componente
// de cliente los mandaría DOS veces al navegador (el HTML y otra vez el payload
// de hidratación). Acá el bundle sólo lleva este input.
export function OssLicenseFilter({
  total,
  placeholder,
  showingAll,
  showingSome,
  emptyLabel,
}: {
  total: number
  placeholder: string
  showingAll: string
  showingSome: string
  emptyLabel: string
}) {
  const [query, setQuery] = useState("")
  const [visible, setVisible] = useState(total)
  const initialised = useRef(false)

  useEffect(() => {
    // El primer render no toca nada: el HTML del servidor ya muestra todo.
    if (!initialised.current && query === "") {
      initialised.current = true
      return
    }
    initialised.current = true

    const needle = query.trim().toLowerCase()
    let shown = 0

    for (const node of document.querySelectorAll<HTMLElement>("[data-oss-haystack]")) {
      const matches = needle === "" || (node.dataset.ossHaystack ?? "").includes(needle)
      node.hidden = !matches
      if (matches) shown += 1
    }

    for (const group of document.querySelectorAll<HTMLElement>("[data-oss-group]")) {
      const anyVisible = group.querySelector("[data-oss-haystack]:not([hidden])") !== null
      group.hidden = !anyVisible
    }

    setVisible(shown)
  }, [query])

  const status =
    visible === 0
      ? emptyLabel
      : visible === total
        ? showingAll.replace("{total}", String(total))
        : showingSome.replace("{count}", String(visible)).replace("{total}", String(total))

  return (
    <div className="mt-8">
      <input
        type="search"
        autoComplete="off"
        spellCheck={false}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full rounded-[var(--radius-sm)] border border-border bg-surface px-4 py-3 text-[14px] text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60"
      />
      <p aria-live="polite" className="mt-2 text-[12px] text-muted-foreground/70">
        {status}
      </p>
    </div>
  )
}
