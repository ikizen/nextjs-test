const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-4 ">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="min-w-24 px-4 py-2 cursor-pointer border border-transparent bg-gray-500 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span>{`Page ${page} of ${totalPages}`}</span>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="min-w-24 px-4 py-2 cursor-pointer border border-transparent bg-gray-500 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
