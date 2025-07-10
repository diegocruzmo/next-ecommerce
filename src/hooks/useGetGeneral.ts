import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { infoGeneral } from "@/services/general";
import { InfoGeneral } from "@/types/General";

function useGetGeneral() {
  const { data, isPending, error }: UseQueryResult<InfoGeneral, Error> =
    useQuery({
      queryKey: ["general"],
      queryFn: infoGeneral,
    });

  const attributes = data?.data.schema.attributes ?? null;

  return { isPending, error, attributes };
}

export default useGetGeneral;
