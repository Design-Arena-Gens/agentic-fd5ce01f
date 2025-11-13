"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface TopNavProps {
  unreadCount?: number;
}

const BellIcon = () => (
  <svg className="h-6 w-6 text-[color:var(--color-text-dark)]" fill="none" viewBox="0 0 24 24">
    <path
      d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2Z"
      fill="currentColor"
      opacity={0.6}
    />
    <path
      d="M18 10a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function TopNav({ unreadCount = 0 }: TopNavProps) {
  return (
    <header className="flex items-center justify-between rounded-3xl bg-white px-6 py-4 shadow-[0_15px_35px_rgba(17,24,39,0.08)]">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12">
          <Image
            src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=80"
            alt="Home Bite logo"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-primary-orange)]">
            Home Bite
          </p>
          <h1 className="text-lg font-semibold text-[color:var(--color-text-dark)]">
            Hi Ananya!
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="soft">Refer &amp; Earn</Button>
        <button
          type="button"
          className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-light-grey)]"
        >
          <BellIcon />
          {unreadCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--color-error-red)] text-xs font-semibold text-white">
              {unreadCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
