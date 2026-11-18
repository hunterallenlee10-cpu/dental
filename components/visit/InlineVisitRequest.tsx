"use client";

import dynamic from "next/dynamic";

// The inline form renders the same three steps, client-only.
const VisitRequestModal = dynamic(() => import("./VisitRequestModal"), {
  ssr: false,
  loading: () => <div className="h-[520px] rounded-[12px] border border-line bg-paper" aria-hidden="true" />,
});

export function InlineVisitRequest() {
  return <VisitRequestModal initial={{}} inline />;
}
