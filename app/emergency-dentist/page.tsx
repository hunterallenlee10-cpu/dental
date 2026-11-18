import Link from "@/components/ui/Link";
import { AlertTriangle, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BookButton } from "@/components/ui/BookButton";
import { OfficeList } from "@/components/templates/OfficeList";
import { RelatedTips } from "@/components/templates/Cards";
import { Photo } from "@/components/ui/Photo";
import { tips } from "@/content/tips";
import { business } from "@/lib/business";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata = pageMeta({
  title: "Emergency Dentist in Maryland | Call Us | Aurelle Dental",
  description: "Tooth pain, swelling or a broken tooth? Call Aurelle Dental at (410) 555-0142. Four Maryland offices open Mon to Fri, 7 AM to 8 PM. What to do until you get here.",
  path: routes.emergency,
});

const article = tips.find((t) => t.slug === "toothache-what-to-do")!;
const patterns = article.sections[0];
const untilThen = article.sections[1];

// When to go to the ER instead. Written from these sources (opened and read, November 2026):
// - MedlinePlus, Ludwig angina: breathing difficulty is an emergency; go to the ER or call 911 right away. https://medlineplus.gov/ency/article/001047.htm
// - Cleveland Clinic, Ludwig's angina: call 911 or go to the ER for difficulty breathing or swallowing, swelling around the neck or under the jaw. https://my.clevelandclinic.org/health/diseases/23457-ludwigs-angina
// - Cleveland Clinic, abscessed tooth: go to the ER with a fever of 100.4 F or higher, facial swelling, trouble swallowing. https://my.clevelandclinic.org/health/diseases/10943-abscessed-tooth
// - Cleveland Clinic Mercy Hospital dental services: breathing or swallowing difficulty, trauma or bleeding should go to the ER. https://my.clevelandclinic.org/locations/mercy-hospital/specialties/dental-services
// - ADA MouthHealthy, dental emergencies: hospital emergency department for a suspected broken jaw; the ER if bleeding will not stop. https://www.mouthhealthy.org/en/dental-care-concerns/dental-emergencies
// DRAFT: dentist to confirm
const erList = [
  "Swelling in your face, neck or under your jaw that makes it hard to breathe or swallow.",
  "A high fever (100.4 F or higher) together with tooth pain or facial swelling.",
  "A facial injury, such as a blow to the jaw, or a jaw you think may be broken.",
  "Bleeding from your mouth that will not stop with steady pressure.",
];

const emergencies = [
  "Severe or throbbing tooth pain, or pain that wakes you at night",
  "Swelling next to a tooth or in your gum",
  "A broken, cracked or knocked-loose tooth",
  "A lost filling or crown that leaves the tooth sensitive",
  "Pain and swelling at the back of the jaw from a wisdom tooth",
];

export default function EmergencyPage() {
  return (
    <>
      <section className="on-ink bg-ink text-paper">
        <div className="wrap grid gap-10 pt-8 pb-16 md:pt-10 md:pb-24 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-16">
          <div>
            <Breadcrumbs items={[{ name: "Emergency dentist", path: routes.emergency }]} tone="paper" />
            <h1 className="mt-10 text-[clamp(2.75rem,1.9rem+3.6vw,5rem)] leading-[1] font-light tracking-[-0.02em] md:mt-14">
              Emergency dentist <em className="accent">in Maryland</em>
            </h1>
            <p className="mt-6 max-w-[52ch] text-lead text-paper/85">
              Tooth pain or something broke? Call us first. Tell us it hurts and we will look for the earliest visit at our Baltimore, Frederick, Leonardtown or Annapolis office.
            </p>
            <a href={business.phoneHref} className="mt-10 flex w-full items-center justify-center gap-4 rounded-sm bg-paper px-6 py-6 text-ink transition-colors hover:bg-ice sm:inline-flex sm:w-auto sm:px-10">
              <Phone size={28} strokeWidth={1.5} aria-hidden="true" />
              <span className="text-left">
                <span className="label block text-mute">Call now</span>
                <span className="block font-display text-[clamp(2rem,1.6rem+1.6vw,3rem)] leading-none">{business.phoneDisplay}</span>
              </span>
            </a>
            <p className="mt-5 text-mist">{business.hoursShort}, all four offices. Closed weekends.</p>
          </div>
          <div className="hidden aspect-[4/5] overflow-hidden rounded-sm lg:block">
            <Photo id="43" cover preload sizes="(min-width: 1024px) 40vw, 0px" className="object-[40%_50%]" />
          </div>
        </div>
      </section>

      <section aria-labelledby="er-title" className="border-b border-line bg-ice">
        <div className="wrap py-10 md:py-14">
          <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
            <AlertTriangle size={36} strokeWidth={1.5} className="text-error" aria-hidden="true" />
            <div>
              <h2 id="er-title" className="font-display text-h3">When to go to the ER instead</h2>
              <p className="mt-2 text-mute">Call 911 or go to the nearest emergency room right away if you have:</p>
              <ul className="mt-4 grid gap-2 md:grid-cols-2">
                {erList.map((e) => (
                  <li key={e} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-error" aria-hidden="true" />{e}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="what-title" className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="what-title" className="text-h2">What counts as <em className="accent">an emergency</em></h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {emergencies.map((e) => <li key={e} className="py-4">{e}</li>)}
            </ul>
            <h3 className="mt-12 font-display text-h3">{patterns.heading}</h3>
            <p className="mt-3 text-mute">{patterns.paragraphs[0]}</p>
            <ul className="mt-4 space-y-3">
              {patterns.bullets?.map((b) => <li key={b} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure" aria-hidden="true" />{b}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-h2">What to do until <em className="accent">you get here</em></h2>
            <ol className="mt-8 space-y-4">
              {untilThen.bullets?.map((b, i) => (
                <li key={b} className="flex gap-4 rounded-sm bg-porcelain p-5">
                  <span className="font-display text-[1.5rem] leading-none text-azure">{i + 1}</span>
                  <span>{b}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[0.875rem] text-mute">{article.disclaimer} <Link href={routes.tip(article.slug)} className="text-azure-deep underline underline-offset-4">Read the full toothache guide</Link>.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={business.phoneHref} className="btn btn-primary"><Phone size={16} strokeWidth={1.5} aria-hidden="true" /> Call {business.phoneDisplay}</a>
              <BookButton reason="pain" className="btn btn-outline" />
            </div>
          </div>
        </div>
      </section>
      <OfficeList title={<>Four offices, <em className="accent">one number</em></>} />
      <RelatedTips slugs={["toothache-what-to-do", "after-a-tooth-extraction", "should-wisdom-teeth-come-out"]} />
    </>
  );
}
