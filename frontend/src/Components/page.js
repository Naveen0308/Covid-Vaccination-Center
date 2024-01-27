import React from 'react';
import { Pagination } from 'flowbite-react';

export default function Page({ centersPerPage, totalCenters, currentPage, paginate }) {
  const totalPages = Math.ceil(totalCenters / centersPerPage);

  const handlePageChange = (page) => {
    paginate(page);
  };

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        showIcons
      />
    </div>
  );
}
