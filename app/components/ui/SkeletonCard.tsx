import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function SkeletonCard() {
  return (
    <div className="flex flex-col lg:space-x-3 lg:space-y-3 w-auto">
      <Skeleton className="rounded-xl w-auto md:w-[300px] h-[450px] md:h-[125px]" />
    </div>
  );
}

export default SkeletonCard;
