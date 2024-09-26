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
const DellSnap = () => {
  const { eventProducts, fetchAllEventsProducts } = useEventStore();
  useEffect(() => {
    fetchAllEventsProducts();
  }, [fetchAllEventsProducts]);
  console.log(eventProducts);
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
          {eventProducts?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="">
                <img src={`${SERVER}${item?.product?.coverPhoto?.secure_url}`} alt="dell image" />
                <h1 className="text-xl font-bold text-primary text-center mt-2">
                
                </h1>?
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DellSnap;
