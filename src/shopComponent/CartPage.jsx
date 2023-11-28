import React, { useEffect } from "react";
import { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    //fetch cart item from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  //calaculate total price
  const calcTotalPrice = (item) => {
    return item.price * item.quantity;
  };
  //handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    //update the local storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  //handle quantity decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
    setCartItems([...cartItems]);

    //update the local storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  return <div>CartPage</div>;
};

export default CartPage;
