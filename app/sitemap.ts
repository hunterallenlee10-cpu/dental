import type { MetadataRoute } from "next";
import { allPages, lastModified } from "@/lib/pages";
import { absoluteUrl, isDemo } from "@/lib/site";

/** Demo mode: empty. Live mode: every page with its real last-modified date. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (isDemo) return [];
  return allPages().map((p) => ({ url: absoluteUrl(p.path), lastModified: lastModified(p.files), priority: p.priority }));
}
