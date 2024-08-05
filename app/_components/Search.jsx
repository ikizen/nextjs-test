import { useState, useEffect } from "react";
import debounce from "../utils/debounce.js";
import fetchData from "../utils/fetchData.js";

const Search = ({
  page,
  query,
  setQuery,
  setData,
  setIsLoading,
  setTotalPages,
}) => {
  const [searchTerm, setSearchTerm] = useState(query);

  useEffect(() => {
    const debouncedSearch = debounce((value) => {
      setQuery(value);
    }, 800);

    debouncedSearch(searchTerm);
  }, [searchTerm, setQuery]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event, 111);

    fetchData(page, setData, setTotalPages, setIsLoading, query);
  };

  return (
    <form className="flex justify-center mb-6 " onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a character..."
        value={searchTerm}
        onChange={handleChange}
        className="px-4 py-2 border rounded-lg w-full max-w-md border-transparent transition-colors hover:border-gray-300 border-neutral-700 bg-neutral-800/30"
      />
      <button className="ml-2 px-4 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-600 transition-colors">
        Search
      </button>
    </form>
  );
};

export default Search;
