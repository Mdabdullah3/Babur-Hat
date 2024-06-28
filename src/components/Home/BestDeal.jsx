/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
const BestDeal = () => {
  const [bestDeal, setBestDeal] = useState([]);

  useEffect(() => {
    const url = "https://fakestoreapiserver.reactbd.com/tech";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBestDeal(data));
  }, []);

  return (
    <div className="lg:w-11/12 w-[95%] mx-auto mt-4 lg:mt-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   rounded-2xl lg:p-4 p-3">
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
          {bestDeal?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content bg-white lg:mx-3 mr-1.5 rounded-2xl md:h-[360px] pb-4">
                <img
                  src={item?.image}
                  className="rounded-2xl w-full cursor-pointer"
                  alt="Best Deal Image"
                />
                <div className="-mt-4 px-4">
                  <h1 className="lg:text-md text-[12px">{item?.title}</h1>
                  <del className="my-3 text-gray-400 text-sm">BDT 423.00</del>
                  <h1 className="font-bold text-sm mb-2">
                    BDT {item?.price}.00
                  </h1>
                  <div className="flex mt-1 items-center justify-between">
                    <progress
                      className="progress progress-primary w-24"
                      value="80"
                      max="100"
                    ></progress>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestDeal;
