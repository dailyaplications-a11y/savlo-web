import type { Metadata } from "next"
import { DM_Sans, Fraunces, Inter, Noto_Color_Emoji } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import { absoluteUrl, siteConfig } from "@/lib/site"
import { SiteHeader } from "@/components/savlo/site-header"
import { PageFade } from "@/components/savlo/page-fade"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "optional",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "optional",
  axes: ["opsz", "SOFT"],
  // the real italic: the app's titles ("Today", "Budget") are set in it, and
  // without the file the browser only slants the roman
  style: ["normal", "italic"],
})

// The app draws every emoji with Noto Color Emoji; the phone screens of the
// storyboard do too, so a 🏠 is the app's 🏠 on every system. Not preloaded:
// the browser fetches only the slices a page uses.
const notoEmoji = Noto_Color_Emoji({
  weight: "400",
  subsets: ["emoji"],
  variable: "--font-emoji",
  display: "swap",
  preload: false,
})

// Money figures only (the app's rule: a sum is one typeface, Inter).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "optional",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Savlo | Budgeting app and expense tracker",
    template: "%s | Savlo",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: siteConfig.category,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: "Savlo | Budgeting app and expense tracker",
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        alt: "Savlo budgeting app preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savlo | Budgeting app and expense tracker",
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  icons: {
    icon: "/savlo-icon.png",
    apple: "/savlo-icon.png",
  },
  // Search Console (Google) and Webmaster Tools (Bing, which ChatGPT search
  // reads) verify ownership with a meta tag. Each one only renders when its
  // env var is set in Vercel, so no code change is needed to verify.
  ...((process.env.NEXT_PUBLIC_GSC_VERIFICATION || process.env.NEXT_PUBLIC_BING_VERIFICATION) && {
    verification: {
      ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION && {
        google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
      }),
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && {
        other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION },
      }),
    },
  }),
}

// One root layout serves every language: the path says which one.
const HTML_LANG_FROM_PATH = `(function () {
  try {
    var path = window.location.pathname;
    document.documentElement.lang = /^\\/fr(\\/|$)/.test(path)
      ? 'fr-FR'
      : /^\\/pt(\\/|$)/.test(path)
        ? 'pt-BR'
        : /^\\/es(\\/|$)/.test(path)
          ? 'es'
          : /^\\/de(\\/|$)/.test(path)
            ? 'de-DE'
            : 'en';
  } catch (e) {}
})();`

// The browser speaks one of the site's languages (ca, gl, eu read Spanish,
// as in proxy.ts): the page says it must not be machine-translated.
const NO_TRANSLATE_FOR_SPOKEN_LANGUAGES = `(function () {
  try {
    var spoken = ['en', 'es', 'pt', 'de', 'fr', 'ca', 'gl', 'eu'];
    var prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    var speaks = false;
    for (var i = 0; i < prefs.length; i++) {
      if (spoken.indexOf(String(prefs[i]).toLowerCase().split('-')[0]) !== -1) speaks = true;
    }
    if (!speaks) return;
    document.documentElement.setAttribute('translate', 'no');
    var meta = document.createElement('meta');
    meta.name = 'google';
    meta.content = 'notranslate';
    document.head.appendChild(meta);
  } catch (e) {}
})();`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // data-scroll-behavior: the smooth scroll of globals.css is for in-page
    // anchors only; with it, Next turns it off during a route change, so a new
    // page (a guide from the home) opens at its top instead of gliding up to it
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${dmSans.variable} ${fraunces.variable} ${inter.variable} ${notoEmoji.variable} bg-background`}>
      <head>
        {/* inline, like the one below: the page's language is right from the
            first parse, which is when a translator reads it */}
        <script id="savlo-html-lang" dangerouslySetInnerHTML={{ __html: HTML_LANG_FROM_PATH }} />
        {/*
          A visitor whose browser speaks one of the site's five languages
          reads Savlo in it (proxy.ts sends them there), so no machine
          translator may rewrite the page: Chrome's turned the phones' "USD"
          into "Dólar estadounidense" and broke every screen (owner,
          2026-11-05). Anyone else (Italian, Japanese…) may still translate.
          A plain inline script, not next/script: it runs while the head is
          parsed, so the translator finds the flag on its first look (a
          beforeInteractive script waits for the runtime). The phones and
          the brand never translate either way (translate="no").
        */}
        <script
          id="savlo-no-translate"
          dangerouslySetInnerHTML={{ __html: NO_TRANSLATE_FOR_SPOKEN_LANGUAGES }}
        />
      </head>
      <body className="font-sans antialiased text-foreground">
        {/* one header for every page: it outlives navigation, so the bar's
            movement carries over from page to page (site-header.tsx) */}
        <SiteHeader />
        <PageFade>{children}</PageFade>
        {process.env.NODE_ENV === "production" && process.env.VERCEL === "1" && (
          <Analytics />
        )}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  )
}
