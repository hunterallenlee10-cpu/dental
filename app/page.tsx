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
import { JsonLd } from "@/components/seo/JsonLd";
import { practiceSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { Deferred } from "@/components/ui/Deferred";
import { Suspense } from "react";

export const metadata = pageMeta({
  title: "Dentist in Baltimore and Frederick, MD | Aurelle Dental",
  description: "Aurelle Dental has four Maryland offices in Baltimore, Frederick, Leonardtown and Annapolis. Written estimate before treatment. Open until 8 PM. Book a visit.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={practiceSchema()} />
      <Hero />
      <Suspense><ProofStrip /></Suspense>
      <Deferred><MissionBand /></Deferred>
      <Deferred><ServiceTiles /></Deferred>
      <Deferred><CoverageSection /></Deferred>
      <Deferred><WhyAurelle /></Deferred>
      <Deferred><BeforeAfterRail /></Deferred>
      <Deferred><TeamRail /></Deferred>
      <Deferred><PaymentSection /></Deferred>
      <Deferred><LocationsSection /></Deferred>
      <Deferred><ReviewsPlaceholder /></Deferred>
      <Deferred><FaqSection items={homeFaq} /></Deferred>
      <Deferred><CtaPanel /></Deferred>
    </>
  );
}
