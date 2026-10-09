import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/page-intro";
import { Photo } from "@/components/photo";
import { ProjectCard } from "@/components/project-card";
import { DimensionLine } from "@/components/dimension-figure";
import { CtaBand } from "@/components/cta-band";
import { getProject, projects } from "@/content/projects";
import { constructionServices } from "@/content/services";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projekt/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name}, ${project.location} – referensprojekt`,
    description: `${project.summary} ${project.scope.join(", ")} i ${project.location}.`,
    alternates: { canonical: `/projekt/${project.slug}` },
  };
}

// Every slug is prerendered from generateStaticParams, so the page may resolve
// params up front: navigation shows the finished page instead of a skeleton.
export const instant = false;

export default async function ProjectPage({ params }: PageProps<"/projekt/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const related = [1, 2, 3].map((n) => projects[(index + n) % projects.length]);
  const services = project.services
    .map((s) => constructionServices.find((c) => c.slug === s))
    .filter((s) => s !== undefined);
  // Keep the gallery a composed set: real photos first, then honest placeholders.
  const placeholders = project.gallery.length < 2;
  const { width, height } = project.image.src;
  const panoramic = width >= 1000 && width / height >= 1.3;

  const facts = (
    <dl className="border-t border-ink">
      <div className="grid grid-cols-[9rem_1fr] gap-4 border-b border-line py-3.5">
        <dt className="t-meta pt-0.5 text-muted">Plats</dt>
        <dd className="font-semibold">{project.location}</dd>
      </div>
      {project.partner ? (
        <div className="grid grid-cols-[9rem_1fr] gap-4 border-b border-line py-3.5">
          <dt className="t-meta pt-0.5 text-muted">{project.partnerRole}</dt>
          <dd className="font-semibold">{project.partner}</dd>
        </div>
      ) : null}
      <div className="grid grid-cols-[9rem_1fr] gap-4 border-b border-line py-3.5">
        <dt className="t-meta pt-0.5 text-muted">Utfört arbete</dt>
        <dd>
          <ul>
            {project.scope.map((s) => (
              <li key={s} className="font-semibold">
                {s}
              </li>
            ))}
          </ul>
        </dd>
      </div>
      {services.length ? (
        <div className="grid grid-cols-[9rem_1fr] gap-4 border-b border-line py-3.5">
          <dt className="t-meta pt-0.5 text-muted">Tjänster</dt>
          <dd>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/tjanster/${s.slug}`} className="underline decoration-line-strong underline-offset-4 hover:decoration-ink">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ) : null}
    </dl>
  );

  return (
    <>
      <section className="wrap pt-8 sm:pt-12">
        <Breadcrumbs
          items={[
            { name: "Projekt", href: "/projekt" },
            { name: project.name, href: `/projekt/${project.slug}` },
          ]}
        />
        <div className="grid-12 mt-10 gap-y-6 sm:mt-14">
          <h1 className="t-display col-span-12 lg:col-span-9">{project.name}</h1>
          <p className="t-h3 col-span-12 text-muted lg:col-span-3 lg:self-end lg:text-right">{project.location}</p>
        </div>
      </section>

      <section className="mt-10 sm:mt-14">
        <div className="wrap">
          {panoramic ? (
            <Photo
              photo={project.image}
              frame="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
              sizes="(min-width: 1536px) 1440px, 100vw"
              preload
            />
          ) : (
            // Portrait or small originals are not cropped thin; the facts sit beside them.
            <div className="grid-12 gap-y-10">
              <Photo
                photo={project.image}
                frame="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/11]"
                className="col-span-12 lg:col-span-8"
                sizes="(min-width: 1024px) 64vw, 100vw"
                preload
              />
              <aside aria-label="Projektfakta" className="col-span-12 lg:col-span-4 lg:self-end">
                {facts}
              </aside>
            </div>
          )}
        </div>
      </section>

      <section aria-labelledby="oversikt" className={`wrap pt-16 sm:pt-24 ${project.figures ? "pb-16 sm:pb-24" : ""}`}>
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <h2 id="oversikt" className="sr-only">
              Om projektet
            </h2>
            <p className="t-h3 max-w-[32ch] !text-[clamp(1.5rem,2.4vw,2.25rem)] !leading-[1.15]">{project.summary}</p>
            <div className="prose-body mt-8 text-[1.125rem] text-ink/85">
              {project.description.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          {panoramic ? (
            <aside aria-label="Projektfakta" className="col-span-12 lg:col-span-4 lg:col-start-9">
              {facts}
            </aside>
          ) : null}
        </div>
      </section>

      {project.figures ? (
        <section aria-label="Mått och vikter" className="on-dark bg-ink text-paper">
          <div className="wrap grid gap-12 py-16 sm:grid-cols-2 sm:py-24">
            {project.figures.map((f) => (
              <div key={f.label}>
                <p className="t-figure text-[clamp(6rem,16vw,14rem)] text-signal">
                  {f.value}
                  <span className="ml-[0.08em] text-[0.32em] tracking-normal">{f.unit}</span>
                </p>
                {/* Only lengths get a dimension line; other figures get a plain label. */}
                {f.unit === "m" ? (
                  <DimensionLine label={f.label} className="mt-10 text-paper/70" />
                ) : (
                  <p className="t-meta mt-4 border-t border-paper/40 pt-3 text-paper/70">{f.label}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section aria-labelledby="bilder" className="wrap pb-16 pt-16 sm:pb-24 sm:pt-24">
        <h2 id="bilder" className="t-h2 border-t border-ink pt-8">
          Bilder
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {project.gallery.map((photo, i) => (
            <Photo
              key={photo.alt}
              photo={photo}
              frame={i === 0 ? "aspect-[4/3]" : "aspect-[4/5]"}
              className={i === 0 ? "col-span-2" : ""}
              sizes={i === 0 ? "(min-width: 1024px) 64vw, 100vw" : "(min-width: 1024px) 32vw, 50vw"}
              caption
              reveal
            />
          ))}
          {placeholders ? (
            <div className="hatch col-span-2 flex min-h-40 items-end p-4 lg:col-span-3">
              <p className="t-meta bg-paper px-2 py-1 text-muted">
                Plats för fler projektbilder – kompletteras av Sweden Bygg Kraft
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <section aria-labelledby="fler-projekt" className="border-t border-line bg-white/50 py-16 sm:py-24">
        <div className="wrap">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 id="fler-projekt" className="t-h2">
              Fler projekt
            </h2>
            <Link href="/projekt" className="link-underline font-semibold">
              Alla projekt
            </Link>
          </div>
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
            {related.map((p, i) => (
              <ProjectCard
                key={p.slug}
                project={p}
                frame={i === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}
                sizes="(min-width: 768px) 32vw, 100vw"
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Planerar ni ett liknande projekt?" />
    </>
  );
}
