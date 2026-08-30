import type { HTMLAttributes, PropsWithChildren } from "react";

type BadgeTone = "neutral" | "violet" | "cyan" | "coral";

interface BadgeProps extends PropsWithChildren<
  HTMLAttributes<HTMLSpanElement>
> {
  tone?: BadgeTone;
}

export function Badge({
  children,
  className = "",
  tone = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span className={`badge badge-${tone} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}
