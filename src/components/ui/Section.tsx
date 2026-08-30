import type { HTMLAttributes, PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  spacing?: "default" | "compact" | "generous";
}

export function Section({
  children,
  className = "",
  spacing = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={`section section-${spacing} ${className}`.trim()}
      {...props}
    >
      {children}
    </section>
  );
}
