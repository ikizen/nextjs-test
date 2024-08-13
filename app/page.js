"use client";

import { useState, useEffect } from "react";
import Navbar from "./ui/Navbar.jsx";
import Search from "./ui/Search.jsx";
import { useDebouncedCallback } from "use-debounce";
import SkeletonCard from "./ui/SkeletonCard.jsx";
import Card from "./ui/Card.jsx";
import Pagination from "./ui/Pagination.jsx";

const HomePage = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isSearching, setIsSearching] = useState(false);

  const fetchData = useDebouncedCallback(async (searchText) => {
    setLoading(true);
    try {
      const url = `https://swapi.dev/api/people/?search=${searchText}`;
      const response = await fetch(url);
      const data = await response.json();
      setResults(data.results);
      setTotalPages(Math.ceil(data.count / 10));
      setIsSearching(!!searchText);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, 700);

  const fetchPage = useDebouncedCallback(async (page) => {
    try {
      const url = `https://swapi.dev/api/people/?page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      setResults(data.results);
      setIsSearching(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, 700);

  useEffect(() => {
    fetchPage(page);
  }, [fetchPage, page]);

  useEffect(() => {
    fetchData(""); // Load first page on initial render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (text) {
      fetchData(text);
    } else {
      fetchData("");
    }
  }, [text, fetchData]);

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Star Wars Characters
        </h1>
        <Search text={text} setText={setText} fetchData={fetchData} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 10 }).map((_, index) => (
                <SkeletonCard key={index} />
              )) // Show skeletons
            : results.map((item) => <Card key={item.url} data={item} />)}
        </div>
        {!loading && !isSearching && (
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        )}
      </div>
    </>
  );
};

export default HomePage;
