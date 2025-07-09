import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { infoCategories } from "@/services/categories";

import type { Category, Pagination } from "@/types/Categories";

interface UseCategoriesResponse {
  categories: Category[];
  pagination: Pagination;
}
function useGetCategories() {
  const {
    data,
    isPending,
    error,
  }: UseQueryResult<UseCategoriesResponse, Error> = useQuery({
    queryKey: ["categories"],
    queryFn: infoCategories,
  });

  const categories = data?.categories ?? [];
  const pagination = data?.pagination ?? null;

  return { isPending, error, categories, pagination };
}

export default useGetCategories;
