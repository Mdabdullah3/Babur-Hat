/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import useCartStore from "../../store/cartStore";
import { SERVER } from "../../config";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
const ProductSummery = ({ deliveryCharge }) => {
  const { cart } = useCartStore();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  const total = cart?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
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
                  src={`${SERVER}${order?.coverPhoto?.secure_url}`}
                  className="w-20 h-20 rounded-sm"
                  alt=""
                />
                <div className=" tracking-wider">
                  <h1 className="text-md font-[500] flex gap-4 items-center">
                    {order?.name}
                    <span className=" text-md text-gray-500 flex items-center font-bold gap-1">
                      <RxCross2 size={13} /> {order?.quantity}
                    </span>
                  </h1>
                </div>
              </div>
              <h1 className="uppercase font-semibold">{order?.size}</h1>

              <div>
                <h1 className=" tracking-wider font-[500] flex items-center">
                  <FaBangladeshiTakaSign />
                  {order?.price}.00
                </h1>
              </div>
            </div>
          </div>
        ))}

        <div>
          <hr className="my-3" />
          <h1 className="text-gray-600 tracking-wider flex items-center justify-between">
            Subtotal{" "}
            <span className="font-bold text-secondary flex items-center gap-1">
              <FaBangladeshiTakaSign />
              {total}
            </span>
          </h1>
        </div>
        <div>
          <hr className="my-3" />
          <h1 className="text-gray-600 tracking-wider flex items-center justify-between">
            Shipping
            <span className="font-bold text-secondary flex items-center">
              <FaBangladeshiTakaSign />
              {deliveryCharge}.00
            </span>
          </h1>
        </div>
        <div>
          <hr className="my-3" />
          <h1 className="tracking-wider flex items-center justify-between font-bold">
            Payable
            <span className="font-bold text-secondary text-xl  flex items-center">
              <FaBangladeshiTakaSign />
              {parseFloat(total) + parseFloat(deliveryCharge)}.00
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductSummery;
