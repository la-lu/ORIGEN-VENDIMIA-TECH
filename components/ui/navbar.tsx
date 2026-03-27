"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-store";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Vinos" },
  { href: "/carrito", label: "Carrito" }
];

export function Navbar() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-burgundy/10 bg-cream/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="font-display text-2xl tracking-[0.24em] text-burgundy">
          ORIGEN
        </Link>
        <nav className="flex items-center gap-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "bg-burgundy text-cream"
                    : "text-graphite/75 hover:bg-white/70"
                }`}
              >
                {link.label}
                {link.href === "/carrito" && itemCount > 0 ? ` (${itemCount})` : ""}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
