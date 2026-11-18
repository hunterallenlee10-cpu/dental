import { isDemo } from "@/lib/site";

/** A visibly labelled placeholder. Shown in demo mode; live mode refuses to build while placeholders remain. */
export function DraftTag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  if (!isDemo) return null;
  return <span className={`draft-tag ${className}`} data-placeholder>{children}</span>;
}
