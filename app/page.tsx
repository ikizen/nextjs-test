"use client";

import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import Pagination from "./components/Pagination.tsx";
import CardCn from "./components/ui/CardCn.tsx";
import type { SWAPIResult } from "../lib/swapi.ts";
import InputCn from "./components/ui/InputCn.tsx";
import SkeletonCard from "./components/ui/SkeletonCard.tsx";

const HomePage = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState<SWAPIResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const fetchData = useDebouncedCallback(async (searchText) => {
    setLoading(true);
    try {
      const url = `https://swapi.dev/api/people/?search=${searchText}`;
      const response = await fetch(url);
      const data = await response.json();
      setResults(data.results);
      setTotalPages(Math.ceil(data.count / 10));
      setIsSearching(!!searchText);
      results.length == 0 ? setNotFound(true) : setNotFound(false);
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
      <div className="p-8">
        <h1 className="mb-6 font-bold text-2xl text-center">
          Star Wars Characters
        </h1>
        <InputCn text={text} setText={setText} fetchData={fetchData} />
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 10 }).map((_, index) => (
                <SkeletonCard key={index} />
              )) // Show skeletons
            : results.map((item) => <CardCn key={item.url} data={item} />)}
          {!notFound && !loading && <div>Not Found</div>}
        </div>
        {!loading && !isSearching && (
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        )}
      </div>
    </>
  );
};

export default HomePage;
