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
    <div className="w-11/12 mx-auto mt-10">
      <h1 className="text-2xl mb-10 font-bold">Recomended Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {Products?.products?.slice(0, 12).map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default RecomendedProducts;
