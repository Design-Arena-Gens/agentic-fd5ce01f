"use client";

import { cn } from "@/lib/utils";

interface BottomNavItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  badge?: number;
}

interface BottomNavProps {
  items: BottomNavItem[];
  onSelect?: (label: string) => void;
}

export function BottomNav({ items, onSelect }: BottomNavProps) {
  return (
    <nav className="grid grid-cols-4 gap-2 rounded-3xl bg-white p-4 shadow-[0_15px_30px_rgba(17,24,39,0.08)]">
      {items.map((item) => (
        <button
          key={item.label}
          type="button"
          onClick={() => onSelect?.(item.label)}
          className={cn(
            "relative flex flex-col items-center gap-2 rounded-2xl px-3 py-2 text-xs font-medium transition",
            item.active
              ? "bg-[color:var(--color-primary-orange)]/10 text-[color:var(--color-primary-orange)]"
              : "text-[#777] hover:text-[color:var(--color-primary-orange)]",
          )}
        >
          <span className="text-lg">{item.icon}</span>
          {item.label}
          {item.badge ? (
            <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--color-error-red)] text-[10px] font-semibold text-white">
              {item.badge}
            </span>
          ) : null}
        </button>
      ))}
    </nav>
  );
}
