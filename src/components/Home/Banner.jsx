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
    <div className="bg-info flex items-center justify-center">
      <div className="lg:grid grid-cols-4 w-11/12 mx-auto  py-4 gap-4">
        <div className="hidden lg:block">
          <BannerCategory />
        </div>
        <div className="col-span-3">
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
            {bannerImage.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <Image
                    src={item.img}
                    className="rounded-2xl"
                    alt="banner"
                    width={1500}
                    height={900}
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
