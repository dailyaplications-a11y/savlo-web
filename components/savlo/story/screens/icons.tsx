import { useId, type ReactNode } from "react"

/*
 * The handful of glyphs the storyboard's screens need, drawn like the app's
 * Phosphor set: outline, round caps and joins, one stroke for every size
 * (the screen is scaled as a whole, so the stroke scales with it).
 * `fill` is for the app's state pairs (the selected tab) and its marks.
 */

type IconProps = { size?: number; stroke?: number; className?: string }

function Glyph({ size = 20, stroke = 1.6, className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      aria-hidden
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

export const Icon = {
  home: (p: IconProps & { filled?: boolean }) => (
    <Glyph {...p}>
      <path
        d="M4 10.4 12 3.5l8 6.9V19a1.2 1.2 0 0 1-1.2 1.2H15v-5.4a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8v5.4H5.2A1.2 1.2 0 0 1 4 19Z"
        fill={p.filled ? "currentColor" : "none"}
      />
    </Glyph>
  ),
  stack: (p: IconProps) => (
    <Glyph {...p}>
      <path d="m3 8 9 5 9-5-9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </Glyph>
  ),
  pie: (p: IconProps & { filled?: boolean }) =>
    p.filled ? (
      <Glyph {...p}>
        <circle cx="12" cy="12" r="9" fill="currentColor" />
        <path d="M12 12V3M12 12l7.8 4.5" stroke="#1A2A3D" strokeWidth={1.8} />
      </Glyph>
    ) : (
      <Glyph {...p}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 12V3M12 12l7.8 4.5" />
      </Glyph>
    ),
  dots: (p: IconProps) => (
    <Glyph {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="8" cy="12" r=".6" fill="currentColor" />
      <circle cx="12" cy="12" r=".6" fill="currentColor" />
      <circle cx="16" cy="12" r=".6" fill="currentColor" />
    </Glyph>
  ),
  plus: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M12 4.5v15M4.5 12h15" />
    </Glyph>
  ),
  search: (p: IconProps) => (
    <Glyph {...p}>
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m15.8 15.8 4.4 4.4" />
    </Glyph>
  ),
  presentation: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M3.5 4.5h17v11h-17z" />
      <path d="M12 15.5v3M8.5 20.5l3.5-2 3.5 2M8.5 12.5v-2M12 12.5V8M15.5 12.5V9.5" />
    </Glyph>
  ),
  // Phosphor's Info: the i has its hook and its foot
  info: (p: IconProps) => (
    <Glyph {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M11.25 11.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 0 .75.75" />
      <circle cx="11.6" cy="7.9" r="1.1" fill="currentColor" stroke="none" />
    </Glyph>
  ),
  // Phosphor's CaretDown, the app's chevron under a value that opens a list
  caretDown: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M19.5 9 12 16.5 4.5 9" />
    </Glyph>
  ),
  caretLeft: (p: IconProps) => (
    <Glyph {...p}>
      <path d="m15 6-6 6 6 6" />
    </Glyph>
  ),
  caretRight: (p: IconProps) => (
    <Glyph {...p}>
      <path d="m9 6 6 6-6 6" />
    </Glyph>
  ),
  arrowUpRight: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </Glyph>
  ),
  arrowDownLeft: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M17 7 7 17M15.5 17H7V8.5" />
    </Glyph>
  ),
  arrowLeft: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M20 12H4M10 6l-6 6 6 6" />
    </Glyph>
  ),
  arrowDown: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M12 4v16M6 14l6 6 6-6" />
    </Glyph>
  ),
  dotsH: (p: IconProps) => (
    <Glyph {...p}>
      <circle cx="5.5" cy="12" r=".9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r=".9" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="12" r=".9" fill="currentColor" stroke="none" />
    </Glyph>
  ),
  copy: (p: IconProps) => (
    <Glyph {...p}>
      <rect x="8" y="8" width="12" height="12" rx="1.5" />
      <path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8" />
    </Glyph>
  ),
  pencil: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M15.5 4.5 19.5 8.5 9 19H5v-4Z" />
      <path d="m13 7 4 4" />
    </Glyph>
  ),
  thumbUp: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M7.5 10.5v9.5H4.5a1 1 0 0 1-1-1V11.5a1 1 0 0 1 1-1Z" />
      <path d="M7.5 10.5 11.4 3.5a2.6 2.6 0 0 1 2.6 2.6V9h5.1a1.7 1.7 0 0 1 1.7 2l-1.3 7.3A2 2 0 0 1 17.5 20h-10" />
    </Glyph>
  ),
  thumbDown: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M7.5 13.5V4H4.5a1 1 0 0 0-1 1v7.5a1 1 0 0 0 1 1Z" />
      <path d="M7.5 13.5l3.9 7a2.6 2.6 0 0 0 2.6-2.6V15h5.1a1.7 1.7 0 0 0 1.7-2l-1.3-7.3A2 2 0 0 0 17.5 4h-10" />
    </Glyph>
  ),
  arrowRight: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </Glyph>
  ),
  arrowUp: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M12 20V4M6 10l6-6 6 6" />
    </Glyph>
  ),
  expand: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M14.5 4.5h5v5M9.5 19.5h-5v-5M19.5 4.5 13.5 10.5M4.5 19.5l6-6" />
    </Glyph>
  ),
  check: (p: IconProps) => (
    <Glyph {...p}>
      <path d="m4.5 12.5 4.8 4.8L19.5 7" />
    </Glyph>
  ),
  close: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Glyph>
  ),
  sliders: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M4 8h9M17 8h3M4 16h3M11 16h9" />
      <circle cx="15" cy="8" r="2" />
      <circle cx="9" cy="16" r="2" />
    </Glyph>
  ),
  share: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M12 14V3.5M8 7.5l4-4 4 4" />
      <path d="M8.5 10.5H6a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8.5a1 1 0 0 0-1-1h-2.5" />
    </Glyph>
  ),
  bars: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M3.5 20.5h17M6 20.5v-6h3.5v6M10.25 20.5v-10h3.5v10M14.5 20.5V5h3.5v15.5" />
    </Glyph>
  ),
  tree: (p: IconProps) => (
    <Glyph {...p}>
      <rect x="2.5" y="9.5" width="6" height="5" rx="1" />
      <rect x="15.5" y="3.5" width="6" height="5" rx="1" />
      <rect x="15.5" y="15.5" width="6" height="5" rx="1" />
      <path d="M8.5 12H12M12 6v12M12 6h3.5M12 18h3.5" />
    </Glyph>
  ),
  mic: (p: IconProps) => (
    <Glyph {...p}>
      <rect x="8.5" y="2.8" width="7" height="12" rx="3.5" />
      <path d="M5 11.5a7 7 0 0 0 14 0M12 18.5v3" />
    </Glyph>
  ),
  menu: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M4 8h16M4 16h10" />
    </Glyph>
  ),
  // Phosphor's List and CalendarBlank, on their own grid
  list: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5" />
    </Glyph>
  ),
  calendar: (p: IconProps) => (
    <Glyph {...p}>
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="0.75" />
      <path d="M16.5 2.25v3M7.5 2.25v3M3.75 8.25h16.5" />
    </Glyph>
  ),
  dotsV: (p: IconProps) => (
    <Glyph {...p}>
      <circle cx="12" cy="5.5" r=".9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r=".9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="18.5" r=".9" fill="currentColor" stroke="none" />
    </Glyph>
  ),
  swap: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M4 8.5h14l-3.5-3.5M20 15.5H6l3.5 3.5" />
    </Glyph>
  ),
  listSearch: (p: IconProps) => (
    <Glyph {...p}>
      <path d="M4 6.5h14M4 12h6M4 17.5h6" />
      <circle cx="16" cy="15" r="3.4" />
      <path d="m18.5 17.5 2.2 2.2" />
    </Glyph>
  ),
}

/* The streak's flame: the app's warm drop, in two tones. */
// The page draws the same screen twice (storyboard and the QR dialog), so
// every gradient and clip gets its own id: a repeated one can blank them.
export function Flame({ size = 16 }: { size?: number }) {
  const id = useId()
  return (
    <svg aria-hidden width={size} height={size} viewBox="0 0 24 24">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F9B46B" />
          <stop offset="1" stopColor="#E8742F" />
        </linearGradient>
      </defs>
      <path d="M12 2.5c3.2 3.6 6.5 7.4 6.5 11.6a6.5 6.5 0 0 1-13 0C5.5 9.9 8.8 6.1 12 2.5Z" fill={`url(#${id})`} />
      <path d="M12 11c1.4 1.7 2.9 3.2 2.9 5a2.9 2.9 0 0 1-5.8 0c0-1.8 1.5-3.3 2.9-5Z" fill="#FCE2BE" opacity=".9" />
    </svg>
  )
}

/* A small US flag: flag emoji don't draw on Windows, so it is a picture. */
export function FlagUS({ width = 18 }: { width?: number }) {
  const id = useId()
  return (
    <svg aria-hidden width={width} height={(width * 12) / 18} viewBox="0 0 18 12">
      <clipPath id={id}>
        <rect width="18" height="12" rx="1.6" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <rect width="18" height="12" fill="#F4F4F4" />
        {[0, 2, 4, 6, 8, 10, 12].map((k) => (
          <rect key={k} y={(k * 12) / 13} width="18" height={12 / 13} fill="#D83A3A" />
        ))}
        <rect width="8" height={12 * (7 / 13)} fill="#2F4A8F" />
      </g>
    </svg>
  )
}

/*
 * The "+" sheet's four entries, the app's duotone drawings (assets/quick_entry/):
 * a translucent body in the entry's colour and the detail in its light tone.
 * Not Phosphor, like the app: they are small pictures, not glyphs.
 */
export const EntryArt = {
  voice: ({ size = 32 }: { size?: number }) => (
    <svg aria-hidden width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#4CAF8A" strokeWidth="1.8" strokeLinecap="round">
      <rect x="8.75" y="2.75" width="6.5" height="12" rx="3.25" fill="#4CAF8A" stroke="none" />
      <path d="M5.25 11.25a6.75 6.75 0 0 0 13.5 0" />
      <path d="M12 18v3.25" />
    </svg>
  ),
  text: ({ size = 38 }: { size?: number }) => (
    <svg aria-hidden width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="4" y="5" width="24" height="19" rx="6" fill="#2E6DA4" fillOpacity=".55" />
      <path d="M10 24l-3 4.5 8-4.5" fill="#2E6DA4" fillOpacity=".55" />
      <path d="M10 12h12M10 17h7" stroke="#8EC0EC" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  import: ({ size = 38 }: { size?: number }) => (
    <svg aria-hidden width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M8 4h11l7 7v14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" fill="#8B5CF6" fillOpacity=".45" />
      <path d="M19 4v5a2 2 0 0 0 2 2h5" fill="#8B5CF6" fillOpacity=".7" />
      <path d="M15.5 23v-8M12 18.5l3.5-3.5 3.5 3.5" stroke="#C7B6F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  manual: ({ size = 34 }: { size?: number }) => (
    <svg aria-hidden width={size} height={size} viewBox="0 0 32 32" fill="none">
      {[
        [4, 4], [12.5, 4], [21, 4],
        [4, 12.5], [12.5, 12.5], [21, 12.5],
      ].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="7" height="7" rx="2.5" fill="#F7F3EE" fillOpacity=".3" />
      ))}
      <rect x="4" y="21" width="15.5" height="7" rx="2.5" fill="#F7F3EE" fillOpacity=".3" />
      <rect x="21" y="21" width="7" height="7" rx="2.5" fill="#4CAF8A" />
    </svg>
  ),
}

/* The Savlo AI mark, the app's own drawing. */
export function SavloAiMark({ size = 32, className }: { size?: number; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} src="/savlo_ai_icon.svg" width={size} height={size} alt="" aria-hidden draggable={false} />
}
