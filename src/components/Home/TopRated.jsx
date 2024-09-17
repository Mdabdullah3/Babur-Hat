/* eslint-disable @next/next/no-img-element */
"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa6";
import useUserStore from "../../store/userStore";
import useProductStore from "../../store/ProductStore";
import { useEffect, useState } from "react";
import { SERVER } from "../../config";
import Link from "next/link";
import Loading from "../common/Loading";

const TopRated = () => {
  const { users, fetchVendorAllUser } = useUserStore();
  const { fetchProductByIdForUser } = useProductStore();

  const [vendorData, setVendorData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const loadVendorsAndRatings = async () => {
      setLoading(true); // Set loading to true when starting data fetch
      await fetchVendorAllUser(); // Load all vendors
      setLoading(false); // Set loading to false when data is fetched
    };

    loadVendorsAndRatings();
  }, [fetchVendorAllUser]);

  useEffect(() => {
    const loadVendorRatings = async () => {
      if (users?.length) {
        const promises = users.map(async (user) => {
          try {
            const products = await fetchProductByIdForUser(user._id);
            const totalRatings = products?.reduce(
              (acc, product) => acc + (product?.reviews?.ratings || 0),
              0
            );
            const averageRating = totalRatings / 5; // Assuming 5 is the maximum rating
            return { user, averageRating };
          } catch (error) {
            console.error(
              `Failed to fetch products for user ${user._id}:`,
              error
            );
            return { user, averageRating: 0 };
          }
        });

        const results = await Promise.all(promises);
        const sortedResults = results.sort(
          (a, b) => b.averageRating - a.averageRating
        );
        setVendorData(sortedResults);
      }
    };

    loadVendorRatings();
  }, [users, fetchProductByIdForUser]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-11/12 mx-auto lg:mt-12 mt-4">
      <h1 className="lg:text-2xl text-lg font-bold mb-4 lg:mb-10">
        Top Rated Brands
      </h1>
      <div>
        {vendorData.length === 0 ? (
          <div className="text-center py-4 text-gray-500">
            No top-rated vendors available at the moment.
          </div>
        ) : (
          <Swiper
            slidesPerView={2}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 4, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 30 },
              1024: { slidesPerView: 5, spaceBetween: 10 },
              1280: { slidesPerView: 6, spaceBetween: 10 },
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {vendorData.map((data, index) => (
              <SwiperSlide key={index}>
                <Link href={`/vendor/${data?.user?._id}`}>
                  <div className="slide-content mx-2">
                    {/* Vendor Image */}
                    {data?.user?.avatar ? (
                      <img
                        src={
                          data?.user?.avatar?.public_id &&
                          data?.user?.avatar?.secure_url.startsWith("/")
                            ? `${SERVER}${data?.user?.avatar?.secure_url}`
                            : data?.user?.avatar?.secure_url
                        }
                        className="rounded-2xl w-40 h-32 cursor-pointer bg-white shadow-lg border border-gray-400 mx-auto"
                        alt="Vendor Image"
                      />
                    ) : (
                      <img
                        src="/no-image.png"
                        className="rounded-2xl w-40 h-32 cursor-pointer bg-white shadow-lg border border-gray-400 mx-auto"
                        alt=""
                      />
                    )}

                    {/* Vendor Name */}
                    <h1 className="text-center lg:text-lg font-semibold text-sm my-2 capitalize">
                      {data?.user?.name}
                    </h1>

                    {/* Average Rating */}
                    <h1 className="flex items-center text-sm my-2 gap-1 text-orange-400 justify-center">
                      {data.averageRating > 0 ? (
                        <>
                          <FaStar />
                          <span>{data.averageRating.toFixed(1)}</span>
                        </>
                      ) : (
                        <span className="text-gray-500">No Rating</span>
                      )}
                    </h1>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default TopRated;
