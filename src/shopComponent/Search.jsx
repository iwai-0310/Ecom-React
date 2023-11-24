import React, { useState } from "react";

const Search = ({ product, GridList }) => {
  const [searchTerm, setSearchTerm] = useState(" ");
  const filteredProducts = product.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="widget widget-search">
      <form className="search-wrapper mb-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search ..."
          defaultValue={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <i className="icofont-search-2"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
