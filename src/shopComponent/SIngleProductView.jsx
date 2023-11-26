import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

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
            <div className="lg:w-8/12 w-12">Left</div>
            <div className="lg:w-4/12 w-12">Right</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIngleProductView;
