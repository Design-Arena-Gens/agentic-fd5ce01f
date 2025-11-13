"use client";

import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  ctaLabel: string;
  illustration?: React.ReactNode;
  onCtaClick?: () => void;
}

export function EmptyState({
  title,
  description,
  ctaLabel,
  onCtaClick,
  illustration,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl bg-white p-8 text-center shadow-[0_15px_30px_rgba(17,24,39,0.08)]">
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[color:var(--color-light-grey)]">
        {illustration ?? (
          <span role="img" aria-label="empty" className="text-4xl">
            🍽️
          </span>
        )}
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[color:var(--color-text-dark)]">{title}</h3>
        <p className="text-sm text-[#777]">{description}</p>
      </div>
      <Button onClick={onCtaClick}>{ctaLabel}</Button>
    </div>
  );
}
