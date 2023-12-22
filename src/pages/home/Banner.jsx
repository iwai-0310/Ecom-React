import React, { useState } from "react";
import { Link } from "react-router-dom";
import productData from "../../products.json";
import SelectedCategory from "../../components/SelectedCategory";
import forest from "../../assets/images/banner/forest-banner.jpg";

// title for banner
const title = (
  <h2 className="flex items-center">
    Search Your One From
    <span className="text-orange-700 text-6xl "> Thousands </span> of Products
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
  //use states for the banner
  const [searchInput, setSearchInput] = useState("");
  const [filterProducts, setFilterProducts] = useState(productData);
  // console.log(productData);

  //function handleSearch
  const handleSearch = (event) => {
    // console.log(event.target.value);
    const searchTerm = event.target.value;
    setSearchInput(searchTerm);

    //filtering product based on search
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilterProducts(filtered);
  };
  return (
    // <div className="banner-section style-4">
    //   <div className="container">
    //     <div className="banner-content">
    //       {/* title */}
    //       {title}
    //       {/* search input */}
    //       <form className="flex items-center">
    //         <SelectedCategory select={"all"} />
    //         <input
    //           type="text"
    //           name="search"
    //           id="search"
    //           placeholder="Search product"
    //           value={searchInput}
    //           onChange={handleSearch}
    //         />
    //         <button type="submit">
    //           <i className="icofont-search "></i>
    //         </button>
    //       </form>
    //       {/* description */}
    //       <p>{desc}</p>
    //       {/* show filtered products here */}
    //       <ul className="lab-ul">
    //         {searchInput &&
    //           filterProducts.map((product, i) => (
    //             <li key={i}>
    //               <Link to={`/shop/${product.id}`}>{product.name}</Link>
    //             </li>
    //           ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    <div className="new-banner">
      {/* image for background for banner */}
      <img
        // src="../../../public/forest-banner.jpg"
        // src="../../../public/images/banner/forest-banner.jpg"
        src={forest}
        className="new-banner bg-cover bg-center h-screen w-screen -z-2"
        alt="bg-forest-banner-img"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="contain-content">
          <div className="new-banner-title">
            {title}
            {/* search input */}
            <form className="flex items-center m-6 ">
              <SelectedCategory select={"all"} />
              <input
                name="search"
                id="search"
                placeholder="Search product"
                value={searchInput}
                onChange={handleSearch}
                className="h-12"
              />
              <button
                type="submit"
                className="bg-gray-300 h-12 w-14 pl-2 rounded-r-full hover:transform hover:bg-orange-700 hover:text-gray-900  "
              >
                <i className="icofont-search hover:transform hover:text-xl"></i>
              </button>
            </form>

            {/* description */}
            <p className="justify-center text-center text-gray-900">{desc}</p>
            {/* show filtered products here */}
            <ul className="flex flex-wrap ">
              {searchInput &&
                filterProducts.map((product, i) => (
                  <li key={i} className="bg-transparent mx-4 my-2">
                    <Link
                      className="text-gray-900 hover:scale-110 hover:text-orange-700 hover:font-bold"
                      to={`/shop/${product.id}`}
                    >
                      {product.name.toUpperCase()}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
