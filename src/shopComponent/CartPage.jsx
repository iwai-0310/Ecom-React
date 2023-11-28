import React, { useEffect } from "react";
import { useState } from "react";
import PageHeader from "../components/PageHeader";

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

  //function tohandle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    //update the local storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  //function to handle quantity decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;

      setCartItems([...cartItems]);

      //update the local storage with new cart items
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };
  // function to handle remove item
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    //update the cart
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };
  // function to update local storage
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  //cal cart subtotal
  const cartSubTotal = cartItems.reduce((total, item) => {
    return total + calcTotalPrice(item);
  }, 0);

  //cal order total
  const orderTotal = cartSubTotal;
  return (
    <div>
      <PageHeader title={"Shop cart"} curPage={"Cart Page"} />
      <div className="shop-cart py-8">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead className="justify-between">
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-total">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
              </table>
            </div>
            {/* cart top ends */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
