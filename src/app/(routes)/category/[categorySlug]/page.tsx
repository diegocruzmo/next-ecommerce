"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import useGetCategoryProducts from "@/hooks/useGetCategoryProducts";

import { Separator } from "@/components/ui/separator";
import { Filters } from "./components/filters/Filters";
import { SkeletonSchema } from "@/components/shared/skeleton";
import { ProductCard } from "./components/card";

export default function Page() {
  const params = useParams();
  const [filterOrigin, setFilterOrigin] = useState<string | null>(null);
  const [filterTaste, setFilterTaste] = useState<string | null>(null);
  const { categorySlug } = params;

  if (!categorySlug) {
    throw new Error("Missing Category");
  }

  const { isPending, products } = useGetCategoryProducts(categorySlug);

  const filteredProducts =
    !isPending && products.length > 0
      ? products
          .filter((product) => !filterOrigin || product.origin === filterOrigin)
          .filter((product) => !filterTaste || product.taste === filterTaste)
      : products;

  return (
    <div className="max-w-6xl py-4 mx-auto px-2 sm:py-16 sm:px-6">
      {products.length > 0 && (
        <h1 className="text-3xl pb-2 sm:pb-4">
          Coffee in {products[0].category.categoryName}
        </h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <Filters
          setFilterOrigin={setFilterOrigin}
          setFilterTaste={setFilterTaste}
        />
        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {isPending && <SkeletonSchema grid={3} />}
          {products.length > 0 && <ProductCard products={filteredProducts} />}
          {filteredProducts.length === 0 && !isPending && filterOrigin && (
            <p className="text-lg">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
}
