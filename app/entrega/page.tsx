"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { airports } from "@/data/wines";
import { DeliveryOption } from "@/lib/types";
import { useCart } from "@/lib/cart-store";
import { OrderSummaryCard } from "@/components/sections/order-summary-card";

export default function DeliveryPage() {
  const { items, delivery, setDelivery } = useCart();
  const router = useRouter();
  const [mode, setMode] = useState<DeliveryOption>(delivery?.mode ?? "hotel");
  const [hotelName, setHotelName] = useState(delivery?.hotelName ?? "");
  const [roomReference, setRoomReference] = useState(delivery?.roomReference ?? "");
  const [airport, setAirport] = useState(delivery?.airport ?? airports[0]);

  useEffect(() => {
    if (items.length === 0) {
      router.replace("/carrito");
    }
  }, [items.length, router]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDelivery({
      mode,
      hotelName: mode === "hotel" ? hotelName : undefined,
      roomReference: mode === "hotel" ? roomReference : undefined,
      airport: mode === "airport" ? airport : undefined
    });
    router.push("/checkout");
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[2rem] border border-burgundy/10 bg-white/80 p-7 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">Entrega</p>
        <h1 className="mt-3 font-display text-4xl text-graphite">
          Elegi como queres recibir tu compra
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-graphite/72">
          Mantenemos el MVP simple con dos modalidades: entrega en hotel o retiro en aeropuerto.
        </p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <button
              type="button"
              onClick={() => setMode("hotel")}
              className={`rounded-[1.5rem] border p-5 text-left transition ${
                mode === "hotel"
                  ? "border-burgundy bg-burgundy text-cream"
                  : "border-burgundy/10 bg-cream text-graphite"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em]">Hotel delivery</p>
              <p className={`mt-3 text-sm ${mode === "hotel" ? "text-cream/80" : "text-graphite/70"}`}>
                Recibilo en tu hospedaje antes de tu proxima salida.
              </p>
            </button>
            <button
              type="button"
              onClick={() => setMode("airport")}
              className={`rounded-[1.5rem] border p-5 text-left transition ${
                mode === "airport"
                  ? "border-burgundy bg-burgundy text-cream"
                  : "border-burgundy/10 bg-cream text-graphite"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em]">Airport pickup</p>
              <p className={`mt-3 text-sm ${mode === "airport" ? "text-cream/80" : "text-graphite/70"}`}>
                Retiralo en un punto coordinado del aeropuerto.
              </p>
            </button>
          </div>

          {mode === "hotel" ? (
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-graphite">
                Nombre del hotel
                <input
                  required
                  value={hotelName}
                  onChange={(event) => setHotelName(event.target.value)}
                  placeholder="Ej. Diplomatic Hotel"
                  className="w-full rounded-2xl border border-burgundy/10 bg-cream px-4 py-3 text-base outline-none focus:border-burgundy"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-graphite">
                Habitacion o referencia
                <input
                  value={roomReference}
                  onChange={(event) => setRoomReference(event.target.value)}
                  placeholder="Opcional"
                  className="w-full rounded-2xl border border-burgundy/10 bg-cream px-4 py-3 text-base outline-none focus:border-burgundy"
                />
              </label>
            </div>
          ) : (
            <label className="block space-y-2 text-sm font-medium text-graphite">
              Aeropuerto
              <select
                value={airport}
                onChange={(event) => setAirport(event.target.value)}
                className="w-full rounded-2xl border border-burgundy/10 bg-cream px-4 py-3 text-base outline-none focus:border-burgundy"
              >
                {airports.map((airportOption) => (
                  <option key={airportOption} value={airportOption}>
                    {airportOption}
                  </option>
                ))}
              </select>
            </label>
          )}

          <Button type="submit">Continuar a checkout</Button>
        </form>
      </section>

      <OrderSummaryCard />
    </div>
  );
}
