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
    <div className="w-11/12 mx-auto lg:mt-12 mt-4">
      <h1 className="lg:text-2xl text-lg font-bold mb-4 lg:mb-10">
        Top Rated Brands
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
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {topBrands?.map((item) => (
            <SwiperSlide key={item?.id}>
              <div className="slide-content mx-2">
                <img
                  src={item?.img}
                  className="rounded-2xl w-52 cursor-pointer bg-white shadow-lg border border-gray-400 "
                  alt="Brand Image"
                />
                <h1 className="text-center lg:text-xl text-sm my-2 text-gray-500 h-8 lg:h-12">
                  {item?.name}
                </h1>
                <h1 className="flex items-center lg:text-lg text-sm my-2 gap-1 text-orange-400 justify-center">
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
