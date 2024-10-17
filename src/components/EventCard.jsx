/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import useEventStore from "../store/eventStore";
import ProductCardDesign from "./common/ProductCardDesign";

const EventCard = ({ id }) => {
  const { event, fetchEventById } = useEventStore();

  useEffect(() => {
    fetchEventById(id);
  }, [fetchEventById, id]);
  return (
    <div>
      <section className="">
        <section>
          <div className=" relative">
            <img src="/cover.jpg" alt="" />
            <h1 className="text-2xl font-bold mb-5 absolute top-16 left-10">
              Event Products
            </h1>
          </div>
        </section>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-8 w-11/12 mx-auto mb-10">
          {event?.eventProducts
            ?.filter((obj) => obj.product !== null)
            .map((product) => (
              <ProductCardDesign
                key={product?._id}
                product={product?.product}
              />
            ))}
        </section>
      </section>
    </div>
  );
};

export default EventCard;