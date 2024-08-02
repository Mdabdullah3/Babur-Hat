"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/common/ProductCard";
import useProductStore from "../../store/ProductStore";
const Products = () => {
  const { products, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {products?.slice(0, 12).map((product) => (
          <>
            <ProductCard product={product} key={product?._id} />
          </>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Products;
