// Usage: node scripts/shots.mjs [baseUrl] [path,path,...] [prefix]
// Full-page and first-screen screenshots at 1440 and 375 into screenshots/.
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const base = process.argv[2] || "http://localhost:3000";
const paths = (process.argv[3] || "/").split(",");
const prefix = process.argv[4] || "";
const scale = Number(process.env.SHOT_SCALE || 1);
const full = process.env.SHOT_FULL !== "0";

const browser = await chromium.launch();
for (const [w, h, tag] of [[1440, 900, "1440"], [375, 667, "375"]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: scale, reducedMotion: process.env.SHOT_MOTION ? "no-preference" : "reduce" });
  const page = await ctx.newPage();
  for (const p of paths) {
    await page.goto(base + p, { waitUntil: "load" });
    await page.addStyleTag({ content: ".cv-auto{content-visibility:visible!important}" });
    await page.evaluate(async () => {
      // Trigger lazy images by scrolling through the page.
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 300));
    });
    const name = (p === "/" ? "home" : p.replace(/^\//, "").replace(/\//g, "_")) || "home";
    await page.screenshot({ path: `screenshots/${prefix}${name}-${tag}-fold.png` });
    if (full) await page.screenshot({ path: `screenshots/${prefix}${name}-${tag}-full.png`, fullPage: true });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 0) console.log(`OVERFLOW ${p} @${w}: ${overflow}px`);
  }
  await ctx.close();
}
await browser.close();
console.log("done");
