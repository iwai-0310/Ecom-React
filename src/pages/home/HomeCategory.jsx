import React from "react";
import { Link } from "react-router-dom";

const subTitle = "Choose any products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: "../../assets/images/category/10.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "DSLR Camera",
  },
  {
    imgUrl: "../../assets/images/category/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Shoes",
  },
  {
    imgUrl: "../../assets/images/category/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Photography",
  },
  {
    imgUrl: "../../assets/images/category/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Formal Dress",
  },
  {
    imgUrl: "../../assets/images/category/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Colorful Bags",
  },
  {
    imgUrl: "../../assets/images/category/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Home Decor",
  },
];

const HomeCategory = () => {
  return (
    // <div className="category-section style-4 padding-tb">
    //   <div className="container">
    //     {/* section-header */}
    //     <div className="section-header text-center">
    //       {/* <span className="subtitle text-orange-700">{subTitle}</span> */}
    //       <span className="text-orange-700">{subTitle}</span>
    //       <h2 className="title">{title}</h2>
    //     </div>

    //     {/* section-card */}
    //     <div className="section-wrapper">
    //       <div className="grid gap-4 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    //         {categoryList.map((val, i) => (
    //           <div key={i} className="col">
    //             <Link to="/shop" className="category-item">
    //               <div className="category-inner ">
    //                 {/* image thumbnail */}
    //                 <div className="category-thumb">
    //                   <img
    //                     className="border-solid border-2 border-gray-200  "
    //                     src={val.imgUrl}
    //                     alt={val.imgAlt}
    //                   />
    //                 </div>

    //                 {/* content */}
    //                 <div className="category-content">
    //                   <div className="cate-icon">
    //                     <i className={`${val.iconName}`}></i>
    //                   </div>
    //                   <Link>
    //                     <h6>{val.title}</h6>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </Link>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="text-center mt-8">
    //       <Link to="/shop">
    //         <a
    //           href="#_"
    //           class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
    //         >
    //           <span class="get-started-btn-span1"></span>
    //           <span class="get-Started-btn-span2"></span>
    //           <span class="get-Started-btn-span3">{btnText}</span>
    //           <span class="get-Started-btn-span4"></span>
    //         </a>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="py-8 spacer layer1">
      <div className="container">
        {/* header section starts */}
        <div className="flex items-center justify-center w-screen">
          <div className="text-center my-4">
            <span className="tracking-widest text-2xl text-orange-700">
              {subTitle.toUpperCase()}
            </span>
            <h2 className="title">{title}</h2>
          </div>
        </div>
        {/* header section ends */}
        {/* section card starts */}
        <div className="category-card flex justify-center items-center w-screen mb-4">
          <div className="grid gap-4 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {categoryList.map((val, i) => (
              <div
                key={i}
                className="group shadow-sm col-span-1 w-85 h-90 m-8 hover:transform
              hover:scale-105 transition duration-300 hover:shadow-xl"
              >
                <Link to="/shop" className="category-link">
                  <div className="category-inner  ">
                    {/* image thumbnail */}
                    <div
                      className="category-thumb group-hover:transform
                       group-hover:border-orange-700 transition duration-300 "
                    >
                      <img
                        className="border-solid border-2 border-gray-200 group-hover:border-b-orange-700  "
                        src={val.imgUrl}
                        alt={val.imgAlt}
                      />
                    </div>

                    {/* content */}
                    <div
                      className="category-content flex justify-between items-center
                    group-hover:tranform group-hover:bg-gray-900 transition duration-300"
                    >
                      <div
                        className="cate-icon w-12 h-12 bg-gray-900 flex justify-center items-center m-2 group-hover:transform
                       group-hover:bg-gray-100 transition duration-300 "
                      >
                        <i
                          className="icofont-brand-windows text-gray-100 group-hover:transform
                       group-hover:text-orange-700 transition duration-300"
                        ></i>
                      </div>
                      <Link>
                        <h5 className="transition-transform duration-500 transform group-hover:text-orange-700 group-hover:translate-x-[-30px]">
                          {val.title}
                        </h5>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* section card ends */}
        {/* button here for shop  */}
        <div className="flex items-center justify-center w-screen">
          <div className="mt-8">
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
    </div>
  );
};

export default HomeCategory;
