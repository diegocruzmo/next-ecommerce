/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Image } from "@/types/Products";

interface CarouselProductProps {
  images: Image[];
}

export const CarouselProduct = (props: CarouselProductProps) => {
  const { images } = props;
  return (
    <Carousel>
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
            <img
              src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + image.url}
              alt={"Image Product"}
              className="rounded-md w-[320px] sm:w-full mx-auto"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
