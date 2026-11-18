import { Photo } from "@/components/ui/Photo";
import { DraftTag } from "@/components/ui/DraftTag";
import { isDemo } from "@/lib/site";

const paragraph =
  "We listen to it, understand what you need, and use deep clinical experience to build solutions that look good and last. Because your smile deserves more than treatment.";

export function MissionBand() {
  return (
    <section aria-labelledby="mission-title" className="bg-paper">
      {/* Cloud texture under an Ink to Paper fade, as the source did with its misty panorama. */}
      <div className="on-ink relative overflow-hidden bg-ink text-paper">
        <div aria-hidden="true" className="absolute inset-0">
          <Photo id="02" alt="" sizes="100vw" cover className="object-[50%_40%] opacity-40 mix-blend-screen" />
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgb(14_42_56/0)_0%,rgb(251_252_252/1)_100%)] md:h-32" />
        <div className="wrap relative pt-20 pb-36 text-center md:pt-32 md:pb-48">
          <h2 id="mission-title" className="text-h2">
            Every smile <em className="accent">has its own story.</em>
          </h2>
          <p className="word-reveal mx-auto mt-8 max-w-[34ch] font-display text-[clamp(1.375rem,1.1rem+1.2vw,2.125rem)] leading-[1.3] font-light md:mt-10">
            {paragraph.split(" ").map((w, i) => (
              <span key={i}>{w} </span>
            ))}
          </p>
        </div>
      </div>
      <div className="wrap relative pt-4 pb-20 md:pb-28">
        {/* DRAFT: replace with a real Baltimore harbor photo */}
        <figure className="relative mx-auto h-40 w-full max-w-[1440px] overflow-hidden rounded-sm border border-line bg-[linear-gradient(180deg,#F3F5F6_0%,#E6F0F4_100%)] md:h-60" data-placeholder>
          <div aria-hidden="true" className="absolute inset-x-0 top-[62%] h-px bg-ink/10" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(0deg,rgb(14_42_56/0.05),transparent)]" />
          {isDemo ? (
            <figcaption className="absolute bottom-3 right-3 md:bottom-5 md:right-5">
              <DraftTag>Photo: your city skyline</DraftTag>
            </figcaption>
          ) : null}
        </figure>
      </div>
    </section>
  );
}
