import React, { useState } from "react";
import Slider from "rc-slider";
import Button from "@material-tailwind/react";

const NullableRangeSlider = () => {
  const [value, setValue] = useState(null);
  return <Slider range value={value} onChange={setValue} />;

  <Button onClick={() => setValue(null)}>Reset</Button>;
};

export default NullableRangeSlider;
