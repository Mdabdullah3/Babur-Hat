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
    <div className="w-11/12 mx-auto mt-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   rounded-2xl px-4 py-5">
      <h1 className="text-2xl font-bold ml-4 mb-8 text-white">Best Deal</h1>
      <div>
        <Swiper
          slidesPerView={6}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {bestDeal?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content bg-white mx-3 rounded-2xl h-[360px]">
                <img
                  src={item?.image}
                  className="rounded-2xl w-full cursor-pointer"
                  alt="Best Deal Image"
                />
                <div className="-mt-4 px-4">
                  <h1 className="text-md">{item?.title}</h1>
                  <del className="my-3 text-gray-400">BDT 423.00</del>
                  <h1 className="font-bold mb-2">BDT {item?.price}.00</h1>
                  <div className="flex items-center justify-between">
                    <progress
                      className="progress progress-primary w-24"
                      value="80"
                      max="100"
                    ></progress>
                    <h1 className="text-sm text-gray-500">50 Pc Left</h1>
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
