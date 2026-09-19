"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { ArrowUpRightIcon } from "@/components/icons";
import type { Locale } from "@/lib/locales";

type Group = { label: string; items: string[] };
type StackProject = { name: string; href: string; stack: string[] };

export function StackExplorer({ groups, projects, locale }: { groups: Group[]; projects: StackProject[]; locale: Locale }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const group = groups[active];
  const related = projects.filter((project) => group.items.some((item) => project.stack.some((tech) => tech.toLowerCase().includes(item.toLowerCase()) || item.toLowerCase().includes(tech.toLowerCase())))).slice(0, 3);

  return (
    <div className="stack-explorer">
      <div role="tablist" aria-label={locale === "pt" ? "Áreas da stack" : "Stack categories"} className="stack-tabs">
        {groups.map((item, index) => <button key={item.label} type="button" role="tab" id={`${id}-tab-${index}`} aria-selected={active === index} aria-controls={`${id}-panel`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => {
          let next = index;
          if (event.key === "ArrowRight") next = (index + 1) % groups.length;
          else if (event.key === "ArrowLeft") next = (index - 1 + groups.length) % groups.length;
          else if (event.key === "Home") next = 0;
          else if (event.key === "End") next = groups.length - 1;
          else return;
          event.preventDefault();
          setActive(next);
          document.getElementById(`${id}-tab-${next}`)?.focus();
        }} className="stack-tab">{item.label}</button>)}
      </div>
      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} tabIndex={0} className="stack-panel">
        <div key={group.label} className="stack-content rise"><h3 className="display-tight text-2xl">{group.label}</h3><ul className="stack-technologies">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div className="stack-related"><p className="text-sm text-muted">{locale === "pt" ? "Nos projetos" : "In the projects"}</p><ul className="mt-4 space-y-2">{related.map((project) => <li key={project.href}><Link href={project.href} className="stack-project">{project.name}<ArrowUpRightIcon className="h-4 w-4" /></Link></li>)}</ul></div>
      </div>
    </div>
  );
}
