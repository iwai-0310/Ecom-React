import React from "react";
import { Link } from "react-router-dom";
const btnText = "Sign up for free";
const title = "Shop Anything ,Anytime, Anywhere";
const desc = "Shop Or Learn. Download & install the app to grow";

const AppSection = () => {
  return (
    <div className="app-section py-8">
      <div className="container">
        <div className="section-header text-center">
          <Link to="/sign-up" className="lab-btn mb-4">
            {btnText}
          </Link>
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
