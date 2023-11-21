import React from "react";

// title for banner
const title = (
  <h2>
    Search Your One From <span className="text-yellow-900">Thousands</span> of
    Products
  </h2>
);
// description for banner
const desc = "We have the largest collection for you!";

//Icon list for banner
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">{title}</div>
      </div>
    </div>
  );
};

export default Banner;
