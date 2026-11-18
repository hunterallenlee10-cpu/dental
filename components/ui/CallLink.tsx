import { Phone } from "lucide-react";
import { business } from "@/lib/business";

export function CallLink({ className = "btn btn-outline", label, icon = true }: { className?: string; label?: string; icon?: boolean }) {
  return (
    <a href={business.phoneHref} className={className}>
      {icon ? <Phone size={16} strokeWidth={1.5} aria-hidden="true" /> : null}
      {label ?? `Call ${business.phoneDisplay}`}
    </a>
  );
}
