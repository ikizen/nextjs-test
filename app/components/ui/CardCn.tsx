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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { SWAPIResult } from "@/lib/swapi";
import { toast } from "sonner";

interface CardCnProps {
  data: SWAPIResult;
}

function CardCn({ data }: CardCnProps) {
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
      toast(`Card ${data.name} has been removed!`);
    } else {
      // Add to saved items
      savedItems.push(data);
      toast(`Card ${data.name} has been added to Saved!`);
    }

    localStorage.setItem("savedItems", JSON.stringify(savedItems));
    setIsSaved(!isSaved);
  };

  const personNameSlug = data.name.toLowerCase().replace(/ /g, "-");

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href={`/person/${personNameSlug}`}>
            <div className="hover:underline decoraion-2">{data.name}</div>
          </Link>
        </CardTitle>
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
        <Button
          onClick={handleSave}
          className={clsx(`flex justify-center mt-4 rounded`)}
        >
          {isSaved ? "Remove" : "Save"}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardCn;
