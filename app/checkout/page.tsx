"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { OrderSummaryCard } from "@/components/sections/order-summary-card";
import { useCart } from "@/lib/cart-store";

export default function CheckoutPage() {
  const { items, delivery, confirmOrder } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      router.replace("/carrito");
      return;
    }
    if (!delivery) {
      router.replace("/entrega");
    }
  }, [items.length, delivery, router]);

  const handleConfirm = () => {
    setIsSubmitting(true);
    window.setTimeout(() => {
      confirmOrder();
      router.push("/confirmacion");
    }, 900);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[2rem] border border-burgundy/10 bg-white/80 p-7 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">Checkout</p>
        <h1 className="mt-3 font-display text-4xl text-graphite">Confirmacion de compra</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-graphite/72">
          El pago se presenta como una experiencia simple inspirada en Stellar: checkout
          internacional liviano, sin friccion y facil de explicar en demo.
        </p>

        <div className="mt-8 space-y-6">
          <div className="rounded-[1.5rem] border border-burgundy/10 bg-cream p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-olive">
              Entrega elegida
            </p>
            <p className="mt-3 text-lg font-semibold text-graphite">
              {delivery?.mode === "hotel" ? "Hotel delivery" : "Airport pickup"}
            </p>
            <p className="mt-2 text-sm text-graphite/72">
              {delivery?.mode === "hotel"
                ? `${delivery.hotelName}${delivery.roomReference ? ` · ${delivery.roomReference}` : ""}`
                : delivery?.airport}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-graphite">
              Nombre del titular
              <input
                defaultValue="Alex Morgan"
                className="w-full rounded-2xl border border-burgundy/10 bg-cream px-4 py-3 text-base outline-none focus:border-burgundy"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-graphite">
              Email
              <input
                defaultValue="alex@travelmail.com"
                className="w-full rounded-2xl border border-burgundy/10 bg-cream px-4 py-3 text-base outline-none focus:border-burgundy"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-graphite">
              Metodo de pago
              <select className="w-full rounded-2xl border border-burgundy/10 bg-cream px-4 py-3 text-base outline-none focus:border-burgundy">
                <option>Stellar checkout simulado</option>
                <option>Tarjeta internacional simulada</option>
              </select>
            </label>
            <label className="space-y-2 text-sm font-medium text-graphite">
              Documento de referencia
              <input
                defaultValue="PASSPORT - US23491"
                className="w-full rounded-2xl border border-burgundy/10 bg-cream px-4 py-3 text-base outline-none focus:border-burgundy"
              />
            </label>
          </div>

          <div className="rounded-[1.5rem] border border-gold/30 bg-gold/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-graphite">
              Narrativa premium activable
            </p>
            <p className="mt-3 text-sm leading-7 text-graphite/74">
              Si el pedido incluye un pack premium, ORIGEN puede convertir esa compra en una
              reserva digital con prioridad futura, acceso exclusivo y descuentos dentro del
              ecosistema. En el MVP esto se comunica, no se tokeniza on-chain.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button onClick={handleConfirm} disabled={isSubmitting}>
              {isSubmitting ? "Procesando orden..." : "Finalizar compra"}
            </Button>
            <Link href="/entrega" className="text-sm font-semibold text-burgundy">
              Editar entrega
            </Link>
          </div>
        </div>
      </section>

      <OrderSummaryCard />
    </div>
  );
}
