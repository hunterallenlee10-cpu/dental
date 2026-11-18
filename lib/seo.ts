import type { Metadata } from "next";
import { business } from "./business";
import { absoluteUrl } from "./site";

const ogImage = { url: "/opengraph-image", width: 1200, height: 630, alt: `${business.name}. A smile you love.` };

/** Per-page metadata: exact title, description, self-referencing canonical, Open Graph and Twitter. */
export function pageMeta({ title, description, path, type = "website" }: { title: string; description: string; path: string; type?: "website" | "article" }): Metadata {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: business.name, type, locale: "en_US", images: [ogImage] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}
