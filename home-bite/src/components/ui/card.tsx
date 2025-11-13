"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  clickable?: boolean;
}

const paddingMap: Record<NonNullable<CardProps["padding"]>, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  clickable,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-transparent bg-white shadow-[0_15px_35px_rgba(17,24,39,0.08)] transition-all",
        clickable && "hover:-translate-y-1 hover:shadow-[0_25px_45px_rgba(17,24,39,0.12)]",
        paddingMap[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
