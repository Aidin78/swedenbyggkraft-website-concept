import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { CtaBand } from "@/components/cta-band";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Projekt och referenser",
  description:
    "Referensprojekt i Stockholmsområdet: prefabmontage, gjutning, stommontage och fasadarbeten åt bland andra Serneke, Consto, Montera i Storfors och Familjen Byggare.",
  alternates: { canonical: "/projekt" },
};

/** Column placement per position, so the grid reads as composed rather than tiled. */
const layout = [
  { cell: "col-span-12 lg:col-span-8", frame: "aspect-[16/10]", sizes: "(min-width: 1024px) 64vw, 100vw", size: "lg" },
  { cell: "col-span-12 sm:col-span-8 lg:col-span-4 lg:mt-40", frame: "aspect-square", sizes: "(min-width: 1024px) 32vw, 66vw" },
  { cell: "col-span-12 sm:col-span-7 lg:col-span-5", frame: "aspect-[4/5]", sizes: "(min-width: 1024px) 40vw, 58vw" },
  { cell: "col-span-12 lg:col-span-6 lg:col-start-7 lg:mt-24", frame: "aspect-[4/3]", sizes: "(min-width: 1024px) 48vw, 100vw" },
  { cell: "col-span-12 sm:col-span-6 lg:col-span-4", frame: "aspect-square", sizes: "(min-width: 1024px) 32vw, 50vw" },
  { cell: "col-span-12 sm:col-span-6 lg:col-span-4 lg:mt-20", frame: "aspect-[4/5]", sizes: "(min-width: 1024px) 32vw, 50vw" },
  { cell: "col-span-12 sm:col-span-8 lg:col-span-4", frame: "aspect-[5/4]", sizes: "(min-width: 1024px) 32vw, 66vw" },
] as const;

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        crumbs={[{ name: "Projekt", href: "/projekt" }]}
        title="Projekt"
        lead="Ett urval av uppdrag där vi har monterat stommar, gjutit, byggt hus och arbetat med fasader – ofta som en del av större entreprenader tillsammans med andra byggföretag."
        aside={
          <dl className="grid grid-cols-2 border-t border-ink">
            <div className="border-b border-line py-3 pr-4">
              <dt className="t-meta text-muted">Referensprojekt</dt>
              <dd className="t-figure mt-2 text-[3.5rem]">{projects.length}</dd>
            </div>
            <div className="border-b border-line py-3 pl-4">
              <dt className="t-meta text-muted">Uppdragsgivare och partners</dt>
              <dd className="t-figure mt-2 text-[3.5rem]">{site.partners.length}</dd>
            </div>
          </dl>
        }
      />

      <section aria-label="Projektbilder" className="wrap pb-20 sm:pb-28">
        <div className="grid-12 gap-y-14 sm:gap-y-20">
          {projects.map((p, i) => {
            const l = layout[i % layout.length];
            return (
              <div key={p.slug} className={l.cell}>
                <ProjectCard
                  project={p}
                  frame={l.frame}
                  sizes={l.sizes}
                  as="h2"
                  size={"size" in l ? "lg" : "md"}
                  eager={i === 0}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="referenslista" className="border-t border-line bg-white/50 py-16 sm:py-24">
        <div className="wrap">
          <h2 id="referenslista" className="t-h2">
            Referenslista
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left text-[0.9375rem]">
              <thead>
                <tr className="t-meta border-b border-ink text-muted">
                  <th scope="col" className="py-3 pr-4 font-medium">
                    Projekt
                  </th>
                  <th scope="col" className="py-3 pr-4 font-medium">
                    Plats
                  </th>
                  <th scope="col" className="py-3 pr-4 font-medium">
                    Utfört arbete
                  </th>
                  <th scope="col" className="py-3 font-medium">
                    Uppdragsgivare / partner
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p.slug} className="border-b border-line align-top">
                    <th scope="row" className="py-4 pr-4 font-semibold">
                      <Link href={`/projekt/${p.slug}`} className="underline decoration-line-strong underline-offset-4 hover:decoration-ink">
                        {p.name}
                      </Link>
                    </th>
                    <td className="py-4 pr-4">{p.location}</td>
                    <td className="py-4 pr-4 text-ink/80">{p.scope.join(", ")}</td>
                    <td className="py-4 text-ink/80">{p.partner ?? "–"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand title="Planerar ni ett liknande projekt?" />
    </>
  );
}
