/**
 * A dimension line in the style of a construction drawing:
 * extension ticks at both ends and the measurement set above the line.
 */
export function DimensionLine({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="flex items-center">
        <span className="h-6 w-px bg-current" />
        <span className="relative h-px flex-1 bg-current">
          <span className="absolute -left-px top-1/2 h-3 w-px -translate-y-1/2 rotate-45 bg-current" />
          <span className="absolute -right-px top-1/2 h-3 w-px -translate-y-1/2 rotate-45 bg-current" />
        </span>
        <span className="h-6 w-px bg-current" />
      </div>
      <span className="t-meta absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">{label}</span>
    </div>
  );
}
