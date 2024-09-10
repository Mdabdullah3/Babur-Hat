/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useOrderStore from "../../store/orderStore";
import AddReviewModal from "../AddReviewModal";
const MyOrder = () => {
  const { loggedInUserOrders, fetchLoggedInUserOrders } = useOrderStore();
  useEffect(() => {
    fetchLoggedInUserOrders();
  }, [fetchLoggedInUserOrders]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleReviewClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  console.log(loggedInUserOrders);
  return (
    <section>
      <div>
     
        <section className="flex flex-col items-center md:w-11/12 mx-auto md:mb-4 relative">
          {loggedInUserOrders?.length === 0 ? (
            <h1 className="h-screen flex items-center text-3xl text-gray-600">
              No Orders Found
            </h1>
          ) : (
            loggedInUserOrders?.map((item) => (
              <div key={item.id} className="mt-10">
                <ul className="steps mb:mt-4 w-full mx-auto">
                  <li
                    className={`step ${
                      item?.status === "pending" ||
                      item?.status === "received" ||
                      item?.status === "shipped" ||
                      item?.status === "completed"
                        ? "step-primary"
                        : ""
                    }`}
                  >
                    Pending
                  </li>
                  <li
                    className={`step ${
                      item?.status === "received" ||
                      item?.status === "completed"
                        ? "step-primary"
                        : ""
                    }`}
                  >
                    Received
                  </li>
                  <li
                    className={`step ${
                      item?.status === "shipped" || item?.status === "completed"
                        ? "step-primary"
                        : ""
                    }`}
                  >
                    Shipping
                  </li>
                  <li
                    className={`step ${
                      item?.status === "completed"
                        ? "step-primary text-white"
                        : ""
                    }`}
                  >
                    Completed
                  </li>
                </ul>
                <div className="lg:w-[1000px] md:w-[600px] w-[380px]">
                  <div  className="bg-white  mb-5 mt-3">
                    <div className="flex flex-wrap lg:gap-10 gap-4 items-center justify-between px-3">
                      <div>
                        <img
                          className="md:w-20 md:h-24 w-16 h-16"
                          src={item?.img}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h1 className="text-lg font-bold">
                          {item?.name}
                        </h1>
                        <h1 className="flex items-center">
                          <FaBangladeshiTakaSign />{" "}
                          {parseFloat(item?.price) *
                            parseFloat(item?.quantity)}
                        </h1>
                      </div>
                      <div>
                        <div className="font-bold">
                          {item?.size && (
                            <h1>Size : {item?.size}</h1>
                          )}
                          <h1>Quantity : {item?.quantity}</h1>
                        </div>
                      </div>
                      <button
                        onClick={() => handleReviewClick(item)}
                        className="btn btn-primary px-4 py-2 text-white"
                      >
                        Review
                      </button>
                    </div>
                  </div>
                  {/* <div className="flex items-center justify-end w-full font-bold">
                    <h1 className="text-lg tracking-wider flex items-center gap-1">
                      Total :
                      <FaBangladeshiTakaSign />
                      {item.products.reduce((total, orderProduct) => {
                        return (
                          total +
                          parseFloat(orderProduct?.price) *
                            parseFloat(orderProduct?.quantity)
                        );
                      }, 0) + parseFloat(item?.shippingInfo?.deliveryFee)}
                    </h1>
                  </div> */}
                </div>
              </div>
            ))
          )}
          {isModalOpen && (
            <AddReviewModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              product={selectedProduct}
            />
          )}
        </section>
      </div>
    </section>
  );
};

export default MyOrder;
