import { isDemo } from "@/lib/site";

/** Required on every sample before and after photo. // DRAFT: sample case, replace */
export function SampleLabel({ className = "" }: { className?: string }) {
  if (!isDemo) return null;
  return (
    <p className={`text-[0.8125rem] text-mute ${className}`} data-placeholder>
      <span className="font-medium text-ink">Sample case.</span> Replace with your own before and after photos.
    </p>
  );
}
