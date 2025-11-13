"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatRupees } from "@/lib/utils";

interface OrderItem {
  title: string;
  quantity: number;
  price: number;
  note?: string;
}

interface OrderSummaryProps {
  items: OrderItem[];
  deliveryFee: number;
  savings?: number;
  onCheckout?: () => void;
}

export function OrderSummary({
  items,
  deliveryFee,
  savings,
  onCheckout,
}: OrderSummaryProps) {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee - (savings ?? 0);

  return (
    <Card className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold text-[color:var(--color-text-dark)]">
          Order Summary
        </h2>
        <p className="text-sm text-[#777]">Review your cart before checkout</p>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-[color:var(--color-text-dark)]">
                {item.title}
              </p>
              <p className="text-xs text-[#999]">
                Qty {item.quantity}
                {item.note ? ` • ${item.note}` : ""}
              </p>
            </div>
            <span className="text-sm font-semibold text-[color:var(--color-text-dark)]">
              {formatRupees(item.price * item.quantity)}
            </span>
          </div>
        ))}
      </div>
      <div className="space-y-2 rounded-2xl bg-[color:var(--color-light-grey)] p-4 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-semibold text-[color:var(--color-text-dark)]">
            {formatRupees(subtotal)}
          </span>
        </div>
        <div className="flex justify-between text-[#666]">
          <span>Delivery</span>
          <span>{formatRupees(deliveryFee)}</span>
        </div>
        {savings ? (
          <div className="flex justify-between text-[color:var(--color-success-green)]">
            <span>Savings</span>
            <span>-{formatRupees(savings)}</span>
          </div>
        ) : null}
        <div className="flex justify-between border-t border-white/40 pt-2 text-base font-semibold text-[color:var(--color-text-dark)]">
          <span>Total</span>
          <span>{formatRupees(total)}</span>
        </div>
      </div>
      <Button fullWidth onClick={onCheckout}>
        Proceed to Checkout
      </Button>
    </Card>
  );
}
