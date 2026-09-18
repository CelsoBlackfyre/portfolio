import Link from "next/link";
import { ArrowRightIcon, SparkIcon } from "@/components/icons";
import { Label, Rise, Section, SectionHeading } from "@/components/primitives";
import { RepoList } from "@/components/repo-list";
import { Reveal } from "@/components/reveal";
import { githubStats, languageStats, professional, toolkit } from "@/content/profile";
import { repos } from "@/content/repos";
import { getDictionary } from "@/lib/dictionary";
import { localePath, toLocale } from "@/lib/locales";
import { loc } from "@/lib/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);
  return { title: dict.nav.about, description: dict.about.lede };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);

  const totalWithLanguage = languageStats.reduce((sum, entry) => sum + entry.count, 0);
  const peak = Math.max(...languageStats.map((entry) => entry.count));

  const beyond = repos.slice(2, 8).map((repo) => ({
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
            <h1 className="display max-w-4xl text-[2.5rem] sm:text-5xl lg:text-[3.5rem]">
              {dict.about.title}
            </h1>
          </Rise>
          <Rise delay={80}>
            <p className="lede mt-6 max-w-[58ch]">{dict.about.lede}</p>
          </Rise>
        </div>
      </section>

      <Section className="border-t border-line pt-16!">
        <div className="container-page grid gap-14 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <Label>{dict.about.factsTitle}</Label>
              <dl className="mt-6 grid gap-5">
                {professional.employer ? (
                  <div>
                    <dt className="label">{dict.labels.employer}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-fg/90">
                      {professional.employer}, {loc(professional.focus, locale)}
                    </dd>
                  </div>
                ) : null}
                {dict.about.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="label">{fact.label}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-fg/90">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <figure className="mt-10 border-l border-line pl-6">
                <blockquote className="display-tight text-xl text-fg">
                  {dict.home.about.quote}
                </blockquote>
                <figcaption className="label mt-3">{dict.home.about.quoteSource}</figcaption>
              </figure>
            </div>
          </Reveal>

          <div className="space-y-14">
            {dict.about.sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 60}>
                <h2 className="display-tight text-2xl text-fg sm:text-[1.75rem]">
                  {section.title}
                </h2>
                <div className="prose-block mt-5">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="lede text-[0.9375rem] sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="container-page">
          <SectionHeading title={dict.about.principlesTitle} />

          <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {dict.about.principles.map((principle, index) => (
              <Reveal key={principle.title} delay={(index % 2) * 60}>
                <div>
                  <SparkIcon className="h-4 w-4 text-ember" />
                  <h3 className="display-tight mt-4 text-xl text-fg">{principle.title}</h3>
                  <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="container-page grid gap-14 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              title={dict.about.languagesTitle}
              lede={dict.about.languagesLede}
            />

            <ul className="mt-10 grid gap-5">
              {languageStats.map((entry) => (
                <li key={entry.language} className="grid gap-2">
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="text-sm text-fg/90">{entry.language}</span>
                    <span className="font-mono text-[0.6875rem] text-faint">{entry.count}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="block h-0.5 bg-ember/70"
                    style={{ width: `${(entry.count / peak) * 100}%` }}
                  />
                </li>
              ))}
            </ul>

            <p className="label mt-7">
              {totalWithLanguage} / {githubStats.publicRepositories}
            </p>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading title={dict.about.beyondTitle} lede={dict.about.beyondBody} />
            </Reveal>

            <Reveal delay={60} className="mt-12">
              <RepoList
                items={beyond}
                liveLabel={dict.labels.live}
                openLabel={dict.a11y.openInNewTab}
              />
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-12">
                <Link href={localePath(locale, "/work")} className="btn btn-ghost">
                  {dict.actions.viewWork}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line py-16!">
        <div className="container-page">
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {toolkit.map((group) => (
              <div key={group.label.en}>
                <Label>{loc(group.label, locale)}</Label>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
