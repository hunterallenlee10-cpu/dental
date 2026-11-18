import { FaqList } from "@/components/sections/FaqList";
import { business } from "@/lib/business";
import type { FAQ } from "@/content/types";

export function FaqSection({ items, title, id = "faq-title" }: { items: FAQ[]; title?: React.ReactNode; id?: string }) {
  return (
    <section aria-labelledby={id} className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-20">
        <div>
          <h2 id={id} className="text-h2">
            {title ?? (
              <>
                Common <em className="accent">questions</em>
              </>
            )}
          </h2>
          <p className="mt-6 max-w-[38ch] text-mute">
            Here are the answers to the questions we hear most. If yours is not here, call{" "}
            <a href={business.phoneHref} className="text-azure-deep underline underline-offset-4">{business.phoneDisplay}</a> or email{" "}
            <a href={business.emailHref} className="text-azure-deep underline underline-offset-4">{business.email}</a>.
          </p>
        </div>
        <FaqList items={items} />
      </div>
    </section>
  );
}
