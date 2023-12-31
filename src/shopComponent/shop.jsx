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
const apiUrl = "https://ecome-be-noex.onrender.com/api/v1/products/";
const shop = () => {
  const [GridList, setGridList] = useState(true);

  //using useState to store the api for changes with filterby object
  const [currApiUrl, setCurrApiUrl] = useState(
    "https://ecome-be-noex.onrender.com/api/v1/products/"
  );

  const [product, setproducts] = useState([]);
  // console.log("the default data in product is", typeof Data);
  // console.log("and the value of data is", Data);
  let apiData;
  useEffect(() => {
    fetch(currApiUrl)
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
  }, [currApiUrl]);

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

  const [filters, setFilters] = useState({
    sellerAsc: true,
    sellerDsc: false,
    nameAsc: false,
    nameDsc: false,
    priceRangeMin: 0,
    priceRangeMax: 100,
    stockRangeMin: 0,
    stockRangeMax: 100,
    shippingRangeMin: 0,
    shippingRangeMax: 100,
  });

  //method to handle filters
  const handleApplyFilters = () => {
    console.log("Filters are", filters);
    //Constructing the URL with the parameters
    const baseUrl = "https://ecome-be-noex.onrender.com/api/v1/products/";
    const queryString = objectToQueryString(filters);
    const url = `${baseUrl}?${queryString}`;
    setCurrApiUrl(url);
    console.log(
      "and the value of the url after changing the filter we get",
      url
    );
  };

  //Function to convert the filters object into a query string
  // function objectToQueryString(obj){
  //   const keyValuePairs=[];
  //   for(const key in obj){
  //     if(obj.hasOwnProperty(key) && obj[key]!==false){
  //       if(key==='priceRangeMax'){
  //         keyValuePairs.push(`price<${obj[key]}`)
  //       }
  //       if(key==='priceRangeMin'){
  //         keyValuePairs.push(`numericFilters=price>${obj[key]}`)
  //       }
  //       if(key==='stockRangeMax'){
  //         keyValuePairs.push(`stock<${obj[key]}`)
  //       }
  //       if(key==='stockRangeMin'){
  //         keyValuePairs.push(`stock>${obj[key]}`)
  //       }
  //       if(key==='shippingRangeMax'){
  //         keyValuePairs.push(`shipping<${obj[key]}`)
  //       }
  //       if(key==='shippingRangeMin'){
  //         keyValuePairs.push(`shipping>${obj[key]}`)
  //       }
  //      // keyValuePairs.push(encodeURIComponent(key)+'='+encodeURIComponent(obj[key]));
  //     }
  //   }
  //   return keyValuePairs.join(',');
  // }

  //new querytoString generator function
  // function objectToQueryString(obj) {
  //   const keyValuePairs = [];
  //   let numericFilters = '';

  //   for (const key in obj) {
  //     if (obj.hasOwnProperty(key) && obj[key] !== false) {
  //       let query;

  //       if (key === 'priceRangeMax') {
  //         query = `,price<${obj[key]}`;
  //       } else if (key === 'priceRangeMin') {
  //         numericFilters = `numericFilters=price>${obj[key]}`;
  //       } else if (key === 'stockRangeMax') {
  //         query = `,stock<${obj[key]}`;
  //       } else if (key === 'stockRangeMin') {
  //         query = `,stock>${obj[key]}`;
  //       } else if (key === 'shippingRangeMax') {
  //         query = `,shipping<${obj[key]}`;
  //       } else if (key === 'shippingRangeMin') {
  //         query = `,shipping>${obj[key]}`;
  //       } else {
  //         // For additional queries
  //         //query = `${key}=${obj[key]}`;
  //       }

  //       keyValuePairs.push(query);
  //     }
  //   }

  //   // Place numericFilters at the beginning, if present
  //   if (numericFilters) {
  //     keyValuePairs.unshift(numericFilters);
  //   }

  //   return keyValuePairs.join();
  // }

  //checking out the new query generator
  function objectToQueryString(obj) {
    const keyValuePairs = [];
    let numericFilters = "";
    let checkedValues = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== false) {
        let query;

        if (key === "priceRangeMax") {
          query = `price<${obj[key]}`;
        } else if (key === "priceRangeMin") {
          numericFilters = `numericFilters=price>${obj[key]}`;
        } else if (key === "stockRangeMax") {
          query = `stock<${obj[key]}`;
        } else if (key === "stockRangeMin") {
          query = `stock>${obj[key]}`;
        } else if (key === "shippingRangeMax") {
          query = `shipping<${obj[key]}`;
        } else if (key === "shippingRangeMin") {
          query = `shipping>${obj[key]}`;
        }
        keyValuePairs.push(query);
      }
    }

    // Add sorting based on true values
    if (obj.nameAsc) {
      checkedValues.push("sort=name");
    } else if (obj.nameDsc) {
      checkedValues.push("sort=-name");
    } else if (obj.sellerAsc) {
      checkedValues.push("sort=seller");
    } else if (obj.sellerDsc) {
      checkedValues.push("sort=-seller");
    }

    // Place numericFilters at the beginning, if present
    if (numericFilters) {
      keyValuePairs.unshift(numericFilters);
    }

    // Combine keyValuePairs with '&', except for the last value
    const queryString =
      keyValuePairs.join(",") +
      (checkedValues.length > 0 ? "&" + checkedValues.join("&") : "");

    return queryString ? "" + queryString : "";
  }

  // useEffect(()=>{
  //   setCurrApiUrl=url;
  // })
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
                <div className="flex justify-center items-center my-4 ">
                  <FilterBy
                    product={product}
                    GridList={GridList}
                    filters={filters}
                    setFilters={setFilters}
                    onApplyFilters={handleApplyFilters}
                  />
                </div>
                {/* <Search product={product} GridList={GridList} /> */}
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
