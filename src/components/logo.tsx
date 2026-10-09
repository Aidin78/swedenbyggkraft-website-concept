type MarkProps = { className?: string; tone?: "light" | "dark" };

/**
 * Simplified redraw of the company mark: the roof and the helmet,
 * reduced to two geometric shapes in the brand's blue and yellow.
 */
export function LogoMark({ className, tone = "light" }: MarkProps) {
  const roof = tone === "dark" ? "#efefeb" : "#24489b";
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <path d="M5 23.5 24 8l19 15.5" fill="none" stroke={roof} strokeWidth="5" strokeLinejoin="miter" />
      <path d="M11 37a13 13 0 0 1 26 0Z" fill="#f9cf06" />
      <path d="M22.25 24.1h3.5V37h-3.5z" fill={tone === "dark" ? "#202525" : "#e2b900"} />
      <path d="M7 37h34v4H7z" fill="#f9cf06" />
    </svg>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="size-9 shrink-0 sm:size-10" tone={tone} />
      <span className="flex flex-col whitespace-nowrap leading-none">
        <span
          className="text-[0.9375rem] font-[780] tracking-[-0.03em] xs:text-[1.0625rem] sm:text-[1.1875rem]"
          style={{ fontVariationSettings: '"wdth" 118' }}
        >
          Sweden Bygg Kraft
        </span>
        <span className="t-meta mt-1 text-[0.6875rem] opacity-70">Bygg &amp; fastighetsservice</span>
      </span>
    </span>
  );
}
