import React from "react";
import { CiLocationOn } from "react-icons/ci";
const ProductShipInfo = () => {
  return (
    <div className="shadow-lg px-4 py-3 bg-white col-span-2 rounded-2xl">
      <h1 className="flex items-center justify-between">
        Ship to{" "}
        <span>
          <CiLocationOn /> Bangladesh
        </span>
      </h1>
    </div>
  );
};

export default ProductShipInfo;
