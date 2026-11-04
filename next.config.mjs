import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: projectRoot,
  },
  outputFileTracingRoot: projectRoot,
  // `next dev` blocks its HMR socket for any host but localhost, and without
  // that socket Turbopack never hydrates: opening the "Network" URL (or the
  // site from a phone on the same Wi-Fi) showed a frozen page. Dev only.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
}

export default nextConfig
