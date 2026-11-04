import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import styles from "./phone-frame.module.css"

/**
 * The one device of the landing: a 300 × 618 handset with a brushed metal
 * rim, an Android punch-hole and a clean 9:41 status bar drawn on top of the
 * capture (the captures ship without theirs). Scale it from the outside.
 */
export function PhoneFrame({
  children,
  className,
  statusBar = true,
}: {
  children: ReactNode
  className?: string
  statusBar?: boolean
}) {
  return (
    <div className={cn(styles.rim, className)}>
      <span aria-hidden className={cn(styles.key, styles.keyAction)} />
      <span aria-hidden className={cn(styles.key, styles.keyUp)} />
      <span aria-hidden className={cn(styles.key, styles.keyDown)} />
      <span aria-hidden className={cn(styles.key, styles.keyPower)} />
      <div className={styles.bezel}>
        <div className={styles.screen}>
          {children}
          {statusBar ? <StatusBar /> : null}
          <span aria-hidden className={styles.camera} />
          <span aria-hidden className={styles.glass} />
        </div>
      </div>
    </div>
  )
}

function StatusBar() {
  return (
    <div aria-hidden className={styles.status}>
      <span className={styles.time}>9:41</span>
      <span className={styles.icons}>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
          <rect x="0" y="7" width="2.4" height="3" rx=".6" />
          <rect x="3.8" y="5" width="2.4" height="5" rx=".6" />
          <rect x="7.6" y="2.6" width="2.4" height="7.4" rx=".6" />
          <rect x="11.4" y="0" width="2.4" height="10" rx=".6" />
        </svg>
        <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor">
          <path d="M6.5 2.2c1.9 0 3.6.7 4.9 1.9l1.1-1.2A8.6 8.6 0 0 0 6.5.5 8.6 8.6 0 0 0 .5 2.9l1.1 1.2a7 7 0 0 1 4.9-1.9Z" />
          <path d="M6.5 5.1c1.1 0 2.1.4 2.9 1.1l1.1-1.2a5.7 5.7 0 0 0-8 0l1.1 1.2a4.2 4.2 0 0 1 2.9-1.1Z" />
          <circle cx="6.5" cy="8.5" r="1.4" />
        </svg>
        <span className={styles.battery}>
          <span className={styles.batteryLevel} />
        </span>
      </span>
    </div>
  )
}
