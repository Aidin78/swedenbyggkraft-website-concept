/** Placeholder shown while a detail page's content streams in after navigation. */
export function DetailSkeleton() {
  return (
    <div className="wrap animate-pulse pb-24 pt-8 sm:pt-12" aria-busy="true" aria-label="Laddar sidan">
      <div className="h-4 w-48 bg-paper-2" />
      <div className="grid-12 mt-14 gap-y-8">
        <div className="col-span-12 space-y-4 lg:col-span-6">
          <div className="h-16 w-3/4 bg-paper-2" />
          <div className="h-16 w-1/2 bg-paper-2" />
          <div className="mt-8 h-5 w-full max-w-md bg-paper-2" />
          <div className="h-5 w-4/5 max-w-md bg-paper-2" />
        </div>
        <div className="hatch col-span-12 aspect-[4/3] lg:col-span-6" />
      </div>
    </div>
  );
}
