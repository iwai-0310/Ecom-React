import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating";

const title = "Our Products";

const ProductData = [
  {
    imgUrl: "src/assets/images/categoryTab/01.jpg",
    cate: "Shoes",
    title: "Nike Premier X",
    author: "assets/images/course/author/01.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 1,
  },
  {
    imgUrl: "src/assets/images/categoryTab/02.jpg",
    cate: "Bags",
    title: "Asthetic Bags",
    author: "assets/images/course/author/02.jpg",
    brand: "D&J Bags",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: "src/assets/images/categoryTab/03.jpg",
    cate: "Phones",
    title: "iPhone 12",
    author: "src/assets/images/categoryTab/brand/apple.png",
    brand: "Apple",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: "src/assets/images/categoryTab/04.jpg",
    cate: "Bags",
    title: "Hiking Bag 15 Nh100",
    author: "assets/images/course/author/04.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 4,
  },
  {
    imgUrl: "src/assets/images/categoryTab/05.jpg",
    cate: "Shoes",
    title: "Outdoor Sports Shoes",
    author: "assets/images/course/author/05.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 5,
  },
  {
    imgUrl: "src/assets/images/categoryTab/06.jpg",
    cate: "Beauty",
    title: "COSRX Snail Mucin",
    author: "assets/images/course/author/06.jpg",
    brand: "Zaara",
    price: "$199.00",
    id: 6,
  },
  {
    imgUrl: "src/assets/images/categoryTab/07.jpg",
    cate: "Bags",
    title: "Look Less Chanel Bag ",
    author: "assets/images/course/author/01.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 7,
  },
  {
    imgUrl: "src/assets/images/categoryTab/08.jpg",
    cate: "Shoes",
    title: "Casual Sneakers",
    author: "assets/images/course/author/02.jpg",
    brand: "Bata",
    price: "$199.00",
    id: 8,
  },
];
const CategoryShowcase = () => {
  const [items, setItems] = useState(ProductData);

  //catergory based filtering
  const filterItem = (categItem) => {
    const updateItems = ProductData.filter((curEleme) => {
      return curEleme.cate === categItem;
    });
    setItems(updateItems);
  };
  return (
    // <div className="course-section style-3 py-8">
    //   {/* add shapes hexagon below */}
    //   <div className="course-shape one">
    //     <img src="/src/assets/images/shape-img/icon/01.png" alt="" />
    //   </div>
    //   <div className="course-shape two">
    //     <img src="/src/assets/images/shape-img/icon/02.png" alt="" />
    //   </div>

    //   {/* main-section */}
    //   <div className="container">
    //     <div className="section-header">
    //       <h2 className="title">{title}</h2>
    //       <div className="course-filter-group">
    //         <ul className="lab-ul">
    //           <li onClick={() => setItems(ProductData)}>All</li>
    //           <li onClick={() => filterItem("Shoes")}>Shoes</li>
    //           <li onClick={() => filterItem("Bags")}>Bags</li>
    //           <li onClick={() => filterItem("Phones")}>Phones</li>
    //           <li onClick={() => filterItem("Beauty")}>Beauty</li>
    //         </ul>
    //       </div>
    //     </div>

    //     {/* section-body */}
    //     <div className="section-wrapper">
    //       <div className="grid gap-4 justify-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
    //         {items.map((product) => (
    //           <div key={product.id} className="col">
    //             <div className="course-item style-4">
    //               <div className="course-inner">
    //                 <div className="course-thumb">
    //                   <img src={product.imgUrl} alt="" />
    //                   <div className="course-category">
    //                     <div className="course-cate">
    //                       <a href="#">{product.cate}</a>
    //                     </div>
    //                     {/* add rating now */}
    //                     <div className="course-review">
    //                       <Rating />
    //                     </div>
    //                   </div>
    //                 </div>

    //                 {/* course Content */}
    //                 <div className="course-content">
    //                   <Link to={`/shop/${product.id}`}>
    //                     <h5>{product.title}</h5>
    //                   </Link>
    //                   <div className="course-footer">
    //                     <div className="course-author">
    //                       <Link to="/" className="ca-name">
    //                         {product.brand}
    //                       </Link>
    //                     </div>
    //                     <div className="course-price">{product.price}</div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="products py-8  h-auto w-screen bg-gradient-to-b from-gray-300 via-gray-500 to-gray-800 ">
      {/* add shapes  below */}
      {/* section head starts  */}
      <div className="product">
        <div className="flex justify-between product-header mb-8">
          <h2>{title}</h2>
          <div className="product-filter-group flex items-center ml-9 ">
            <ul className="flex ml-12 ">
              <li
                className="product-list-item"
                onClick={() => setItems(ProductData)}
              >
                All
              </li>
              <li
                className="product-list-item"
                onClick={() => filterItem("Shoes")}
              >
                Shoes
              </li>
              <li
                className="product-list-item"
                onClick={() => filterItem("Bags")}
              >
                Bags
              </li>
              <li
                className="product-list-item"
                onClick={() => filterItem("Phones")}
              >
                Phones
              </li>
              <li
                className="product-list-item"
                onClick={() => filterItem("Beauty")}
              >
                Beauty
              </li>
            </ul>
          </div>
        </div>
        {/* section head ends */}
        <div className="section-body">
          <div className="grid gap-4 justify-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
            {items.map((product) => (
              <div
                key={product.id}
                className="mt-4 mb-8 group col-span-1 border-2 border-gray-400 bg-gray-900  hover:border-orange-700 h-80 rounded-lg hover:bg-gray-200"
              >
                <div className="product-card style-4">
                  <div className="product-card-inner relative overflow-hidden">
                    <div className="product-card-thumb  ">
                      <div className="product-card-thumb-img border-gray-400 rounded-lg">
                        <img
                          src={product.imgUrl}
                          alt=""
                          className="group-hover:scale-110 transition-transform duration-300 scale-95 rounded-lg border-orange-700 border-l-2 border-r-2"
                        />
                      </div>
                      <div className="product-cart-cate-rating">
                        <div className="product-card-category flex justify-between mx-4 mt-4 mb-2">
                          <div className="product-card-cate">
                            <a
                              className="text-white group-hover:text-black group-hover:translate-y-[10px]"
                              href="#"
                            >
                              {product.cate}
                            </a>
                          </div>
                          {/* add rating now */}
                          <div className="product-card-review text-orange-700  transition-transform duration-500 group-hover:translate-x-[-20px] group-hover:translate-y-[10px] ">
                            <Rating />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* course Content */}
                    <div className="product-card-content mx-4 mt-4 mb-4">
                      <Link to={`/shop/${product.id}`}>
                        <h5 className="text-white group-hover:text-black">
                          {product.title}
                        </h5>
                      </Link>
                      <div className="product-card-footer">
                        <div className="product-card-author">
                          <Link to="/" className="ca-name ">
                            <span className="text-white group-hover:text-black">
                              {product.brand}
                            </span>
                          </Link>
                        </div>
                        <div className="product-card-price">
                          <span className="text-white group-hover:text-black ">
                            {product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;
