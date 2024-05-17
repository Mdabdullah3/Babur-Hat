"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { bannerImage } from "../../utils/constants";
import BannerCategory from "./BannerCategory";
import "../style.css";
const Banner = () => {
  return (
    <div className="grid grid-cols-4 bg-gray-200 px-5 py-4 gap-4">
      <BannerCategory />
      <div className=" col-span-3">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bannerImage.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="">
                <Image
                  src={item.img}
                  className="rounded-2xl"
                  alt="banner"
                  width={1500}
                  height={800}
                  layout="banner image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
