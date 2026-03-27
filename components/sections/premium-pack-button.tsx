"use client";

import { useRouter } from "next/navigation";
import { premiumPack } from "@/data/wines";
import { useCart } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";

export function PremiumPackButton() {
  const router = useRouter();
  const { addItem } = useCart();

  return (
    <Button
      variant="secondary"
      className="w-full"
      onClick={() => {
        addItem({
          id: premiumPack.id,
          kind: "pack",
          name: premiumPack.name,
          subtitle: "Reserva garantizada y beneficios acumulables",
          price: premiumPack.price,
          quantity: 1,
          accent: "from-[#6B1F2A] via-[#C6A96A] to-[#E8DCCB]"
        });
        router.push("/carrito");
      }}
    >
      Agregar pack premium
    </Button>
  );
}
