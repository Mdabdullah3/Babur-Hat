"use client";
import React, { useEffect, useState } from "react";
import useProductStore from "../../store/ProductStore";
import ProductCardDesign from "../common/ProductCardDesign";
const DeafultProducts = () => {
  const { products, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="lg:w-11/12 w-[95%] mx-auto mt-4 lg:mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-8">
        {products?.slice(0, 12).map((product) => (
          <ProductCardDesign product={product} key={product?._id} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default DeafultProducts;
