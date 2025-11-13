"use client";

import { cn } from "@/lib/utils";

interface ProgressStep {
  label: string;
  description?: string;
}

interface ProgressTrackerProps {
  steps: ProgressStep[];
  currentIndex: number;
}

export function ProgressTracker({ steps, currentIndex }: ProgressTrackerProps) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-[0_15px_35px_rgba(17,24,39,0.06)]">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.label} className="flex w-full flex-col items-center gap-2">
            <div
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-semibold",
                index < currentIndex
                  ? "border-[color:var(--color-primary-green)] bg-[color:var(--color-primary-green)] text-white"
                  : index === currentIndex
                    ? "border-[color:var(--color-primary-orange)] text-[color:var(--color-primary-orange)]"
                    : "border-[#e4e4e4] text-[#999]",
              )}
            >
              {index + 1}
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#777]">
              {step.label}
            </p>
            {step.description && (
              <p className="text-center text-[10px] text-[#999]">{step.description}</p>
            )}
          </div>
        ))}
      </div>
      <div className="relative h-1 rounded-full bg-[color:var(--color-light-grey)]">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-[color:var(--color-primary-orange)] transition-all"
          style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}
