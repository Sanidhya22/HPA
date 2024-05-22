import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { Button, IconButton } from '@material-tailwind/react';

import React from 'react';

interface PaginationProps {
  itemsCount: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  itemsCount,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const pageCount = Math.ceil(itemsCount / itemsPerPage);

  if (pageCount === 1) return null;

  // Function to go to the next page
  const handleNext = () => {
    if (currentPage < pageCount) onPageChange(currentPage + 1);
  };

  // Function to go to the previous page
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  return (
    <>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>

      <div className="flex items-center gap-2">
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
          <IconButton
            key={page}
            variant={page === currentPage ? 'filled' : 'text'}
            color="gray"
            onClick={() => onPageChange(page)}
          >
            {page}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={handleNext}
        disabled={currentPage === pageCount}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </>
  );
};
