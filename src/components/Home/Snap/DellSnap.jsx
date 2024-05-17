"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { BestDell } from "../../../utils/constants";
const DellSnap = () => {
  return (
    <div className="bg-[#FFF5EF] px-4 py-6  rounded-2xl w-80 mt-4">
      <h1 className="text-2xl font-bold text-primary">Welcome Dell</h1>
      <p className="my-2">Your Exclusive Price</p>
      <div className="mt-5">
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
          modules={[Autoplay, Navigation]}
          className="mySwi"
        >
          {BestDell?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="">
                <Image
                  src={item.img}
                  className="rounded-2xl"
                  alt="banner"
                  width={400}
                  height={400}
                  layout="banner image"
                />
                <h1 className="text-xl font-bold text-primary text-center mt-2">
                  Bdt{item.price}.00
                  <del className="ml-2 font-normal text-gray-400 text-lg">
                    Bdt{423}.00
                  </del>
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DellSnap;
