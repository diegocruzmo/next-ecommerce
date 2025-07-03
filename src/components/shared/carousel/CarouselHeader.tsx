"use client";

import { useRouter } from "next/navigation";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

import { carouselData } from "./CarouselHeader.data";

export const CarouselHeader = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <Carousel
        className="w-full mx-auto"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {carouselData.map(({ description, id, link, title }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className="cursor-pointer"
            >
              <Card className="shadow-none border-none bg-transparent">
                <CardContent className="flex flex-col gap-2 justify-center items-center">
                  <p className="font-bold text-2xl">{title}</p>
                  <p className="text-gray-700 dark:text-gray-400">
                    {description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
