/*
 * The drawing fills only 70 × 131 of its 180 × 180 box (measured with
 * getBBox, stroke included), so in the square box a "24 px" mark is an 11 px
 * stem beside the wordmark. `tight` crops the box to the drawing: `size` is
 * then the mark's real height (owner, 2026-11-05: "el logotipo se ve raro").
 */
const TIGHT = { x: 59, y: 22, w: 70, h: 131 }

/** The Savlo mark in brand colours: mint stem, two-tone sprout leaf. */
export function SavloMark({ size = 30, className, tight = false }: { size?: number; className?: string; tight?: boolean }) {
  const width = tight ? Math.round((size * TIGHT.w) / TIGHT.h) : size
  const viewBox = tight ? `${TIGHT.x} ${TIGHT.y} ${TIGHT.w} ${TIGHT.h}` : "0 0 180 180"
  return (
    <svg width={width} height={size} viewBox={viewBox} className={className} aria-hidden>
      <g transform="translate(49,32) scale(0.9)">
        <path d="M 68 120 C 5 120, 5 74, 50 74 C 95 74, 95 18, 32 18" stroke="#4CAF8A" strokeWidth="12" strokeLinecap="round" fill="none" />
        <circle cx="68" cy="120" r="13" fill="#4CAF8A" />
        <circle cx="32" cy="18" r="10" fill="#4CAF8A" />
        <g transform="translate(37, 10) rotate(-32)">
          <ellipse cx="0" cy="6" rx="17" ry="7.5" fill="#4CAF8A" />
          <ellipse cx="0" cy="0" rx="17" ry="7.5" fill="#A8D8B9" />
        </g>
      </g>
    </svg>
  )
}
