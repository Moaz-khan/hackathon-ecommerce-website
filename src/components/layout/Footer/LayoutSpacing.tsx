"use client";

import { usePathname } from "next/navigation";
import React from "react";

const LayoutSpacing = () => {
  const pathname = usePathname();

  // If the pathname includes "product", add bottom margin
  if (pathname.includes("product")) {
    return <div className="mb-20 md:mb-0" />;
  }

  // Return null if the pathname doesn't include "product"
  return null;
};

export default LayoutSpacing;
