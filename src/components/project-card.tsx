import Link from "next/link";

import type { Project } from "@/content/projects";
import { FadeImage } from "./fade-image";

type Props = {
  project: Project;
  sizes: string;
  frame?: string;
  /** Heading level inside the surrounding section. */
  as?: "h2" | "h3";
  size?: "lg" | "md";
  /** Above the fold: load eagerly with high priority. */
  eager?: boolean;
};

export function ProjectCard({ project, sizes, frame = "aspect-[4/3]", as: Heading = "h3", size = "md", eager = false }: Props) {
  const photo = project.image;
  return (
    <article className="hover-zoom group relative">
      <div className={`relative overflow-hidden bg-paper-2 ${frame}`}>
        <FadeImage
          src={photo.src}
          alt={photo.alt}
          sizes={sizes}
          loading={eager ? "eager" : undefined}
          fetchPriority={eager ? "high" : undefined}
          style={photo.focus ? { objectPosition: photo.focus } : undefined}
        />
        {/* A soft shade that settles over the photo on hover. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-700 ease-out-quart group-hover:bg-ink/10"
        />
        {photo.rendering ? (
          <span className="t-meta absolute bottom-3 left-3 bg-paper/90 px-2 py-1">Visionsbild</span>
        ) : null}
      </div>
      <div className="mt-4 flex items-start justify-between gap-6 border-t border-ink pt-3">
        <div>
          <Heading className={size === "lg" ? "t-h2" : "t-h3"}>
            <Link
              href={`/projekt/${project.slug}`}
              className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-out-quart group-hover:bg-[length:100%_2px] after:absolute after:inset-0"
            >
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
