"use client";

import CartCounter from "@/components/ui/CartCounter";
import React, { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import { Product } from "@/types/product.types";

const AddToCartSection = ({ data }: { data: Product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="fixed md:relative bottom-0 left-0 w-full bg-white border-t md:border-none border-black/5 p-4 sm:p-5 z-10 flex items-center justify-between sm:justify-start md:justify-center">
      {/* Cart Counter */}
      <CartCounter onAdd={setQuantity} onRemove={setQuantity} />

      {/* Add to Cart Button */}
      <AddToCartBtn data={{ ...data, quantity }} />
    </div>
  );
};

export default AddToCartSection;
