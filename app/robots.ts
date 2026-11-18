import type { MetadataRoute } from "next";
import { absoluteUrl, isDemo } from "@/lib/site";

const aiCrawlers = ["GPTBot", "ClaudeBot", "Google-Extended", "PerplexityBot", "CCBot"];

/**
 * Demo: search crawlers may fetch pages (so they can read the noindex), AI crawlers are disallowed by name,
 * and no sitemap is listed. Live: everything allowed, sitemap listed.
 */
export default function robots(): MetadataRoute.Robots {
  if (isDemo) {
    return {
      rules: [{ userAgent: "*", allow: "/" }, ...aiCrawlers.map((ua) => ({ userAgent: ua, disallow: "/" }))],
    };
  }
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: absoluteUrl("/sitemap.xml"), host: absoluteUrl("/") };
}
