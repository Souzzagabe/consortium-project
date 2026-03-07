import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/25",
  secondary:
    "bg-dark-lighter text-white hover:bg-dark-card shadow-lg shadow-black/25 border border-dark-border",
  outline:
    "border-2 border-brand text-brand hover:bg-brand/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  href,
  target,
  rel,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const linkRel = target === "_blank" ? (rel || "noopener noreferrer") : rel;
    return (
      <Link href={href} className={classes} target={target} rel={linkRel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
