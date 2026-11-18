// Live mode build guard. Refuses to build while any DRAFT value, placeholder review card, sample case,
// placeholder portrait or "TODO: swap" remains. Runs from next.config.ts when NEXT_PUBLIC_SITE_MODE=live.
// AURELLE_SKIP_GUARD=1 skips it for local SEO testing only (never set it on Vercel).
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const scanDirs = ["lib", "content", "components", "app"];
const skip = (p) => p.includes(`${path.sep}source${path.sep}`) || p.endsWith("TRANSLATION-BRIEF.md");

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (/\.(ts|tsx|mjs|md)$/.test(e.name) && !skip(p)) out.push(p);
  }
  return out;
}

export function runGuard() {
  const hits = [];
  for (const d of scanDirs) {
    for (const f of walk(path.join(root, d))) {
      const lines = fs.readFileSync(f, "utf8").split("\n");
      lines.forEach((line, i) => {
        if (/\bDRAFT\b|TODO: swap/.test(line)) hits.push(`${path.relative(root, f)}:${i + 1}: ${line.trim().slice(0, 110)}`);
      });
    }
  }
  const samples = fs.readdirSync(path.join(root, "public/images/raw")).filter((f) => /SAMPLE/.test(f));
  if (samples.length) hits.push(`public/images/raw: ${samples.length} sample before and after photos still present (64 to 83)`);
  return hits;
}

export function guardOrThrow() {
  if (process.env.NEXT_PUBLIC_SITE_MODE !== "live") return;
  if (process.env.AURELLE_SKIP_GUARD === "1") {
    console.warn("\n[guard] AURELLE_SKIP_GUARD=1: live mode build guard skipped. Local SEO testing only.\n");
    return;
  }
  const hits = runGuard();
  if (hits.length) {
    const msg = `\n[guard] Live mode refused: ${hits.length} placeholder(s) remain. Replace them (see SEO-LAUNCH.md):\n` + hits.slice(0, 400).map((h) => "  - " + h).join("\n") + "\n";
    throw new Error(msg);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const hits = runGuard();
  console.log(hits.length ? `${hits.length} placeholder(s) a buying practice must replace:\n` + hits.map((h) => "  - " + h).join("\n") : "No placeholders left.");
}
