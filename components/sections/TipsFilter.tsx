"use client";

import { useState } from "react";
import { TipCardClient } from "./TipCardClient";
import type { Tip, TipCategory } from "@/content/types";

/** Category filter chips over the article cards. All cards are in the HTML; filtering only hides. */
export function TipsFilter({ tips, cats, photos }: { tips: Tip[]; cats: TipCategory[]; photos: Record<string, React.ReactNode> }) {
  const [cat, setCat] = useState<TipCategory | "All">("All");
  const shown = cat === "All" ? tips : tips.filter((t) => t.category === cat);
  return (
    <>
      <div role="group" aria-label="Filter tips by category" className="flex flex-wrap gap-2">
        {(["All", ...cats] as const).map((c) => {
          const n = c === "All" ? tips.length : tips.filter((t) => t.category === c).length;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
              className={`min-h-11 rounded-full border px-4 text-[0.9375rem] transition-colors ${cat === c ? "border-ink bg-ink text-paper" : "border-line hover:border-ink"}`}
            >
              {c === "All" ? "All tips" : c} <span className="opacity-60">({n})</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">{shown.length} articles shown</p>
      <ul className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {tips.map((t) => (
          <li key={t.slug} hidden={!shown.includes(t)}>
            <TipCardClient tip={t} photo={photos[t.slug]} />
          </li>
        ))}
      </ul>
    </>
  );
}
