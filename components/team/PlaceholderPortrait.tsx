import { isDemo } from "@/lib/site";

const initialsOf = (name: string) =>
  name
    .replace(/^Dr\.\s+/, "")
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

/**
 * Designed placeholder portrait (4:5). Never a photo of a real person.
 * Ice background, a soft original head-and-shoulders outline, initials in Newsreader italic.
 * // DRAFT: placeholder portrait, replace with the practice's own team photos
 */
export function PlaceholderPortrait({ name, size = "card" }: { name: string; size?: "card" | "large" }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-ice" data-placeholder role="img" aria-label={`Portrait placeholder for ${name}`}>
      <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMax slice">
        <ellipse cx="200" cy="205" rx="78" ry="92" fill="#F3F5F6" />
        <path d="M40 500c8-96 72-150 160-150s152 54 160 150Z" fill="#F3F5F6" />
        <path d="M168 288c8 30 56 30 64 0v44c-14 20-50 20-64 0Z" fill="#F3F5F6" />
      </svg>
      <span className={`absolute inset-x-0 top-[34%] -translate-y-1/2 text-center font-display font-light italic text-azure ${size === "large" ? "text-[6rem]" : "text-[3.5rem]"}`} aria-hidden="true">
        {initialsOf(name)}
      </span>
      {isDemo ? (
        <span className="absolute inset-x-0 bottom-3 text-center text-[0.75rem] font-medium tracking-[0.04em] text-mute">Portrait coming soon</span>
      ) : null}
    </div>
  );
}
