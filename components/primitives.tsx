import type { CSSProperties, ReactNode } from "react";
import type { RichText } from "@/lib/dictionary";
import { Reveal } from "@/components/reveal";

export function Rise({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={className ? `rise ${className}` : "rise"}
      style={{ "--rise-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function RichHeadline({
  line,
  className,
}: {
  line: RichText;
  className?: string;
}) {
  return (
    <span className={className}>
      {line.map((segment, index) => (
        <span key={`${segment.text}-${index}`} className={segment.accent ? "accent-text" : undefined}>
          {segment.text}
        </span>
      ))}
    </span>
  );
}

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={`label ${className ?? ""}`}>{children}</p>;
}

export function SectionHeading({
  title,
  lede,
  id,
}: {
  title: ReactNode;
  lede?: string;
  id?: string;
}) {
  return (
    <Reveal>
      <h2 id={id} className="display-tight max-w-3xl text-3xl text-fg sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {lede ? <p className="lede mt-5 max-w-[62ch]">{lede}</p> : null}
    </Reveal>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return <span className="chip">{children}</span>;
}

export function ChipList({ items, max }: { items: string[]; max?: number }) {
  const visible = max ? items.slice(0, max) : items;
  const rest = max ? items.length - visible.length : 0;

  return (
    <ul className="flex flex-wrap gap-2">
      {visible.map((item) => (
        <li key={item}>
          <Chip>{item}</Chip>
        </li>
      ))}
      {rest > 0 ? (
        <li>
          <Chip>+{rest}</Chip>
        </li>
      ) : null}
    </ul>
  );
}

export function StatusPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-line px-3.5 py-1.5 text-xs text-muted">
      <span aria-hidden="true" className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-ember" />
      {label}
    </span>
  );
}

export function FactList({
  items,
  className,
}: {
  items: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <dl className={`grid gap-x-10 gap-y-8 sm:grid-cols-2 ${className ?? ""}`}>
      {items.map((fact) => (
        <div key={fact.label}>
          <dt className="label">{fact.label}</dt>
          <dd className="mt-2.5 text-sm leading-relaxed text-fg/90">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-28 ${className ?? ""}`}>
      {children}
    </section>
  );
}
