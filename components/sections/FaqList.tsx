import { Plus } from "lucide-react";
import type { FAQ } from "@/content/types";

/** Native details and summary, styled. */
export function FaqList({ items, headingLevel = "h3" }: { items: FAQ[]; headingLevel?: "h3" | "h4" }) {
  const H = headingLevel;
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((f) => (
        <details key={f.q} className="faq-item group">
          <summary className="flex min-h-16 items-center justify-between gap-6 py-5 text-left">
            <H className="font-display text-[1.3rem] leading-snug md:text-[1.5rem]">{f.q}</H>
            <span className="faq-icon inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line group-open:border-ink" aria-hidden="true">
              <Plus size={18} strokeWidth={1.5} />
            </span>
          </summary>
          <p className="measure pb-6 text-mute md:text-[1.0625rem]">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
