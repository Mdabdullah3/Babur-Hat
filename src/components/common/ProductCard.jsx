/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaStar } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
const ProductCard = ({ product }) => {
  return (
    <div className="mb-4 hover:bg-white hover:shadow-md transition duration-300 px-4 py-4 cursor-pointer rounded-2xl">
      <div className="relative">
        <img className="w-64 h-52 " src={product.topimg} alt="" />
        <h1
          className="absolute bottom-3 right-5 px-3 py-3 rounded-full bg-black text-white tooltip tooltip-left"
          data-tip="Add To Cart"
        >
          <LiaCartPlusSolid size={28} />
        </h1>
      </div>
      <h1 className="text-md">{product.productName.slice(0, 20)}...</h1>
      <h1 className="flex items-center text-sm my-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <span className="text-gray-500 text-sm ml-3">1000+ Sold</span>
      </h1>
      <h1 className="text-xl font-bold">
        {" "}
        <span className="text-sm">BDT</span> {product.sellPrice}.00{" "}
        <del className="font-normal text-sm text-gray-400">BDT 535.00</del>
      </h1>
    </div>
  );
};

export default ProductCard;
