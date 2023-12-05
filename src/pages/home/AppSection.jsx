import React from "react";
import { Link } from "react-router-dom";
const btnText = "Sign up for free";
const title = "Shop Anything ,Anytime, Anywhere";
const desc = "Shop Or Learn. Download & install the app to grow";

const AppSection = () => {
  return (
    <div className="app-section py-8 flex justify-center">
      <div className="container">
        <div className="section-header text-center">
          <Link
            to="/sign-up"
            className="border-2 border-orange-700 py-4 px-8 rounded-xl my-8
            hover:bg-gray-900 hover:text-orange-700 transition duration-300"
          >
            {btnText}
          </Link>
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="section-wrapper">
          <ul className="lab-ul">
            {/* list item for appstore */}
            <li>
              <a href="#">
                <img src="/src/assets/images/app/01.jpg" alt="" />
              </a>
            </li>
            {/* list item for playstore */}
            <li>
              <a href="#">
                <img src="/src/assets/images/app/02.jpg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
