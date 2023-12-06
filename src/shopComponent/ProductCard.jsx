import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const ProductCard = ({ GridList, product }) => {
  return (
    <div
      className={`shop-product-wrap flex justify-center ${
        GridList
          ? "grid gap-4 grid-cols-3 grid-rows-auto"
          : "grid gap-4 grid-cols-1 grid-rows-auto"
      }`}
    >
      {product.map((product, i) => (
        <div className="lg:w-11/12 md:w-10/12 w-full">
          <div className="product-item group hover:bg-gray-900">
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

          {/* list view */}

          <div className="product-list-item">
            {/* product images here */}
            <div className="product-thumb">
              <div className="pro-thumb w-50 h-50">
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
