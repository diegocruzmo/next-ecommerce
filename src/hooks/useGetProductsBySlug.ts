import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { infoProductsBySlug } from "@/services/productsBySlug";
import { InfoProducts } from "@/types/Products";

export default function useGetProductsBySlug(slug: string | string[]) {
  const { data, isPending, error }: UseQueryResult<InfoProducts, Error> =
    useQuery({
      queryKey: ["productsBySlug"],
      queryFn: () => infoProductsBySlug(slug),
    });

  const product = data?.products ?? [];
  const pagination = data?.pagination ?? null;

  return { isPending, error, product, pagination };
}
