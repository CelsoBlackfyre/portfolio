import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import {
  Label,
  RichHeadline,
  Rise,
  Section,
  SectionHeading,
  StatusPill,
} from "@/components/primitives";
import { FeaturedProject, ProjectTile } from "@/components/project-card";
import { RepoList } from "@/components/repo-list";
import { Reveal } from "@/components/reveal";
import { projects } from "@/content/archive";
import type { Project } from "@/content/projects";
import { githubStats, profile, toolkit } from "@/content/profile";
import { repos } from "@/content/repos";
import { getDictionary } from "@/lib/dictionary";
import { localePath, toLocale } from "@/lib/locales";
import { loc } from "@/lib/types";

const tileSlugs = ["cucaforms", "blackframe", "tenda", "arena"];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);

  const [featured] = projects;
  const tiles = tileSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));

  const featuredRepos = repos.slice(0, 6).map((repo) => ({
    name: repo.name,
    href: repo.href,
    language: repo.language,
    live: repo.live,
    description: loc(repo.description, locale),
  }));

  return (
    <>
      <section className="pt-14 pb-14 sm:pt-20 sm:pb-16">
        <div className="container-page">
          <Rise>
            <StatusPill label={dict.home.availability} />
          </Rise>

          <Rise delay={70}>
            <h1 className="display mt-8 text-[2.5rem] sm:text-6xl lg:text-7xl">
              {dict.home.title.map((line, index) => (
                <span key={index} className="block">
                  <RichHeadline line={line} />
                </span>
              ))}
            </h1>
          </Rise>

          <Rise delay={140}>
            <p className="lede mt-7 max-w-[54ch] text-base sm:text-lg">{dict.home.lede}</p>
          </Rise>

          <Rise delay={210}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={localePath(locale, "/work")} className="btn btn-primary">
                {dict.actions.viewWork}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href={localePath(locale, "/about")} className="btn btn-ghost">
                {dict.actions.aboutMe}
              </Link>
            </div>
          </Rise>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="container-page grid grid-cols-2 gap-y-9 py-10 sm:grid-cols-4 sm:py-12">
          {dict.home.proof.map((item) => (
            <div key={item.label}>
              <p className="display text-3xl text-fg sm:text-4xl">{item.value}</p>
              <p className="label mt-2.5">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Section className="border-b border-line">
        <div className="container-page">
          <SectionHeading
            title={dict.home.work.title}
            lede={dict.home.work.lede}
            id="work"
          />

          <Reveal className="mt-16">
            <FeaturedProject
              project={featured}
              locale={locale}
              cta={dict.actions.viewCaseStudy}
              priority
            />
          </Reveal>

          <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2">
            {tiles.map((project) => (
              <Reveal key={project.slug}>
                <ProjectTile project={project} locale={locale} cta={dict.actions.viewCaseStudy} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-b border-line">
        <div className="container-page grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <SectionHeading title={dict.home.about.title} />
            <div className="prose-block mt-8 max-w-[62ch]">
              {dict.home.about.body.map((paragraph) => (
                <p key={paragraph} className="lede text-[0.9375rem] sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <Reveal delay={80}>
            <figure className="border-l border-line pl-6">
              <blockquote className="display-tight text-2xl text-fg">
                {dict.home.about.quote}
              </blockquote>
              <figcaption className="label mt-4">{dict.home.about.quoteSource}</figcaption>
            </figure>

            <dl className="mt-10 grid grid-cols-2 gap-x-8">
              <div>
                <dt className="label">{dict.about.facts[2].label}</dt>
                <dd className="display mt-2.5 text-3xl text-fg">
                  {githubStats.firstRepositoryYear}
                </dd>
              </div>
              <div>
                <dt className="label">{dict.labels.repositoryMany}</dt>
                <dd className="display mt-2.5 text-3xl text-fg">
                  {githubStats.publicRepositories}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section className="border-b border-line">
        <div className="container-page">
          <SectionHeading title={dict.home.toolkit.title} lede={dict.home.toolkit.lede} />

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {toolkit.map((group, index) => (
              <Reveal key={group.label.en} delay={index * 50}>
                <Label>{loc(group.label, locale)}</Label>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-page">
          <SectionHeading title={dict.home.github.title} lede={dict.home.github.lede} />

          <Reveal className="mt-14">
            <RepoList
              items={featuredRepos}
              liveLabel={dict.labels.live}
              openLabel={dict.a11y.openInNewTab}
            />
          </Reveal>

          <Reveal delay={60}>
            <p className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline text-fg"
              >
                @{profile.handle}
              </a>
              <span>
                {githubStats.publicRepositories} {dict.labels.repositoryMany}
              </span>
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
