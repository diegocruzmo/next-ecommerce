"use client";

import useGetFeaturedProducts from "@/hooks/useGetFeaturedProducts";

export const Featured = () => {
  const { products } = useGetFeaturedProducts();

  console.log(products);

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-6">
      <h3 className="text-3xl sm:pb-8">Featured Products</h3>
    </div>
  );
};
