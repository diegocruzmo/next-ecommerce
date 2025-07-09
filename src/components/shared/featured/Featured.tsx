/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SkeletonSchema } from "../skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Expand, ShoppingCart } from "lucide-react";

import useGetFeaturedProducts from "@/hooks/useGetFeaturedProducts";
import { IconButton } from "../icon";
import { useRouter } from "next/navigation";

export const Featured = () => {
  const { products, isPending } = useGetFeaturedProducts();
  const router = useRouter();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-6">
      <h3 className="text-3xl pb-2 sm:pb-8">Featured Products</h3>
      <Carousel className="mx-6">
        <CarouselContent className="-ml-2 md:-ml-4">
          {isPending && <SkeletonSchema grid={3} />}
          {products != null &&
            products.map((product) => (
              <CarouselItem
                key={product.id}
                className="sm:basis-1/2 lg:basis-1/3 group"
              >
                <Card className="py-4">
                  <CardContent className="relative flex items-center justify-center py-2 px-2">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                        product.images[0].url
                      }
                      alt={product.productName}
                      className="w-full h-[180px] object-cover"
                    />

                    <div className="absolute w-full px-2 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                      <div className="flex justify-center gap-x-2 text-gray-100">
                        <IconButton
                          onClick={() =>
                            router.push(`/product/${product.slug}`)
                          }
                          icon={<Expand size={16} />}
                          className="text-slate-100"
                        />
                        <IconButton
                          onClick={() => router.push(`#`)}
                          icon={<ShoppingCart size={16} />}
                          className="text-slate-100"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <div className="flex justify-between gap-4 px-2">
                    <h3 className="text-lg font-bold">{product.productName}</h3>
                    <div className="flex items-center justify-end gap-3">
                      <p className="text-xs font-light bg-slate-200 dark:bg-slate-500 px-1 py-1 rounded-md">
                        {product.taste}
                      </p>
                      <p className="text-xs font-light bg-yellow-900 px-1 py-1 rounded-md">
                        {product.origin}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};
