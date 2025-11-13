"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  description: string;
  mealCount: number;
  icon: React.ReactNode;
  active?: boolean;
  onSelect?: () => void;
}

export function CategoryCard({
  title,
  description,
  mealCount,
  icon,
  active,
  onSelect,
}: CategoryCardProps) {
  return (
    <Card
      clickable
      padding="lg"
      className={cn(
        "flex h-full flex-col gap-4 border-2 border-transparent transition-colors",
        active && "border-[color:var(--color-primary-orange)] bg-[color:var(--color-warm-white)]",
      )}
    >
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-[color:var(--color-light-grey)] p-3 text-xl text-[color:var(--color-primary-orange)]">
          {icon}
        </div>
        <button
          type="button"
          onClick={onSelect}
          className="hb-pill text-xs font-semibold text-[color:var(--color-primary-orange)]"
        >
          Explore
        </button>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[color:var(--color-text-dark)]">{title}</h3>
        <p className="text-sm text-[#777]">{description}</p>
      </div>
      <span className="mt-auto text-xs font-medium uppercase tracking-wide text-[#999]">
        {mealCount} meal{mealCount === 1 ? "" : "s"} available
      </span>
    </Card>
  );
}
