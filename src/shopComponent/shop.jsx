import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Data from "../products.json";
import ProductCard from "./ProductCard";

const showResults = "Showing 01 - 12 of 139 Results";

const shop = () => {
  const [GridList, setGridList] = useState(true);
  const [product, setproducts] = useState(Data);
  return (
    <div className="">
      <PageHeader title="Our Shop page" curPage="Shop" />
      {/* main shop content */}
      <div className="shop-page py-8">
        <div className="container">
          <div className="flex justify-center">
            {/* left-section for items view */}
            <div className="lg:w-8/12 w-full">
              <article>
                <div className="shop-title flex flex-wrap justify-between">
                  <p>{showResults}</p>
                  <div
                    className={`flex items-center product-view-mode ${
                      GridList ? "gridActive" : "ListActive"
                    }`}
                  >
                    <button
                      className="grid"
                      onClick={() => setGridList(!GridList)}
                    >
                      <i className="icofont-ghost"></i>
                    </button>
                    <button
                      className="list"
                      onClick={() => setGridList(!GridList)}
                    >
                      <i className="icofont-listine-dots"></i>
                    </button>
                  </div>
                </div>
                {/* product cards */}
                <div>
                  <ProductCard GridList={GridList} product={product} />
                </div>
              </article>
            </div>
            {/* right-section for sort and other functionalities */}
            <div className="lg:w-4/12 w-full">right side</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shop;
