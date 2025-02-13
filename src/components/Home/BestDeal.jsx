/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import useEventStore from "../../store/eventStore";
import { SERVER } from "../../config";
import Link from "next/link";
import BannerCategory from "./BannerCategory";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
const BestDeal = () => {
  const { packageProducts, fetchPackageProducts } = useEventStore();

  useEffect(() => {
    fetchPackageProducts();
  }, [fetchPackageProducts]);

  console.log(packageProducts);
  return (
    <div className="lg:w-11/12 w-[95%] mx-auto mt-4 lg:mt-16 bg-gradient-to-r from-primary via-red-400 to-primary   rounded-2xl lg:p-4 p-3">
      <h1 className="lg:text-2xl text-lg font-bold lg:ml-4 lg:mb-8 mb-4 text-white">
        Best Deal
      </h1>
      <div>
        <Swiper
          slidesPerView={2}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {packageProducts?.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="slide-content bg-white lg:mx-1.5 mr-1.5 rounded-2xl
              pb-4"
              >
                <Link href={`/products/${item?.product?._id}`}>
                  <img
                    src={`${SERVER}${item?.product?.coverPhoto?.secure_url}`}
                    className="w-full h-60 cursor-pointer rounded-t-2xl"
                    alt="Best Deal Image"
                  />
                  <div className="px-4">
                    <h1 className="md:text-md sm:text-[12px] capitalize font-medium mt-2 text-center">
                      {item?.product?.name?.slice(0, 20)}..
                    </h1>
                    <div className="text-md justify-center text-primary text-center mt-2 flex items-center">
                      <FaBangladeshiTakaSign />
                      <span className="font-bold">
                        {item?.product?.productVariants[0]?.discount > 0
                          ? item?.product?.productVariants[0]?.discount
                          : item?.product?.productVariants[0]?.price}
                      </span>
                      <del className="ml-2 font-normal flex items-center text-gray-400 text-sm">
                        <FaBangladeshiTakaSign />
                        <span className="font-bold">
                          {item?.product?.productVariants[0]?.discount &&
                            item?.product?.productVariants[0]?.price}
                        </span>
                      </del>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestDeal;
