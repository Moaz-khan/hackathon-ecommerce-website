"use client"
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import { motion } from "framer-motion";
import StyleCard from "./DressStyleCard";

const DressStyle = () => {
  const animationSettings = {
    initial: { y: "100px", opacity: 0 },
    whileInView: { y: "0", opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="px-4 xl:px-0">
      <section className="max-w-frame mx-auto bg-gray-100 px-6 pb-6 pt-10 md:p-16 rounded-3xl text-center">
        <motion.h2
          {...animationSettings}
          className={cn(
            integralCF.className,
            "text-3xl leading-9 md:text-5xl mb-8 md:mb-14 capitalize",
          )}>
          Explore by Dress Style
        </motion.h2>

        <motion.div
          {...animationSettings}
          transition={{ ...animationSettings.transition, delay: 0.3 }}
          className="flex flex-col sm:flex-row md:h-[300px] gap-4 sm:gap-5 mb-5">
          <StyleCard
            heading="Casual"
            link="/shop#casual"
            customClass="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[400px] h-[190px] bg-[url('/images/dress-style-1.png')]"
          />
          <StyleCard
            heading="Formal"
            link="/shop#formal"
            customClass="md:max-w-[680px] h-[190px] bg-[url('/images/dress-style-2.png')]"
          />
        </motion.div>

        <motion.div
          {...animationSettings}
          transition={{ ...animationSettings.transition, delay: 0.6 }}
          className="flex flex-col sm:flex-row md:h-[300px] gap-5">
          <StyleCard
            heading="Party"
            link="/shop#party"
            customClass="md:max-w-[680px] h-[190px] bg-[url('/images/dress-style-3.png')]"
          />
          <StyleCard
            heading="Gym"
            link="/shop#gym"
            customClass="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[400px] h-[190px] bg-[url('/images/dress-style-4.png')]"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default DressStyle;
