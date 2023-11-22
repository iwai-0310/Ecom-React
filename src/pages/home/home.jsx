import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import CategoryShowcase from "./CategoryShowcase";

export const home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowcase />
    </div>
  );
};

export default home;
