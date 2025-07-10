/* eslint-disable @next/next/no-img-element */
"use client";

import useGetCategories from "@/hooks/useGetCategories";
import { Category } from "@/types/Categories";
import Link from "next/link";

export const ChooseCategory = () => {
  const { categories, isPending } = useGetCategories();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-6">
      <h3 className="text-3xl pb-2 sm:pb-8">Categories</h3>

      <div className="grid gap-5 md:grid-cols-3">
        {!isPending &&
          categories.map((category: Category) => (
            <Link
              href={`/category/${category.slug}`}
              key={category.id}
              className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-md"
            >
              <img
                src={
                  process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                  category.mainImage.url
                }
                alt={category.categoryName}
                className="w-[220px] h-[220px] transition duration-300 ease-in-out rounded-md hover:scale-105"
              />
              <p className="absolute bottom-2 w-full py-2 text-lg font-semibold text-center text-gray-100 backdrop-blur-md">
                {category.categoryName}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};
