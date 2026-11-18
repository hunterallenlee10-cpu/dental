// Coverage Check tiers: a general guide to how US PPO dental plans usually treat each kind of care.
// Not a quote. Plans differ, and every result says so.
//
// Sources (opened and read, November 2026):
// - Humana, "How does dental insurance work": many plans use 100-80-50 (preventive 100%, basic 80%, major 50%);
//   most plans do not cover cosmetic procedures such as whitening and veneers.
//   https://www.humana.com/dental-insurance/dental-resources/how-does-dental-insurance-work
// - Humana PPO plan example (deductible $50 individual): https://www.humana.com/dental-insurance/ppo
// - Cigna Newsroom: preventive usually 100%, basic typically 70 to 80%, major often 50%; deductible often waived
//   for preventive care; lists root canals under major. https://newsroom.cigna.com/dental-insurance-how-plans-work-and-what-to-look-for
// - Guardian: deductible typically about $25 to $100 per person per year; typical annual maximum $1,000 to $2,000;
//   classifications vary by plan. https://www.guardianlife.com/dental-insurance/top-dental-plan
// - ADA News (citing National Association of Dental Plans data) on annual maximums and the 100-80-50 design:
//   https://adanews.ada.org/ada-news/2025/december/dear-ada-annual-maximums/
// - MetLife: root canals listed as basic; implants and whitening often not covered; orthodontics may be limited
//   by age. https://www.metlife.com/oralfitnesslibrary/dental-insurance/what-does-dental-insurance-cover/
// - MetLife VADIP: orthodontia for dependents up to age 19 at 50% with a lifetime maximum. https://www.metlife.com/vadip/options/
// - Delta Dental of New Jersey: orthodontic benefits are usually lifetime maximums that do not renew.
//   https://deltadentalnj.com/blog/entry/2020/guide-to-your-orthodontic-lifetime-maximum
// - HealthCare.gov: dental is an essential health benefit for children 18 and under, not for adults.
//   https://www.healthcare.gov/coverage/dental-coverage/
//
// Where sources disagree we use "often" language and the most conservative figure:
// basic care is 70 to 80% across sources, so the bar fills to 70 and the text says "often 70 to 80%".

export type CoverageNeed = "checkup" | "filling" | "major" | "ortho" | "cosmetic" | "pain";
export type InsuranceAnswer = "ppo" | "other" | "none" | "unsure";

export const needOptions: { value: CoverageNeed; label: string }[] = [
  { value: "checkup", label: "Checkup and cleaning" },
  { value: "filling", label: "Filling or root canal" },
  { value: "major", label: "Crown, bridge or implant" },
  { value: "ortho", label: "Braces or aligners" },
  { value: "cosmetic", label: "Whitening or veneers" },
  { value: "pain", label: "Something hurts" },
];

export const insuranceOptions: { value: InsuranceAnswer; label: string }[] = [
  { value: "ppo", label: "Yes, a PPO plan" },
  { value: "other", label: "Yes, another kind of plan" },
  { value: "none", label: "No insurance" },
  { value: "unsure", label: "Not sure" },
];

export type Tier = {
  tierName: string;
  headline: string;
  /** Share for the bar, 0 to 100. Conservative end of the range. */
  share: number;
  explain: string;
  fineprint?: string;
};

export const ppoTiers: Record<Exclude<CoverageNeed, "pain">, Tier> = {
  checkup: {
    tierName: "Preventive care",
    headline: "Often covered at or near 100%",
    share: 100,
    explain: "Checkups, cleanings and routine x-rays are preventive care, which PPO plans commonly cover in full, and the deductible is often waived for them.",
  },
  filling: {
    tierName: "Basic care",
    headline: "Often 70 to 80% covered",
    share: 70,
    explain: "Fillings are basic care, which PPO plans often cover at 70 to 80%. Some plans count root canals as basic care and some as major care.",
  },
  major: {
    tierName: "Major care",
    headline: "Often about 50% covered",
    share: 50,
    explain: "Crowns and bridges are major care, which PPO plans often cover at about 50%. Some plans cover implants as major care and some exclude them.",
  },
  ortho: {
    tierName: "Orthodontics",
    headline: "Often about 50%, with its own lifetime maximum",
    share: 50,
    explain: "Orthodontic benefits usually have a separate lifetime maximum that does not renew each year, and many plans limit them to children, often up to age 18 or 19.",
  },
  cosmetic: {
    tierName: "Cosmetic care",
    headline: "Usually not covered",
    share: 0,
    explain: "Whitening and veneers are usually treated as cosmetic, which most dental plans do not cover. Monthly payments can spread the cost.",
  },
};

export const ppoFineprint = "After your deductible, up to your yearly maximum. Deductibles are commonly $25 to $100 a year and yearly maximums commonly $1,000 to $2,000.";
export const otherPlanText = "Plans differ a lot. Bring your card and we will check your benefits before treatment.";
export const disclaimer = "General guide, not a quote. Plans differ. You get a written estimate before any treatment.";

/** Map a coverage need to the Visit Request reason it pre-selects. */
export const needToReason = {
  checkup: "checkup",
  filling: "filling",
  major: "restorative",
  ortho: "ortho",
  cosmetic: "cosmetic",
  pain: "pain",
} as const;
