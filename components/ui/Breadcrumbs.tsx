import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; path: string };

/** Breadcrumbs on every inner page, with BreadcrumbList markup. The last crumb is the current page. */
export function Breadcrumbs({ items, tone = "ink" }: { items: Crumb[]; tone?: "ink" | "paper" }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className={`text-[0.875rem] ${tone === "paper" ? "text-mist" : "text-mute"}`}>
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="inline-flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className={tone === "paper" ? "text-paper" : "text-ink"}>{c.name}</span>
                ) : (
                  <Link href={c.path} className="underline-offset-4 hover:underline">{c.name}</Link>
                )}
                {!last ? <ChevronRight size={14} strokeWidth={1.5} aria-hidden="true" /> : null}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}
