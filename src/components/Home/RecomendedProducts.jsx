"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
const RecomendedProducts = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://api.rebzigo.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="lg:w-11/12 w-[95%] mx-auto mt-2 lg:mt-10">
      <h1 className="text-lg lg:text-2xl lg:mb-10 mb-4 font-bold">
        Recomended Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-8">
        {Products?.products?.slice(0, 12).map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default RecomendedProducts;
