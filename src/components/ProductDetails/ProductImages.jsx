/* eslint-disable @next/next/no-img-element */
"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SERVER } from "../../config";
const ProductImages = ({ product }) => {
  return (
    <div className="flex gap-4  overflow-hidden col-span-3">
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
        <SwiperSlide>
          <div className="-z-10">
            <img
              src={`${SERVER}${product?.coverPhoto.secure_url}`}
              alt="Product Image"
            />
          </div>
        </SwiperSlide>
        {product?.video?.secure_url && (
          <SwiperSlide>
            <div className="-z-10">
              <video muted playsInline autoPlay>
                <source
                  src={`${SERVER}${product?.video?.secure_url}`}
                  type="video/mp4"
                />
              </video>
            </div>
          </SwiperSlide>
        )}
        {product?.images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="-z-10">
              <img src={`${SERVER}${img?.secure_url}`} alt="Product Image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImages;
