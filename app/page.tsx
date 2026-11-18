import { Hero } from "@/components/sections/home/Hero";
import { ProofStrip } from "@/components/sections/home/ProofStrip";
import { MissionBand } from "@/components/sections/home/MissionBand";
import { ServiceTiles } from "@/components/sections/home/ServiceTiles";
import { CoverageSection } from "@/components/sections/home/CoverageSection";
import { WhyAurelle } from "@/components/sections/home/WhyAurelle";
import { BeforeAfterRail } from "@/components/sections/BeforeAfterRail";
import { TeamRail } from "@/components/team/TeamRail";
import { PaymentSection } from "@/components/sections/home/PaymentSection";
import { LocationsSection } from "@/components/sections/home/LocationsSection";
import { ReviewsPlaceholder } from "@/components/sections/ReviewsPlaceholder";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { homeFaq } from "@/content/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <MissionBand />
      <ServiceTiles />
      <CoverageSection />
      <WhyAurelle />
      <BeforeAfterRail />
      <TeamRail />
      <PaymentSection />
      <LocationsSection />
      <ReviewsPlaceholder />
      <FaqSection items={homeFaq} />
      <CtaPanel />
    </>
  );
}
