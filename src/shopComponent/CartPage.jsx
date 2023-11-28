import React, { useEffect } from "react";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUtl from "../assets/images/shop/del.png";

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
                {/* table body */}
                <tbody>
                  {cartItems.map((val, i) => (
                    <tr key={i}>
                      {/* td for product image and data */}
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={val.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{val.name}</Link>
                        </div>
                      </td>
                      {/* td to show item price */}
                      <td className="cat-price">$ {val.price}</td>
                      {/* td for quantity with its inc and desc function */}
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(val)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={val.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(val)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      {/* td for total price */}
                      <td className="cat-toprice">$ {calcTotalPrice(val)}</td>
                      {/* td for Edit or delete */}
                      <td
                        className="cat-edit"
                        onClick={() => handleRemoveItem(val)}
                      >
                        <a href="#">
                          <img src={delImgUtl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* cart top ends */}
            {/* cart bottom */}
            <div className="cart-bottom">
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    type="text"
                    name="coupon"
                    placeholder="coupon code .."
                    id="coupon"
                    className="cart-page-input-text w-3/4"
                  />
                  <input type="submit" value="Apply" className="w-2/4" />
                </form>
                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div> render Checkout here </div>
                </form>
              </div>
              {/* checkout box ends */}

              {/* shoping box */}
              <div className="shiping-box">
                <div className="flex gap-3">
                  <div className="md:w-6/12 w-full">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="us">
                            United State of America (US)
                          </option>
                          <option value="bz">Brazil (BZ)</option>
                          <option value="mx">Mexico (MX)</option>
                          <option value="ch">China (CH)</option>
                          <option value="ru">Russia (RU)</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <div className="outline-select w-6/12">
                          <input
                            type="text"
                            name="city"
                            placeholder="City"
                            id="city"
                          />
                        </div>
                        <div className="outline-select w-4/12">
                          <input
                            type="text"
                            name="postal-code"
                            placeholder="Postal-code"
                            id="postal-code"
                          />
                        </div>
                      </div>
                      <button type="submit">Update Address</button>
                    </div>
                  </div>
                  <div className="md:w-6/12 w-full">
                    <div className="cart-overview">
                      <h3>Cart Total</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">$ {cartSubTotal}</p>
                        </li>
                        <li>
                          <span className="pull-left">
                            Shiping and Handling
                          </span>
                          <p className="pull-right">Free Shipping</p>
                        </li>
                        <li>
                          <span className="pull-left">Total</span>
                          <p className="pull-right">
                            $ {orderTotal.toFixed(2)}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* shop box ends */}
            </div>
            {/* cart bottom ends */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
