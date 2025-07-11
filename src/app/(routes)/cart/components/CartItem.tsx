/* eslint-disable @next/next/no-img-element */
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { Product } from "@/types/Products";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItemProps {
  product: Product;
}

export const CartItem = (props: CartItemProps) => {
  const { product } = props;
  const router = useRouter();
  const { removeItem } = useCart();

  return (
    <li className="flex py-6 border-b">
      <div
        onClick={() => router.push(`/product/${product.slug}`)}
        className="cursor-pointer"
      >
        <img
          src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.images[0].url}
          alt="Product"
          className="w-24 h-24 overflow-hidden rounded-sm"
        />
      </div>
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-md font-bold">{product.productName}</h2>
          <p>{formatPrice(product.price)}</p>
          <div className="flex items-center justify-between gap-3">
            <p className="px-2 py-1 text-slate-100 bg-slate-700 rounded-full w-fit">
              {product.taste}
            </p>
            <p className="px-2 py-1 text-slate-100 bg-amber-800 rounded-full w-fit">
              {product.origin}
            </p>
          </div>
        </div>
        <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center bg-slate-300 dark:text-black border shadow-md p-1 hover:scale-105 transition cursor-pointer"
            )}
          >
            <X size={16} onClick={() => removeItem(product.id)} />
          </button>
        </div>
      </div>
    </li>
  );
};
