import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function SkeletonCard() {
  return (
    <div className="flex flex-col space-x-3 space-y-3">
      <Skeleton className="rounded-xl w-[250px] h-[125px]" />
      <div className="space-y-2">
        <Skeleton className="w-[250px] h-4" />
        <Skeleton className="w-[200px] h-4" />
      </div>
    </div>
  );
}

export default SkeletonCard;
