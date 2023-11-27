import React, { useState } from "react";

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity } = item;

  const [preQuantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Sizes");
  const [color, setColor] = useState("Select Color");

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        {/* Add product desc below */}
      </div>
      {/* cart component */}
      <div>
        <form>
          <div className="select-product Size">
            <select value={size} onChange={handleSizeChange}>
              <option value="NaN">select size</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
