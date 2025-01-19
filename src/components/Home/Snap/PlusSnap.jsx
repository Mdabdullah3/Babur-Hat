/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import useProductStore from "../../../store/ProductStore";
import { SERVER } from "../../../config";
import Link from "next/link";

const PlusSnap = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="bg-info px-7 py-5 rounded-2xl">
      <h1 className="text-2xl font-bold">New</h1>
      <p className="text-lg">Discounted Products</p>
      <div className="flex gap-4 items-center justify-between mt-4">
        {products?.slice(0, 3).map((item) => (
          <Link href={`/products/${item?._id}`} key={item?._id}>
            <img
              src={`${SERVER}${item?.coverPhoto?.secure_url}`}
              alt="Product image"
              className="w-[140px] h-[130px] rounded-2xl"
            />
            <h1 className="text-md  text-primary text-center mt-2">
              ৳
              {item?.productVariants[0]?.discount > 0
                ? item?.productVariants[0]?.discount
                : item?.productVariants[0]?.price}
              <del className="ml-2 font-normal text-gray-400 text-sm">
                ৳
                {item?.productVariants[0]?.discount &&
                  item?.productVariants[0]?.price}
              </del>
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlusSnap;
