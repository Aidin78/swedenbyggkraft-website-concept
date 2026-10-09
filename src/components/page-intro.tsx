import Link from "next/link";
import type { ReactNode } from "react";

import { JsonLd, breadcrumbSchema } from "./json-ld";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Start", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Brödsmulor" className="t-meta text-muted">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-ink">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className="link-underline hover:text-ink">
                      {c.name}
                    </Link>
                    <span aria-hidden="true" className="inline-block h-px w-4 bg-line-strong" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}

type IntroProps = {
  crumbs: Crumb[];
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  /** Content for the right-hand column on wide screens. */
  aside?: ReactNode;
};

/** Opening block for sub-pages: breadcrumb, large title, lead text. */
export function PageIntro({ crumbs, title, lead, children, aside }: IntroProps) {
  return (
    <section className="wrap pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-20">
      <Breadcrumbs items={crumbs} />
      <div className="grid-12 mt-10 gap-y-8 sm:mt-14">
        <div className={aside ? "col-span-12 lg:col-span-7" : "col-span-12 lg:col-span-10"}>
          <h1 className="t-display">{title}</h1>
        </div>
        {aside ? <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-end">{aside}</div> : null}
        {lead ? (
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <p className="t-lead text-ink/85">{lead}</p>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
