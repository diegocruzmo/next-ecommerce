"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";

import { MenuDesktop, MenuMobile } from "./menu";
import { Theme } from "../theme";
import { useCart } from "@/hooks/useCart";
import { useWishList } from "@/hooks/useWishList";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const router = useRouter();
  const { items } = useCart();
  const { items: wishList } = useWishList();

  return (
    <div className="flex items-center justify-between p-4 mx-auto sm:max-w-4xl md:max-w-6xl">
      <Link href="/" passHref>
        <p className="text-3xl">
          Coffee <span className="font-bold">Shop</span>
        </p>
      </Link>

      <div className="hidden sm:flex sm:items-center sm:justify-center">
        <MenuDesktop />
      </div>

      <div className="flex sm:hidden">
        <MenuMobile />
      </div>

      <div className="flex justify-between items-center gap-2 sm:gap-7">
        {items.length === 0 ? (
          <ShoppingCart
            strokeWidth={1}
            className="cursor-pointer"
            onClick={() => router.push("/cart")}
          />
        ) : (
          <div className="flex gap-1" onClick={() => router.push("/cart")}>
            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
            <span className="text-sm rounded-full bg-slate-700 text-slate-100 px-2">
              <p>{items.length}</p>
            </span>
          </div>
        )}
        <Heart
          strokeWidth={1}
          className={cn(
            "cursor-pointer",
            wishList.length > 0 && "fill-black dark:fill-slate-400"
          )}
          onClick={() => router.push("/wishlist")}
        />
        <User
          strokeWidth={1}
          className="cursor-pointer"
          onClick={() => console.log("User")}
        />
        <Theme />
      </div>
    </div>
  );
};
