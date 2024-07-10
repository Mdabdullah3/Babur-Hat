/* eslint-disable @next/next/no-img-element */
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
        {product?.images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="-z-10">
              <img src={`${SERVER}${img.secure_url}`} alt="Product Image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImages;
