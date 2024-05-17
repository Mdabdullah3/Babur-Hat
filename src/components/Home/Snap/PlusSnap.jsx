/* eslint-disable @next/next/no-img-element */
import React from "react";
import { newProducts } from "../../../utils/constants";

const PlusSnap = () => {
  return (
    <div className="bg-info px-7 py-5 rounded-2xl">
      <h1 className="text-2xl font-bold">Plus</h1>
      <p className="text-lg">Featureds Brands with Saving</p>
      <div className="flex gap-4 items-center justify-between mt-4">
        {newProducts.map((item) => (
          <>
            <div>
              <img
                src={item.img}
                alt="Product image"
                className="w-44 h-44 rounded-2xl"
              />
              <h1>
                BDT{" "}
                <span className="text-2xl font-bold mt-2">{item.price}</span>
              </h1>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PlusSnap;
