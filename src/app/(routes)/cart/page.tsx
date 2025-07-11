"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/formatPrice";
import { CartItem } from "./components";

export default function Page() {
  const { items } = useCart();
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {items.length === 0 && "Your cart is empty"}
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
        </div>

        <div className="max-w-xl">
          <div className="p-6 rounded-md bg-slate-300 dark:bg-slate-700">
            <p className="mb-3 text-lg font-semibold">Order Sumary:</p>
            <Separator className="bg-slate-700 dark:bg-slate-400" />

            <div className="flex justify-between gap-5 my-4">
              <p>Order Total</p>
              <p>{formatPrice(totalPrice)}</p>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button
                variant={"secondary"}
                className="w-full"
                onClick={() => console.log("Buying...")}
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
