import Image from "next/image";
import React from "react";

const brandList = [
  { id: "versace", logoPath: "/icons/versace-logo.svg" },
  { id: "zara", logoPath: "/icons/zara-logo.svg" },
  { id: "gucci", logoPath: "/icons/gucci-logo.svg" },
  { id: "prada", logoPath: "/icons/prada-logo.svg" },
  { id: "calvin-klein", logoPath: "/icons/calvin-klein-logo.svg" },
];

const BrandShowcase = () => {
  return (
    <section className="bg-gray-900">
      <div className="container mx-auto flex flex-wrap items-center justify-evenly p-5 md:p-0 gap-6">
        {brandList.map((item) => (
          <div key={item.id} className="flex-shrink-0">
            <Image
              src={item.logoPath}
              priority
              alt={`${item.id}-logo`}
              width={120}
              height={30}
              className="max-w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandShowcase;
