/* eslint-disable @next/next/no-img-element */
"use client";
import { Autoplay, Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductCategory } from "../../utils/constants";

const Category = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl font-bold my-4 mb-10">Shop By Categories</h1>
      <Swiper
        slidesPerView={6}
        grid={{
          rows: 2,
          fill: "row",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Grid, Pagination, Navigation]}
        className="mySwiper"
      >
        {ProductCategory.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="p-2 py-4">
              <img
                src={item.img}
                className="rounded-full w-32 h-32 mx-auto"
                alt="Category image"
              />
              <h1 className="mt-5 text-center tracking-wider font-[500]">
                {item.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
