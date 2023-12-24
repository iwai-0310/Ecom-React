import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import Data from "../products.json";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";
import NewPageHeader from "../components/NewPageHeader";
import checkboxColors from "@material-tailwind/react/theme/components/checkbox/checkboxColors";
import FilterBy from "./FilterBy";

const showResults = "Showing 01 - 12 of 139 Results";
const apiUrl = "http://localhost:3000/api/v1/products/";
const shop = () => {
  const [GridList, setGridList] = useState(true);

  const [product, setproducts] = useState([]);
  // console.log("the default data in product is", typeof Data);
  // console.log("and the value of data is", Data);
  let apiData;
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        apiData = data.products;
        console.log("the default data in apiData is", typeof apiData);
        console.log("and the value of apiData is", apiData);
        setproducts(apiData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  // console.log("the current products are");
  // console.log(product);
  //function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //filter product based on some category
  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });

    setSelectedCategory(curcat);
    setproducts(newItem);
  };
  return (
    <div className="">
      {/* <PageHeader title="Our Shop page" curPage="Shop" /> */}
      <NewPageHeader title="Our Shop page" curPage="Shop" />
      {/* main shop content */}
      <div className="shop-page py-8 w-full flex justify-center">
        <div className="container">
          <div className="flex justify-center">
            {/* left-section for items view */}
            <div className="lg:w-9/12 w-full">
              <article className="mr-8 my-8">
                <div className="shop-title flex flex-wrap justify-between  ">
                  <p>{showResults}</p>
                  <div
                    className={`flex items-center product-view-mode ${
                      GridList ? "gridActive" : "ListActive"
                    }`}
                  >
                    {/* remove the options to setGridList */}

                    {/* <button
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
                    </button> */}
                  </div>
                </div>
                {/* product cards */}
                <div>
                  <ProductCard GridList={GridList} product={currentProducts} />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={product.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            {/* right-section for sort and other functionalities */}
            <div className="lg:w-4/12 w-full">
              <aside>
                {/* add filter by section here */}
                <div className="flex justify-center items-center">
                  <FilterBy />
                </div>
                <Search product={product} GridList={GridList} />
                <ShopCategory
                  filterItem={filterItem}
                  setItem={setproducts}
                  menuItems={menuItems}
                  setProducts={setproducts}
                  selectedCategory={selectedCategory}
                />
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shop;
