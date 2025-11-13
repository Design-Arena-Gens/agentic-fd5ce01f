"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  enableMicrophone?: boolean;
  onSearch?: (query: string) => void;
}

const SearchIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m18 18-4.35-4.35M9.667 16.333a6.667 6.667 0 1 1 0-13.333 6.667 6.667 0 0 1 0 13.333Z"
    />
  </svg>
);

const MicIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15a3 3 0 0 0 3-3V7a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11v1a7 7 0 0 1-14 0v-1" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v4" />
  </svg>
);

export function SearchBar({ enableMicrophone, onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  return (
    <Input
      label="Discover meals"
      placeholder="Search home-cooked meals…"
      value={query}
      onChange={(event) => {
        setQuery(event.target.value);
        onSearch?.(event.target.value);
      }}
      leadingIcon={<SearchIcon />}
      trailingIcon={enableMicrophone ? <MicIcon /> : null}
      hint="Try searching by cuisine, chef, or dietary need"
    />
  );
}
