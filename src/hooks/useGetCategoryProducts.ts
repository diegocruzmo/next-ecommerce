import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { infoCategoryProducts } from "@/services/categoryproducts";
import { InfoProducts } from "@/types/Products";

export default function useGetCategoryProducts(slug: string | string[]) {
  const { data, isPending, error }: UseQueryResult<InfoProducts, Error> =
    useQuery({
      queryKey: ["categoryproducts"],
      queryFn: () => infoCategoryProducts(slug),
    });

  const products = data?.products ?? [];
  const pagination = data?.pagination ?? null;

  return { isPending, error, products, pagination };
}
