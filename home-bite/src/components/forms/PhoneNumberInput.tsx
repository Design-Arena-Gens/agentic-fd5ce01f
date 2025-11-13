"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

const MOBILE_REGEX = /^[6-9]\d{9}$/;

interface PhoneNumberInputProps {
  onChange?: (value: string, isValid: boolean) => void;
  defaultValue?: string;
}

export function PhoneNumberInput({
  onChange,
  defaultValue = "",
}: PhoneNumberInputProps) {
  const [value, setValue] = useState(defaultValue);

  const error = useMemo(() => {
    if (value.length === 0) return undefined;
    if (value.length < 10) return "Mobile number must be 10 digits.";
    if (!MOBILE_REGEX.test(value)) return "Enter a valid Indian mobile number.";
    return undefined;
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numeric = event.target.value.replace(/\D/g, "").slice(0, 10);
    setValue(numeric);
    onChange?.(numeric, MOBILE_REGEX.test(numeric));
  };

  return (
    <Input
      label="Enter mobile number"
      type="tel"
      inputMode="numeric"
      pattern="[0-9]*"
      maxLength={10}
      value={value}
      onChange={handleChange}
      placeholder="e.g. 9876543210"
      leadingIcon={<span className="font-semibold">+91</span>}
      error={error}
    />
  );
}
