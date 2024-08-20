import React, { useState, useEffect } from "react";
import clsx from "clsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { SWAPIResult } from "@/lib/swapi";

function CardCn({ data }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("savedItems")!) || [];
    setIsSaved(
      savedItems.some(
        (savedItem: { url: string }) => savedItem.url === data.url
      )
    );
  }, [data]);

  const handleSave = () => {
    let savedItems = JSON.parse(localStorage.getItem("savedItems")!) || [];

    if (isSaved) {
      // Remove from saved items
      savedItems = savedItems.filter(
        (savedItem: { url: any }) => savedItem.url !== data.url
      );
    } else {
      // Add to saved items
      savedItems.push(data);
    }

    localStorage.setItem("savedItems", JSON.stringify(savedItems));
    setIsSaved(!isSaved);
  };
  return (
    <Card className="dark:hover:border-gray-300 hover:dark:border-neutral-700 hover:border-cyan-500 hover:bg-cyan-400 hover:dark:bg-cyan-950 border border-transparent rounded-lg transition-colors cursor-pointer group">
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Height: {data.height}</p>
        <p>Mass: {data.mass}</p>
        <p>Hair Color: {data.hair_color}</p>
        <p>Skin Color: {data.skin_color}</p>
        <p>Eye Color: {data.eye_color}</p>
      </CardContent>
      <CardFooter>
        <button
          onClick={handleSave}
          className={clsx(
            `mt-4 px-4 py-2 rounded flex justify-center
          ${isSaved ? "bg-red-500 text-white" : " bg-blue-500 text-white"}`
          )}
        >
          {isSaved ? "Remove" : "Save"}
        </button>
      </CardFooter>
    </Card>
  );
}

export default CardCn;
