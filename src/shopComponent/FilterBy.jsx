import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
//adding  import to ReactSlider
// import ReactSlider from 'react-slider';
//import NullableRangeSlider from "../components/NullableRangeSlider";
//adding imports for rc-slider
// import Slider from "rc-slider";


import "rc-slider/assets/index.css";
import NullableRangeSlider from "../components/NullableRangeSlider";
import Search from "./Search";

const FilterBy = ({ product, GridList }) => {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const checkButtonWorks = () => {
    console.log("the desc button should work like thsi");
  };
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
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
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
        <div className="flex gap-2 my-2 justify-between">
          <Button
            size="sm"
            variant="outlined"
            className="hover:text-orange-700 "
          >
            Asc
          </Button>
          <Button size="sm" className="hover:text-orange-700">
            desc
          </Button>
        </div>
        <hr />
        {/* sorting by name */}
        <Typography color="black" className="my-2 font-bold">
          Sort name by
        </Typography>
        <div className="flex gap-2 my-2 justify-between">
          <Button
            size="sm"
            variant="outlined"
            className="hover:text-orange-700 "
            onClick={checkButtonWorks}
          >
            Asc
          </Button>
          <Button
            size="sm"
            className="hover:text-orange-700"
            onClick={checkButtonWorks}
          >
            desc
          </Button>
        </div>
        <hr />

        {/* sorting by price */}
        <div className="mb-4">
          {/*Adds rc slider component here*/}
          <NullableRangeSlider title="price" max={100} min={0} onRangeChange={handlePriceRangeChange}/>
          
        </div>
        {/* sorting by stock */}
        <div className="mb-4">
        <NullableRangeSlider title="stock" max={100} min={0} onRangeChange={handlePriceRangeChange}/>
        </div>
        {/* sorting by shipping */}
        <div className="mb-4">
        <NullableRangeSlider title="shipping" max={100} min={0} onRangeChange={handlePriceRangeChange}/>
        </div>
        <Button fullWidth> block level button </Button>
      </Drawer>
    </React.Fragment>
  );
};

export default FilterBy;
