"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/formatPrice";
import { Product } from "@/types/Products";
import { Heart } from "lucide-react";
import { useState } from "react";

interface InfoProductProps {
  product: Product;
}

export const InfoProduct = (props: InfoProductProps) => {
  const { product } = props;

  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    console.log("Adding to wishlist...");
  };

  return (
    <div>
      <div className="sm:flex justify-between mb-3">
        <h1 className="text-2xl mb-2">{product.productName}</h1>
        <div className="flex items-center sm:justify-between gap-3">
          <p className="px-2 py-1 text-xs rounded-md w-fit bg-slate-200 dark:bg-slate-700">
            {product.taste}
          </p>
          <p className="px-2 py-1 text-xs rounded-md w-fit bg-yellow-900 text-slate-100">
            {product.origin}
          </p>
        </div>
      </div>
      <Separator />
      <p className="font-extralight my-4">{product.description}</p>
      <Separator />
      <p className="font-extralight text-2xl my-4">
        {formatPrice(product.price)}
      </p>
      <div className="flex items-center gap-5">
        <Button className="w-[80%]" onClick={() => console.log("Buying...")}>
          Buy
        </Button>
        <Heart
          width={20}
          strokeWidth={1}
          className={`transition duration-300 cursor-pointer ${
            liked ? "fill-black dark:fill-slate-400" : "fill-none"
          } 
        hover:fill-black dark:hover:fill-slate-400`}
          onClick={toggleLike}
        />
      </div>
    </div>
  );
};
