"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
const DeafultProducts = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://api.rebzigo.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {Products?.products?.slice(0, 12).map((product) => (
          <ProductCard product={product} key={product?._id} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default DeafultProducts;
