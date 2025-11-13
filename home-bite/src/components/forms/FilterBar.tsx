"use client";

import { TagButton, type TagButtonProps } from "@/components/forms/TagButton";

interface FilterBarProps {
  title: string;
  tags: TagButtonProps[];
}

export function FilterBar({ title, tags }: FilterBarProps) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-[color:var(--color-text-dark)]">
          {title}
        </h3>
        <button
          type="button"
          className="text-sm font-semibold text-[color:var(--color-primary-orange)]"
        >
          Clear all
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TagButton key={tag.label} {...tag} />
        ))}
      </div>
    </section>
  );
}
