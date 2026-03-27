import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-store";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "ORIGEN",
  description: "Turismo, vino y compra simple en Mendoza."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <Navbar />
          <main className="mx-auto max-w-6xl px-5 py-10 md:px-8">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
