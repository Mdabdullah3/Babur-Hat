/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProductImages = ({ images, topImage }) => {
  return (
    <div className="flex gap-4 sticky top-0 overflow-hidden col-span-3">
      <div className="w-28 flex flex-col gap-4">
        {images?.slice(0, 4)?.map((img, index) => (
          <img key={index} src={img} alt="" className="h-28" />
        ))}
      </div>
      <div className="relative">
        <img src={topImage} alt="" />
        <h1 className="absolute top-4 left-4 text-xl font-bold text-primary">
          -30%
        </h1>
      </div>
    </div>
  );
};

export default ProductImages;
