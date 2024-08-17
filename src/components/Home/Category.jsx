/* eslint-disable @next/next/no-img-element */
"use client";
import { Autoplay, Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductCategory } from "../../utils/constants";
import Link from "next/link";
import useCategoryStore from "../../store/CategoriesStore";
import { useEffect } from "react";
import { SERVER } from "../../config";
const Category = () => {
  const { categories, fetchCategories } = useCategoryStore();
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  console.log(categories);
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="lg:text-2xl text-lg font-bold my-2 lg:my-4 mb-3 lg:mb-10">
        Shop By Categories
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={4}
        // grid={{
        //   rows: 2,
        //   fill: "row",
        // }}
        autoplay={{
          delay: 4000,
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
            slidesPerView: 7,
            spaceBetween: 10,
          },
        }}
        navigation={true}
        modules={[Autoplay, Grid, Pagination, Navigation]}
        className="mySwiper"
      >
        {categories?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={`/shop?category=${item.id}`}>
              <div className="p-2 py-4 mb-6">
                <img
                  src={
                    item?.image
                      ? `${SERVER}${item?.image.secure_url}`
                      : "https://754969b0.rocketcdn.me/clotya/wp-content/uploads/2022/04/tshirt.jpg"
                  }
                  className="w-32 h-32 mx-auto rounded-full"
                  alt={item?.name || "Product Image"}
                />

                <h1 className="lg:mt-5 mt-3 text-sm text-center tracking-wider font-[500]">
                  {item.name}
                </h1>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
