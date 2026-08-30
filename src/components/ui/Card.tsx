import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

type CardVariant = "default" | "elevated";

interface CardProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  variant?: CardVariant;
}

interface InteractiveCardProps extends PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement>
> {
  variant?: CardVariant;
  href: string;
}

export function Card({
  children,
  className = "",
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div className={`card card-${variant} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function InteractiveCard({
  children,
  className = "",
  variant = "default",
  ...props
}: InteractiveCardProps) {
  return (
    <a
      className={`card card-${variant} card-interactive ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
