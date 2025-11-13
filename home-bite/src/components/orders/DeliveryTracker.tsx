"use client";

import { cn } from "@/lib/utils";

interface DeliveryStage {
  title: string;
  subtitle: string;
  completed?: boolean;
  current?: boolean;
}

interface DeliveryTrackerProps {
  stages: DeliveryStage[];
}

export function DeliveryTracker({ stages }: DeliveryTrackerProps) {
  return (
    <div className="space-y-6 rounded-3xl bg-white p-6 shadow-[0_15px_45px_rgba(17,24,39,0.08)]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[color:var(--color-text-dark)]">
          Live Delivery Tracking
        </h2>
        <span className="rounded-full bg-[color:var(--color-success-green)]/15 px-3 py-1 text-xs font-semibold text-[color:var(--color-success-green)]">
          On time
        </span>
      </div>
      <div className="flex flex-col gap-6">
        {stages.map((stage, index) => (
          <div key={stage.title} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold",
                  stage.completed
                    ? "border-[color:var(--color-success-green)] bg-[color:var(--color-success-green)] text-white"
                    : stage.current
                      ? "border-[color:var(--color-primary-orange)] text-[color:var(--color-primary-orange)]"
                      : "border-[#e4e4e4] text-[#999]",
                )}
              >
                {stage.completed ? "✓" : index + 1}
              </span>
              {index !== stages.length - 1 && (
                <span
                  className={cn(
                    "mt-1 h-12 w-px",
                    stages[index + 1]?.completed
                      ? "bg-[color:var(--color-success-green)]"
                      : "bg-[#e4e4e4]",
                  )}
                />
              )}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[color:var(--color-text-dark)]">
                {stage.title}
              </h3>
              <p className="text-xs text-[#777]">{stage.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
