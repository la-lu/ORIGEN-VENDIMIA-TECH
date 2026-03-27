"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Button, ButtonLink } from "@/components/ui/button";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";

export default function ConfirmationPage() {
  const { items, total, delivery, orderSummary, clearCart } = useCart();

  const hasPremiumPack = useMemo(
    () => items.some((item) => item.kind === "pack" || item.name.includes("PASS")),
    [items]
  );

  if (!orderSummary) {
    return (
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-dashed border-burgundy/20 bg-white/60 px-8 py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">Confirmacion</p>
        <h1 className="mt-4 font-display text-4xl text-graphite">Todavia no hay una orden confirmada</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-graphite/70">
          Completa el flujo de compra para generar una orden mock lista para demo.
        </p>
        <ButtonLink href="/catalogo" className="mt-8">
          Volver al catalogo
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <section className="rounded-[2rem] border border-burgundy/10 bg-white/85 p-8 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">Compra confirmada</p>
        <h1 className="mt-4 font-display text-5xl text-graphite">
          Tu pedido ya esta listo para tu proxima parada
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-graphite/72">
          Gracias por comprar en ORIGEN. La orden fue registrada y queda preparada para la
          modalidad de entrega elegida.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-[1.5rem] bg-cream p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-olive">Numero de orden</p>
            <p className="mt-3 text-2xl font-semibold text-burgundy">{orderSummary.orderNumber}</p>
          </div>
          <div className="rounded-[1.5rem] bg-cream p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-olive">Entrega estimada</p>
            <p className="mt-3 text-2xl font-semibold text-burgundy">{orderSummary.estimatedDate}</p>
          </div>
          <div className="rounded-[1.5rem] bg-cream p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-olive">Modalidad</p>
            <p className="mt-3 text-lg font-semibold text-graphite">
              {delivery?.mode === "hotel" ? "Hotel delivery" : "Airport pickup"}
            </p>
            <p className="mt-2 text-sm text-graphite/72">
              {delivery?.mode === "hotel"
                ? `${delivery.hotelName}${delivery.roomReference ? ` · ${delivery.roomReference}` : ""}`
                : delivery?.airport}
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-cream p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-olive">Total abonado</p>
            <p className="mt-3 text-2xl font-semibold text-burgundy">{formatPrice(total)}</p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-burgundy/10 bg-white/80 p-8">
        <h2 className="font-display text-3xl text-graphite">Resumen del pedido</h2>
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between gap-2 border-b border-burgundy/10 pb-4 text-sm text-graphite/75 sm:flex-row"
            >
              <span>
                {item.name} · {item.subtitle} · Cantidad {item.quantity}
              </span>
              <span className="font-semibold text-burgundy">
                {formatPrice(item.price * item.quantity)}
              </span>
            </div>
          ))}
        </div>
      </section>

      {hasPremiumPack ? (
        <section className="rounded-[2rem] border border-gold/30 bg-gold/10 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">ORIGEN PASS</p>
          <h2 className="mt-3 font-display text-3xl text-graphite">
            Tu compra premium habilita beneficios dentro del ecosistema ORIGEN
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-graphite/74">
            En la narrativa del MVP, esta orden puede emitirse como un activo o reserva digital
            sobre Rootstock para futuras prioridades, acceso a ediciones limitadas y experiencias
            exclusivas. No representa una promesa financiera.
          </p>
        </section>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/catalogo">Comprar de nuevo</ButtonLink>
        <Button
          variant="secondary"
          onClick={() => {
            clearCart();
          }}
        >
          Limpiar demo
        </Button>
        <Link href="/" className="inline-flex items-center px-2 text-sm font-semibold text-burgundy">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
