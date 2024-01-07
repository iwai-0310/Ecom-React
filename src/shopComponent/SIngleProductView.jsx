import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Review from "./Review";
import PopularPost from "./PopularPost";
import Tags from "./Tags";
import NewSVPageHeader from "../components/NewSVPageHeader";
import dataj from "./products.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ProductDisplay from "./ProductDisplay";

//api endpoint to recive all the products
const apiUrl = "https://ecome-be-noex.onrender.com/api/v1/products/";

const SIngleProductView = () => {
  const [product, setProduct] = useState([]);
  //access the product id
  const { id } = useParams();
  //access all the products data
  //now try and fetch all the products
  // let apiData;
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const apiData = data.products;
        console.log("this default data is apiData is", typeof apiData);
        console.log("and the value of the apiData is", apiData);
        setProduct(apiData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //filter out the data with product.id
  const result = product.length > 0 ? product.filter((p) => p._id === id) : [];
  console.log("the id that i m getting", id);
  console.log(`These are all the prodcuts from fetch ${product}`);
  console.log(`This is the item i clicked on ${result}`);
  console.log(result);
  console.log("This is the value of item i clicked on", typeof result);

  return (
    <div>
      {/* <PageHeader title={"OUR SHOP SINGLE"} curPage={"Shop/Single Product"} /> */}
      <NewSVPageHeader
        title={"OUR SHOP SINGLE"}
        curPage={"Shop/Single Product"}
      />
      <div className="shop-single py-8 aside-bg flex justify-center">
        <div className="container">
          <div className="flex justify-center">
            {/* left-side */}
            <div className="lg:w-8/12 w-12">
              <article>
                <div className="product-details">
                  <div className="flex items-center">
                    {/* Image here */}
                    <div className="md:w-6/12 w-12">
                      <div className="product-thumb">
                        <div className="swipe-container pro-single-top">
                          <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            navigation={{
                              prevEl: ".pro-single-prev",
                              nextEl: ".pro-single-next",
                            }}
                            className="mySwiper"
                          >
                            {result.map((item, i) => (
                              <SwiperSlide key={i}>
                                <div className="single-thumb">
                                  <img src={item.img} alt="" />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <div className="pro-single-next">
                            <i className="icofont-rounded-left"></i>
                          </div>
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Details for product here */}
                    <div className="md:w-6/12 w-12">
                      <div className="post-cotent">
                        <div>
                          {result.map((item) => (
                            <ProductDisplay key={item.key} item={item} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* review here */}
                <div className="review">
                  <Review />
                </div>
              </article>
            </div>
            {/* right-side */}
            <div className="lg:w-4/12 w-12">
              <aside className="pl-4">
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIngleProductView;
