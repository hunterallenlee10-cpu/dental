import { HeartHandshake, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/templates/PageHero";
import { StepsBand } from "@/components/templates/StepsBand";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { DraftTag } from "@/components/ui/DraftTag";
import { business, differentiators, payment } from "@/lib/business";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import Link from "next/link";

export const metadata = pageMeta({
  title: "New Patients | Dentist in Baltimore and Frederick, MD | Aurelle",
  description: "Your first visit at Aurelle Dental in Maryland, step by step: what to bring, the exam and conversation, your written estimate and your decision. Book a visit.",
  path: routes.newPatients,
});

const steps = [
  { title: "Book", body: "Call us or send a visit request. We pick an office and a time together. If you are nervous, tell us then." },
  { title: "What to bring", body: "Your insurance card if you have one, and any dental x-rays from the last two years. If not, we take them here." },
  { title: "Exam and conversation", body: "Your dentist examines your teeth, explains what they see and answers your questions." },
  { title: "Your written estimate", body: "For the plan you choose, you get a written estimate before any treatment starts. We do not start without it." },
  { title: "Your decision", body: "Take your time. We start treatment only once you agree with the plan and the price." },
];

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "New patients", path: routes.newPatients }]}
        eyebrow="Baltimore, Frederick, Leonardtown and Annapolis, MD"
        h1={<>New patients <em className="accent">welcome</em></>}
        lead={<p>Your first visit at our Maryland offices, step by step. No surprises: you know what happens and what it costs before anything starts.</p>}
        photo="15"
        photoPos="object-[50%_30%]"
        reason="checkup"
      />
      <section aria-labelledby="steps-title" className="section">
        <div className="wrap">
          <h2 id="steps-title" className="text-h2">Your first visit, <em className="accent">step by step</em></h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-paper p-6">
                <span className="font-display text-[2.25rem] leading-none text-azure">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-[1.4rem] leading-tight">{s.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-mute">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section aria-labelledby="forms-title" className="section bg-porcelain">
        <div className="wrap grid gap-10 lg:grid-cols-3">
          <div>
            <h2 id="forms-title" className="font-display text-h3">New patient forms</h2>
            <p className="mt-3 text-mute">Fill these in before your visit to save time on the day.</p>
            {/* DRAFT: new patient forms supplied by the practice */}
            <div className="mt-5 rounded-sm border border-dashed border-ink/25 bg-paper p-6" data-placeholder>
              <DraftTag>Your new patient forms go here</DraftTag>
            </div>
          </div>
          <div>
            <HeartHandshake size={26} strokeWidth={1.5} className="text-azure-deep" aria-hidden="true" />
            <h2 className="mt-4 font-display text-h3">If you are nervous</h2>
            <p className="mt-3 text-mute">{differentiators.nervous}</p>
          </div>
          <div>
            <ShieldCheck size={26} strokeWidth={1.5} className="text-azure-deep" aria-hidden="true" />
            <h2 className="mt-4 font-display text-h3">Insurance</h2>
            <p className="mt-3 text-mute">{payment.insuranceLine} Bring your card and we check your benefits before treatment.</p>
            <Link href={routes.pricing} className="mt-3 inline-block text-azure-deep underline underline-offset-4">Read about insurance and pricing</Link>
          </div>
        </div>
      </section>
      <StepsBand id="after-title" tone="paper" title={<>After your <em className="accent">first visit</em></>} steps={[
        { title: "Treatment", body: "If you go ahead, we book your treatment at the office and time that suit you." },
        { title: "Cleanings", body: "Regular checkups and cleanings keep small problems from becoming big ones." },
        { title: "Questions", body: `Call ${business.phoneDisplay} any weekday from 7 AM to 8 PM.` },
      ]} />
      <FaqSection items={[
        { q: "What should I bring to my first visit?", a: "Your insurance card if you have one, and any dental x-rays from the last two years. If you do not have recent x-rays, we take them here." },
        { q: "Will it hurt?", a: "Comfort comes first. If you are nervous, tell us when you book. We take time for your questions and explain each step before we do it." },
        { q: "How much will my treatment cost?", a: "It depends on your teeth and the treatment you choose, so you get a written estimate after your exam. We do not start without it. Prices are the same at all four offices." },
      ]} />
      <CtaPanel reason="checkup" />
    </>
  );
}
