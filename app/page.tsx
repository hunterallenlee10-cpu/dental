import { Hero } from "@/components/sections/home/Hero";
import { ProofStrip } from "@/components/sections/home/ProofStrip";
import { MissionBand } from "@/components/sections/home/MissionBand";
import { ServiceTiles } from "@/components/sections/home/ServiceTiles";
import { CoverageSection } from "@/components/sections/home/CoverageSection";
import { WhyAurelle } from "@/components/sections/home/WhyAurelle";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <MissionBand />
      <ServiceTiles />
      <CoverageSection />
      <WhyAurelle />
    </>
  );
}
