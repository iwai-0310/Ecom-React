import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const ProductCard = ({ GridList, product }) => {
  return (
    <div
      className={`shop-product-wrap flex justify-center ${
        GridList ? "grid" : "list"
      }`}
    >
      {product.map((product, i) => (
        <div className="lg:w-4/12 md:w-6/12 w-full">
          <div className="product-item">
            {/* product images here */}
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={product.img} alt="" />
              </div>
              {/* product action link */}
              <div className="product-action-link">
                <Link to={`/shop/${product.id}`}>
                  <i className="icofont-eye"></i>
                </Link>
                <a href="#">
                  <i className="icofont-heart"></i>
                </a>
                <Link to="/cart-page">
                  <i className="icofont-cart-alt"></i>
                </Link>
              </div>
            </div>

            {/* product details */}
            <div className="product-content">
              <h5>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </h5>
              <p className="product-rating">
                <Rating />
              </p>
              <h6>$ {product.price}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
