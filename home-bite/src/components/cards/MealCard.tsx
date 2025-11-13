"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";
import { Badge } from "@/components/ui/badge";
import { formatRupees } from "@/lib/utils";

interface MealCardProps {
  title: string;
  chef: string;
  price: number;
  rating: number;
  ratingCount: number;
  preparationTime: string;
  tags: string[];
  imageUrl: string;
}

export function MealCard({
  title,
  chef,
  price,
  rating,
  ratingCount,
  preparationTime,
  tags,
  imageUrl,
}: MealCardProps) {
  return (
    <Card padding="none" clickable className="overflow-hidden">
      <div className="relative h-52 w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          <Badge tone="default">Chef Special</Badge>
          <Badge tone="muted">{preparationTime}</Badge>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-[color:var(--color-text-dark)]">
            {title}
          </h3>
          <p className="text-sm text-[#777]">By {chef}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[color:var(--color-light-grey)] px-3 py-1 text-xs font-medium text-[color:var(--color-text-dark)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wide text-[#999]">Starting at</span>
            <span className="text-xl font-semibold text-[color:var(--color-text-dark)]">
              {formatRupees(price)}
            </span>
          </div>
          <Rating value={rating} count={ratingCount} size="sm" />
        </div>
        <Button>Order Now</Button>
      </div>
    </Card>
  );
}
