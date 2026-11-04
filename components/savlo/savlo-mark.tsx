/** The Savlo mark in brand colours: mint stem, two-tone sprout leaf. */
export function SavloMark({ size = 30, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" className={className} aria-hidden>
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
