import { Suspense } from "react";

/** A below-the-fold section: its own hydration boundary, and rendering skipped until it nears the viewport. */
export function Deferred({ children, size = 900 }: { children: React.ReactNode; size?: number }) {
  return (
    <Suspense>
      <div className="cv-auto" style={{ containIntrinsicSize: `auto ${size}px` }}>
        {children}
      </div>
    </Suspense>
  );
}
