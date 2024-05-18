/* eslint-disable @next/next/no-img-element */
"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { topBrands } from "../../utils/constants";
import { FaStar } from "react-icons/fa6";
const TopRated = () => {
  return (
    <div className="w-11/12 mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-10">Top Rated Brands</h1>
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
          {topBrands?.map((item) => (
            <SwiperSlide key={item?.id}>
              <div className="slide-content mx-2">
                <img
                  src={item?.img}
                  className="rounded-2xl w-full cursor-pointer bg-white shadow-lg border border-gray-400 "
                  alt="Brand Image"
                />
                <h1 className="text-center text-xl my-2 text-gray-500 h-12">
                  {item?.name}
                </h1>
                <h1 className="flex items-center text-lg my-2 gap-1 text-orange-400 justify-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-gray-500 ml-4">(34k)</span>
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopRated;
