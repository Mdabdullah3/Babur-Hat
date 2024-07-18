/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import useProductStore from "../store/ProductStore";
import ProductCardDesign from "./common/ProductCardDesign";

const SingleVendor = () => {
  const { products, fetchProducts } = useProductStore();
  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <section>
      <img src="/cover.jpg" alt="" />
      <div className="w-11/12 mx-auto mt-6">
        <div className="flex items-center gap-4">
          <img
            src="/avatar.png"
            alt="avatar"
            className="w-20 h-20 rounded-full"
          />
          <div className="">
            <h1 className="text-lg font-medium mb-1">Md Abdullah</h1>
            <p>85% Positive Seller Ratings</p>
          </div>
        </div>
        <section className="mt-8">
          <h1 className="text-2xl font-bold mb-5">Vendor Products</h1>
          <hr />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-8 mt-10">
            {products?.map((product) => (
              <ProductCardDesign product={product} key={product?._id} />
            ))}
          </div>
        </section>
        <div className="flex items-center justify-center mt-5">
          <div className="join">
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="1"
              defaultChecked
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="2"
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="3"
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleVendor;
