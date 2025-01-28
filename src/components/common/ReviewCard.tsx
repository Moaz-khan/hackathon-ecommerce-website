import React from "react";
import Rating from "../ui/Rating";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Button } from "../ui/button";
import { Review } from "@/types/review.types";
import { cn } from "@/lib/utils";

type ReviewCardProps = {
  blurChild?: React.ReactNode;
  isAction?: boolean;
  isDate?: boolean;
  data: Review;
  className?: string;
};

// Helper Component for User Information
const UserInfo = ({ user }: { user: string }) => (
  <div className="flex items-center mb-2 sm:mb-3">
    <strong className="text-black sm:text-xl mr-1">{user}</strong>
    <IoIosCheckmarkCircle className="text-[#01AB31] text-xl sm:text-2xl" />
  </div>
);

// Helper Component for Date Information
const DateInfo = ({ date }: { date: string }) => (
  <p className="text-black/60 text-sm font-medium mt-4 sm:mt-6">
    Posted on {date}
  </p>
);

const ReviewCard = ({
  blurChild,
  isAction = false,
  isDate = false,
  data,
  className,
}: ReviewCardProps) => {
  return (
    <div
      className={cn(
        "relative bg-white flex flex-col items-start aspect-auto border border-black/10 rounded-[20px] p-6 sm:px-8 sm:py-7 overflow-hidden",
        className,
      )}>
      {/* Optional blur child */}
      {blurChild && <div className="absolute inset-0">{blurChild}</div>}

      {/* Rating and Action Button */}
      <div className="w-full flex items-center justify-between mb-3 sm:mb-4">
        <Rating
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          size={23}
          readonly
        />
        {isAction && (
          <Button variant="ghost" size="icon">
            <IoEllipsisHorizontal className="text-black/40 text-2xl" />
          </Button>
        )}
      </div>

      {/* User Information */}
      <UserInfo user={data.user} />

      {/* Review Content */}
      <p className="text-sm sm:text-base text-black/60">{data.content}</p>

      {/* Date Information (Optional) */}
      {isDate && <DateInfo date={data.date} />}
    </div>
  );
};

export default ReviewCard;
