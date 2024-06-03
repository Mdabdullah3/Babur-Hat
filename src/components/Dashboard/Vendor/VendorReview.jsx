/* eslint-disable @next/next/no-img-element */
import React from "react";
import { vendorReviews } from "../../../utils/constants";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const VendorReview = () => {
  return (
    <section>
      <div className="flex mx-5 items-center justify-between mt-10">
        <h1 className="font-bold text-2xl">Review</h1>
        <div className="flex items-center gap-2 text-white">
          <h1 className="px-2 py-2 bg-primary text-white rounded-full">
            <IoIosArrowBack size={30} color="white" />
          </h1>
          <h1 className="px-2 py-2 bg-primary text-white rounded-full">
            <IoIosArrowForward size={30} color="white" />
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {vendorReviews.map((item) => (
          <div key={item.id} className="shadow-xl px-4 py-6 rounded-xl">
            <div>
              <h1>{item.name}</h1>
              <h1 className="flex items-center text-sm my-2 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </h1>
              <h1>{item.date}</h1>
              <h1>{item.review}</h1>
            </div>
            <div>
              <img src={item.img} alt="review img" className="w-40" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VendorReview;
