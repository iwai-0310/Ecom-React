import React, { useState,useEffect } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,Checkbox
} from "@material-tailwind/react";
//adding  import to ReactSlider
// import ReactSlider from 'react-slider';
//import NullableRangeSlider from "../components/NullableRangeSlider";
//adding imports for rc-slider
// import Slider from "rc-slider";

// api url to fetch data in desc order for price
const apiUrlForPrice="http://localhost:3000/api/v1/products/?sort=-price"
//api url to fetch data in desc order for stock
const apiUrlForStock="http://localhost:3000/api/v1/products/?sort=-stock"
//api url to fetch data in desc order for shipping
const apiUrlForShipping="http://localhost:3000/api/v1/products/?sort=-shipping"

import "rc-slider/assets/index.css";
import NullableRangeSlider from "../components/NullableRangeSlider";
import Search from "./Search";

const FilterBy = ({ product, GridList }) => {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  //use States to set min values
  const [priceMin,setPriceMin]=useState(0);
  const [stockMin,setStockMin]=useState(0);
  const [shipMin,setShipMin]=useState(0);

  //useStates to set max values
  const [priceMax,setPriceMax]=useState(100);
  const [stockMax,setStockMax]=useState(100);
  const [shipMax,setShipMax]=useState(100);

  //useState to set data loaded or not
  const [priceDataLoaded,setPriceDataLoaded]=useState(false);
  const [stockDataLoaded,setStockDataLoaded]=useState(false);
  const [shippingDataLoaded,setShippingDataLoaded]=useState(false);

  //useStates for controlling the checkboxes
  const [sellerAsc,setSellerAsc]=useState(true);
  const [sellerDsc,setSellerDsc]=useState(false);
  const [nameAsc,setNameAsc]=useState(false);
  const [nameDsc,setNameDsc]=useState(false);

  //method to handle seller asc checkbox
  const handleSellerAscChange=()=>{
    setSellerAsc(true);
    setSellerDsc(false);
    setNameAsc(false);
    setNameDsc(false);
  }
  //method to handle seller dsc checkbox
  const handleSellerDscChange=()=>{
    setSellerAsc(false);
    setSellerDsc(true);
    setNameAsc(false);
    setNameDsc(false);
  }
  //method to handle name asc checkbox
  const handleNameAscChange=()=>{
    setSellerAsc(false);
    setSellerDsc(false);
    setNameAsc(true);
    setNameDsc(false);
  }
  //method to handle name dsc checkbox
  const handleNameDscChange=()=>{
    setSellerAsc(false);
    setSellerDsc(false);
    setNameAsc(false);
    setNameDsc(true);
  }
  //acessing API endpoint to values for'
  let apiData;
  let size;
  let maxPricedProduct;
  let minPricedProduct;
  let sizeFromPriceAPI;
  useEffect(()=>{
    fetch(apiUrlForPrice)
    .then((response)=>response.json())
    .then((data)=>{
      apiData=data.products;
      size=data.ngHits;

      //Find the  product with max price
      maxPricedProduct=apiData.reduce((maxProduct,currentProduct)=>{
        return currentProduct.price>maxProduct.price ? currentProduct:maxProduct;
      },apiData[0]);
      //Find the product with min price
      minPricedProduct=apiData.reduce((minProduct,currentProduct)=>{
        return currentProduct.price<minProduct.price ? currentProduct:minProduct;
      },apiData[0]);

      sizeFromPriceAPI=size;
      console.log("the value of apiData is ",apiData);
      console.log("the value of size is ",size);
      console.log("the value of minpriceItem is",minPricedProduct);
      console.log("the value of maxpriceITem is",maxPricedProduct);
      setPriceMin(minPricedProduct.price);
      console.log('the value we get from minPriceItem price',minPricedProduct.price);
      setPriceMax(maxPricedProduct.price);
      console.log('the value we get from maxpricedItem price',maxPricedProduct.price);
      setPriceDataLoaded(true);
    })
    .catch((error)=>{
      console.log(error);
    });
  },[]);
      let maxStockedProduct;
      let minStockedProduct;
    //hook to fetch the stock max and min
    useEffect(()=>{
      fetch(apiUrlForStock)
      .then((response)=>response.json())
      .then((data)=>{
        apiData=data.products;

        //Find the products with max stock
        maxStockedProduct=apiData.reduce((maxProduct,currentProduct)=>{
          return currentProduct.stock>maxProduct.stock? currentProduct:maxProduct;
        },apiData[0]);
        //Find the product with min stock
        minStockedProduct=apiData.reduce((minProduct,currentProduct)=>{
          return currentProduct.stock<minProduct.stock?currentProduct:minProduct;
        },apiData[0]);

        //using useState to set the value of stock min and max
        console.log("max stocked product is",maxStockedProduct);
        setStockMax(maxStockedProduct.stock);
        console.log("min stocked product is ",minStockedProduct);
        setStockMin(minStockedProduct.stock);
        setStockDataLoaded(true);
      })
      .catch((error)=>{
        console.log(error);
      });
    },[]);
    let maxShippingProduct;
    let minShippingProduct;
    useEffect(()=>{
      fetch(apiUrlForShipping)
      .then((response)=>response.json())
      .then((data)=>{
        apiData=data.products;
        //Find the products with max shipping
        maxShippingProduct=apiData.reduce((maxProduct,currentProduct)=>{
          return currentProduct.shipping>maxProduct.shipping?currentProduct:maxProduct;
        },apiData[0]);
        //Find the product with min shipping
        minShippingProduct=apiData.reduce((minProduct,currentProduct)=>{
          return currentProduct.shipping<minProduct.shipping?currentProduct:minProduct;
        },apiData[0]);
        console.log("max shipping product is",maxShippingProduct);
        setShipMax(maxShippingProduct.shipping);
        console.log("min Shipping product is",minShippingProduct);
        setShipMin(minShippingProduct.shipping);
        setShippingDataLoaded(true);
      })
    })
    //fetch the minPrice and maxPrice
    useEffect(()=>{
      console.log("the value for minPrice is ",priceMin);
      console.log("the value for maxPrice is ",priceMax);
      console.log("the value for minStock is ",stockMin);
      console.log("the value for maxStock is ",stockMax);
      console.log("the value for minShip is",shipMin);
      console.log("the value for maxShip is ",shipMax);
    },[priceMin,priceMax,stockMin,stockMax,shipMin,shipMax]);

  //adding State for slider
  const [priceRange,setPriceRange]=useState([0,100]);
  const handlePriceRangeChange=(range)=>{
    setPriceRange(range);
  }
  //fetch these value from api data.
  const cur_value = 1,
    min_price = 10,
    max_price = 20,
    steps_formula = 10;
  return (
    <React.Fragment>
      <Button className="w-5/6" onClick={openDrawer}>
        Filter by ...
      </Button>
      <Drawer open={open} onClose={closeDrawer} className="p-4 overflow-auto" >
        <div className="px-3 flex items-center gap-2 my-2 justify-between">
          <Typography variant="h5" color="blue-gray">
            Filter by
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        {/* <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography> */}
        <Search product={product} GridList={GridList} />
        <hr />
        {/* sorting by seller */}
        <Typography color="black" className="my-2 font-bold">
          Sort seller by
        </Typography>
        <div className="flex px-3 justify-between gap-2 my-2 justify-between">
          <div className=" flex items-center text-black">
            <div className="font-medium">Asc</div>
            <Checkbox checked={sellerAsc} onChange={handleSellerAscChange} />
          </div>
          <div className=" flex items-center text-black">
            <Checkbox checked={sellerDsc} onChange={handleSellerDscChange} />
            <div className="font-medium">Desc</div>
          </div>
        </div>
        <hr />
        {/* sorting by name */}
        <Typography color="black" className="my-2 font-bold">
          Sort name by
        </Typography>
        <div className="flex px-3 justify-between gap-2 my-2 justify-between">
          <div className=" flex items-center text-black">
            <div className="font-medium">Asc</div>
            <Checkbox checked={nameAsc} onChange={handleNameAscChange}/>
          </div>
          <div className=" flex items-center text-black">
            <Checkbox checked={nameDsc} onChange={handleNameDscChange}/>
            <div className="font-medium">Desc</div>
          </div>
        </div>
        <hr />

        {/* sorting by price */}
        <div className="mb-4">
          {priceDataLoaded && (
             <NullableRangeSlider title="price" max={priceMax} min={priceMin} onRangeChange={handlePriceRangeChange}/>
          )}
          {/*Adds rc slider component here*/}
          {/* <NullableRangeSlider title="price" max={priceMax} min={priceMin} onRangeChange={handlePriceRangeChange}/> */}
          
        </div>
        {/* sorting by stock */}
        <div className="mb-4">
          {stockDataLoaded && (
            <NullableRangeSlider title="stock" max={stockMax} min={stockMin} onRangeChange={handlePriceRangeChange}/>
          )}
        {/* <NullableRangeSlider title="stock" max={stockMax} min={stockMin} onRangeChange={handlePriceRangeChange}/> */}
        </div>
        {/* sorting by shipping */}
        <div className="mb-4">
          {shippingDataLoaded && (
            <NullableRangeSlider title="shipping" max={shipMax} min={shipMin} onRangeChange={handlePriceRangeChange}/>
          )}
        {/* <NullableRangeSlider title="shipping" max={100} min={0} onRangeChange={handlePriceRangeChange}/> */}
        </div>
        <Button fullWidth> Apply </Button>
      </Drawer>
    </React.Fragment>
  );
};

export default FilterBy;
