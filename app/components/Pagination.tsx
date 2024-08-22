import { Button } from "@/components/ui/button";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
      <Button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 min-w-24"
      >
        Previous
      </Button>
      <span>{`Page ${page} of ${totalPages}`}</span>
      <Button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 min-w-24"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
