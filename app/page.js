"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./_components/Card.jsx";
import Pagination from "./_components/Pagination.jsx";
import Search from "./_components/Search.jsx";
import Navbar from "./_components/Navbar.jsx";
import SkeletonCard from "./_components/SkeletonCard.jsx";
import fetchData from "./utils/fetchData.js";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(page, setData, setTotalPages, setIsLoading, false);
  }, [page]);

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Star Wars Characters
        </h1>
        <Search
          page={page}
          query={query}
          setQuery={setQuery}
          setData={setData}
          setTotalPages={setTotalPages}
          setIsLoading={setIsLoading}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <SkeletonCard key={index} />
              )) // Show skeletons
            : data.map((item) => <Card key={item.url} data={item} />)}
        </div>
        {!isLoading && (
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        )}
      </div>
    </>
  );
};

export default HomePage;
