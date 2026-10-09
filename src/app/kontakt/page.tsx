import type { Metadata } from "next";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";

import { Breadcrumbs } from "@/components/page-intro";
import { QuoteForm, type Option } from "@/components/quote-form";
import { constructionServices } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt och offertförfrågan",
  description:
    "Begär en kostnadsfri offert från Sweden Bygg Kraft. Ring 070-819 55 51, mejla info@swedenbyggkraft.se eller besök oss på Mellanbergsvägen 43 i Hägersten.",
  alternates: { canonical: "/kontakt" },
};

const serviceOptions: Option[] = [
  ...constructionServices.map((s) => ({ value: s.slug, label: s.name })),
  { value: "fastighetsskotsel", label: "Fastighetsskötsel" },
  { value: "underhallsplan", label: "Underhållsplan" },
  { value: "mark-tradgard", label: "Markarbeten och trädgårdsservice" },
  { value: "snorojning", label: "Snöröjning" },
  { value: "annat", label: "Annat" },
];

export default function ContactPage() {
  return (
    <>
      <section className="wrap pb-14 pt-8 sm:pt-12">
        <Breadcrumbs items={[{ name: "Kontakt", href: "/kontakt" }]} />
        <h1 className="t-display mt-10 max-w-[14ch] sm:mt-14">Kontakta oss</h1>
      </section>

      <div className="wrap grid-12 gap-y-14 pb-20 sm:pb-28">
        <aside aria-label="Kontaktuppgifter" className="col-span-12 lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="t-lead max-w-sm text-ink/85">Ni når oss enklast på telefon eller e-post.</p>

            <ul className="mt-8 border-t border-ink">
              <li className="border-b border-line">
                <a href={site.phone.href} className="group flex items-center gap-4 py-4">
                  <Phone aria-hidden="true" className="size-5 shrink-0" />
                  <span>
                    <span className="t-meta block text-muted">Telefon</span>
                    <span className="text-[1.25rem] font-bold tracking-[-0.01em] group-hover:underline">
                      {site.phone.display}
                    </span>
                  </span>
                </a>
              </li>
              <li className="border-b border-line">
                <a href={`mailto:${site.email}`} className="group flex items-center gap-4 py-4">
                  <Mail aria-hidden="true" className="size-5 shrink-0" />
                  <span className="min-w-0">
                    <span className="t-meta block text-muted">E-post</span>
                    <span className="block break-words text-[1.25rem] font-bold tracking-[-0.01em] group-hover:underline">
                      {site.email}
                    </span>
                  </span>
                </a>
              </li>
              <li className="border-b border-line">
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4"
                >
                  <MapPin aria-hidden="true" className="size-5 shrink-0" />
                  <span className="flex-1">
                    <span className="t-meta block text-muted">Kontor</span>
                    <span className="block font-semibold group-hover:underline">
                      {site.address.street}, {site.address.postalCode} {site.address.city}
                    </span>
                  </span>
                  <span className="t-meta flex items-center gap-1 text-muted">
                    Karta <ArrowUpRight aria-hidden="true" className="size-4" />
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 border-b border-line py-4">
                <Clock aria-hidden="true" className="size-5 shrink-0" />
                <span>
                  <span className="t-meta block text-muted">Öppettider</span>
                  <span className="font-semibold">{site.hours.display}</span>
                </span>
              </li>
            </ul>

            <h2 className="t-h3 mt-12">Kontaktpersoner</h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {site.contacts.map((c) => (
                <li key={c.name} className="border-t-2 border-ink pt-3">
                  <p className="font-bold">{c.name}</p>
                  <p className="text-[0.9375rem] text-muted">{c.role}</p>
                  <a href={c.href} className="t-code mt-1 inline-block text-[1.0625rem] underline-offset-4 hover:underline">
                    {c.phone}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-[0.9375rem] text-ink/75">
              Vill du besöka kontoret och träffa oss personligen? Boka ett möte via{" "}
              <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-2">
                e-post
              </a>
              .
            </p>
            <p className="t-meta mt-6 text-muted">
              {site.name}, org.nr {site.orgNumber}
            </p>
          </div>
        </aside>

        <section
          id="offert"
          aria-labelledby="offert-titel"
          className="col-span-12 scroll-mt-28 bg-paper-2/70 p-5 sm:p-8 lg:col-span-7 lg:col-start-6 lg:p-12"
        >
          <h2 id="offert-titel" className="t-h2">
            Begär offert
          </h2>
          <p className="mt-4 max-w-xl text-ink/80">
            Berätta om ert projekt så återkommer vi med frågor, förslag på upplägg och en kostnadsfri offert.
          </p>
          <div className="mt-10">
            <QuoteForm email={site.email} phone={site.phone} services={serviceOptions} />
          </div>
        </section>
      </div>
    </>
  );
}
