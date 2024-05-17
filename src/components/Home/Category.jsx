"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { ProductCategory } from "../../utils/constants";
const Category = () => {
  return (
    <div>
      <h1>Shop By Categories</h1>
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
        {ProductCategory?.map((item) => (
          <SwiperSlide key={item?.id}>
            <div className="">
              <Image
                src={item.img}
                className="rounded-2xl"
                alt="banner"
                width={300}
                height={300}
                layout="Category image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
