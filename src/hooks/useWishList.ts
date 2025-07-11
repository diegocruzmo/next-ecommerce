import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/types/Products";
import { toast } from "sonner";

interface useWishListTypes {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
}

export const useWishList = create(
  persist<useWishListTypes>(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.id === product.id
        );

        if (existingItem) {
          toast("Item already in wishlist.");
        } else {
          set({ items: [...currentItems, product] });
          toast("Item added to wishlist.");
        }
      },
      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        toast("Item removed from wishlist.");
      },
    }),
    {
      name: "wishlist",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
