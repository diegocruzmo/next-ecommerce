import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { infoProducts } from "@/services/products";
import { InfoProducts } from "@/types/Products";

function useGetFeaturedProducts() {
  const { data, isPending, error }: UseQueryResult<InfoProducts, Error> =
    useQuery({
      queryKey: ["products"],
      queryFn: infoProducts,
    });

  const products = data?.products ?? [];
  const pagination = data?.pagination ?? null;

  return { isPending, error, products, pagination };
}

export default useGetFeaturedProducts;
