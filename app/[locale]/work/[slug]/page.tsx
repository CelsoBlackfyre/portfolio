import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "@/components/icons";
import { ChipList, Label, Rise, Section } from "@/components/primitives";
import { ProjectVisual } from "@/components/project-visual";
import { neighbours, projects } from "@/content/archive";
import { getDictionary } from "@/lib/dictionary";
import { localePath, toLocale } from "@/lib/locales";
import { loc } from "@/lib/types";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = toLocale(rawLocale);
  const dict = getDictionary(locale);
  const project = projects.find((item) => item.slug === slug);

  if (!project) return { title: dict.labels.caseStudy };

  return {
    title: project.name,
    description: loc(project.tagline, locale),
    alternates: {
      canonical: `/${locale}/work/${project.slug}`,
      languages: {
        en: `/en/work/${project.slug}`,
        pt: `/pt/work/${project.slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: `${project.name}, ${dict.labels.caseStudy}`,
      description: loc(project.tagline, locale),
      url: `/${locale}/work/${project.slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = toLocale(rawLocale);
  const dict = getDictionary(locale);
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const { previous, next } = neighbours(project.slug);

  return (
    <article>
      <div className="container-page pt-12 sm:pt-14">
        <Rise>
          <Link
            href={localePath(locale, "/work")}
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            {dict.nav.work}
          </Link>
        </Rise>

        <Rise delay={60}>
          <div className="mt-12">
            <Label>{dict.labels.caseStudy}</Label>
          </div>

          <h1 className="display mt-5 text-[3rem] sm:text-6xl lg:text-7xl">{project.name}</h1>

          <p className="lede mt-6 max-w-[62ch] text-base sm:text-lg">
            {loc(project.tagline, locale)}
          </p>
        </Rise>

        <Rise delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {project.sourceKind === "proprietary" ? (
              <span className="chip">{dict.project.proprietarySource}</span>
            ) : null}
            {project.sourceKind === "private" ? (
              <span className="chip">{dict.project.privateSource}</span>
            ) : null}
            {project.sourceKind === "local" ? (
              <span className="chip">{dict.project.localSource}</span>
            ) : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="chip transition-colors hover:text-fg"
              >
                {dict.labels.live}
              </a>
            ) : null}
          </div>
        </Rise>
      </div>

      <div className="container-page mt-12">
        <div className="frame aspect-[16/9] sm:aspect-[21/9]">
          <ProjectVisual project={project} priority sizes="100vw" />
        </div>
      </div>

      <div className="container-page grid gap-12 pt-16 sm:pt-20 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
        <dl className="space-y-7">
          <div>
            <dt className="label">{dict.labels.role}</dt>
            <dd className="mt-2.5 text-sm leading-relaxed text-fg/90">
              {loc(project.role, locale)}
            </dd>
          </div>
          <div>
            <dt className="label">{dict.labels.status}</dt>
            <dd className="mt-2.5 text-sm leading-relaxed text-fg/90">
              {loc(project.status, locale)}
            </dd>
          </div>
          <div>
            <dt className="label">{dict.labels.source}</dt>
            <dd className="mt-2.5 text-sm leading-relaxed text-fg/90">
              {project.sourceKind === "proprietary" ? dict.project.proprietaryNote : null}
              {project.sourceKind === "private" ? dict.project.privateNote : null}
              {project.sourceKind === "local" ? dict.project.localNote : null}
              {project.liveUrl ? dict.project.liveNote : null}
            </dd>
          </div>
        </dl>

        <div>
          <h2 className="display-tight text-2xl text-fg sm:text-3xl">{dict.project.brief}</h2>
          <p className="lede mt-6 text-[0.9375rem] sm:text-base">{loc(project.brief, locale)}</p>
        </div>
      </div>

      <Section className="py-16! sm:py-20!">
        <div className="container-page grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <h2 className="display-tight text-2xl text-fg sm:text-3xl">{dict.project.build}</h2>

          <ol className="grid gap-7">
            {loc(project.build, locale).map((step, index) => (
              <li key={step} className="flex gap-5">
                <span className="pt-0.5 font-mono text-[0.6875rem] text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[0.9375rem] leading-relaxed text-fg/90">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="border-t border-line py-16! sm:py-20!">
        <div className="container-page">
          <h2 className="display-tight text-2xl text-fg sm:text-3xl">
            {dict.project.highlights}
          </h2>

          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {loc(project.highlights, locale).map((highlight) => (
              <div key={highlight.title}>
                <h3 className="text-base font-medium text-fg">{highlight.title}</h3>
                <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted">
                  {highlight.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-x-12 gap-y-12 border-t border-line pt-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="display-tight text-2xl text-fg sm:text-3xl">
                {dict.project.signals}
              </h2>
              <ul className="mt-7 grid gap-3.5">
                {loc(project.signals, locale).map((signal) => (
                  <li key={signal} className="flex items-start gap-3 text-sm text-fg/90">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                    {signal}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="display-tight text-2xl text-fg sm:text-3xl">{dict.project.stack}</h2>
              <div className="mt-7">
                <ChipList items={project.stack} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line py-14!">
        <div className="container-page grid gap-8 sm:grid-cols-2">
          {previous ? (
            <Link
              href={localePath(locale, `/work/${previous.slug}`)}
              className="group flex items-baseline gap-3"
            >
              <ArrowLeftIcon className="h-4 w-4 shrink-0 text-faint transition-transform duration-300 group-hover:-translate-x-0.5" />
              <span>
                <span className="label block">{dict.project.previous}</span>
                <span className="display-tight mt-2 block text-xl text-fg">{previous.name}</span>
              </span>
            </Link>
          ) : null}

          {next ? (
            <Link
              href={localePath(locale, `/work/${next.slug}`)}
              className="group flex items-baseline gap-3 sm:justify-end sm:text-right"
            >
              <span>
                <span className="label block">{dict.project.next}</span>
                <span className="display-tight mt-2 block text-xl text-fg">{next.name}</span>
              </span>
              <ArrowRightIcon className="h-4 w-4 shrink-0 text-faint transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          ) : null}
        </div>
      </Section>
    </article>
  );
}
