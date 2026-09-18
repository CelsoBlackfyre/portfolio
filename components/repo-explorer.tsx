"use client";

import { useMemo, useState } from "react";
import { ArrowUpRightIcon } from "@/components/icons";

export type RepoItem = {
  name: string;
  href: string;
  language: string;
  live?: string;
  description: string;
};

export function RepoExplorer({
  repos,
  labels,
}: {
  repos: RepoItem[];
  labels: {
    filter: string;
    all: string;
    live: string;
    empty: string;
    countOne: string;
    countMany: string;
    openInNewTab: string;
  };
}) {
  const [active, setActive] = useState("all");

  const languages = useMemo(() => {
    const counts = new Map<string, number>();
    for (const repo of repos) {
      counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([language]) => language);
  }, [repos]);

  const visible = active === "all" ? repos : repos.filter((repo) => repo.language === active);
  const filters = ["all", ...languages];

  return (
    <div>
      <div
        role="group"
        aria-label={labels.filter}
        className="flex flex-wrap items-center gap-2"
      >
        {filters.map((filter) => {
          const isActive = filter === active;
          const label = filter === "all" ? labels.all : filter;
          const count =
            filter === "all"
              ? repos.length
              : repos.filter((repo) => repo.language === filter).length;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(filter)}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs transition-colors duration-300 ${
                isActive
                  ? "border-fg bg-fg text-void"
                  : "border-line-strong text-muted hover:text-fg"
              }`}
            >
              {label}
              <span className={`font-mono text-[0.625rem] ${isActive ? "text-void/60" : "text-faint"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="label mt-6">
        {visible.length} {visible.length === 1 ? labels.countOne : labels.countMany}
      </p>

      {visible.length === 0 ? (
        <p className="lede mt-8">{labels.empty}</p>
      ) : (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((repo) => (
            <li key={repo.name}>
              <article className="card card-link group relative flex h-full flex-col p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-mono text-sm tracking-tight text-fg">
                    <a
                      href={repo.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="after:absolute after:inset-0"
                    >
                      {repo.name}
                      <span className="sr-only"> ({labels.openInNewTab})</span>
                    </a>
                  </h3>
                  <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-faint transition-colors duration-300 group-hover:text-fg" />
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {repo.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
                  <span className="label">{repo.language}</span>
                  {repo.live ? (
                    <a
                      href={repo.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[0.6875rem] text-ember-bright transition-colors duration-300 hover:border-ember/60"
                    >
                      {labels.live}
                      <ArrowUpRightIcon className="h-3 w-3" />
                    </a>
                  ) : null}
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
