/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import LatestOrders from "../../utils/constants";
const MyOrder = () => {
  return (
    <section>
      <div>
        <h1 className="md:text-2xl text-lg font-semibold text-center md:mt-4 mt-2">
          Thank You For Ordering
        </h1>
        <section className="flex flex-col items-center md:w-11/12 mx-auto md:mb-4 relative">
          {LatestOrders.length === 0 ? (
            <h1 className="h-screen flex items-center text-3xl text-gray-600">
              No Orders Found
            </h1>
          ) : (
            LatestOrders?.map((item) => (
              <div key={item.id} className="mt-10">
                <ul className="steps mb:mt-4 w-full mx-auto">
                  <li
                    className={`step ${
                      item?.status === "Pending" ||
                      item?.status === "Received" ||
                      item?.status === "Shipping" ||
                      item?.status === "Paid"
                        ? "step-primary"
                        : ""
                    }`}
                  >
                    Pending
                  </li>
                  <li
                    className={`step ${
                      item?.status === "Shipping" || item?.status === "Paid"
                        ? "step-primary"
                        : ""
                    }`}
                  >
                    Received
                  </li>
                  <li
                    className={`step ${
                      item?.status === "Shipping" || item?.status === "Paid"
                        ? "step-primary"
                        : ""
                    }`}
                  >
                    Shipping
                  </li>
                  <li
                    className={`step ${
                      item?.status === "Paid" ? "step-primary" : ""
                    }`}
                  >
                    Completed
                  </li>
                </ul>
                <div className="lg:w-[1000px] md:w-[600px] w-[380px]">
                  {item?.orderedProducts?.map((orderProduct) => (
                    <div
                      key={orderProduct.id}
                      className="bg-white h-24 mb-5 mt-3"
                    >
                      <div className="flex gap-10 items-center justify-between px-3">
                        <div>
                          <img
                            className="w-20 h-24"
                            src={orderProduct?.img}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h1 className="text-lg font-bold">
                            {orderProduct?.name}
                          </h1>
                          <h1 className="flex items-center">
                            <FaBangladeshiTakaSign />{" "}
                            {parseFloat(orderProduct?.sellPrice) *
                              parseFloat(orderProduct?.quantity)}
                          </h1>
                        </div>
                        <div>
                          <div className="font-bold">
                            <h1>Size : {orderProduct?.size}</h1>
                            <h1>Quantity : {orderProduct?.quantity}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center justify-end w-full font-bold">
                    <h1 className="text-lg tracking-wider flex items-center gap-1">
                      Total : <FaBangladeshiTakaSign />
                      {item.discountedTotal}{" "}
                    </h1>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </section>
  );
};

export default MyOrder;
