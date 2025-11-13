"use client";

import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  hint?: string;
  label?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export function Input({
  error,
  hint,
  label,
  leadingIcon,
  trailingIcon,
  className,
  ...props
}: InputProps) {
  return (
    <label className="flex w-full flex-col gap-2 text-sm text-[color:var(--color-text-dark)]">
      {label && <span className="font-medium">{label}</span>}
      <div
        className={cn(
          "flex items-center gap-2 rounded-2xl border border-transparent bg-[color:var(--color-light-grey)] px-4 py-3 transition focus-within:border-[color:var(--color-primary-orange)] focus-within:bg-white focus-within:shadow-[0_10px_20px_rgba(255,138,0,0.12)]",
          error && "border-[color:var(--color-error-red)]",
        )}
      >
        {leadingIcon && <span className="text-lg text-[#999]">{leadingIcon}</span>}
        <input
          className={cn(
            "w-full bg-transparent text-base outline-none placeholder:text-[#999]",
            className,
          )}
          {...props}
        />
        {trailingIcon && <span className="text-lg text-[#999]">{trailingIcon}</span>}
      </div>
      {(error || hint) && (
        <span
          className={cn(
            "text-xs",
            error ? "text-[color:var(--color-error-red)]" : "text-[#757575]",
          )}
        >
          {error ?? hint}
        </span>
      )}
    </label>
  );
}
