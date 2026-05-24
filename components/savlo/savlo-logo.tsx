import { cn } from "@/lib/utils"

/**
 * Inline SVG replica of the real Savlo logo (/public/icon.svg).
 * Uses the same paths, transforms, and proportions as the brand asset.
 * `className` controls size and colour via Tailwind (fill-current / text-*).
 */
export function SavloLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Rounded square background — inherits bg from parent via fill */}
      <rect width="180" height="180" rx="37" className="fill-current opacity-[0.08]" />
      {/* Icon content — scale + translate mirrors the real icon.svg */}
      <g style={{ transform: "scale(90%)", transformOrigin: "center" }}>
        <g transform="translate(40, 24)" className="fill-current stroke-current">
          {/* S-curve stem */}
          <path
            d="M 68 120 C 5 120, 5 74, 50 74 C 95 74, 95 18, 32 18"
            stroke="currentColor"
            strokeWidth="10.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Bottom dot */}
          <circle cx="68" cy="120" r="12" fill="currentColor" stroke="none" />
          {/* Top dot */}
          <circle cx="32" cy="18" r="9.5" fill="currentColor" stroke="none" />
          {/* Sprout leaf */}
          <g transform="translate(37, 10) rotate(-32)">
            <ellipse cx="0" cy="0" rx="17" ry="7.5" fill="currentColor" stroke="none" opacity={0.75} />
          </g>
        </g>
      </g>
    </svg>
  )
}
