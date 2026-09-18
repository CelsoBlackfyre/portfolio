import { ArrowUpRightIcon } from "@/components/icons";

export type RepoListItem = {
  name: string;
  href: string;
  language: string;
  live?: string;
  description: string;
};

export function RepoList({
  items,
  liveLabel,
  openLabel,
}: {
  items: RepoListItem[];
  liveLabel: string;
  openLabel: string;
}) {
  return (
    <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
      {items.map((repo) => (
        <li key={repo.name} className="group relative">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-mono text-sm text-fg">
              <a
                href={repo.href}
                target="_blank"
                rel="noreferrer noopener"
                className="after:absolute after:inset-0"
              >
                {repo.name}
                <span className="sr-only"> ({openLabel})</span>
              </a>
            </h3>

            {repo.live ? (
              <a
                href={repo.live}
                target="_blank"
                rel="noreferrer noopener"
                className="relative z-10 inline-flex shrink-0 items-center gap-1 font-mono text-[0.6875rem] text-ember-bright transition-colors hover:text-fg"
              >
                {liveLabel}
                <ArrowUpRightIcon className="h-3 w-3" />
              </a>
            ) : null}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted">{repo.description}</p>

          <p className="label mt-3">{repo.language}</p>
        </li>
      ))}
    </ul>
  );
}
