import React, { useState } from "react";
import Slider from "rc-slider";
import { button } from "@material-tailwind/react";

const NullableRangeSlider = ({ min, max, step, value }) => {
  //create state for each prop.
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const [stepValue, setStepValue] = useState(step);
  const [sliderValue, setSliderValue] = useState(value);

  return <div></div>;
};

export default NullableRangeSlider;
