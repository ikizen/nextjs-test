// app/person/[name]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { SWAPIResult } from "@/lib/swapi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PersonDetail() {
  const pathname = usePathname();
  const name = pathname.split("/").pop();
  const [loading, setLoading] = useState(true);

  const [person, setPerson] = useState<SWAPIResult | null>(null);

  useEffect(() => {
    if (name) {
      const fetchPerson = async () => {
        try {
          const response = await fetch(
            `https://swapi.dev/api/people/?search=${name.replace("-", " ")}`
          );
          const data = await response.json();
          if (data.results.length > 0) {
            setPerson(data.results[0]);
          } else {
            // Handle no results found
            setPerson(null);
          }
        } catch (error) {
          console.error("Error fetching person:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchPerson();
    }
  }, [name]);

  if (!person) {
    return <p>Loading...</p>;
  }
  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col justify-center p-8">
      <Table>
        <TableCaption className="text-4xl">Card - {person.name}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Mass</TableHead>
            <TableHead>Height</TableHead>
            <TableHead className="">Hair color</TableHead>
            <TableHead>Skin color</TableHead>
            <TableHead>Eye color</TableHead>
            <TableHead>Birth year</TableHead>
            <TableHead>Gender</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">{person.name}</TableCell>
            <TableCell>{person.mass}</TableCell>
            <TableCell>{person.height}</TableCell>
            <TableCell className="">{person.hair_color}</TableCell>
            <TableCell>{person.skin_color}</TableCell>
            <TableCell>{person.eye_color}</TableCell>
            <TableCell>{person.birth_year}</TableCell>
            <TableCell>{person.gender}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
