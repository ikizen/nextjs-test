const Search = ({ query, setQuery }) => {
  return (
    <div className="flex justify-center mb-6 ">
      <input
        type="text"
        placeholder="Search for a character..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 border rounded-lg w-full max-w-md border-transparent transition-colors hover:border-gray-300 border-neutral-700 bg-neutral-800/30"
      />
    </div>
  );
};

export default Search;
