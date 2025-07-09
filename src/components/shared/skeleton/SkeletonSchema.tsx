import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonSchemaProps } from "./SkeletonSchema.types";

export const SkeletonSchema = (props: SkeletonSchemaProps) => {
  const { grid } = props;

  return (
    <>
      {Array.from({ length: grid }).map((_, index) => (
        <div
          key={index}
          className="hidden sm:flex flex-col gap-2 mx-auto space-y-1"
        >
          <Skeleton className="h-[125px] w-[250px] mr-2" />
          <Skeleton className="h-4 w-[250px] mr-2" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
      ))}
      ;
      <div className="flex flex-col sm:hidden gap-2">
        <Skeleton className="h-[125px] w-3xl" />
        <Skeleton className="h-6 w-3xl" />
        <Skeleton className="h-6 w-3xl" />
      </div>
    </>
  );
};
