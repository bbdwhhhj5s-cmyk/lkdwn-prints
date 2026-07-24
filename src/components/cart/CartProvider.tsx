"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import type { CartItem } from "@/lib/store";

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  isHydrated: boolean;
  addItem: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

type CartAction =
  | { type: "hydrate"; items: CartItem[] }
  | { type: "add"; item: CartItem }
  | { type: "quantity"; id: string; quantity: number }
  | { type: "remove"; id: string }
  | { type: "clear" };

const CartContext = createContext<CartContextValue | null>(null);
export const CART_STORAGE_KEY = "lkdwn-cart";

function reducer(items: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "hydrate":
      return action.items;
    case "add": {
      const existing = items.find(({ id }) => id === action.item.id);
      return existing
        ? items.map((item) =>
            item.id === action.item.id
              ? { ...item, quantity: item.quantity + action.item.quantity }
              : item,
          )
        : [...items, action.item];
    }
    case "quantity":
      return items.map((item) =>
        item.id === action.id
          ? { ...item, quantity: Math.max(1, Math.min(10, action.quantity)) }
          : item,
      );
    case "remove":
      return items.filter(({ id }) => id !== action.id);
    case "clear":
      return [];
  }
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, []);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        dispatch({ type: "hydrate", items: JSON.parse(stored) });
      }
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated) {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [hydrated, items]);

  const addItem = useCallback(
    (item: CartItem) => dispatch({ type: "add", item }),
    [],
  );
  const updateQuantity = useCallback(
    (id: string, quantity: number) =>
      dispatch({ type: "quantity", id, quantity }),
    [],
  );
  const removeItem = useCallback(
    (id: string) => dispatch({ type: "remove", id }),
    [],
  );
  const clearCart = useCallback(() => dispatch({ type: "clear" }), []);

  const value = useMemo(
    () => ({
      items,
      itemCount: items.reduce((total, item) => total + item.quantity, 0),
      isHydrated: hydrated,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    }),
    [addItem, clearCart, hydrated, items, removeItem, updateQuantity],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);

  if (!value) {
    throw new Error("useCart must be used within CartProvider");
  }

  return value;
}
