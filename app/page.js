"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./_components/Card.jsx";
import Pagination from "./_components/Pagination.jsx";
import Search from "./_components/Search.jsx";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = query
          ? `https://swapi.dev/api/people/?search=${query}&page=${page}`
          : `https://swapi.dev/api/people/?page=${page}`;

        const response = await axios.get(url);
        setData(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 10));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, query]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Star Wars Characters
      </h1>
      <Search query={query} setQuery={setQuery} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <Card key={item.url} data={item} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default HomePage;
