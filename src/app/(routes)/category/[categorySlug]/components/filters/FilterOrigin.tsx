import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import useGetGeneral from "@/hooks/useGetGeneral";

interface FiltersOriginProps {
  setFilterOrigin: (origin: string | null) => void;
}

export const FilterOrigin = (props: FiltersOriginProps) => {
  const { attributes, isPending } = useGetGeneral();
  const { setFilterOrigin } = props;

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Origin</p>
      {isPending && <p>Loading origin...</p>}

      <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
        {attributes?.origin?.enum?.map((origin: string) => (
          <div key={origin} className="flex items-center space-x-2">
            <RadioGroupItem value={origin} id={origin} />
            <Label htmlFor={origin}>{origin}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
