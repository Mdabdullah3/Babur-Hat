/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import useProductStore from "../../../store/ProductStore";
import { SERVER } from "../../../config";
import Link from "next/link";

const NewProductSnap = () => {
  const { products, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="bg-info px-7 py-4 rounded-2xl">
      <Link href="/products">
        <h1 className="text-2xl font-bold">New</h1>
        <p className="text-lg">Featured New Products </p>
        <div className="flex gap-4 items-center justify-between mt-4">
          {products?.slice(0, 3).map((item) => (
            <Link href={`/products/${item?._id}`} key={item?._id}>
              <div>
                <img
                  src={`${SERVER}${item?.coverPhoto?.secure_url}`}
                  alt="Product image"
                  className="w-[140px] h-[130px] rounded-2xl"
                />
                <h1>
                  BDT{" "}
                  <span className="text-2xl font-bold mt-2">
                    {item?.productVariants[0]?.discount > 0
                      ? item?.productVariants[0]?.discount
                      : item?.productVariants[0]?.price}
                  </span>
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default NewProductSnap;
