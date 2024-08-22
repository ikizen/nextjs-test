import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function SkeletonCard() {
  return (
    <div className="flex flex-col lg:space-x-3 lg:space-y-3 w-auto">
      <Skeleton className="rounded-xl w-auto md:w-[300px] h-[450px] md:h-[125px]" />
      {/* <div className="md:block space-y-2 hidden">
        <Skeleton className="md:w-[250px] h-4" />
        <Skeleton className="md:w-[200px] h-4" />
      </div> */}
    </div>
  );
}

export default SkeletonCard;
