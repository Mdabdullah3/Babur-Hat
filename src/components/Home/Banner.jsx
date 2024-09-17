/* eslint-disable @next/next/no-img-element */
"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import BannerCategory from "./BannerCategory";
import "../style.css";
import SurveyModal from "../SurveyModal";
import { API_URL, SERVER } from "../../config";
import useCategoryStore from "../../store/CategoriesStore";
import Loading from "../../components/common/Loading";
const Banner = () => {
  const [banner, setBanner] = useState([]);
  const { categories } = useCategoryStore();

  useEffect(() => {
    const fetchBannerData = async () => {
      const response = await fetch(`${API_URL}/others`);
      const data = await response.json();
      const filterBanner = data?.data?.filter(
        (item) => item?.banner === "BannerImage"
      );
      setBanner(filterBanner);
    };
    fetchBannerData();
  }, []);

  if (!banner || !categories) return <Loading />;
  return (
    <div className="bg-info flex items-center justify-center">
      <div className="lg:grid grid-cols-4 lg:w-11/12 w-full mx-auto lg:py-4 gap-4">
        <div className="hidden lg:block">
          <BannerCategory categories={categories} />
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
            {banner.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="-z-10">
                  {/* Desktop Image */}
                  <img
                    src={`${SERVER}${item?.image?.secure_url}`}
                    alt="banner image"
                    className="hidden md:block rounded-2xl h-[500px] w-full"
                  />
                  <img
                    src={`${SERVER}${item?.mobileBanner?.secure_url}`}
                    alt="mobile banner image"
                    className="block md:hidden rounded-2xl"
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
