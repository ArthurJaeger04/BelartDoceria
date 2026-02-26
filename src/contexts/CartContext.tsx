import React, { createContext, useContext, useState, useCallback } from "react";
import type { Product, PriceOption } from "@/data/products";

export interface CartItem {
  product: Product;
  priceOption: PriceOption;
  amount: number; // how many of that priceOption
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addItem: (product: Product, priceOption: PriceOption, amount?: number) => void;
  removeItem: (index: number) => void;
  total: number;
  itemCount: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product: Product, priceOption: PriceOption, amount = 1) => {
    setItems((prev) => {
      const existing = prev.findIndex(
        (i) => i.product.id === product.id && i.priceOption.label === priceOption.label
      );
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = { ...updated[existing], amount: updated[existing].amount + amount };
        return updated;
      }
      return [...prev, { product, priceOption, amount }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => sum + i.priceOption.price * i.amount, 0);
  const itemCount = items.reduce((sum, i) => sum + i.amount, 0);

  return (
    <CartContext.Provider value={{ items, isOpen, setIsOpen, addItem, removeItem, total, itemCount, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
