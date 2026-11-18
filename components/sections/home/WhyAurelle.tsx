import { Sparkle } from "@/components/brand/Sparkle";
import { Photo } from "@/components/ui/Photo";
import type { PhotoId } from "@/lib/photos";

const Tile = ({ id, className = "", tall }: { id: PhotoId; className?: string; tall?: boolean }) => (
  <div className={`overflow-hidden rounded-sm bg-porcelain ${tall ? "aspect-[1/2]" : "aspect-square"} ${className}`}>
    <Photo id={id} cover sizes="(min-width: 1024px) 18vw, 31vw" />
  </div>
);

export function WhyAurelle() {
  return (
    <section aria-labelledby="why-title" className="section overflow-hidden">
      <div className="wrap grid items-center gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="mx-auto max-w-[460px] text-center">
          <div className="flex justify-center gap-2 text-cyan" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <Sparkle key={i} size={12} />
            ))}
          </div>
          <h2 id="why-title" className="mt-6 text-h2">
            Why <em className="accent">Aurelle?</em>
          </h2>
          <div className="mx-auto mt-7 h-px w-16 bg-ink/20" aria-hidden="true" />
          <p className="label mt-7 text-mute">Smiles that speak for themselves.</p>
          <p className="mt-6 text-lead">
            We bring together experienced specialists, 3D imaging and a gentle approach, so every visit is as easy and carefree as it can be.
          </p>
          <p className="mt-4 text-mute">
            At all four offices, in Baltimore, Frederick, Leonardtown and Annapolis, you get the same quality of care and the same prices.
          </p>
        </div>

        {/* Staggered collage from the source: 07, 09 tall in the center, 10, 08, 11. */}
        <div className="grid grid-cols-3 items-start gap-3 md:gap-4">
          <div className="parallax-slow mt-10 space-y-3 md:mt-16 md:space-y-4">
            <Tile id="07" />
            <Tile id="08" />
          </div>
          <div className="parallax-fast">
            <Tile id="09" tall />
          </div>
          <div className="parallax-slow mt-24 space-y-3 md:mt-36 md:space-y-4">
            <Tile id="10" />
            <Tile id="11" />
          </div>
        </div>
      </div>
    </section>
  );
}
