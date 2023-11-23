import React from "react";

const Pagination = (productsPerPage, totalProducts, paginate, activePage) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return <div>Pagination</div>;
};

export default Pagination;
