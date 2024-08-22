"use client";

import { useEffect, useState } from "react";
import CardCn from "../components/ui/CardCn.tsx";
import type { SWAPIResult } from "@/lib/swapi";

const SavedPage = () => {
  const [savedItems, setSavedItems] = useState<SWAPIResult[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("savedItems")!) || [];
    setSavedItems(items);
  }, []);

  return (
    <>
      <div className="p-8">
        <h1 className="mb-6 font-bold text-2xl text-center">
          Saved Characters
        </h1>
        {savedItems.length > 0 ? (
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {savedItems.map((item) => (
              <CardCn key={item.url} data={item} />
            ))}
          </div>
        ) : (
          <p className="text-center">No saved characters yet.</p>
        )}
      </div>
    </>
  );
};

export default SavedPage;
