import React from "react";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  activePage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul>
      {pageNumbers.map((number) => (
        <li key={number}>
          <a href="#">{number}</a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
