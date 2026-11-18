import { CoverageCheck } from "@/components/sections/CoverageCheck";
import { Photo } from "@/components/ui/Photo";
import { SplitHeading } from "@/components/ui/SplitHeading";

export function CoverageSection() {
  return (
    <section id="coverage" aria-labelledby="coverage-title" className="bg-ice">
      <div className="mx-auto grid max-w-[1672px] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="hidden lg:block">
          <div className="sticky top-[72px] aspect-square max-h-[calc(100svh-72px)] w-full overflow-hidden bg-porcelain">
            <Photo id="13" cover sizes="(min-width: 1672px) 697px, 42vw" className="object-[50%_25%]" />
          </div>
        </div>
        <div className="section px-5 md:px-10 lg:px-16 xl:px-24">
          <p className="label text-mute">Coverage Check</p>
          <SplitHeading id="coverage-title" plain="Will insurance" accent="cover it?" className="mt-3 text-h2" />
          <p className="mt-5 max-w-[52ch] text-lead text-mute">
            A quick guide to how dental plans usually treat what you need. Your exact numbers come in writing after your exam.
          </p>
          <div className="mt-10">
            <CoverageCheck />
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden lg:hidden">
          <Photo id="13" cover sizes="100vw" className="object-[50%_25%]" />
        </div>
      </div>
    </section>
  );
}
