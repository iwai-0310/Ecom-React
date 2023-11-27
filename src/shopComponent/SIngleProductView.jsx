import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const SIngleProductView = () => {
  const [product, setProduct] = useState([]);
  //access the product id
  const { id } = useParams();
  //access all the products data
  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  //filter out the data with product.id
  const result = product.filter((p) => p.id === id);
  console.log(result);

  return (
    <div>
      <PageHeader title={"OUR SHOP SINGLE"} curPage={"Shop/Single Product"} />
      <div className="shop-single py-8 aside-bg">
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
                    <div className="md:w-6/12 w-12">Details</div>
                  </div>
                </div>
                {/* review here */}
                <div className="review"></div>
              </article>
            </div>
            {/* right-side */}
            <div className="lg:w-4/12 w-12">Right</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIngleProductView;
