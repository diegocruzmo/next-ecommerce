"use client";

import { useWishList } from "@/hooks/useWishList";
import { WishListItem } from "./components";

export default function Page() {
  const { items } = useWishList();
  return (
    <div className="max-w-4xl p-4 mx-auto sm:py-32 sm:px-24">
      <h1 className="text-2xl">Wishlist</h1>
      <div>
        <div>
          {items.length === 0 && (
            <p className="text-lg mt-2 font-light">Your wishlist is empty</p>
          )}

          <ul>
            {items.map((item) => (
              <WishListItem product={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
