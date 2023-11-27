import React, { useState } from "react";

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity } = item;

  const [preQuantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Sizes");
  const [color, setColor] = useState("Select Color");

  // function for size change
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };
  // function for  color change
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  // functin for decreasing the quantity
  const handleDecrease = () => {
    if (preQuantity > 1) {
      setQuantity(preQuantity - 1);
    }
  };
  // functin for increase the quantity
  const handleIncrease = () => {
    setQuantity(preQuantity + 1);
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
          <div className="flex justify-between my-4">
            {/* dropdown for size */}
            <div className="select-product size w-5/12">
              <select value={size} onChange={handleSizeChange}>
                <option value="NaN">select size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <i className="icofont-rounder-down"></i>
            </div>
            {/* dropdown for color */}
            <div className="select-product color w-6/12">
              <select value={color} onChange={handleColorChange}>
                <option value="Black">Black</option>
                <option value="Indigo">Indigo</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="White">White</option>
                <option value="Violet">Violet</option>
              </select>
              <i className="icofont-rounder-down"></i>
            </div>
          </div>
          {/* cart quantity */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>
            <input
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={preQuantity}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
