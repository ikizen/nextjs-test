// app/person/[name]/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { SWAPIResult } from "@/lib/swapi";

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
    <div className="p-8">
      <h1 className="mb-4 font-bold text-2xl">{person.name}</h1>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
      <p>Hair Color: {person.hair_color}</p>
      <p>Skin Color: {person.skin_color}</p>
      <p>Eye Color: {person.eye_color}</p>
      <p>Birth Year: {person.birth_year}</p>
      <p>Gender: {person.gender}</p>
    </div>
  );
}
