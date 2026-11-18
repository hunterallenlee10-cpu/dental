import { Sparkle } from "@/components/brand/Sparkle";
import { BookButton } from "@/components/ui/BookButton";
import { Photo } from "@/components/ui/Photo";
import { business, offices } from "@/lib/business";
import { FirstLight } from "./FirstLight";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="on-ink relative bg-ink text-paper">
      <div className="relative mx-auto flex max-w-[1672px] flex-col md:block md:h-[min(100svh,920px)] md:min-h-[680px]">
        {/* Photo: top band on phones, full-bleed from md up. */}
        <div className="relative h-[50svh] min-h-[300px] overflow-hidden md:absolute md:inset-0 md:h-auto">
          <FirstLight>
            <Photo
              id="01"
              preload
              cover
              quality={82}
              sizes="(min-width: 1672px) 1672px, 100vw"
              className="object-[83%_22%] md:object-[70%_50%]"
            />
          </FirstLight>
          {/* Ink gradients: left third on desktop, top and bottom-up on phones. */}
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgb(14_42_56/0.5)_0%,rgb(14_42_56/0)_26%,rgb(14_42_56/0)_58%,rgb(14_42_56/0.9)_86%,rgb(14_42_56/1)_100%)] md:hidden" />
          <div aria-hidden="true" className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgb(14_42_56/0.88)_0%,rgb(14_42_56/0.82)_33%,rgb(14_42_56/0.35)_48%,rgb(14_42_56/0)_60%)] md:block" />
          <div aria-hidden="true" className="absolute inset-0 hidden bg-[linear-gradient(0deg,rgb(14_42_56/0.75)_0%,rgb(14_42_56/0)_28%),linear-gradient(180deg,rgb(14_42_56/0.45)_0%,rgb(14_42_56/0)_18%)] md:block" />
        </div>

        <div className="relative z-10 -mt-12 pb-10 md:absolute md:inset-0 md:mt-0 md:flex md:flex-col md:justify-center md:pt-[72px] md:pb-8">
          <div className="wrap md:relative md:flex md:h-full md:flex-col md:justify-center">
          <div className="max-w-[640px]">
            <h1 id="hero-title">
              <span className="label block max-w-[30ch] leading-[1.5] text-mist md:max-w-none">
                Dentist in Baltimore, Frederick, Leonardtown and Annapolis, MD
              </span>
              <span className="mt-3 block font-display text-[clamp(3.25rem,1.9rem+5.2vw,6rem)] leading-[0.98] font-light tracking-[-0.025em] md:mt-6">
                A smile
                <br />
                you <em className="fl-love font-light italic" style={{ color: "#9DB6C2" }}>love</em>.
              </span>
            </h1>
            <p className="mt-4 max-w-[46ch] text-lead text-paper/85 md:mt-7">
              Four Maryland offices, one team of specialists. You get a written estimate before any treatment starts.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap md:mt-9">
              <BookButton className="btn btn-paper" />
              <a href={business.phoneHref} className="btn btn-ghost-light">
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="mt-10 md:absolute md:bottom-8 md:left-10 md:right-10 md:mt-0">
            <p className="font-display text-[1.25rem] leading-snug md:text-[1.5rem]">
              <TownPair a={offices[0].town} b={offices[1].town} />
              <span className="hidden sm:inline-flex sm:px-3" aria-hidden="true"><Sparkle size={10} className="text-cyan" /></span>
              <TownPair a={offices[2].town} b={offices[3].town} />
            </p>
            <p className="mt-1.5 text-[0.875rem] text-mist">{business.hoursShort} at all four offices</p>
          </div>
          </div>
        </div>
      </div>
      <noscript>
        <style>{`.fl-photo{transform:none!important}.fl-love{color:#FBFCFC!important}`}</style>
      </noscript>
    </section>
  );
}

function TownPair({ a, b }: { a: string; b: string }) {
  return (
    <span className="flex items-center gap-3 sm:inline-flex">
      {a}
      <Sparkle size={10} className="text-cyan" />
      {b}
    </span>
  );
}
