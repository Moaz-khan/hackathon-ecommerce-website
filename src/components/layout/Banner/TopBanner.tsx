import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const TopBanner = () => {
  return (
    <div className="bg-black text-white text-center py-2 px-2 sm:px-4 xl:px-0">
      <div className="relative max-w-frame mx-auto">
        {/* Promotional Message */}
        <p className="text-xs sm:text-sm">
          Sign up and get 20% off your first order.{" "}
          <Link href="#" className="underline font-medium">
            Sign Up Now
          </Link>
        </p>

        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          type="button"
          aria-label="Close banner"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-fit h-fit p-1 hidden sm:flex hover:bg-transparent">
          <Image
            priority
            src="/icons/times.svg"
            height={13}
            width={13}
            alt="Close banner"
          />
        </Button>
      </div>
    </div>
  );
};

export default TopBanner;
