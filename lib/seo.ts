import type { Metadata } from "next";
import { business } from "./business";
import { absoluteUrl } from "./site";

/** Per-page metadata: exact title, description, self-referencing canonical, Open Graph and Twitter. */
export function pageMeta({ title, description, path, type = "website" }: { title: string; description: string; path: string; type?: "website" | "article" }): Metadata {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: business.name, type, locale: "en_US" },
    twitter: { card: "summary_large_image", title, description },
  };
}
