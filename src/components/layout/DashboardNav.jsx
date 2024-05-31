/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiSearch, FiAlignJustify } from "react-icons/fi";

const DashboardNav = () => {
  return (
    <nav className="sticky top-2 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl  p-2 backdrop-blur-lg bg-white/5">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1 flex items-center">
          <h1
            className="text-sm font-normal capitalize text-gray-700 hover:underline "
            to="#"
          >
            Welcome Back
          </h1>
        </div>
        <div className="shrink text-[33px] capitalize text-gray-700 ">
          <h1 to="#" className="font-bold capitalize hover:text-gray-700 ">
            Dashboard
          </h1>
        </div>
      </div>
      <span className="flex cursor-pointer text-xl text-gray-600 xl:hidden">
        <FiAlignJustify className="h-5 w-5" />
      </span>
      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-[#7090b0]  md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-[#F4F7FE] text-gray-700  xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 " />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full bg-[#F4F7FE] text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 sm:w-fit"
          />
        </div>
        <img
          src="https://images.pexels.com/photos/20304888/pexels-photo-20304888/free-photo-of-young-man-looking-out-the-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="h-10 w-10 rounded-full"
          alt=""
        />
      </div>
    </nav>
  );
};

export default DashboardNav;
