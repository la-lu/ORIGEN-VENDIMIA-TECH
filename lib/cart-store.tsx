"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { CartItem, DeliveryDetails, OrderSummary } from "@/lib/types";
import { buildOrderNumber } from "@/lib/utils";

type CartContextValue = {
  items: CartItem[];
  delivery: DeliveryDetails | null;
  orderSummary: OrderSummary | null;
  addItem: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  setDelivery: (details: DeliveryDetails) => void;
  confirmOrder: () => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "origen-mvp-cart";

type PersistedCart = {
  items: CartItem[];
  delivery: DeliveryDetails | null;
  orderSummary: OrderSummary | null;
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [delivery, setDeliveryState] = useState<DeliveryDetails | null>(null);
  const [orderSummary, setOrderSummary] = useState<OrderSummary | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as PersistedCart;
      setItems(parsed.items ?? []);
      setDeliveryState(parsed.delivery ?? null);
      setOrderSummary(parsed.orderSummary ?? null);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const data: PersistedCart = { items, delivery, orderSummary };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [items, delivery, orderSummary, loaded]);

  const value = useMemo<CartContextValue>(() => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return {
      items,
      delivery,
      orderSummary,
      addItem: (item) => {
        setOrderSummary(null);
        setItems((current) => {
          const existing = current.find((entry) => entry.id === item.id);
          if (existing) {
            return current.map((entry) =>
              entry.id === item.id
                ? { ...entry, quantity: entry.quantity + item.quantity }
                : entry
            );
          }
          return [...current, item];
        });
      },
      updateQuantity: (id, quantity) => {
        setItems((current) =>
          current
            .map((item) => (item.id === id ? { ...item, quantity } : item))
            .filter((item) => item.quantity > 0)
        );
      },
      removeItem: (id) => {
        setItems((current) => current.filter((item) => item.id !== id));
      },
      setDelivery: (details) => setDeliveryState(details),
      confirmOrder: () => {
        setOrderSummary({
          orderNumber: buildOrderNumber(),
          estimatedDate: "Disponible dentro de las proximas 24 horas"
        });
      },
      clearCart: () => {
        setItems([]);
        setDeliveryState(null);
        setOrderSummary(null);
      },
      total,
      itemCount
    };
  }, [items, delivery, orderSummary]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
