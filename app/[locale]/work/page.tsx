import { LockIcon } from "@/components/icons";
import { Rise, Section, SectionHeading } from "@/components/primitives";
import { ProjectTile } from "@/components/project-card";
import { RepoExplorer } from "@/components/repo-explorer";
import { Reveal } from "@/components/reveal";
import { independentProjects, workProjects } from "@/content/archive";
import { repos } from "@/content/repos";
import { getDictionary } from "@/lib/dictionary";
import { toLocale } from "@/lib/locales";
import { loc } from "@/lib/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);
  return { title: dict.nav.work, description: dict.work.lede };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);

  const [leadWork, ...restWork] = workProjects;
  const [leadIndependent, ...restIndependent] = independentProjects;

  const items = repos.map((repo) => ({
    name: repo.name,
    href: repo.href,
    language: repo.language,
    live: repo.live,
    description: loc(repo.description, locale),
  }));

  return (
    <>
      <section className="pt-14 pb-12 sm:pt-20">
        <div className="container-page">
          <Rise>
            <h1 className="display max-w-4xl text-[2.5rem] sm:text-5xl lg:text-6xl">
              {dict.work.title}
            </h1>
          </Rise>
          <Rise delay={80}>
            <p className="lede mt-6 max-w-[58ch]">{dict.work.lede}</p>
          </Rise>
        </div>
      </section>

      <Section className="border-t border-line pt-16!">
        <div className="container-page">
          <SectionHeading title={dict.work.professionalTitle} lede={dict.work.professionalLede} />

          <div className="mt-12 grid gap-x-10 gap-y-14 lg:grid-cols-2">
            <Reveal className="lg:col-span-2">
              <ProjectTile project={leadWork} locale={locale} cta={dict.actions.viewCaseStudy} />
            </Reveal>

            {restWork.map((project) => (
              <Reveal key={project.slug}>
                <ProjectTile
                  project={project}
                  locale={locale}
                  cta={dict.actions.viewCaseStudy}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="container-page">
          <SectionHeading
            title={dict.work.independentTitle}
            lede={dict.work.independentLede}
          />

          <div className="mt-12 grid gap-x-10 gap-y-14 lg:grid-cols-2">
            <Reveal className="lg:col-span-2">
              <ProjectTile
                project={leadIndependent}
                locale={locale}
                cta={dict.actions.viewCaseStudy}
              />
            </Reveal>

            {restIndependent.map((project) => (
              <Reveal key={project.slug}>
                <ProjectTile
                  project={project}
                  locale={locale}
                  cta={dict.actions.viewCaseStudy}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={60}>
            <p className="mt-14 flex items-start gap-3 text-sm text-muted">
              <LockIcon className="mt-0.5 h-4 w-4 shrink-0 text-faint" />
              {dict.work.privateNote}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section id="repositories" className="border-t border-line">
        <div className="container-page">
          <SectionHeading
            title={dict.work.reposTitle}
            lede={dict.work.reposLede}
            id="repositories-heading"
          />

          <div className="mt-12">
            <RepoExplorer
              repos={items}
              labels={{
                filter: dict.a11y.filterRepos,
                all: dict.repos.all,
                live: dict.repos.live,
                empty: dict.repos.empty,
                countOne: dict.labels.repositoryOne,
                countMany: dict.labels.repositoryMany,
                openInNewTab: dict.a11y.openInNewTab,
              }}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
