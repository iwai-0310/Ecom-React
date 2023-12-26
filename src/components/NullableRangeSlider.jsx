import React, { useState } from "react";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css'
import { Typography } from "@material-tailwind/react";

const NullableRangeSlider = ({title,min,max,onRangeChange }) => {
  //create state for each prop.
  const [priceRange,setPriceRange]=useState([min,max]);
  const handleSliderChange=(value)=>{
    setPriceRange(value);
    onRangeChange(value)
  }
 
  return (
    <div>
      <Typography color="black" className="mt-2 mb-2 font-bold">
            Select {title} range
          </Typography>
          <div className="mt-1 mb-4">
        {title === "price"
          ? `${title} range: $${priceRange[0]} - $${priceRange[1]}`
          : `${title} range: ${priceRange[0]} - ${priceRange[1]}`}
      </div>
      <Slider
        range
        min={min}
        max={max}
        defaultValue={priceRange}
        onChange={handleSliderChange}
      />
      <div className="mt-3 mb-2"><hr /></div>
      
    </div>
  );
  
};

export default NullableRangeSlider;
