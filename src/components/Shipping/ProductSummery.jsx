/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cart } from "../../utils/constants";
import { RxCross2 } from "react-icons/rx";
const ProductSummery = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold capitalize text-2xl tracking-wider mb-10">
        Order Summary
      </h1>
      <div className="w-11/12">
        {cart?.map((order, index) => (
          <div key={index}>
            {index !== 0 && <hr className="border-t border-gray-300 mt-5" />}
            <div className="mt-5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src={order?.image}
                  className="w-16 h-20 rounded-sm"
                  alt=""
                />
                <div className=" tracking-wider">
                  <h1 className="text-md font-[500] flex gap-4 items-center">
                    {order?.name}
                    <span className=" text-md text-gray-500 flex items-center font-bold gap-1">
                      <RxCross2 size={13} /> {order?.quantity}
                    </span>
                  </h1>
                  <h1 className="font-[500] capitalize my-1 text-[15px]">
                    Size : <span className="font-normal">{order?.size}</span>
                  </h1>
                </div>
              </div>
              <div>
                <h1 className=" tracking-wider font-[500]">
                  ${order?.price}.00
                </h1>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <hr className="mb-2" />
          <label htmlFor="Coupon" className="tracking-wider">
            Coupon Code
          </label>
          <div className="flex items-center gap-4 justify-between">
            <input
              className="input input-bordered w-9/12 tracking-wider focus:outline-none my-2"
              type="text"
              id="Coupon"
              placeholder="Coupon Code"
              //   value={fullName}
              //   onChange={(e) => setFullName(e.target.value)}
            />
            <div>
              <button className="px-5 py-3 bg-primary w-full text-white tracking-wider rounded-lg">
                Apply Code
              </button>
            </div>
          </div>
        </div>
        <div>
          <hr className="my-3" />
          <h1 className="text-gray-600 tracking-wider flex items-center justify-between">
            Subtotal <span className="font-bold text-secondary">$324.00</span>
          </h1>
        </div>
        <div>
          <hr className="my-3" />
          <h1 className="text-gray-600 tracking-wider flex items-center justify-between">
            Shipping
            <span className="font-bold text-secondary">
              <span className="font-normal mr-1">Flat rate:</span> $10.00
            </span>
          </h1>
        </div>
        <div>
          <hr className="my-3" />
          <h1 className="tracking-wider flex items-center justify-between font-bold">
            Total
            <span className="font-bold text-secondary text-xl">$334.00</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductSummery;