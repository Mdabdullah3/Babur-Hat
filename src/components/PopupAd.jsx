/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { API_URL, SERVER } from "../config";

const PopupAd = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await fetch(`${API_URL}/others`);
        const data = await response.json();
        const filterBanner = data?.data?.filter(
          (item) => item?.banner === "PopUp"
        );
        setImages(filterBanner || []); 
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };
    fetchBannerData();
  }, []);

  useEffect(() => {
    const popupShown = sessionStorage.getItem("popupAdClosed");

    if (!popupShown) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("popupAdClosed", "true");
  };

  if (!isVisible || images?.length === 0) {
    return null; 
  }

  const desktopImage = images[0]?.popupImage?.secure_url || "";
  const mobileImage = images[0]?.popupImageMobile?.secure_url || "";

  return (
    <div>
      {images?.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg shadow-lg text-center relative bg-white">
            {/* Desktop Image */}
            {desktopImage && (
              <img
                src={`${SERVER}${desktopImage}`}
                alt="Popup Ad"
                className="hidden md:block w-96 h-auto"
              />
            )}
            {/* Mobile Image */}
            {mobileImage && (
              <img
                src={`${SERVER}${mobileImage}`}
                alt="Popup Ad"
                className="block md:hidden w-60 h-auto"
              />
            )}
            <button
              className=" bg-red-500 text-white px-4 py-2 rounded-full absolute -top-2 -right-2"
              onClick={handleClose}
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupAd;
