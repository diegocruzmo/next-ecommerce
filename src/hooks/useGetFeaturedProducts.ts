import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { infoProducts } from "@/services/products";

import type { Product, Pagination } from "@/types/Products";

interface UseProductsResponse {
  products: Product[];
  pagination: Pagination;
}
function useGetFeaturedProducts() {
  const { data, status, error }: UseQueryResult<UseProductsResponse, Error> =
    useQuery({
      queryKey: ["products"],
      queryFn: infoProducts,
    });

  const products = data?.products ?? [];
  const pagination = data?.pagination ?? null;

  return { status, error, products, pagination };
}

export default useGetFeaturedProducts;
