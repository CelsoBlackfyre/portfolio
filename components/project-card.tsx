import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { ChipList } from "@/components/primitives";
import { ProjectVisual } from "@/components/project-visual";
import type { Project } from "@/content/projects";
import { localePath, type Locale } from "@/lib/locales";
import { loc } from "@/lib/types";

export function FeaturedProject({
  project,
  locale,
  cta,
  priority = false,
}: {
  project: Project;
  locale: Locale;
  cta: string;
  priority?: boolean;
}) {
  return (
    <article className="group">
      <Link
        href={localePath(locale, `/work/${project.slug}`)}
        className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14"
      >
        <div>
          <h3 className="display text-4xl text-fg sm:text-5xl lg:text-[3.5rem]">
            {project.name}
          </h3>

          <p className="lede mt-4 max-w-lg text-[0.9375rem] sm:text-base">
            {loc(project.tagline, locale)}
          </p>

          <div className="mt-7">
            <ChipList items={project.stack} max={5} />
          </div>

          <span className="mt-8 inline-flex items-center gap-2 text-sm text-ember-bright">
            {cta}
            <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>

        <div className="frame aspect-[16/10]">
          <ProjectVisual project={project} priority={priority} sizes="(min-width: 1024px) 52vw, 100vw" />
        </div>
      </Link>
    </article>
  );
}

export function ProjectTile({
  project,
  locale,
  cta,
}: {
  project: Project;
  locale: Locale;
  cta: string;
}) {
  return (
    <article className="group h-full">
      <Link
        href={localePath(locale, `/work/${project.slug}`)}
        aria-label={`${project.name}, ${cta}`}
        className="flex h-full flex-col"
      >
        <div className="frame aspect-[16/10]">
          <ProjectVisual project={project} sizes="(min-width: 1024px) 30vw, 100vw" />
        </div>

        <h3 className="display-tight mt-6 text-2xl text-fg sm:text-[1.625rem]">
          {project.name}
        </h3>

        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
          {loc(project.tagline, locale)}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {project.stack.slice(0, 3).map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}
