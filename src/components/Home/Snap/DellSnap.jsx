/* eslint-disable @next/next/no-img-element */
"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { BestDell } from "../../../utils/constants";
import useEventStore from "../../../store/eventStore";
import { useEffect } from "react";
import { SERVER } from "../../../config";
import Link from "next/link";
const DellSnap = () => {
  const { eventProducts, fetchAllEventsProducts } = useEventStore();
  useEffect(() => {
    fetchAllEventsProducts();
  }, [fetchAllEventsProducts]);
  const products = eventProducts.filter((product) => product.product !== null);
  return (
    <div className="bg-[#FFF5EF] px-4 py-6  rounded-2xl w-80 mt-4">
      <h1 className="text-2xl font-bold text-primary">Welcome Deals</h1>
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
          {products?.map((item) => (
            <SwiperSlide key={item.id}>
              <Link href={`/products/${item?.product?._id}`} className="">
                <img
                  src={`${SERVER}${item?.product?.coverPhoto?.secure_url}`}
                  alt="dell image"
                  className="w-52 h-52 rounded-md mx-auto"
                />
                <h1 className="text-xl font-bold text-primary text-center mt-2">
                  ৳
                  {item?.product?.productVariants[0]?.discount > 0
                    ? item?.product?.productVariants[0]?.discount
                    : item?.product?.productVariants[0]?.price}
                  .00
                  <del className="ml-2 font-normal text-gray-400 text-lg">
                    ৳
                    {item?.product?.productVariants[0]?.discount &&
                      item?.product?.productVariants[0]?.price}
                    .00
                  </del>
                </h1>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DellSnap;
