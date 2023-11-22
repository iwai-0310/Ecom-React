import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import CategoryShowcase from "./CategoryShowcase";
import Register from "./Register";
import Locationspread from "./Locationspread";
import AboutUs from "./AboutUs";
import AppSection from "./AppSection";

export const home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowcase />
      <Register />
      <Locationspread />
      <AboutUs />
      <AppSection />
    </div>
  );
};

export default home;
