import { site } from "@/content/site";

export function PartnerList({ title }: { title: string }) {
  return (
    <div className="border-t border-ink pt-6">
      <h3 className="t-meta text-muted">{title}</h3>
      <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
        {site.partners.map((p) => (
          <li
            key={p}
            className="text-[1.25rem] font-semibold tracking-[-0.02em] text-ink/80 sm:text-[1.5rem]"
            style={{ fontVariationSettings: '"wdth" 90' }}
          >
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
