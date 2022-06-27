import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Pagination({ baseURL, numberOfPages, currentPage }) {
  const prevPage = currentPage - 1 <= 1 ? '' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  return (
    <div className="pagination__container">
      <div className="pagination__wrapper">
        <div className="icons">
          <Link
            to={`${baseURL}/${prevPage}`}
            className={clsx(currentPage <= 1 && 'disabled')}
          >
            <FiChevronLeft /> Prev
          </Link>
          <Link
            to={`${baseURL}/${nextPage}`}
            className={clsx(currentPage >= numberOfPages && 'disabled')}
          >
            Next <FiChevronRight />
          </Link>
        </div>
        <p>
          page {currentPage} of {numberOfPages} pages
        </p>
      </div>
    </div>
  );
}

export default Pagination;