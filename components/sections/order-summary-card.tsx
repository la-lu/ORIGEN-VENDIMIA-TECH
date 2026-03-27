"use client";

import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";

export function OrderSummaryCard() {
  const { items, total } = useCart();

  return (
    <aside className="rounded-[2rem] border border-burgundy/10 bg-white/80 p-6 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">Resumen</p>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold text-graphite">{item.name}</p>
              <p className="text-sm text-graphite/65">
                {item.subtitle} · Cantidad {item.quantity}
              </p>
            </div>
            <p className="font-semibold text-burgundy">
              {formatPrice(item.price * item.quantity)}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-burgundy/10 pt-4">
        <div className="flex items-center justify-between text-base font-semibold text-graphite">
          <span>Total</span>
          <span className="text-burgundy">{formatPrice(total)}</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-graphite/65">
          Pago simulado sobre Stellar para una demo clara. Sin integracion bancaria real.
        </p>
      </div>
    </aside>
  );
}
