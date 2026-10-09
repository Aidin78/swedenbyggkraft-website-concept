import Link from "next/link";

import { LogoMark } from "./logo";
import { constructionServices, serviceHref } from "@/content/services";
import { site, quoteHref } from "@/content/site";

const companyLinks = [
  { label: "Projekt", href: "/projekt" },
  { label: "Om oss", href: "/om-oss" },
  { label: "För BRF & fastighetsägare", href: "/brf-fastighetsagare" },
  { label: "Fastighetsskötsel", href: "/brf-fastighetsagare/fastighetsskotsel" },
  { label: "Underhållsplan", href: "/brf-fastighetsagare/underhallsplan" },
  { label: "Kontakt", href: "/kontakt" },
];

/** Cached so the static shell can be prerendered. */
async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export function SiteFooter() {
  return (
    <footer className="on-dark bg-ink text-paper">
      <div className="wrap pt-16 sm:pt-24">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="t-meta text-paper/60">Kontakt</h2>
            <ul className="mt-4 space-y-1">
              <li>
                <a
                  href={site.phone.href}
                  className="t-h2 inline-block underline decoration-paper/30 decoration-1 underline-offset-[0.18em] transition-colors hover:decoration-signal"
                >
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="t-h3 inline-block break-all underline decoration-paper/30 decoration-1 underline-offset-[0.2em] transition-colors hover:decoration-signal"
                >
                  {site.email}
                </a>
              </li>
            </ul>
            <p className="mt-6 max-w-sm text-paper/70">
              Byggföretag med helhetsåtagande – för byggentreprenörer, fastighetsägare, föreningar och privatpersoner.
            </p>
            <Link
              href={quoteHref}
              className="mt-8 inline-flex min-h-12 items-center rounded-[2px] bg-signal px-6 font-semibold text-ink transition-colors hover:bg-paper"
            >
              Begär offert
            </Link>
          </div>

          <div className="col-span-6 sm:col-span-4 lg:col-span-2 lg:col-start-7">
            <h2 className="t-meta text-paper/60">Tjänster</h2>
            <ul className="mt-4 space-y-2 text-[0.9375rem]">
              {constructionServices.map((s) => (
                <li key={s.slug}>
                  <Link href={serviceHref(s)} className="link-underline">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <h2 className="t-meta text-paper/60">Företaget</h2>
            <ul className="mt-4 space-y-2 text-[0.9375rem]">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <address className="col-span-12 not-italic sm:col-span-4 lg:col-span-2">
            <h2 className="t-meta text-paper/60">Kontor</h2>
            <p className="mt-4 text-[0.9375rem]">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </p>
            <p className="mt-3 text-[0.9375rem] text-paper/70">{site.hours.display}</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[0.9375rem]">
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="link-underline" rel="noopener noreferrer" target="_blank">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </address>
        </div>

        <div className="mt-20 flex items-end gap-4 border-t border-line-inverse pt-8 sm:mt-28">
          <LogoMark tone="dark" className="mb-[0.6vw] w-[9vw] max-w-28 shrink-0" />
          <p
            aria-hidden="true"
            className="whitespace-nowrap text-[clamp(2rem,9.6vw,9.5rem)] leading-[0.8] font-[800] tracking-[-0.05em]"
            style={{ fontVariationSettings: '"wdth" 125' }}
          >
            Bygg Kraft
          </p>
        </div>

        <div className="t-meta flex flex-col gap-2 py-8 text-paper/60 sm:flex-row sm:justify-between">
          <p>
            © <CurrentYear /> {site.name}. Org.nr {site.orgNumber}
          </p>
          <p>Stockholm, Uppsala och Eskilstuna</p>
        </div>
      </div>
    </footer>
  );
}
