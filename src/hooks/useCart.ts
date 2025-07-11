import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { toast } from "sonner";

import { Product } from "@/types/Products";

interface CartStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.id === product.id
        );

        if (existingItem) {
          toast("Item already in cart.");
        } else {
          set({ items: [...currentItems, product] });
          toast("Item added to cart.");
        }
      },

      removeItem: (id) => {
        const currentItems = get().items;
        const filteredItems = currentItems.filter((item) => item.id !== id);
        set({ items: filteredItems });
        toast("Item removed from cart.");
      },

      removeAll: () => {
        set({ items: [] });
        toast("Cart cleared.");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
