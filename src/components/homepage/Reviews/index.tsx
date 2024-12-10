"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import ReviewCard from "@/components/common/ReviewCard";
import { Review } from "@/types/review.types";

type ReviewsProps = { data: Review[] };

const Reviews = ({ data }: ReviewsProps) => {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isClient = useIsClient();

  // Function to update carousel state based on selection
  const updateCurrentIndex = () => {
    if (api) {
      setCurrent(api.selectedScrollSnap() + 1);
    }
  };

  // Initialize the carousel and set event listeners
  useEffect(() => {
    if (!api) return;

    // Set the initial count and current index
    setCount(api.scrollSnapList().length);
    updateCurrentIndex();

    // Attach the 'select' event listener
    const handleSelect = () => {
      updateCurrentIndex();
    };

    api.on("select", handleSelect);

    // Cleanup the event listener on unmount or when api changes
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  if (!isClient) return null;

  // Helper function to determine the blur effect class
  const getBlurEffectClass = (index: number) => {
    if (data.length < 6) return "";

    const isNextToCurrent =
      (current + 1 === count && index === 0) ||
      (current === count && index === count - 1);
    const isCurrentItem = current === index;

    if (isDesktop) {
      if (isNextToCurrent) return "backdrop-blur-[2px]";
      if (isCurrentItem) return "backdrop-blur-[2px]";
    } else {
      return isCurrentItem ? "backdrop-blur-[2px]" : "";
    }

    return "";
  };

  return (
    <section className="overflow-hidden">
      <motion.div
        initial={{ x: "100px", opacity: 0 }}
        whileInView={{ x: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          className="relative w-full mb-6 md:mb-9">
          <div className="relative flex items-end sm:items-center max-w-frame mx-auto mb-6 md:mb-10 px-4 xl:px-0">
            <motion.h2
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className={cn([
                integralCF.className,
                "text-[32px] leading-[36px] md:text-5xl capitalize mr-auto",
              ])}>
              OUR HAPPY CUSTOMERS
            </motion.h2>
            <div className="flex items-center space-x-1 ml-2">
              <CarouselPrevious variant="ghost" className="text-2xl">
                <FaArrowLeft />
              </CarouselPrevious>
              <CarouselNext variant="ghost" className="text-2xl">
                <FaArrowRight />
              </CarouselNext>
            </div>
          </div>

          <CarouselContent>
            {data.map((review, index) => (
              <CarouselItem
                key={review.id}
                className="w-full max-w-[358px] sm:max-w-[400px] pl-5">
                <ReviewCard
                  className="h-full"
                  data={review}
                  blurChild={
                    data.length >= 6 && (
                      <div
                        className={cn([
                          getBlurEffectClass(index),
                          "absolute bg-white/10 right-0 top-0 h-full w-full z-10",
                        ])}
                      />
                    )
                  }
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Reviews;
