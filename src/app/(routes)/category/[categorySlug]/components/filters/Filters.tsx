import { FilterOrigin } from "./FilterOrigin";
import { FilterTaste } from "./FilterTaste";

interface FiltersOriginProps {
  setFilterOrigin: (origin: string | null) => void;
  setFilterTaste: (origin: string | null) => void;
}
export const Filters = (props: FiltersOriginProps) => {
  const { setFilterOrigin, setFilterTaste } = props;
  return (
    <>
      <div>
        <h3 className="text-xl">Filters</h3>
        <div className="sm:w-[350px] sm:mt-5">
          <FilterOrigin setFilterOrigin={setFilterOrigin} />
        </div>
        <div className="sm:w-[350px] sm:mt-5">
          <FilterTaste setFilterTaste={setFilterTaste} />
        </div>
      </div>
    </>
  );
};
