import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ product, GridList }) => {
  const [searchTerm, setSearchTerm] = useState("");
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

      {/* show the search results now */}
      <div>
        {searchTerm &&
          filteredProducts.map((item) => (
            <Link key={item.id} to={`/shop/${item.id}`}>
              <div className="flex gap-3 p-2">
                <div className="pro-thumb h-24">
                  <img
                    src={item.img}
                    alt=""
                    width={70}
                    className="flex-{grow|shrink}-0"
                  />
                </div>
                <div className="product-content">
                  <p>
                    <Link to={`/shop/${item.id}`}>{item.name}</Link>
                  </p>
                  <h6>$ {item.price}</h6>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Search;
