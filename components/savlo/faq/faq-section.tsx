"use client"

import { useId, useState } from "react"
import type { Locale } from "@/lib/i18n"
import { faqCopy } from "./faq-copy"
import styles from "./faq-section.module.css"

/*
 * The home's FAQ, right after the storyboard (owner, 2026-11-05; design:
 * https://claude.ai/artifact/Ekw2q1Jgtmbjbtz2wiDZpA). Clean on purpose: no
 * cards, no dividers, no circles behind the chevron or the step numbers; the
 * rows are separated by air alone. One question open at a time, the history
 * one open at first; tapping the open one closes it.
 *
 * Every answer stays in the page while closed (folded to zero height and
 * `inert`), so search engines and find-in-page still reach it.
 */

const FIRST_OPEN = 2 // "How do I bring my history over?": the one with steps

export function FaqSection({ locale = "en" }: { locale?: Locale }) {
  const copy = faqCopy[locale]
  const [open, setOpen] = useState(FIRST_OPEN)
  const uid = useId()

  return (
    <section id="faq" aria-labelledby={`${uid}-title`} className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id={`${uid}-title`} className={styles.title}>
            {copy.title}
          </h2>
          <p className={styles.subtitle}>{copy.subtitle}</p>
        </header>

        <div className={styles.list}>
          {copy.items.map((item, i) => {
            const expanded = open === i
            const panelId = `${uid}-panel-${i}`
            return (
              <div key={item.q} className={styles.item} data-open={expanded || undefined}>
                <h3 className={styles.question}>
                  <button
                    type="button"
                    className={styles.toggle}
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <svg
                      className={styles.chevron}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </h3>

                <div id={panelId} role="region" aria-label={item.q} className={styles.fold} inert={!expanded}>
                  <div className={styles.foldInner}>
                    <div className={styles.panel}>
                      <p className={styles.answer}>{item.a}</p>
                      {item.steps ? (
                        <ol className={styles.steps}>
                          {item.steps.map((step, n) => (
                            <li key={step}>
                              <span className={styles.stepNumber} aria-hidden="true">
                                {n + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      ) : null}
                      {item.note ? <p className={styles.note}>{item.note}</p> : null}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
