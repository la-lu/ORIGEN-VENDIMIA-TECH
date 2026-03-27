"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { WineIllustration } from "@/components/ui/wine-illustration";

export default function CartPage() {
  const { items, total, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-dashed border-burgundy/20 bg-white/60 px-8 py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">Carrito</p>
        <h1 className="mt-4 font-display text-4xl text-graphite">Tu seleccion aun esta vacia</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-graphite/70">
          Explora vinos mendocinos, agrega tus favoritos y avanza al flujo de entrega y checkout.
        </p>
        <ButtonLink href="/catalogo" className="mt-8">
          Explorar vinos
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">Carrito</p>
          <h1 className="mt-3 font-display text-4xl text-graphite">Revisa tu compra antes de continuar</h1>
        </div>
        {items.map((item) => (
          <article
            key={item.id}
            className="grid gap-6 rounded-[2rem] border border-burgundy/10 bg-white/80 p-5 shadow-soft md:grid-cols-[180px_1fr]"
          >
            <WineIllustration accent={item.accent} label={item.kind === "pack" ? "PASS" : "Vino"} className="min-h-[220px]" />
            <div className="flex flex-col justify-between gap-5">
              <div>
                <h2 className="font-display text-3xl text-graphite">{item.name}</h2>
                <p className="mt-2 text-sm text-olive">{item.subtitle}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <label className="text-sm text-graphite/70">
                  Cantidad
                  <select
                    value={item.quantity}
                    onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                    className="ml-3 rounded-full border border-burgundy/15 bg-white px-4 py-2"
                  >
                    {[1, 2, 3, 4].map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </label>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-sm font-semibold text-burgundy"
                >
                  Quitar
                </button>
              </div>
              <div className="flex items-center justify-between border-t border-burgundy/10 pt-4">
                <p className="text-sm text-graphite/70">Subtotal</p>
                <p className="text-xl font-semibold text-burgundy">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <aside className="h-fit rounded-[2rem] border border-burgundy/10 bg-white/80 p-6 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">Siguiente paso</p>
        <p className="mt-3 font-display text-3xl text-graphite">Elegi como queres recibir tu compra</p>
        <div className="mt-6 flex items-center justify-between border-b border-burgundy/10 pb-4">
          <span className="text-graphite/70">Total</span>
          <span className="text-2xl font-semibold text-burgundy">{formatPrice(total)}</span>
        </div>
        <ButtonLink href="/entrega" className="mt-6 w-full">
          Continuar a entrega
        </ButtonLink>
        <Link
          href="/catalogo"
          className="mt-4 inline-flex justify-center text-sm font-semibold text-burgundy"
        >
          Seguir explorando vinos
        </Link>
      </aside>
    </div>
  );
}
