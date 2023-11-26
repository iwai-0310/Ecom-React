import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return <div></div>;
};

export default SIngleProductView;
