/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import useProductStore from "../store/ProductStore";
import ProductCardDesign from "./common/ProductCardDesign";
import { SERVER } from "../config";

const SingleVendor = ({ vendorId }) => {
  const { product, fetchProductByIdForUser } = useProductStore();
  useEffect(() => {
    fetchProductByIdForUser(vendorId);
  }, [fetchProductByIdForUser, vendorId]);
  const user = product?.length > 0 ? product[0].user : null;
  return (
    <section>
      <img src="/cover.jpg" alt="" />
      <div className="w-11/12 mx-auto mt-6">
        <div className="flex items-center gap-4">
          <img
            src={
              user?.avatar?.secure_url
                ? `${SERVER}${user.avatar.secure_url}`
                : "/avatar.png"
            }
            alt="avatar"
            className="w-20 h-20 rounded-full"
          />
          <div className="">
            <h1 className="text-lg font-medium mb-1 capitalize">
              {user?.name}
            </h1>
            <p>85% Positive Seller Ratings</p>
          </div>
        </div>
        <section className="mt-8">
          <h1 className="text-2xl font-bold mb-5">Vendor Products</h1>
          <hr />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-8 mt-10">
            {product?.length > 0 ? (
              product?.map((product) => (
                <ProductCardDesign product={product} key={product?._id} />
              ))
            ) : (
              <p className="text-center text-xl font-red-500">
                No products found
              </p>
            )}
          </div>
        </section>
      </div>
    </section>
  );
};

export default SingleVendor;
