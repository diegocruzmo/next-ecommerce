"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Heart, ShoppingCart, User } from "lucide-react";

import { MenuDesktop, MenuMobile } from "./menu";
import { Theme } from "../theme";

export const Navbar = () => {
  const router = useRouter();

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
        <ShoppingCart
          strokeWidth={1}
          className="cursor-pointer"
          onClick={() => router.push("/cart")}
        />
        <Heart
          strokeWidth={1}
          className="cursor-pointer"
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
