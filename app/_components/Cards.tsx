"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cards() {
  const [breeds, setBreeds] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [next, setNext] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const URL = "https://catfact.ninja/breeds?limit=20";

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const response = await axios.get(URL);
          console.log(response);
          setBreeds(response.data.data);
          setNext(response.data.next_page_url);
          setFilteredUsers(response.data.data);
        } catch (error) {
          console.error("Error fetching the dog images:", error);
        }
      };
      fetchData();
    },
    []
    // [!searchItem]
  );

  return (
    <>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Docs
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </div>
      </div>
    </>
  );
}
