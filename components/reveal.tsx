import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
};

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const Tag = as as "div";

  return (
    <Tag
      className={className ? `reveal ${className}` : "reveal"}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
