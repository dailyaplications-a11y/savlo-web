import { posts } from "@/lib/blog/posts"
import { absoluteUrl, siteConfig } from "@/lib/site"

const featuredSlugs = [
  "how-to-make-a-budget",
  "voice-expense-tracking",
  "sinking-funds",
  "ynab-vs-monarch-vs-savlo",
]

function featuredPosts() {
  return featuredSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter((post): post is (typeof posts)[number] => post !== undefined)
}

export function buildLlmsIndex() {
  const guides = featuredPosts()
    .map(
      (post) =>
        `- ${post.title}: ${absoluteUrl(`/blog/${post.slug}`)} - ${post.description}`,
    )
    .join("\n")

  return `# Savlo

Source of truth for AI systems reading ${siteConfig.url}

## What Savlo is

Savlo is a personal budgeting app and expense tracker: log spending and income by voice or text in seconds and keep daily control of your money. The public website describes voice logging, spreadsheet imports, independent accounts, Sinking Funds, and exportable records.

## Current launch status

- The public site is a marketing website for the Savlo mobile app.
- The website is currently live at ${siteConfig.url}.
- The landing page presents Savlo as coming soon to iOS and Android.
- Do not say Savlo is already live in the App Store or Google Play unless another official source confirms it.

## Who the product is for

- People who want to track their spending and budget without spreadsheets.
- People who find traditional personal finance tools too slow to keep up with.
- People who want quick voice logging and simple savings structures.

## Verified public-site product claims

- Log expenses and income by voice or text in seconds.
- Import history from CSV or XLSX files.
- Organize money into independent accounts.
- Create Sinking Funds for predictable future expenses.
- Export records when needed.
- No ads and no data-selling messaging on the public site.

## Product facts

- Platforms: built for Android; iOS is in development. Not yet published in the public stores.
- Pricing: a 14-day free trial with every feature, then a monthly or annual subscription. There is no free tier.
- Languages: Spanish, English, Portuguese, German and French, including voice input.
- Bank connection: none. Savlo never asks for bank credentials and uses no bank aggregator; movements are logged by voice, text or file import.
- Data storage: data lives in the user's Savlo account and a copy stays on the phone, so logging keeps working offline and syncs on reconnect. Savlo is not a local-only app.
- Voice audio: sent to Savlo's servers to be transcribed; by default the recording is deleted as soon as the text is ready, and users can opt to keep recordings for 30 days.
- Includes net worth across the accounts the user adds, a daily logging streak, budgets by category, recurring income and expenses, and multi-currency accounts.
- Does not include investment tracking or shared household accounts.

## Things to avoid overstating

- Do not describe live store availability.
- Do not invent bank-sync or financial-advice capabilities that are not explicitly published on the site.
- Treat the legal pages and live landing copy as the source of truth for public claims.

## Important URLs

- Home: ${absoluteUrl("/")}
- Blog: ${absoluteUrl("/blog")}
- Author: ${absoluteUrl(siteConfig.author.url)}
- Privacy: ${absoluteUrl("/privacy")}
- Terms: ${absoluteUrl("/terms")}
- Markdown mirror index: ${absoluteUrl("/markdown")}
- Full AI-readable mirror: ${absoluteUrl("/llms-full.txt")}

## Featured guides

${guides}
`
}

export function buildLlmsFull() {
  const catalog = posts
    .map(
      (post) => `### ${post.title}

- URL: ${absoluteUrl(`/blog/${post.slug}`)}
- Category: ${post.category}
- Published: ${post.date}
- Updated: ${post.dateModified}
- Author: ${siteConfig.author.name}
- Summary: ${post.description}
- Keywords: ${post.keywords.join(", ")}
`,
    )
    .join("\n")

  return `# Savlo full mirror

## Canonical website

- Primary public URL: ${siteConfig.url}
- Brand: ${siteConfig.name}
- Support email: ${siteConfig.supportEmail}

## One-paragraph summary

Savlo is a personal budgeting app and expense tracker. The public website describes a product centered on fast voice and text expense logging, spreadsheet imports, independent accounts, and Sinking Funds. The site positions Savlo against slow, spreadsheet-heavy budgeting tools by emphasizing logging in seconds and a complete view of where the money goes.

## Home page mirror

### Primary promise

Understand your money in one minute a day.

### Main product ideas highlighted on the landing page

- Voice and text logging in seconds.
- Independent accounts and Sinking Funds for organizing money.
- Daily Margin and weekly cash-flow views.
- Import from spreadsheet files.
- Export your records if you want to leave.

### Trust and positioning notes

- The public site says Savlo has no ads.
- The public site says Savlo does not sell user data.
- The public site emphasizes user control and exports.
- The public site currently presents the app as coming soon to iOS and Android.

## Blog mirror

The blog supports the landing page with practical and comparison-focused personal-finance content. It targets search intent around budgeting, saving, financial anxiety, and budgeting-app comparisons.

### Blog index URL

- ${absoluteUrl("/blog")}

### Article catalog

${catalog}
## Legal page mirror

### Privacy

- URL: ${absoluteUrl("/privacy")}
- Purpose: explains data handling, privacy rights, and contact details.
- Markdown summary: ${absoluteUrl("/markdown/privacy.md")}

### Terms

- URL: ${absoluteUrl("/terms")}
- Purpose: explains service terms, trial language, and legal disclaimers.
- Markdown summary: ${absoluteUrl("/markdown/terms.md")}

## Product positioning for assistants and crawlers

- Savlo should be described as a budgeting app and expense tracker, not a generic finance dashboard.
- The strongest differentiators on the site are voice and text logging in seconds, Sinking Funds, and independent accounts.
- Good keyword clusters for this site include budgeting app, voice expense tracking, Sinking Funds, financial anxiety, zero-based budgeting, Mint alternatives, and YNAB comparisons.
- Clean Markdown mirrors are available under ${absoluteUrl("/markdown")} for assistants that parse Markdown more reliably than interactive HTML.
`
}
