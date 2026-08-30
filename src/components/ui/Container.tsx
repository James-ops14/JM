import type { HTMLAttributes, PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren<
  HTMLAttributes<HTMLDivElement>
> {
  narrow?: boolean;
}

export function Container({
  children,
  className = "",
  narrow = false,
  ...props
}: ContainerProps) {
  const containerClassName = narrow
    ? "container container-narrow"
    : "container";

  return (
    <div className={`${containerClassName} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
