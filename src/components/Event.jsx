"use client";
import React, { useEffect } from "react";
import ProductCardDesign from "./common/ProductCardDesign";
import useProductStore from "../store/ProductStore";

const EventProducts = () => {
  const { products, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div>
      <section className="mt-8 w-11/12 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-8 mt-10">
          {products?.map((product) => (
            <ProductCardDesign product={product} key={product?._id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventProducts;
