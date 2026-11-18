"use client";

import { lazy, Suspense, useEffect, useRef, useState } from "react";
import type { BookDetail } from "@/components/ui/BookButton";

// The modal's code loads only when it is first opened.
const VisitRequestModal = lazy(() => import("./VisitRequestModal"));

export function VisitRequestRoot() {
  const [state, setState] = useState<{ open: boolean; detail: BookDetail; key: number }>({ open: false, detail: {}, key: 0 });
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onBook = (e: Event) => {
      opener.current = document.activeElement as HTMLElement | null;
      const detail = (e as CustomEvent<BookDetail>).detail ?? {};
      setState((s) => ({ open: true, detail, key: s.key + 1 }));
    };
    window.addEventListener("aurelle:book", onBook);
    return () => window.removeEventListener("aurelle:book", onBook);
  }, []);

  useEffect(() => {
    if (!state.open) return;
    const html = document.documentElement;
    const prev = document.body.style.overflow;
    html.dataset.visit = "open";
    document.body.style.overflow = "hidden";
    return () => {
      delete html.dataset.visit;
      document.body.style.overflow = prev;
    };
  }, [state.open]);

  if (!state.open && state.key === 0) return null;
  return (
    <Suspense fallback={null}>
      {state.open ? (
        <VisitRequestModal
          key={state.key}
          initial={state.detail}
          onClose={() => {
            setState((s) => ({ ...s, open: false }));
            requestAnimationFrame(() => opener.current?.focus());
          }}
        />
      ) : null}
    </Suspense>
  );
}
