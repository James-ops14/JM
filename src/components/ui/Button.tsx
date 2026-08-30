import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { Link, type LinkProps } from "react-router";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends PropsWithChildren<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">
> {
  variant?: ButtonVariant;
  className?: string;
}

export function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button button-${variant} ${className}`.trim()}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

interface ButtonLinkProps extends Omit<LinkProps, "className"> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={`button button-${variant} ${className}`.trim()} {...props}>
      {children}
    </Link>
  );
}
