// npm run check: tests what a script can test, on the built pages (not on content/source or BUILD-SPEC.md).
// Usage: node scripts/check.mjs   (run after `next build`; `npm run check` does both)
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const appDir = path.join(root, ".next/server/app");
const publicDir = path.join(root, "public");
const live = process.env.NEXT_PUBLIC_SITE_MODE === "live";

const business = fs.readFileSync(path.join(root, "lib/business.ts"), "utf8");
const phoneDisplay = business.match(/phoneDisplay: "([^"]+)"/)[1];
const phoneE164 = business.match(/phoneE164: "([^"]+)"/)[1];
const email = business.match(/email: "([^"]+)"/)[1];

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

const files = walk(appDir).filter((f) => !/_not-found|_global-error/.test(f));
const routeOf = (f) => {
  let r = "/" + path.relative(appDir, f).replace(/\.html$/, "");
  if (r === "/index") r = "/";
  return r;
};
const routes = new Set(files.map(routeOf));

const problems = [];
const add = (route, msg) => problems.push(`${route}: ${msg}`);

const stripHidden = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<template[\s\S]*?<\/template>/gi, " ");
const textOf = (html) =>
  stripHidden(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ");

const sourceWords = /\b(Lux|Ljubljana|Maribor|Kr[sš]ko|Portoro[zž]|Leanpay|Diners|ZZZS|Naro[cč]ite|ambulanta|zobozdravnik)\b/i;
const slovenianChars = /[čšžćđČŠŽĆĐ]/;

let imgCount = 0;
let linkCount = 0;
for (const f of files) {
  const route = routeOf(f);
  const html = fs.readFileSync(f, "utf8");
  const visible = stripHidden(html);
  const text = textOf(html);

  // Exactly one h1.
  const h1s = (visible.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) add(route, `expected 1 h1, found ${h1s}`);

  // Internal links resolve.
  for (const m of visible.matchAll(/href="([^"]+)"/g)) {
    const href = m[1].replace(/&amp;/g, "&");
    if (!href.startsWith("/") || href.startsWith("//") || href.startsWith("/_next")) continue;
    linkCount++;
    const clean = href.split("#")[0].split("?")[0] || "/";
    const norm = clean.length > 1 ? clean.replace(/\/$/, "") : clean;
    if (routes.has(norm)) continue;
    if (fs.existsSync(path.join(publicDir, norm))) continue;
    if (["/sitemap.xml", "/robots.txt", "/llms.txt", "/icon.svg", "/apple-icon.png", "/opengraph-image.png", "/favicon.ico"].includes(norm)) continue;
    if (/^\/(opengraph-image|twitter-image|icon|apple-icon)/.test(norm)) continue;
    add(route, `broken internal link ${href}`);
  }

  // Raw markers and template leftovers.
  if (/\[DRAFT|\[REVIEW|\{\{|\}\}/.test(text)) add(route, "raw [DRAFT/[REVIEW marker or double curly braces in text");
  if (/TODO: swap/.test(html)) add(route, "TODO: swap left in page");

  // No Slovenian, no source names.
  if (slovenianChars.test(text)) add(route, `Slovenian character: "${text.match(new RegExp(`.{0,30}${slovenianChars.source}.{0,30}`))[0]}"`);
  const sw = text.match(sourceWords);
  if (sw) add(route, `source word "${sw[0]}"`);
  if (/\b080\b|\.si\b/.test(text) || /href="[^"]*\.si[/"]/.test(visible)) add(route, "source phone or .si domain");

  // No em dashes or double hyphens in rendered text.
  if (/—|–/.test(text)) add(route, `dash character: "${text.match(/.{0,30}[—–].{0,30}/)[0]}"`);
  if (/--/.test(text)) add(route, `"--" in text: "${text.match(/.{0,30}--.{0,30}/)[0]}"`);

  // Images: alt, width and height.
  for (const m of visible.matchAll(/<img\b[^>]*>/g)) {
    imgCount++;
    const tag = m[0];
    if (!/\salt="/.test(tag)) add(route, `img without alt: ${tag.slice(0, 120)}`);
    if (!/\swidth="\d+"/.test(tag) || !/\sheight="\d+"/.test(tag)) add(route, `img without width/height: ${tag.slice(0, 120)}`);
  }

  // Phone numbers and emails match lib/business.ts.
  for (const m of text.matchAll(/\(\d{3}\) \d{3}-\d{4}/g)) if (m[0] !== phoneDisplay) add(route, `unexpected phone ${m[0]}`);
  for (const m of visible.matchAll(/(?:tel|sms):([+\d]+)/g)) if (m[1] !== phoneE164) add(route, `unexpected tel/sms ${m[1]}`);
  for (const m of text.matchAll(/[\w.+-]+@[\w-]+\.[\w.]+/g)) if (m[0].replace(/\.$/, "") !== email) add(route, `unexpected email ${m[0]}`);

  // Robots per mode.
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1] ?? "";
  if (live) {
    if (/noindex/.test(robots)) add(route, "live mode page has noindex");
    if (/data-placeholder|data-sample|data-concept/.test(html)) add(route, "live mode page still has a placeholder, sample case or concept line");
    if (/\bDRAFT\b|Sample case|Portrait coming soon|goes here|coming soon/i.test(text)) add(route, "live mode page still shows placeholder text");
  } else if (!/noindex/.test(robots)) add(route, "demo mode page is missing noindex");
}

console.log(`Checked ${files.length} pages, ${linkCount} internal links, ${imgCount} images (${live ? "live" : "demo"} mode).`);
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of problems.slice(0, 200)) console.log("  - " + p);
  process.exit(1);
}
console.log("All checks passed: one h1 per page, links resolve, no raw markers, no Slovenian or source words, no em dashes or --, images have alt/width/height, phone and email match lib/business.ts.");
