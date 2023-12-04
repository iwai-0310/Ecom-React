import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/nav-logo.png";
import { AuthContext } from "../contexts/AuthProvider";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  //authinfo
  const { user } = useContext(AuthContext);
  console.log(user);
  //event Listeners
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header
      // For this div if headerFixed is true add header-fixed fadeInUp from animate css to the header className
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      } `}
    >
      {/* nav top starts here */}

      {/* Make the div hidden and for bigger screens make the element block so you can 
      see the element again. */}
      <div className={`nav-top md:hidden  ${socialToggle ? "open " : ""}`}>
        <div className="nav-top-header">
          <div className="nav-top-header-area">
            <Link to="/sign-up" className="nav-header-btn">
              <a
                href="#_"
                class="relative inline-block px-4 py-2 font-medium group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span class="relative text-black group-hover:text-white">
                  Create Account
                </span>
              </a>
            </Link>
            <Link to="/login">
              a
              <a
                href="#_"
                class="relative inline-block px-4 py-2 m-5 font-medium group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span class="relative text-black group-hover:text-white">
                  Log in
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* nav bottom starts here */}
      <div className="">
        <div className="nav-bottom-header">
          <div className="header-wrapper flex-auto ">
            {/* logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/about"}>
                  {/* <img src={logo} alt="logo" className="w-12 h-12 ml-4 " /> */}
                  <div className="circle-for-logo w-12 h-12 bg-black rounded-full ml-4 items-center justify-center flex transition duration-300 ease-in-out hover:bg-white group">
                    <i className="icofont-bag text-3xl transition duration-300 ease-in-out text-gray-100 group-hover:text-black"></i>
                  </div>
                </Link>
              </div>
            </div>
            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  {/* Home in menu */}
                  <li className="custom-list-item">
                    <Link to="/">
                      <a href="#_" class="relative inline-block text-lg group">
                        <span class="list-item-custom-css-span1">
                          <span class="list-item-custom-css-span1-1"></span>
                          <span class="list-item-custom-css-span1-2"></span>
                          <span class="relative">Home</span>
                        </span>
                        <span
                          class="list-item-custom-css-span2"
                          data-rounded="rounded-lg"
                        ></span>
                      </a>
                    </Link>
                  </li>
                  {/* Shop in menu */}
                  <li className="custom-list-item">
                    <Link to="/shop">
                      <a href="#_" class="relative inline-block text-lg group">
                        <span class="list-item-custom-css-span1">
                          <span class="list-item-custom-css-span1-1"></span>
                          <span class="list-item-custom-css-span1-2"></span>
                          <span class="relative">Shop</span>
                        </span>
                        <span
                          class="list-item-custom-css-span2"
                          data-rounded="rounded-lg"
                        ></span>
                      </a>
                    </Link>
                  </li>
                  {/* Blog in menu */}
                  <li className="custom-list-item">
                    <Link to="/blog">
                      <a href="#_" class="relative inline-block text-lg group">
                        <span class="list-item-custom-css-span1">
                          <span class="list-item-custom-css-span1-1"></span>
                          <span class="list-item-custom-css-span1-2"></span>
                          <span class="relative">Blog</span>
                        </span>
                        <span
                          class="list-item-custom-css-span2"
                          data-rounded="rounded-lg"
                        ></span>
                      </a>
                    </Link>
                  </li>
                  {/* About in menu */}
                  <li className="custom-list-item">
                    <Link to="/about">
                      <a href="#_" class="relative inline-block text-lg group">
                        <span class="list-item-custom-css-span1">
                          <span class="list-item-custom-css-span1-1"></span>
                          <span class="list-item-custom-css-span1-2"></span>
                          <span class="relative">About</span>
                        </span>
                        <span
                          class="list-item-custom-css-span2"
                          data-rounded="rounded-lg"
                        ></span>
                      </a>
                    </Link>
                  </li>
                  {/* Contact in menu */}
                  <li className="custom-list-item">
                    <Link to="/contact">
                      <a href="#_" class="relative inline-block text-lg group">
                        <span class="list-item-custom-css-span1">
                          <span class="list-item-custom-css-span1-1"></span>
                          <span class="list-item-custom-css-span1-2"></span>
                          <span class="relative">Contact</span>
                        </span>
                        <span
                          class="list-item-custom-css-span2"
                          data-rounded="rounded-lg"
                        ></span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Sign-in and create account */}
              <Link to="/sign-up" className="nav-header-btn hidden md:block">
                <a
                  href="#_"
                  class="relative inline-block px-4 py-2 font-medium group"
                >
                  <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span class="relative text-black group-hover:text-orange-700">
                    Create Account
                  </span>
                </a>
              </Link>
              <Link to="/login" className=" hidden md:block">
                <a
                  href="#_"
                  class="relative inline-block px-4 py-2 m-5 font-medium group"
                >
                  <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span class="relative text-black group-hover:text-orange-700">
                    Log in
                  </span>
                </a>
              </Link>

              {/* menu toggler */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`mx-12 header-bar block lg:hidden ${
                  menuToggle ? "active" : ""
                }`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              {/* social toggler */}
              <div
                className="mx-5 ellipsis-bar block md:hidden"
                onClick={() => {
                  console.log("social toggler clicked");
                  console.log(socialToggle);
                  setSocialToggle(!socialToggle);
                }}
              >
                <button className="w-8 h-8 bg-red-800 flex items-center ">
                  <i className="icofont-info-square w-100 h-100"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
