"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";
import { Badge } from "@/components/ui/badge";

interface ChefCardProps {
  name: string;
  cuisine: string;
  yearsOfExperience: number;
  rating: number;
  completedOrders: number;
  avatarUrl: string;
  specialties: string[];
}

export function ChefCard({
  name,
  cuisine,
  yearsOfExperience,
  rating,
  completedOrders,
  avatarUrl,
  specialties,
}: ChefCardProps) {
  return (
    <Card className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-[color:var(--color-light-grey)]">
          <Image src={avatarUrl} alt={name} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-[color:var(--color-text-dark)]">{name}</h3>
          <p className="text-sm text-[#777]">
            {cuisine} • {yearsOfExperience} yrs experience
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Rating value={rating} count={completedOrders} size="sm" />
        <Badge tone="muted">{completedOrders}+ orders</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        {specialties.map((item) => (
          <span
            key={item}
            className="rounded-full bg-[color:var(--color-warm-white)] px-3 py-1 text-xs font-medium text-[color:var(--color-text-dark)]"
          >
            {item}
          </span>
        ))}
      </div>
    </Card>
  );
}
