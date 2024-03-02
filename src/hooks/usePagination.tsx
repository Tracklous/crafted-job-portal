import { useState } from "react";

interface PaginationConfig {
  initialPage?: number;
  initialPageSize?: number;
}

interface Pagination<T> {
  currentPage: number;
  pageSize: number;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page: number) => void;
  setItemsPerPage: (size: number) => void;
  paginatedData: T[];
}

export function usePagination<T = any[]>(
  data: T[],
  { initialPage = 1, initialPageSize = 10 }: PaginationConfig
): Pagination<T> {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const paginatedData = data.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  const goToPage = (page: number) => setCurrentPage(page);
  const setItemsPerPage = (size: number) => {
    setPageSize(size);
    setCurrentPage(1); // Reset to the first page when changing page size
  };

  return {
    currentPage,
    pageSize,
    nextPage,
    prevPage,
    goToPage,
    setItemsPerPage,
    paginatedData,
  };
}
