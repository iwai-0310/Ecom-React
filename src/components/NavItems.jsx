import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/nav-logo.png";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

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
      className={`bg-red-200 header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      } `}
    >
      {/* nav top starts here */}

      {/* Make the div hidden and for bigger screens make the element block so you can 
      see the element again. */}
      <div className={`nav-top hidden md:block ${socialToggle ? "open" : ""}`}>
        <div className="nav-top-header">
          <div className="nav-top-header-area">
            <Link to="/signup" className="nav-header-btn">
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
      <div className="nav-bottom">
        <div className="nav-bottom-header">
          <div className="header-wrapper">
            {/* logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="logo" className="w-20 h-20" />
                </Link>
              </div>
            </div>
            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className="">
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
