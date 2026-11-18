/** The Aurelle mark: a small original four-point sparkle. Decorative. */
export function Sparkle({ className = "", size = 12 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={`inline-block shrink-0 ${className}`}
    >
      <path
        d="M12 0c.6 6.2 2.4 9.8 12 12-9.6 2.2-11.4 5.8-12 12-.6-6.2-2.4-9.8-12-12C9.6 9.8 11.4 6.2 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
