import { existsSync, mkdirSync, readFileSync } from "node:fs"
import { createRequire } from "node:module"
import { resolve } from "node:path"
import { spawn } from "node:child_process"
import { setTimeout as delay } from "node:timers/promises"

const require = createRequire(import.meta.url)

const args = new Set(process.argv.slice(2))
const runLighthouse = !args.has("--screaming-frog-only")
const runScreamingFrog = !args.has("--lighthouse-only")

const cwd = process.cwd()
const lighthouseConfig = require(resolve(cwd, "lighthouserc.js"))
const host = "127.0.0.1"
const port = process.env.SEO_AUDIT_PORT ?? "3001"
const baseUrl = process.env.SEO_AUDIT_URL ?? `http://${host}:${port}`
const nodeCmd = process.execPath
const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm"
const npxCmd = process.platform === "win32" ? "npx.cmd" : "npx"
const lighthouseUrls = lighthouseConfig.ci.collect.url
const chromeFlags = lighthouseConfig.ci.collect.settings.chromeFlags
const minSeoScore =
  lighthouseConfig.ci.assert.assertions["categories:seo"][1].minScore
const minPerformanceScore =
  lighthouseConfig.ci.assert.assertions["categories:performance"][1].minScore

function log(message) {
  process.stdout.write(`[seo-audit] ${message}\n`)
}

function attachOutput(child) {
  child.stdout?.on("data", (chunk) => {
    process.stdout.write(chunk)
  })

  child.stderr?.on("data", (chunk) => {
    process.stderr.write(chunk)
  })
}

function runCommand(command, commandArgs, options = {}) {
  return new Promise((resolvePromise, rejectPromise) => {
    const shellOption =
      options.shell ?? (process.platform === "win32")

    const child = spawn(command, commandArgs, {
      cwd,
      stdio: ["ignore", "pipe", "pipe"],
      shell: shellOption,
      ...options,
    })

    attachOutput(child)

    child.on("error", rejectPromise)
    child.on("exit", (code) => {
      if (code === 0) {
        resolvePromise()
        return
      }

      rejectPromise(
        new Error(`${command} ${commandArgs.join(" ")} exited with code ${code}`),
      )
    })
  })
}

async function waitForServer(url, timeoutMs = 60_000) {
  const started = Date.now()

  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url)
      if (response.ok) return
    } catch {
      // Keep polling until the server is reachable.
    }

    await delay(1000)
  }

  throw new Error(`Server at ${url} did not become ready in ${timeoutMs}ms`)
}

async function freeAuditPort() {
  if (process.platform !== "win32") return

  await runCommand(
    "powershell.exe",
    [
      "-NoProfile",
      "-Command",
      `Get-NetTCPConnection -LocalPort ${port} -State Listen -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object { Stop-Process -Id $_ -Force }`,
    ],
    { shell: false },
  ).catch(() => {})

  await delay(1000)
}

async function startLocalServer() {
  await freeAuditPort()

  const child = spawn(
    npxCmd,
    ["next", "start", "--hostname", host, "--port", port],
    {
      cwd,
      stdio: ["ignore", "pipe", "pipe"],
      shell: process.platform === "win32",
      env: { ...process.env },
    },
  )

  attachOutput(child)
  child.on("error", (error) => {
    log(`Server process error: ${error.message}`)
  })

  await waitForServer(baseUrl)
  return child
}

function findScreamingFrogCli() {
  const candidates = [
    process.env.SCREAMING_FROG_CLI,
    "C:\\Program Files (x86)\\Screaming Frog SEO Spider\\ScreamingFrogSEOSpiderCli.exe",
    "C:\\Program Files\\Screaming Frog SEO Spider\\ScreamingFrogSEOSpiderCli.exe",
  ].filter(Boolean)

  return candidates.find((candidate) => existsSync(candidate))
}

async function runScreamingFrogAudit() {
  const cli = findScreamingFrogCli()

  if (!cli) {
    log("Screaming Frog CLI was not found. Set SCREAMING_FROG_CLI or install the desktop app to enable this step.")
    return
  }

  const outputDir = resolve(cwd, ".seo", "screaming-frog")
  mkdirSync(outputDir, { recursive: true })

  const frogArgs = [
    "--crawl",
    baseUrl,
    "--headless",
    "--save-crawl",
    "--output-folder",
    outputDir,
    "--timestamped-output",
    "--overwrite",
    "--export-tabs",
    "Internal:All,Response Codes:Client Error (4xx),Response Codes:Server Error (5xx)",
  ]

  if (process.env.SCREAMING_FROG_CONFIG) {
    frogArgs.unshift(process.env.SCREAMING_FROG_CONFIG)
    frogArgs.unshift("--config")
  }

  await runCommand(cli, frogArgs)
}

function readLighthouseScores(reportPath) {
  const report = JSON.parse(readFileSync(reportPath, "utf8"))
  return {
    performance: report.categories.performance.score,
    seo: report.categories.seo.score,
    lcp: report.audits["largest-contentful-paint"]?.displayValue,
  }
}

async function runLighthouseFallback() {
  log("Falling back to direct Lighthouse CLI for Windows report validation")

  const outputDir = resolve(cwd, ".seo", "lighthouse-fallback")
  mkdirSync(outputDir, { recursive: true })

  for (const [index, url] of lighthouseUrls.entries()) {
    const outputPathRelative = `.seo/lighthouse-fallback/report-${index + 1}.json`
    const outputPath = resolve(outputDir, `report-${index + 1}.json`)

    try {
      await runCommand(
        nodeCmd,
        [
          resolve(cwd, "node_modules/lighthouse/cli/index.js"),
        url,
        "--output=json",
          `--output-path=${outputPathRelative}`,
        "--only-categories=performance,seo",
        `--chrome-flags=${chromeFlags}`,
        "--quiet",
        ],
        { shell: false },
      )
    } catch (error) {
      if (!existsSync(outputPath)) {
        throw error
      }
    }

    const scores = readLighthouseScores(outputPath)

    log(
      `Fallback scores for ${url}: performance=${scores.performance}, seo=${scores.seo}, lcp=${scores.lcp}`,
    )

    if (scores.seo < minSeoScore) {
      throw new Error(
        `SEO score ${scores.seo} for ${url} is below the configured minimum ${minSeoScore}`,
      )
    }

    if (scores.performance < minPerformanceScore) {
      throw new Error(
        `Performance score ${scores.performance} for ${url} is below the configured minimum ${minPerformanceScore}`,
      )
    }
  }
}

let serverProcess

try {
  log("Building the site")
  await runCommand(npmCmd, ["run", "build"])

  log(`Starting local server at ${baseUrl}`)
  serverProcess = await startLocalServer()

  if (runLighthouse) {
    try {
      log("Running Lighthouse CI collect")
      await runCommand(npxCmd, ["lhci", "collect", "--config=./lighthouserc.js"])

      log("Running Lighthouse CI assertions")
      await runCommand(npxCmd, ["lhci", "assert", "--config=./lighthouserc.js"])
    } catch (error) {
      log(
        `LHCI failed on this machine (${error instanceof Error ? error.message : String(error)}).`,
      )
      await runLighthouseFallback()
    }
  }

  if (runScreamingFrog) {
    log("Running Screaming Frog audit")
    await runScreamingFrogAudit()
  }

  log("SEO audit completed")
} catch (error) {
  log(error instanceof Error ? error.message : String(error))
  process.exitCode = 1
} finally {
  if (serverProcess) {
    if (process.platform === "win32") {
      await runCommand("taskkill", [
        "/PID",
        String(serverProcess.pid),
        "/T",
        "/F",
      ]).catch(() => {})
    } else {
      serverProcess.kill("SIGTERM")
    }
  }
}
