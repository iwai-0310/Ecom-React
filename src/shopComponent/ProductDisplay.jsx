import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity, img } = item;

  const [preQuantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
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
  // function to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      quantity: preQuantity,
      price: price,
      size: size,
      color: color,
      coupon: coupon,
    };

    console.log("//////////////////////////");
    console.log(item);
    console.log("//////////////////////////");

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProjectIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProjectIndex !== -1) {
      existingCart[existingProjectIndex].quantity += preQuantity;
    } else {
      existingCart.push(product);
    }

    // update local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    //reset the form field
    setQuantity(1);
    setSize("select Size");
    setColor("select Color");
    setCoupon("");
  };
  return (
    <div className="ml-5">
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
        <form onSubmit={handleSubmit}>
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
          <div className="flex justify-evenly">
            {/* cart quantity */}
            <div className="cart-plus-minus w-5/12">
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
            {/* coupon field */}
            <div className="discount-code mb-2 w-6/12">
              <input
                type="text"
                placeholder="Enter code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
            </div>
          </div>
          {/* buttons section */}
          <div className="flex justify-between">
            <button type="submit" className="lab-btn ">
              Add to Cart
            </button>
            <Link
              to="/cart-page"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Check out
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
