// Keyboard-only and zoom pass on the home page, a service page and the Visit Request.
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const base = process.argv[2] || "http://localhost:3000";
const b = await chromium.launch();
const out = [];
const log = (s) => { out.push(s); console.log(s); };

async function tabWalk(page, label, max = 400) {
  await page.keyboard.press("Tab");
  const first = await page.evaluate(() => document.activeElement?.textContent?.trim());
  let stops = 0, invisible = 0, covered = 0, noRing = 0;
  const seen = new Set();
  for (let i = 0; i < max; i++) {
    const info = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body) return null;
      el.scrollIntoView({ block: "nearest" });
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      const bar = document.querySelector(".mobile-bar");
      const br = bar && getComputedStyle(bar).opacity !== "0" && getComputedStyle(bar).display !== "none" ? bar.getBoundingClientRect() : null;
      const isInBar = bar?.contains(el);
      const cov = br && !isInBar && r.bottom > br.top + 2 && r.top < br.bottom;
      const ring = cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth) > 0;
      const peerRing = el.matches("input.sr-only") ; // radio cards show the ring on the sibling span
      return { key: el.outerHTML.slice(0, 80), w: r.width, h: r.height, cov, ring: ring || peerRing };
    });
    if (!info) break;
    if (seen.has(info.key + i % 1)) {}
    stops++;
    if (info.w < 1 || info.h < 1) invisible++;
    if (info.cov) covered++;
    if (!info.ring) noRing++;
    await page.keyboard.press("Tab");
    const atEnd = await page.evaluate(() => document.activeElement === document.body);
    if (atEnd) break;
  }
  log(`${label}: first stop "${first}", ${stops} tab stops, ${invisible} invisible, ${covered} covered by the floating bar, ${noRing} without a visible focus outline`);
}

for (const [w, h, tag] of [[1440, 900, "desktop"], [375, 667, "phone"]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, reducedMotion: "reduce" });
  const p = await ctx.newPage();
  for (const path of ["/", "/services/dental-implants"]) {
    await p.goto(base + path, { waitUntil: "load" });
    await tabWalk(p, `${tag} ${path}`);
  }
  // Skip link
  await p.goto(base + "/", { waitUntil: "load" });
  await p.keyboard.press("Tab");
  await p.keyboard.press("Enter");
  log(`${tag} skip link moves focus to: ${await p.evaluate(() => document.activeElement?.id)}`);
  await ctx.close();
}

// Visit Request by keyboard
{
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
  const p = await ctx.newPage();
  await p.goto(base + "/services/dental-implants", { waitUntil: "load" });
  const btn = p.locator("main a[data-book]").first();
  await btn.focus();
  await p.keyboard.press("Enter");
  await p.waitForSelector('[role="dialog"][aria-labelledby]');
  log(`Visit Request opens; focus on: ${await p.evaluate(() => document.activeElement?.tagName + " " + document.activeElement?.textContent?.slice(0, 40))}`);
  log(`Started at step: ${await p.locator('[role="dialog"] h2').first().innerText()} (implants pre-select skips office? office not preset, so step 1 expected)`);
  // Choose office by keyboard: Tab to first radio, arrow, Space
  await p.keyboard.press("Tab");
  for (let i = 0; i < 6; i++) { if (await p.evaluate(() => document.activeElement?.getAttribute("type") === "radio")) break; await p.keyboard.press("Tab"); }
  await p.keyboard.press("ArrowDown");
  const office = await p.evaluate(() => document.querySelector('input[name="office"]:checked')?.value);
  log(`Arrow key selects office: ${office}`);
  // Next
  for (let i = 0; i < 12; i++) { const t = await p.evaluate(() => document.activeElement?.textContent?.trim()); if (t === "Next") break; await p.keyboard.press("Tab"); }
  await p.keyboard.press("Enter");
  const step2 = await p.locator('[role="dialog"] h2').first().innerText();
  const reason = await p.evaluate(() => document.querySelector('input[name="reason"]:checked')?.value);
  log(`Step 2 heading: "${step2}", reason pre-selected from the implants page: ${reason}`);
  // Focus trap: tab 40 times and confirm focus stays in dialog
  let escaped = 0;
  for (let i = 0; i < 40; i++) { await p.keyboard.press("Tab"); if (!(await p.evaluate(() => !!document.activeElement?.closest('[role="dialog"]')))) escaped++; }
  log(`Focus trap: ${escaped} of 40 tabs left the dialog`);
  await p.keyboard.press("Escape");
  await p.waitForTimeout(150);
  log(`Escape closes: ${!(await p.locator('[role="dialog"][aria-labelledby]').count())}; focus returned to: ${await p.evaluate(() => document.activeElement?.textContent?.trim())}`);
  await ctx.close();
}

// Zoom: 200% of a 1440 screen = 720 CSS px; WCAG reflow at 320 CSS px.
for (const w of [720, 640, 320]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 800 }, reducedMotion: "reduce" });
  const p = await ctx.newPage();
  for (const path of ["/", "/services/dental-implants", "/book"]) {
    await p.goto(base + path, { waitUntil: "load" });
    const o = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    log(`zoom width ${w}px ${path}: horizontal overflow ${o}px`);
  }
  if (w === 720) {
    await p.goto(base + "/", { waitUntil: "load" });
    await p.screenshot({ path: "screenshots/zoom200-home-720.png" });
    await p.locator("header a[data-book], .mobile-bar a[data-book]").first().evaluate((el) => el.click());
    await p.waitForSelector('[role="dialog"][aria-labelledby]');
    await p.screenshot({ path: "screenshots/zoom200-visit-720.png" });
  }
  await ctx.close();
}
// Text-only zoom: 200% root font size must not clip or overflow.
{
  const ctx = await b.newContext({ viewport: { width: 1280, height: 800 }, reducedMotion: "reduce" });
  const p = await ctx.newPage();
  await p.goto(base + "/", { waitUntil: "load" });
  await p.addStyleTag({ content: "html{font-size:200%!important}" });
  const o = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  log(`text zoom 200% on home at 1280px: horizontal overflow ${o}px`);
  await ctx.close();
}
await b.close();
