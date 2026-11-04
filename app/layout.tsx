import type { Metadata } from "next"
import { DM_Sans, Fraunces, Inter, Noto_Color_Emoji } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import Script from "next/script"
import { absoluteUrl, siteConfig } from "@/lib/site"
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${fraunces.variable} ${inter.variable} ${notoEmoji.variable} bg-background`}>
      <head>
        <Script id="savlo-html-lang" strategy="beforeInteractive">
          {`(() => {
            try {
              const path = window.location.pathname;
              const lang = path.startsWith('/fr')
                ? 'fr-FR'
                : path.startsWith('/pt')
                  ? 'pt-BR'
                  : path.startsWith('/es')
                  ? 'es'
                  : path.startsWith('/de')
                    ? 'de-DE'
                    : 'en';
              document.documentElement.lang = lang;
            } catch {}
          })();`}
        </Script>
      </head>
      <body className="font-sans antialiased text-foreground">
        {children}
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
