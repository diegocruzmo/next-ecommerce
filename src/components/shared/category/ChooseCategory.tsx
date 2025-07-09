"use client";

import useGetCategories from "@/hooks/useGetCategories";

export const ChooseCategory = () => {
  const { categories } = useGetCategories();

  console.log(categories);

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-6">
      <h3 className="text-3xl pb-2 sm:pb-8">Categories</h3>
    </div>
  );
};
