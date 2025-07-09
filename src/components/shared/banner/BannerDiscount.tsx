import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const BannerDiscount = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="p-5 sm:p-20 w-full mx-auto text-center">
        <h2 className="uppercase text-2xl font-bold">Get up to 50% off</h2>
        <h3 className="font-light mt-3">
          -50% if you spend more than $100. Use code:
          <span className="font-bold"> SUMMER50</span>
        </h3>
        <div className="max-w-md mx-auto flex justify-center gap-2 md:gap-8 mt-5">
          <Link href="#" className={buttonVariants()}>
            Buy now
          </Link>
          <Link href="#" className={buttonVariants({ variant: "outline" })}>
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};
