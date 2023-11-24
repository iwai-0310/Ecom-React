import React from "react";
import Data from "../products.json";

const ShopCategory = ({
  filterItem,
  setItem,
  menuItems,
  setProducts,
  selectedCategory,
}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="m-2">All Categories</h5>
      </div>
      <div>
        <button
          onClick={() => setProducts(Data)}
          className={`m-2 ${selectedCategory === "All" ? "bg-ornage-500" : ""}`}
        >
          All
        </button>
        {menuItems.map((Val, id) => {
          return (
            <button
              key={id}
              className={`m-2 ${
                selectedCategory === Val ? "bg-orange-500 text-gray-100" : ""
              }`}
              onClick={() => filterItem(Val)}
            >
              {Val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
