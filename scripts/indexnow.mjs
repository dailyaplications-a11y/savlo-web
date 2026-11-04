#!/usr/bin/env node
/**
 * Tells IndexNow (Bing, Yandex, Seznam, Naver…) that the site's pages changed.
 * Bing feeds ChatGPT search and Copilot, so this is how a deploy reaches them
 * without waiting for a crawl.
 *
 * Run it AFTER a production deploy is live:
 *   npm run indexnow            # every URL in the live sitemap
 *   npm run indexnow -- /blog   # only URLs whose path starts with /blog
 *
 * The key is public by design: it lives at /<key>.txt so IndexNow can check
 * that the request comes from the site's owner.
 */

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.savloapp.com").replace(/\/$/, "")
const KEY = "132cf498d01597707a73400c3cc7a22f"
const ENDPOINT = "https://api.indexnow.org/indexnow"
const BATCH = 10_000 // IndexNow's per-request limit

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`)
  if (!res.ok) throw new Error(`sitemap.xml answered ${res.status}`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
}

async function main() {
  const keyCheck = await fetch(`${SITE}/${KEY}.txt`)
  if (!keyCheck.ok || (await keyCheck.text()).trim() !== KEY) {
    throw new Error(`${SITE}/${KEY}.txt is not live yet: deploy first, then run this.`)
  }

  const prefix = process.argv[2]
  let urls = [...new Set(await sitemapUrls())]
  if (prefix) urls = urls.filter((u) => new URL(u).pathname.startsWith(prefix))
  if (urls.length === 0) throw new Error("No URLs to submit.")

  const host = new URL(SITE).host
  for (let i = 0; i < urls.length; i += BATCH) {
    const urlList = urls.slice(i, i + BATCH)
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
    })
    // 200 = accepted, 202 = accepted and the key is still being verified.
    if (res.status !== 200 && res.status !== 202) {
      throw new Error(`IndexNow answered ${res.status}: ${await res.text()}`)
    }
    console.log(`IndexNow ${res.status}: submitted ${urlList.length} URLs`)
  }
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
