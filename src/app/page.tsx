import { CarouselHeader } from "@/components/shared/carousel";
import { Featured } from "@/components/shared/featured";

export default function Home() {
  return (
    <main className="p-4 mx-auto sm:max-w-4xl md:max-w-6xl">
      <CarouselHeader />
      <Featured />
    </main>
  );
}
