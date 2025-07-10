/* eslint-disable @next/next/no-img-element */
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Product } from "@/types/Products";
import { formatPrice } from "@/lib/formatPrice";

import { IconButton } from "@/components/shared/icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface ProductCardProps {
  products: Product[];
}

export const ProductCard = (props: ProductCardProps) => {
  const { products } = props;
  const router = useRouter();
  return (
    <>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="relative p-2 transition-all duration-100 rounden-md hover:shadow-md"
        >
          <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
            <p className="px-2 py-1 text-sm font-semibold text-gray-100 bg-gray-400 dark:bg-gray-800 rounded-md">
              {product.taste}
            </p>
            <p className="px-2 py-1 text-sm font-semibold text-gray-100 bg-yellow-900 rounded-md">
              {product.origin}
            </p>
          </div>

          <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
            <CarouselContent>
              {product.images.map((image) => (
                <CarouselItem key={image.id} className="group">
                  <img
                    src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + image.url}
                    alt="Coffee Image"
                    className="rounded-md w-full h-[220px] sm:w-[300px] sm:h-[300px] object-cover"
                  />
                  <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                    <div className="flex justify-center gap-x-6">
                      <IconButton
                        icon={<Expand size={20} className="text-gray-200" />}
                        onClick={() => {
                          router.push(`/product/${product.slug}`);
                        }}
                      />

                      <IconButton
                        icon={
                          <ShoppingCart size={20} className="text-gray-200" />
                        }
                        onClick={() => {
                          console.log("Clicking....");
                        }}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <p className="text-2xl text-center mt-2">{product.productName}</p>
          <p className="font-semibold text-center">
            {formatPrice(product.price)}
          </p>
        </Link>
      ))}
    </>
  );
};
