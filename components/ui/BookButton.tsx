"use client";

import type { ReactNode } from "react";
import { routes } from "@/lib/routes";
import type { LocationSlug } from "@/content/types";

export type VisitReason = "checkup" | "pain" | "filling" | "restorative" | "ortho" | "cosmetic" | "other";
export type BookDetail = { office?: LocationSlug | "soonest"; reason?: VisitReason };

export const openVisitRequest = (detail: BookDetail = {}) => {
  window.dispatchEvent(new CustomEvent<BookDetail>("aurelle:book", { detail }));
};

type Props = BookDetail & {
  className?: string;
  children?: ReactNode;
  label?: string;
};

/**
 * Every primary action. A real link to /book (works without JavaScript and for crawlers);
 * with JavaScript it opens the Visit Request with the right pre-selects.
 */
export function BookButton({ office, reason, className = "btn btn-primary", children, label }: Props) {
  return (
    <a
      href={routes.book}
      className={className}
      aria-haspopup="dialog"
      data-book
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        openVisitRequest({ office, reason });
      }}
    >
      {children ?? label ?? "Book a visit"}
    </a>
  );
}
