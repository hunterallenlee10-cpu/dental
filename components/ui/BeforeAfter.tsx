"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { photos, type PhotoId } from "@/lib/photos";

type Props = { before: PhotoId; after: PhotoId; caseLabel: string; sizes: string; wide?: boolean };

/**
 * Draggable comparison. The before photo sits underneath; the after photo is clipped on top.
 * Mouse, touch (horizontal drags only, vertical scroll still works) and keyboard
 * (the handle is role="slider": arrows move 5%, Page keys 10%, Home and End).
 * // DRAFT: sample case, replace
 */
export function BeforeAfter({ before, after, caseLabel, sizes, wide }: Props) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const b = photos[before];
  const a = photos[after];

  const fromClientX = useCallback((x: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)));
  }, []);

  const onKey = (e: React.KeyboardEvent) => {
    const step = e.key === "PageUp" || e.key === "PageDown" ? 10 : 5;
    let next = pos;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "PageDown") next = pos - step;
    else if (e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "PageUp") next = pos + step;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = 100;
    else return;
    e.preventDefault();
    setPos(Math.min(100, Math.max(0, next)));
  };

  return (
    <div
      ref={box}
      className={`relative w-full touch-pan-y select-none overflow-hidden rounded-sm bg-porcelain ${wide ? "aspect-[2/1] max-w-[1200px]" : "aspect-[2/1] max-w-[600px]"}`}
      onPointerDown={(e) => {
        dragging.current = true;
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        fromClientX(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && fromClientX(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
      data-sample
    >
      <Image src={b.src} width={b.width} height={b.height} sizes={sizes} alt={`${caseLabel}, before treatment`} className="pointer-events-none absolute inset-0 h-full w-full object-cover [filter:saturate(0.85)_contrast(1.03)]" draggable={false} />
      <Image
        src={a.src}
        width={a.width}
        height={a.height}
        sizes={sizes}
        alt={`${caseLabel}, after treatment`}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover [filter:saturate(0.85)_contrast(1.03)]"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        draggable={false}
      />
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-paper">Before</span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-paper/90 px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-ink">After</span>
      <div className="pointer-events-none absolute inset-y-0 w-px bg-paper" style={{ left: `${pos}%` }} aria-hidden="true" />
      <div
        role="slider"
        tabIndex={0}
        aria-label={`Compare before and after, ${caseLabel}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`${Math.round(pos)}% before, ${100 - Math.round(pos)}% after`}
        onKeyDown={onKey}
        className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-paper bg-paper/95 text-ink shadow-float focus-visible:outline-cyan"
        style={{ left: `${pos}%` }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
        </svg>
      </div>
    </div>
  );
}
