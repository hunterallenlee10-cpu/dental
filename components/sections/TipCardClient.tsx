import Link from "@/components/ui/Link";
import { routes } from "@/lib/routes";
import type { Tip } from "@/content/types";

/** Card markup shared with the server TipCard; the photo is rendered on the server and passed in. */
export function TipCardClient({ tip, photo }: { tip: Tip; photo: React.ReactNode }) {
  return (
    <Link href={routes.tip(tip.slug)} className="group block">
      <div className="aspect-[4/3] overflow-hidden rounded-sm bg-porcelain">{photo}</div>
      <p className="mt-4 text-[0.8125rem] text-mute">
        {tip.category} · {tip.readMinutes} min read
      </p>
      <h2 className="mt-1 font-display text-[1.5rem] leading-tight group-hover:text-azure-deep">{tip.title}</h2>
      <p className="mt-2 text-[0.9375rem] text-mute">{tip.summary}</p>
    </Link>
  );
}
