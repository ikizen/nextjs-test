import { useState, useEffect } from "react";

const Search = ({ text, setText, fetchData }) => {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(text, 1);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6 ">
      <input
        type="text"
        placeholder="Search for a character..."
        value={text}
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
