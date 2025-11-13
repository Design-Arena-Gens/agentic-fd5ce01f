"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface QuantityStepperProps {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (quantity: number) => void;
}

export function QuantityStepper({
  min = 1,
  max = 10,
  value,
  onChange,
}: QuantityStepperProps) {
  const [internalValue, setInternalValue] = useState(min);
  const isControlled = typeof value === "number";
  const quantity = isControlled ? value : internalValue;

  const setQuantity = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next));
    if (!isControlled) {
      setInternalValue(clamped);
    }
    onChange?.(clamped);
  };

  return (
    <div className="flex items-center gap-3 rounded-full bg-[color:var(--color-light-grey)] px-3 py-1.5">
      <button
        type="button"
        onClick={() => setQuantity(quantity - 1)}
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-semibold text-[color:var(--color-primary-orange)] shadow-sm transition disabled:opacity-40",
        )}
        disabled={quantity <= min}
      >
        -
      </button>
      <span className="min-w-[2ch] text-center text-sm font-semibold text-[color:var(--color-text-dark)]">
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-primary-orange)] text-lg font-semibold text-white shadow-sm transition disabled:opacity-40"
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
}
