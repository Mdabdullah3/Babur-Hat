"use client";
import React, { useEffect, useState } from "react";
import ProductCardDesign from "../common/ProductCardDesign";
import useProductStore from "../../store/ProductStore";

const RecomendedProducts = () => {
  const { products, loading, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="lg:w-11/12 w-[95%] mx-auto mt-2 lg:mt-6">
      <h1 className="text-lg lg:text-2xl lg:mb-10 mb-4 font-bold">
        Recomended Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-8">
        {products?.slice(0, 12).map((product) => (
          <ProductCardDesign product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default RecomendedProducts;
