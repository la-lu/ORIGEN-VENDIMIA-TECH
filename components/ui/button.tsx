import Link, { LinkProps } from "next/link";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary" | "premium";

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-burgundy text-cream shadow-soft hover:bg-[#551821] focus-visible:outline-burgundy",
  secondary:
    "border border-burgundy/20 bg-white/70 text-burgundy hover:bg-burgundy/5 focus-visible:outline-burgundy",
  premium:
    "bg-gold text-graphite shadow-soft hover:bg-[#b89556] focus-visible:outline-gold"
};

type SharedProps = {
  variant?: ButtonVariant;
  className?: string;
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & SharedProps>) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: PropsWithChildren<LinkProps & SharedProps & { href: string }>) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
