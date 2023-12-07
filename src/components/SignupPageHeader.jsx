import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import img from "../assets/images/banner/header-bg-cartpage.jpg";

const SignupPageHeader = ({ title, curPage }) => {
  return (
    <div className="h-96 w-screen new-header ">
      <div
        className="h-96  bg-left bg-no-repeat  bg-cover flex justify-center items-center "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="new-header-content text-center  h-32 w-96">
          <h3 className="italic tracking-widest">{title}</h3>
          <div className="flex justify-center items-center">
            <Breadcrumbs className="my-4">
              <Link to="/" className="opacity-50">
                Home
              </Link>
              <a href="#">{curPage}</a>
            </Breadcrumbs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPageHeader;
