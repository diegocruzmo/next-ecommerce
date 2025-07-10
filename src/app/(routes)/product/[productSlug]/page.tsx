"use client";

import useGetProductsBySlug from "@/hooks/useGetProductsBySlug";
import { useParams } from "next/navigation";
import { SkeletonProduct } from "./components/skeleton";
import { CarouselProduct } from "./components/carousel";
import { InfoProduct } from "./components/product";

export default function Page() {
  const params = useParams();
  const { productSlug } = params;

  if (!productSlug) {
    throw new Error("Missing Product Slug");
  }

  const { product, isPending } = useGetProductsBySlug(productSlug);

  if (isPending) {
    return (
      <div className="max-w-6xl py-4 mx-auto px-2 sm:py-4 sm:px-6">
        <SkeletonProduct />
      </div>
    );
  }

  return (
    <div className="max-w-6xl py-4 mx-auto px-2 sm:py-4 sm:px-6">
      <div className="max-w-6xl py-4 mx-auto sm:py-6 sm:px-24">
        <div className="grid sm:grid-cols-2">
          <div>
            <CarouselProduct images={product[0].images} />
          </div>
          <div className="px-2 py-2 sm:px-12 mt-2">
            <InfoProduct product={product[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
