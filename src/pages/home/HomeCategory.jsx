import React from "react";
import { Link } from "react-router-dom";

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: "src/assets/images/category/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "DSLR Camera",
  },
  {
    imgUrl: "src/assets/images/category/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Shoes",
  },
  {
    imgUrl: "src/assets/images/category/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Photography",
  },
  {
    imgUrl: "src/assets/images/category/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Formal Dress",
  },
  {
    imgUrl: "src/assets/images/category/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Colorful Bags",
  },
  {
    imgUrl: "src/assets/images/category/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Home Decor",
  },
];

const HomeCategory = () => {
  return (
    <div className="category-section style-4 padding-tb">
      <div className="container">
        {/* section-header */}
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>

        {/* section-card */}
        <div className="section-wrapper">
          <div className="grid gap-4 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {categoryList.map((val, i) => (
              <div key={i} className="col">
                <Link to="/shop" className="category-item">
                  <div className="category-inner ">
                    {/* image thumbnail */}
                    <div className="category-thumb">
                      <img
                        className="border-solid border-2 border-gray-200  "
                        src={val.imgUrl}
                        alt={val.imgAlt}
                      />
                    </div>

                    {/* content */}
                    <div className="category-content">
                      <div className="cate-icon">
                        <i className={`${val.iconName}`}></i>
                      </div>
                      <Link>
                        <h6>{val.title}</h6>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/shop">
            <a
              href="#_"
              class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
            >
              <span class="get-started-btn-span1"></span>
              <span class="get-Started-btn-span2"></span>
              <span class="get-Started-btn-span3">{btnText}</span>
              <span class="get-Started-btn-span4"></span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
