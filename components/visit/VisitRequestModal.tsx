"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ArrowLeft, Check, Copy, Mail, MessageSquare, Phone, X } from "lucide-react";
import type { BookDetail, VisitReason } from "@/components/ui/BookButton";
import { business, offices } from "@/lib/business";
import type { LocationSlug } from "@/content/types";

type OfficeChoice = LocationSlug | "soonest";
type TimeChoice = "early" | "midday" | "after-work" | "any";
type YesNo = "yes" | "no" | "";
type Insurance = "yes" | "no" | "unsure" | "";

const officeOptions: { value: OfficeChoice; label: string }[] = [
  ...offices.map((o) => ({ value: o.slug as OfficeChoice, label: o.town })),
  { value: "soonest", label: "Whichever is soonest" },
];
export const reasonOptions: { value: VisitReason; label: string }[] = [
  { value: "checkup", label: "Checkup and cleaning" },
  { value: "pain", label: "Tooth pain or something broke" },
  { value: "filling", label: "Fillings or root canal" },
  { value: "restorative", label: "Crowns, bridges or implants" },
  { value: "ortho", label: "Braces or aligners" },
  { value: "cosmetic", label: "Whitening or veneers" },
  { value: "other", label: "Something else" },
];
const timeOptions: { value: TimeChoice; label: string }[] = [
  { value: "early", label: "Early morning" },
  { value: "midday", label: "Midday" },
  { value: "after-work", label: "After work" },
  { value: "any", label: "Any time" },
];

const digitsOf = (s: string) => s.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
const formatPhone = (s: string) => {
  const d = digitsOf(s).slice(0, 10);
  if (d.length < 4) return d;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
};

export default function VisitRequestModal({ initial, onClose }: { initial: BookDetail; onClose: () => void }) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [office, setOffice] = useState<OfficeChoice | "">(initial.office ?? "");
  const [reason, setReason] = useState<VisitReason | "">(initial.reason ?? "");
  // Start at the first step that is not already chosen.
  const [step, setStep] = useState(initial.office ? (initial.reason ? 2 : 1) : 0);
  const [time, setTime] = useState<TimeChoice | "">("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [newPatient, setNewPatient] = useState<YesNo>("");
  const [insurance, setInsurance] = useState<Insurance>("");
  const [note, setNote] = useState("");
  const [touched, setTouched] = useState<{ name?: boolean; phone?: boolean }>({});
  const [sent, setSent] = useState<null | "text" | "email" | "copy">(null);
  // The modal only ever renders in the browser (lazy loaded on first open), so window is available.
  const [isPhone] = useState(() => window.matchMedia("(pointer: coarse) and (max-width: 820px)").matches);

  // Focus management: move focus to the step heading on every step change.
  useEffect(() => {
    headingRef.current?.focus();
  }, [step]);

  // Escape closes; Tab is trapped inside the dialog.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input:not([disabled]),textarea,[tabindex="0"]'),
      ).filter((el) => el.offsetParent !== null || el.getAttribute("type") === "radio");
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === headingRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const phoneValid = digitsOf(phone).length === 10 && !/^[01]/.test(digitsOf(phone));
  const nameValid = name.trim().length >= 2;
  const total = 4;
  const canNext = step === 0 ? !!office : step === 1 ? !!reason : step === 2 ? nameValid && phoneValid : true;

  const officeLabel = officeOptions.find((o) => o.value === office)?.label ?? "";
  const reasonLabel = reasonOptions.find((o) => o.value === reason)?.label ?? "";
  const timeLabel = timeOptions.find((o) => o.value === time)?.label ?? "Any time";

  const summary = useMemo(() => {
    const lines = [
      `Visit request for ${business.name}`,
      `Name: ${name.trim()}`,
      `Phone: ${formatPhone(phone)}`,
      `Office: ${officeLabel}`,
      `For: ${reasonLabel}`,
      `Best time: ${timeLabel}`,
    ];
    if (newPatient) lines.push(`New patient: ${newPatient === "yes" ? "Yes" : "No"}`);
    if (insurance) lines.push(`Dental insurance: ${insurance === "yes" ? "Yes" : insurance === "no" ? "No" : "Not sure"}`);
    if (note.trim()) lines.push(`Note: ${note.trim()}`);
    return lines.join("\n");
  }, [name, phone, officeLabel, reasonLabel, timeLabel, newPatient, insurance, note]);

  const smsHref = `${business.smsHref}?&body=${encodeURIComponent(summary)}`;
  const mailHref = `${business.emailHref}?subject=${encodeURIComponent(`Visit request: ${name.trim() || "new patient"}`)}&body=${encodeURIComponent(summary)}`;

  const next = () => {
    if (step === 2) setTouched({ name: true, phone: true });
    if (canNext) setStep((s) => Math.min(s + 1, total - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  // Pointer taps on a card advance; keyboard arrows only change the choice.
  const tapAdvance = (e: React.MouseEvent) => {
    if (e.detail > 0) window.setTimeout(() => setStep((s) => s + 1), 180);
  };

  const stepTitles = ["Which office?", "What is it for?", "When suits you, and how do we reach you?", "Check your request"];

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center md:items-center md:p-6" role="presentation">
      <div className="absolute inset-0 bg-ink/55 backdrop-blur-[2px]" onClick={onClose} aria-hidden="true" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex h-[100dvh] w-full flex-col bg-paper text-ink shadow-float md:h-auto md:max-h-[min(92vh,820px)] md:max-w-[640px] md:rounded-[12px]"
      >
        {/* Header with progress */}
        <div className="border-b border-line px-5 pt-4 pb-4 md:px-8">
          <div className="flex items-center justify-between">
            <p id={titleId} className="label text-mute">
              Visit request <span className="sr-only">for {business.name}</span>
            </p>
            <button type="button" onClick={onClose} className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-sm" aria-label="Close visit request">
              <X size={22} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
          {!sent ? (
            <>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-porcelain" aria-hidden="true">
                <div className="h-full bg-azure-deep transition-[width] duration-300" style={{ width: `${((step + 1) / total) * 100}%` }} />
              </div>
              <p className="mt-2 text-[0.8125rem] text-mute">{step < 3 ? `Step ${step + 1} of 3` : "Ready to send"}</p>
            </>
          ) : null}
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 md:px-8">
          {sent ? (
            <div className="py-6 text-center" role="status">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-ice text-success">
                <Check size={28} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h2 ref={headingRef} tabIndex={-1} className="mt-5 text-[2rem] leading-tight outline-none">
                Thanks. <em className="accent">We will call you back</em> during office hours.
              </h2>
              {/* DRAFT: confirm reply timing */}
              <p className="mt-3 text-mute">
                {sent === "copy"
                  ? `Your request is copied. Paste it into a text to ${business.phoneDisplay} or an email to ${business.email}.`
                  : `Your request is ready in your ${sent === "text" ? "messages" : "email"} app. Send it from there.`}
              </p>
              <p className="mt-1 text-mute">{business.hoursShort}.</p>
              <button type="button" onClick={onClose} className="btn btn-outline mt-8">Close</button>
            </div>
          ) : (
            <>
              <h2 ref={headingRef} tabIndex={-1} className="text-[1.75rem] leading-tight outline-none md:text-[2rem]">
                {stepTitles[step]}
              </h2>

              {step === 0 ? (
                <fieldset className="mt-5">
                  <legend className="sr-only">Choose an office</legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {officeOptions.map((o) => (
                      <ChoiceCard key={o.value} name="office" value={o.value} checked={office === o.value} onChange={() => setOffice(o.value)} onClick={tapAdvance} label={o.label} wide={o.value === "soonest"} />
                    ))}
                  </div>
                </fieldset>
              ) : null}

              {step === 1 ? (
                <fieldset className="mt-5">
                  <legend className="sr-only">Choose what the visit is for</legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {reasonOptions.map((o) => (
                      <ChoiceCard
                        key={o.value}
                        name="reason"
                        value={o.value}
                        checked={reason === o.value}
                        onChange={() => setReason(o.value)}
                        onClick={o.value === "pain" ? undefined : tapAdvance}
                        label={o.label}
                      />
                    ))}
                  </div>
                  {reason === "pain" ? (
                    <div className="mt-4 flex flex-col gap-3 rounded-[8px] border border-azure-deep/30 bg-ice p-4 sm:flex-row sm:items-center sm:justify-between" role="note">
                      <p className="font-medium">For pain, calling is fastest: {business.phoneDisplay}</p>
                      <a href={business.phoneHref} className="btn btn-primary shrink-0">
                        <Phone size={16} strokeWidth={1.5} aria-hidden="true" /> Call now
                      </a>
                    </div>
                  ) : null}
                </fieldset>
              ) : null}

              {step === 2 ? (
                <div className="mt-5 space-y-6">
                  <fieldset>
                    <legend className="mb-2 font-medium">Best time to visit</legend>
                    <div className="flex flex-wrap gap-2">
                      {timeOptions.map((o) => (
                        <label key={o.value} className="relative">
                          <input type="radio" name="time" value={o.value} checked={time === o.value} onChange={() => setTime(o.value)} className="peer sr-only" />
                          <span className="inline-flex min-h-11 cursor-pointer items-center rounded-full border border-line px-4 text-[0.9375rem] peer-checked:border-azure-deep peer-checked:bg-azure-deep peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-azure-deep">
                            {o.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Your name" error={touched.name && !nameValid ? "Please add your name." : ""}>
                      {(id, describedBy) => (
                        <input id={id} aria-describedby={describedBy} aria-invalid={touched.name && !nameValid} required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} onBlur={() => setTouched((t) => ({ ...t, name: true }))} className="input" />
                      )}
                    </Field>
                    <Field label="Mobile or phone" hint="US number, we call you back" error={touched.phone && !phoneValid ? "Please enter a 10-digit US number, like (410) 555-0199." : ""}>
                      {(id, describedBy) => (
                        <input id={id} aria-describedby={describedBy} aria-invalid={touched.phone && !phoneValid} required type="tel" inputMode="tel" autoComplete="tel-national" value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))} onBlur={() => setTouched((t) => ({ ...t, phone: true }))} className="input" />
                      )}
                    </Field>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Pills legend="New patient?" name="newpt" value={newPatient} onChange={(v) => setNewPatient(v as YesNo)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]} />
                    <Pills legend="Dental insurance?" name="ins" value={insurance} onChange={(v) => setInsurance(v as Insurance)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "unsure", label: "Not sure" }]} />
                  </div>
                  <Field label="Anything we should know? (optional)">
                    {(id, describedBy) => <textarea id={id} aria-describedby={describedBy} rows={2} value={note} onChange={(e) => setNote(e.target.value)} className="input py-3" />}
                  </Field>
                </div>
              ) : null}

              {step === 3 ? (
                <div className="mt-5">
                  <dl className="divide-y divide-line rounded-[8px] border border-line bg-porcelain/60 text-[0.9375rem]">
                    {[
                      ["Office", officeLabel],
                      ["For", reasonLabel],
                      ["Best time", timeLabel],
                      ["Name", name.trim()],
                      ["Phone", formatPhone(phone)],
                      ...(newPatient ? [["New patient", newPatient === "yes" ? "Yes" : "No"]] : []),
                      ...(insurance ? [["Insurance", insurance === "yes" ? "Yes" : insurance === "no" ? "No" : "Not sure"]] : []),
                      ...(note.trim() ? [["Note", note.trim()]] : []),
                    ].map(([k, v]) => (
                      <div key={k} className="flex gap-4 px-4 py-2.5">
                        <dt className="w-28 shrink-0 text-mute">{k}</dt>
                        <dd className="min-w-0 break-words">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-6 flex flex-col gap-2">
                    {isPhone ? (
                      <a href={smsHref} className="btn btn-primary w-full" onClick={() => setSent("text")}>
                        <MessageSquare size={16} strokeWidth={1.5} aria-hidden="true" /> Text my request to {business.name}
                      </a>
                    ) : (
                      <div className="grid gap-2 sm:grid-cols-2">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={async () => {
                            try {
                              await navigator.clipboard.writeText(summary);
                            } catch {
                              /* Clipboard blocked: the summary above can be selected by hand. */
                            }
                            setSent("copy");
                          }}
                        >
                          <Copy size={16} strokeWidth={1.5} aria-hidden="true" /> Copy my request
                        </button>
                        <a href={mailHref} className="btn btn-outline" onClick={() => setSent("email")}>
                          <Mail size={16} strokeWidth={1.5} aria-hidden="true" /> Email my request
                        </a>
                      </div>
                    )}
                    <p className="text-center text-[0.875rem] text-mute">Nothing is sent until you tap the button.</p>
                  </div>
                </div>
              ) : null}
            </>
          )}
        </div>

        {!sent ? (
          <div className="border-t border-line px-5 py-4 md:px-8">
            <div className="flex items-center justify-between gap-3">
              {step > 0 ? (
                <button type="button" onClick={back} className="btn -ml-3 px-3 text-ink">
                  <ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" /> Back
                </button>
              ) : (
                <span />
              )}
              {step < 3 ? (
                <button type="button" onClick={next} aria-disabled={!canNext} className={`btn btn-primary ${canNext ? "" : "opacity-50"}`}>
                  {step === 2 ? "Review" : "Next"}
                </button>
              ) : null}
            </div>
            <p className="mt-3 text-center text-[0.875rem] text-mute">
              Rather talk? <a href={business.phoneHref} className="font-medium text-azure-deep underline-offset-4 hover:underline">Call {business.phoneDisplay}</a>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ChoiceCard({ name, value, checked, onChange, onClick, label, wide }: { name: string; value: string; checked: boolean; onChange: () => void; onClick?: (e: React.MouseEvent) => void; label: string; wide?: boolean }) {
  return (
    <label className={`relative block ${wide ? "sm:col-span-2" : ""}`}>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} onClick={onClick} className="peer sr-only" />
      <span className="flex min-h-14 cursor-pointer items-center justify-between rounded-[8px] border border-line bg-paper px-4 text-[1rem] transition-colors hover:border-ink/40 peer-checked:border-azure-deep peer-checked:bg-ice peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-azure-deep">
        {label}
        <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full border ${checked ? "border-azure-deep bg-azure-deep text-paper" : "border-line"}`} aria-hidden="true">
          {checked ? <Check size={12} strokeWidth={2} /> : null}
        </span>
      </span>
    </label>
  );
}

function Pills({ legend, name, value, onChange, options }: { legend: string; name: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  return (
    <fieldset>
      <legend className="mb-2 font-medium">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o.value}>
            <input type="radio" name={name} value={o.value} checked={value === o.value} onChange={() => onChange(o.value)} className="peer sr-only" />
            <span className="inline-flex min-h-11 cursor-pointer items-center rounded-full border border-line px-4 text-[0.9375rem] peer-checked:border-azure-deep peer-checked:bg-azure-deep peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-azure-deep">
              {o.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Field({ label, hint, error, children }: { label: string; hint?: string; error?: string; children: (id: string, describedBy?: string) => React.ReactNode }) {
  const id = useId();
  const hintId = `${id}-hint`;
  const errId = `${id}-err`;
  const describedBy = [hint ? hintId : "", error ? errId : ""].filter(Boolean).join(" ") || undefined;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-medium">{label}</label>
      {children(id, describedBy)}
      {hint ? <p id={hintId} className="mt-1 text-[0.8125rem] text-mute">{hint}</p> : null}
      {error ? <p id={errId} className="mt-1 text-[0.875rem] text-error" role="alert">{error}</p> : null}
    </div>
  );
}
