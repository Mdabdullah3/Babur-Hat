/* eslint-disable @next/next/no-img-element */
"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { bannerImage } from "../../utils/constants";
import BannerCategory from "./BannerCategory";
import "../style.css";
import SurveyModal from "../SurveyModal"
const Banner = () => {
  return (
    <div className="bg-info flex items-center justify-center">
      <div className="lg:grid grid-cols-4 lg:w-11/12 w-full mx-auto lg:py-4 gap-4">
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
                <div className="-z-10">
                  <img
                    src={item.img}
                    alt="banner image"
                    className=" rounded-2xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <SurveyModal />

    </div>
  );
};

export default Banner;
