import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import CategoryShowcase from "./CategoryShowcase";
import Register from "./Register";
import Locationspread from "./Locationspread";

export const home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowcase />
      <Register />
      <Locationspread />
    </div>
  );
};

export default home;
