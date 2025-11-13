"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface TagButtonProps {
  label: string;
  active?: boolean;
  onToggle?: (nextActive: boolean) => void;
  icon?: React.ReactNode;
}

export function TagButton({ label, active, onToggle, icon }: TagButtonProps) {
  const [internalActive, setInternalActive] = useState(active ?? false);
  const isControlled = typeof active === "boolean";
  const computedActive = isControlled ? active : internalActive;

  const handleClick = () => {
    if (!isControlled) {
      setInternalActive((prev) => !prev);
    }
    onToggle?.(!computedActive);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-150",
        computedActive
          ? "border-transparent bg-[color:var(--color-primary-orange)] text-white shadow-[0_10px_20px_rgba(255,138,0,0.25)]"
          : "border-[#e4e4e4] bg-white text-[color:var(--color-text-dark)] hover:border-[color:var(--color-primary-orange)] hover:text-[color:var(--color-primary-orange)]",
      )}
    >
      {icon}
      {label}
    </button>
  );
}
