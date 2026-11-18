// Final screenshot set: hero, Coverage Check, before and after rail, a service page and the Visit Request, at 1440 and 375.
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const base = process.argv[2] || "http://localhost:3000";
const dir = "screenshots/final";
const b = await chromium.launch();
for (const [w, h, tag] of [[1440, 900, "1440"], [375, 667, "375"]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 2, reducedMotion: "reduce" });
  const p = await ctx.newPage();
  const shot = (name, opts = {}) => p.screenshot({ path: `${dir}/${name}-${tag}.jpg`, type: "jpeg", quality: 82, ...opts });
  await p.goto(base + "/", { waitUntil: "load" });
  await p.waitForTimeout(400);
  await shot("hero");
  await p.addStyleTag({ content: ".cv-auto{content-visibility:visible!important}" });
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } await Promise.race([Promise.all([...document.images].map((i) => i.complete ? 0 : new Promise((r) => { i.onload = i.onerror = r; }))), new Promise((r) => setTimeout(r, 4000))]); });
  // Section captures scroll the page; hide the sticky header and floating bar so they don't land mid-frame.
  const hide = await p.addStyleTag({ content: "header, .mobile-bar, button[aria-label='Back to top'] { visibility: hidden !important; }" });
  const cov = p.locator("#coverage");
  await cov.scrollIntoViewIfNeeded();
  await cov.locator("text=Crown, bridge or implant").click();
  await cov.locator("text=Yes, a PPO plan").click();
  await p.waitForTimeout(800);
  await cov.screenshot({ path: `${dir}/coverage-check-${tag}.jpg`, type: "jpeg", quality: 82 });
  const ba = p.locator('section[aria-labelledby="ba-title"]');
  await ba.scrollIntoViewIfNeeded();
  await p.waitForTimeout(500);
  await ba.screenshot({ path: `${dir}/before-after-rail-${tag}.jpg`, type: "jpeg", quality: 82 });
  await hide.evaluate((el) => el.remove());
  await p.goto(base + "/services/dental-implants", { waitUntil: "load" });
  await p.waitForTimeout(400);
  await shot("service-page");
  await p.addStyleTag({ content: ".cv-auto{content-visibility:visible!important}" });
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } window.scrollTo(0, 0); await Promise.race([Promise.all([...document.images].map((i) => i.complete ? 0 : new Promise((r) => { i.onload = i.onerror = r; }))), new Promise((r) => setTimeout(r, 4000))]); });
  await p.screenshot({ path: `${dir}/service-page-full-${tag}.jpg`, type: "jpeg", quality: 70, fullPage: true });
  await p.locator(tag === "375" ? "main a[data-book]" : "main a[data-book]").first().click();
  await p.waitForSelector('[role="dialog"][aria-labelledby]');
  await p.waitForTimeout(300);
  await shot("visit-request");
  await ctx.close();
}
await b.close();
console.log("done");
