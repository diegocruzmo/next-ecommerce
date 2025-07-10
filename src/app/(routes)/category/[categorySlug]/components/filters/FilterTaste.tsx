import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import useGetGeneral from "@/hooks/useGetGeneral";

interface FiltersTasteProps {
  setFilterTaste: (origin: string | null) => void;
}

export const FilterTaste = (props: FiltersTasteProps) => {
  const { attributes, isPending } = useGetGeneral();
  const { setFilterTaste } = props;

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Tastes</p>
      {isPending && <p>Loading tastes...</p>}

      <RadioGroup onValueChange={(value) => setFilterTaste(value)}>
        {attributes?.taste?.enum?.map((origin: string) => (
          <div key={origin} className="flex items-center space-x-2">
            <RadioGroupItem value={origin} id={origin} />
            <Label htmlFor={origin}>{origin}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
