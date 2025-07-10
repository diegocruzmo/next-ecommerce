import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const BannerProduct = () => {
  return (
    <>
      <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-6 text-center">
        <p>Enjoy of a great experience</p>
        <h3 className="text-3xl mt-2">Try a delicious coffee</h3>
        <p className="mt-2 text-lg mb-4">Do not miss our new products </p>
        <Link href={"#"} className={buttonVariants()}>
          Buy now
        </Link>
      </div>

      <div className="h-[280px] md:h-[600px] bg-[url('/coffee-1.jpg')] bg-cover bg-no-repeat bg-center mt-5" />
    </>
  );
};
