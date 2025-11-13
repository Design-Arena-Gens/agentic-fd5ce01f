"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface OtpInputProps {
  length?: 4 | 6;
  onComplete?: (otp: string) => void;
  autoFocus?: boolean;
  label?: string;
}

export function OtpInput({
  length = 6,
  onComplete,
  autoFocus,
  label = "Enter OTP",
}: OtpInputProps) {
  const [values, setValues] = useState<string[]>(() =>
    Array.from({ length }, () => ""),
  );
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputsRef.current = inputsRef.current.slice(0, length);
  }, [length]);

  const filledOtp = values.join("");

  useEffect(() => {
    if (filledOtp.length === length) {
      onComplete?.(filledOtp);
    }
  }, [filledOtp, length, onComplete]);

  const hint = useMemo(
    () =>
      length === 6
        ? "Auto-fills from SMS where supported"
        : "Enter the 4 digit code sent to your phone",
    [length],
  );

  const handleChange = (index: number, nextValue: string) => {
    const digit = nextValue.slice(-1).replace(/\D/g, "");
    setValues((prev) => {
      const next = [...prev];
      next[index] = digit;
      return next;
    });

    if (digit && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "");
    if (!pasted) return;

    const next = pasted.slice(0, length).split("");
    setValues((prev) => {
      const merged = [...prev];
      for (let i = 0; i < length; i += 1) {
        merged[i] = next[i] ?? merged[i];
      }
      return merged;
    });

    const targetIndex = Math.min(next.length - 1, length - 1);
    if (targetIndex >= 0) {
      inputsRef.current[targetIndex]?.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      inputsRef.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < length - 1) {
      event.preventDefault();
      inputsRef.current[index + 1]?.focus();
    }
  };

  return (
    <label className="flex w-full flex-col gap-3">
      <span className="text-sm font-medium text-[color:var(--color-text-dark)]">
        {label}
      </span>
      <div className="flex gap-3">
        {values.map((value, index) => (
          <input
            key={`otp-${index}`}
            ref={(element) => {
              inputsRef.current[index] = element;
              if (index === 0 && autoFocus) {
                element?.focus();
              }
            }}
            type="text"
            inputMode="numeric"
            pattern="\d*"
            maxLength={1}
            value={value}
            onChange={(event) => handleChange(index, event.target.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onPaste={handlePaste}
            autoComplete={index === 0 ? "one-time-code" : "off"}
            className="h-14 w-12 rounded-2xl border border-transparent bg-[color:var(--color-light-grey)] text-center text-lg font-semibold text-[color:var(--color-text-dark)] shadow-[0_2px_8px_rgba(51,51,51,0.08)] focus:border-[color:var(--color-primary-orange)] focus:bg-white focus:outline-none focus:shadow-[0_10px_20px_rgba(255,138,0,0.12)]"
          />
        ))}
      </div>
      <span className="text-xs text-[#757575]">{hint}</span>
    </label>
  );
}
