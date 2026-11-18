import { Clock, FileCheck, UsersRound } from "lucide-react";
import { DraftTag } from "@/components/ui/DraftTag";

const items = [
  { icon: FileCheck, text: "Written estimate before every treatment" },
  { icon: Clock, text: "Open until 8 PM every weekday" },
  { icon: UsersRound, text: "Specialists for every area, one team" },
];

/** Proof comes early because there are no real reviews yet. */
export function ProofStrip() {
  return (
    <section aria-label="Why patients choose us" className="border-b border-line bg-porcelain">
      <div className="wrap py-8 md:py-12">
        <ul className="grid gap-4 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
          {items.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-4 md:justify-center md:px-8">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-azure-deep">
                <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="text-[1.0625rem] leading-snug md:text-[1.125rem]">{text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-center md:mt-8">
          <DraftTag>Your Google rating goes here</DraftTag>
        </div>
      </div>
    </section>
  );
}
