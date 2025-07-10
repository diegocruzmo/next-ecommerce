import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { infoCategories } from "@/services/categories";
import { InfoCategories } from "@/types/Categories";

function useGetCategories() {
  const { data, isPending, error }: UseQueryResult<InfoCategories, Error> =
    useQuery({
      queryKey: ["categories"],
      queryFn: infoCategories,
    });

  const categories = data?.categories ?? [];
  const pagination = data?.pagination ?? null;

  return { isPending, error, categories, pagination };
}

export default useGetCategories;
