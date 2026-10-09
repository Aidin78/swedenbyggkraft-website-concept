import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Breadcrumbs } from "@/components/page-intro";
import { Photo } from "@/components/photo";
import { ProjectCard } from "@/components/project-card";
import { CtaBand } from "@/components/cta-band";
import { DetailSkeleton } from "@/components/detail-skeleton";
import { buttonClass } from "@/components/button";
import { JsonLd } from "@/components/json-ld";
import { constructionServices, getService } from "@/content/services";
import { getProject } from "@/content/projects";
import { site } from "@/content/site";

export function generateStaticParams() {
  return constructionServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/tjanster/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: { canonical: `/tjanster/${service.slug}` },
  };
}

export default function ServicePage({ params }: PageProps<"/tjanster/[slug]">) {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <ServiceContent params={params} />
    </Suspense>
  );
}

async function ServiceContent({ params }: { params: PageProps<"/tjanster/[slug]">["params"] }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = constructionServices.indexOf(service);
  const prev = constructionServices[(index - 1 + constructionServices.length) % constructionServices.length];
  const next = constructionServices[(index + 1) % constructionServices.length];
  const related = service.relatedProjects.map((p) => getProject(p)).filter((p) => p !== undefined);
  const quote = `/kontakt?tjanst=${service.slug}#offert`;

  return (
    <>
      <section className="wrap pb-16 pt-8 sm:pt-12 lg:pb-24">
        <Breadcrumbs
          items={[
            { name: "Tjänster", href: "/tjanster" },
            { name: service.name, href: `/tjanster/${service.slug}` },
          ]}
        />
        <div className="grid-12 mt-10 gap-y-10 sm:mt-14">
          <div className="col-span-12 flex flex-col lg:col-span-6 lg:pb-4">
            <span className="t-figure text-[5rem] text-concrete sm:text-[7rem]" aria-hidden="true">
              {service.code}
            </span>
            <h1 className="t-display mt-6 !text-[clamp(2.5rem,4.8vw,5.25rem)]">
              {service.name}
            </h1>
            <p className="t-lead mt-8 max-w-xl text-ink/85">{service.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3 lg:mt-auto lg:pt-10">
              <Link href={quote} className={buttonClass("signal")}>
                Begär offert
              </Link>
              <a href={site.phone.href} className={buttonClass("outline")}>
                Ring {site.phone.display}
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Photo
              photo={service.image}
              frame="aspect-[4/3] lg:aspect-[4/5]"
              sizes="(min-width: 1024px) 48vw, 100vw"
              preload
              caption
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="innehall-tjanst" className="border-t border-line bg-white/50 py-16 sm:py-24">
        <div className="wrap grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 id="innehall-tjanst" className="t-h3">
                Det här ingår
              </h2>
              <ul className="mt-6 border-t border-ink">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-4 border-b border-line py-3.5">
                    <span aria-hidden="true" className="mt-2 size-2 shrink-0 bg-signal outline outline-1 outline-ink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="prose-body text-[1.125rem] text-ink/85">
              {service.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            {service.gallery.length ? (
              <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5">
                {service.gallery.map((photo, i) => {
                  const wide = i === 0 || (i === service.gallery.length - 1 && i % 2 === 1);
                  return (
                    <Photo
                      key={photo.alt}
                      photo={photo}
                      frame={wide ? "aspect-[16/10]" : "aspect-[4/5]"}
                      className={wide ? "col-span-2" : i % 2 === 0 ? "sm:mt-16" : ""}
                      sizes={wide ? "(min-width: 1024px) 56vw, 100vw" : "(min-width: 1024px) 28vw, 50vw"}
                      caption
                      reveal
                    />
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {related.length ? (
        <section aria-labelledby="relaterade" className="wrap py-16 sm:py-24">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 id="relaterade" className="t-h2">
              Projekt med {service.name.toLowerCase()}
            </h2>
            <Link href="/projekt" className="link-underline hidden font-semibold sm:inline-block">
              Alla projekt
            </Link>
          </div>
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} frame="aspect-[4/3]" sizes="(min-width: 768px) 32vw, 100vw" />
            ))}
          </div>
        </section>
      ) : null}

      <nav aria-label="Fler tjänster" className="border-t border-line">
        <div className="wrap grid sm:grid-cols-2">
          <Link
            href={`/tjanster/${prev.slug}`}
            className="group flex items-center gap-5 border-b border-line py-8 sm:border-b-0 sm:border-r sm:pr-8"
          >
            <ArrowLeft aria-hidden="true" className="size-6 shrink-0 transition-transform group-hover:-translate-x-1" />
            <span>
              <span className="t-meta block text-muted">Föregående tjänst</span>
              <span className="t-h3 mt-1 block">{prev.name}</span>
            </span>
          </Link>
          <Link
            href={`/tjanster/${next.slug}`}
            className="group flex items-center justify-end gap-5 py-8 text-right sm:pl-8"
          >
            <span>
              <span className="t-meta block text-muted">Nästa tjänst</span>
              <span className="t-h3 mt-1 block">{next.name}</span>
            </span>
            <ArrowRight aria-hidden="true" className="size-6 shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </nav>

      <CtaBand
        title={`Offert på ${service.name.toLowerCase()}`}
        text="Berätta kort om projektet – omfattning, plats och önskad tidplan – så återkommer vi med en kostnadsfri offert."
        href={quote}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name.replaceAll("\u00AD", ""),
          description: service.seo.description,
          serviceType: service.name.replaceAll("\u00AD", ""),
          provider: { "@id": `${site.url}/#foretag` },
          areaServed: site.areas.map((name) => ({ "@type": "City", name })),
          url: `${site.url}/tjanster/${service.slug}`,
        }}
      />
    </>
  );
}
