"use client";

import useProducts from "@/hooks/useProducts";

export const Featured = () => {
  const { products } = useProducts();

  console.log(products);
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="text-3xl px-6 sm:pb-8"></h3>
    </div>
  );
};
