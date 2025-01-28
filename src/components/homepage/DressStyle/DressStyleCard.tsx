import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  heading: string;
  link: string;
  customClass?: string;
};

const StyleCard = ({ heading, link, customClass }: CardProps) => {
  return (
    <Link
      href={link}
      className={cn(
        "block w-full rounded-lg bg-white bg-top text-xl md:text-3xl font-semibold text-left py-5 md:py-7 px-6 md:px-8 bg-cover bg-no-repeat shadow-md hover:shadow-lg transition-shadow",
        customClass,
      )}>
      {heading}
    </Link>
  );
};

export default StyleCard;
