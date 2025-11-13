"use client";

import { Button } from "@/components/ui/button";

interface PromoBannerProps {
  title: string;
  description: string;
  ctaLabel: string;
  secondaryText?: string;
}

export function PromoBanner({
  title,
  description,
  ctaLabel,
  secondaryText,
}: PromoBannerProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[color:var(--color-primary-orange)] to-[#ffb347] px-8 py-10 text-white shadow-[0_25px_45px_rgba(255,138,0,0.35)]">
      <div className="relative z-10 space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] opacity-80">
          Limited Time Offer
        </p>
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="max-w-xl text-base opacity-90">{description}</p>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-[color:var(--color-primary-orange)]">
            {ctaLabel}
          </Button>
          {secondaryText && <span className="text-sm opacity-90">{secondaryText}</span>}
        </div>
      </div>
      <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />
    </section>
  );
}
