import { BannerDiscount } from "@/components/shared/banner";
import { CarouselHeader } from "@/components/shared/carousel";
import { ChooseCategory } from "@/components/shared/category";
import { Featured } from "@/components/shared/featured";

export default function Home() {
  return (
    <main className="p-4 mx-auto sm:max-w-4xl md:max-w-6xl">
      <CarouselHeader />
      <Featured />
      <BannerDiscount />
      <ChooseCategory />
    </main>
  );
}
