"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonLink } from "@/components/ui/button";
import { Wine } from "@/lib/types";
import { useCart } from "@/lib/cart-store";

export function AddToCart({ wine }: { wine: Wine }) {
  const { addItem } = useCart();
  const router = useRouter();

  const handleAdd = () => {
    addItem({
      id: wine.id,
      kind: "wine",
      name: wine.name,
      subtitle: `${wine.winery} · ${wine.variety}`,
      price: wine.price,
      quantity: 1,
      accent: wine.imageAccent
    });
    router.push("/carrito");
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button onClick={handleAdd}>Agregar al carrito</Button>
      <ButtonLink href="/catalogo" variant="secondary">
        Seguir explorando
      </ButtonLink>
    </div>
  );
}
