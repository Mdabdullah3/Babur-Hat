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
    <div className="grid grid-cols-3 bg-gray-200">
      <BannerCategory />
      <div className=" col-span-2">
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
                  alt="banner"
                  width={1920}
                  height={1080}
                  layout="responsive"
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
