import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonProduct = () => {
  return (
    <div className="grid sm:grid-cols-2 sm:py-16 sm:px-40">
      <Skeleton className="w-[350px] h-[200px] rounded-md mr-1" />
      <div>
        <Skeleton className="w-[350px] h-[20px] rounded-md" />
        <Skeleton className="w-[350px] h-[20px] rounded-md mt-2" />
        <Skeleton className="w-[350px] h-[20px] rounded-md mt-2" />
      </div>
    </div>
  );
};
