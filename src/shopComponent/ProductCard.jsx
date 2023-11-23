import React from "react";

const ProductCard = ({ GridList, product }) => {
  return (
    <div
      className={`shop-product-wrap flex justify-center ${
        GridList ? "grid" : "list"
      }`}
    >
      {product.map((product, i) => (
        <div className="lg:w-4/12 md:w-6/12 w-full"></div>
      ))}
    </div>
  );
};

export default ProductCard;
