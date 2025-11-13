"use client";

import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "soft" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[color:var(--color-primary-orange)] text-white hover:bg-[#e97d00]",
  secondary:
    "border border-[color:var(--color-primary-orange)] text-[color:var(--color-primary-orange)] hover:bg-[color:var(--color-primary-orange)] hover:text-white",
  ghost:
    "bg-transparent text-[color:var(--color-text-dark)] hover:bg-[color:var(--color-light-grey)]",
  soft: "bg-[color:var(--color-warm-white)] text-[color:var(--color-text-dark)] hover:bg-[#ffe3c7]",
  danger:
    "bg-[color:var(--color-error-red)] text-white hover:bg-[#e6352b] focus-visible:outline-[color:var(--color-error-red)]",
};

export function Button({
  variant = "primary",
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        "px-5 py-2.5",
        fullWidth && "w-full",
        className,
      )}
      {...props}
    />
  );
}
