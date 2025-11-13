"use client";

import { cn } from "@/lib/utils";

type BadgeTone = "default" | "success" | "error" | "outline" | "muted";

interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  icon?: React.ReactNode;
}

const toneClassNames: Record<BadgeTone, string> = {
  default: "bg-[color:var(--color-primary-orange)] text-white",
  success:
    "bg-[color:var(--color-success-green)]/15 text-[color:var(--color-success-green)]",
  error: "bg-[color:var(--color-error-red)]/15 text-[color:var(--color-error-red)]",
  outline:
    "border border-[color:var(--color-primary-orange)] text-[color:var(--color-primary-orange)] bg-white",
  muted: "bg-[color:var(--color-light-grey)] text-[color:var(--color-text-dark)]",
};

export function Badge({ children, tone = "default", icon }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        toneClassNames[tone],
      )}
    >
      {icon}
      {children}
    </span>
  );
}
