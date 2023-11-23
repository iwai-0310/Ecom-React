import React from "react";
import PageHeader from "../components/PageHeader";

const shop = () => {
  return (
    <div className="">
      <PageHeader title="Our Shop page" curPage="Shop" />
      {/* main shop content */}
      <div className="shop-page py-8">
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-8/12 w-full">left side</div>
            <div className="lg:w-4/12 w-full">right side</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shop;
