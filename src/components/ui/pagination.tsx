<<<<<<< HEAD
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"
=======
import * as React from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";
>>>>>>> origin/main

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
<<<<<<< HEAD
)
Pagination.displayName = "Pagination"
=======
);
Pagination.displayName = "Pagination";
>>>>>>> origin/main

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
<<<<<<< HEAD
))
PaginationContent.displayName = "PaginationContent"
=======
));
PaginationContent.displayName = "PaginationContent";
>>>>>>> origin/main

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
<<<<<<< HEAD
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">
=======
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;
>>>>>>> origin/main

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
<<<<<<< HEAD
=======
      isActive && "bg-black/5 shadow-none border-none !text-black",
>>>>>>> origin/main
      className
    )}
    {...props}
  />
<<<<<<< HEAD
)
PaginationLink.displayName = "PaginationLink"
=======
);
PaginationLink.displayName = "PaginationLink";
>>>>>>> origin/main

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
<<<<<<< HEAD
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"
=======
    className={cn("gap-1 px-2.5 xs:pl-2.5", className)}
    {...props}
  >
    <ArrowLeftIcon className="h-4 w-4 hidden xs:block" />
    <span className="xs:ml-2">Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";
>>>>>>> origin/main

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
<<<<<<< HEAD
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"
=======
    className={cn("gap-1 px-2.5 xs:pr-2.5", className)}
    {...props}
  >
    <span className="xs:mr-2">Next</span>
    <ArrowRightIcon className="h-4 w-4 hidden xs:block" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";
>>>>>>> origin/main

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
<<<<<<< HEAD
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"
=======
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";
>>>>>>> origin/main

export {
  Pagination,
  PaginationContent,
<<<<<<< HEAD
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
=======
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
>>>>>>> origin/main
