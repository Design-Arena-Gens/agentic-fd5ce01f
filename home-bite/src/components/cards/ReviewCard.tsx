"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";

interface ReviewCardProps {
  name: string;
  avatarUrl: string;
  rating: number;
  review: string;
  orderedItem: string;
  timeAgo: string;
}

export function ReviewCard({
  name,
  avatarUrl,
  rating,
  review,
  orderedItem,
  timeAgo,
}: ReviewCardProps) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-2xl">
          <Image src={avatarUrl} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[color:var(--color-text-dark)]">{name}</p>
          <p className="text-xs text-[#999]">{timeAgo}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Rating value={rating} size="sm" />
        <span className="text-xs text-[#777]">Ordered {orderedItem}</span>
      </div>
      <p className="text-sm leading-relaxed text-[color:var(--color-text-dark)]">{review}</p>
    </Card>
  );
}
