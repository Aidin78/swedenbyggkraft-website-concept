import Link from "next/link";
import Image from "next/image";

import type { Project } from "@/content/projects";
import { Reveal } from "./reveal";

type Props = {
  project: Project;
  sizes: string;
  frame?: string;
  /** Heading level inside the surrounding section. */
  as?: "h2" | "h3";
  size?: "lg" | "md";
};

export function ProjectCard({ project, sizes, frame = "aspect-[4/3]", as: Heading = "h3", size = "md" }: Props) {
  const photo = project.image;
  return (
    <article className="group relative">
      <Reveal>
        <div className={`relative overflow-hidden bg-paper-2 ${frame}`}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={sizes}
            placeholder="blur"
            className="object-cover transition-transform duration-[1.2s] ease-out-quart group-hover:scale-[1.035]"
            style={photo.focus ? { objectPosition: photo.focus } : undefined}
          />
          {photo.rendering ? (
            <span className="t-meta absolute bottom-3 left-3 bg-paper/90 px-2 py-1">Visionsbild</span>
          ) : null}
        </div>
      </Reveal>
      <div className="mt-4 flex items-start justify-between gap-6 border-t border-ink pt-3">
        <div>
          <Heading className={size === "lg" ? "t-h2" : "t-h3"}>
            <Link href={`/projekt/${project.slug}`} className="after:absolute after:inset-0">
              {project.name}
            </Link>
          </Heading>
          <p className="mt-2 max-w-md text-[0.9375rem] text-muted">{project.summary}</p>
        </div>
        <dl className="t-meta grid shrink-0 grid-cols-[auto] gap-y-1 text-right">
          <dt className="sr-only">Plats</dt>
          <dd className="text-ink">{project.location}</dd>
          <dt className="sr-only">Arbete</dt>
          <dd className="text-muted">{project.scope[0]}</dd>
        </dl>
      </div>
    </article>
  );
}
