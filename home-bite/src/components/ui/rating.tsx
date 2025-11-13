"use client";

import { cn } from "@/lib/utils";

interface RatingProps {
  value: number;
  count?: number;
  size?: "sm" | "md";
}

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    className={cn("h-4 w-4 text-[#f5c34c]", !filled && "text-[#d6d6d6]")}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="m9.049 2.927 1.618 3.279 3.622.526-2.62 2.556.619 3.612-3.239-1.704-3.238 1.704.618-3.612-2.62-2.556 3.622-.526 1.618-3.279Z" />
  </svg>
);

export function Rating({ value, count, size = "md" }: RatingProps) {
  const integer = Math.round(value);

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full bg-[#fff1d5]/60 px-3",
        size === "sm" ? "py-1" : "py-1.5",
      )}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={`rating-star-${index}`} filled={index < integer} />
        ))}
      </div>
      <span
        className={cn(
          "font-semibold text-[color:var(--color-text-dark)]",
          size === "sm" ? "text-xs" : "text-sm",
        )}
      >
        {value.toFixed(1)}
      </span>
      {typeof count === "number" && (
        <span className="text-xs text-[#777]">({count})</span>
      )}
    </div>
  );
}
