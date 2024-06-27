"use client";
import React, { useState } from "react";
import Profile from "./Profile";
import MyOrder from "./MyOrder";
import RecentProducts from "./RecentProducts";
const ProfileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("My Profile");
  const menu = [
    "My Profile",
    "My Orders",
    "My Reviews",
    "Recent Product",
    "Logout",
  ];
  return (
    <section className="">
      <div className="grid w-11/12 mx-auto grid-cols-5 pt-10">
        <div className="flex-col flex gap-5">
          {menu.map((item, index) => (
            <button
              key={index}
              className={`font-bold pb-2 cursor-pointer ${
                activeMenu === item ? "text-primary" : ""
              }`}
              onClick={() => setActiveMenu(item)}
            >
              {item}
            </button>
          ))}
        </div>
        {activeMenu === "My Profile" && (
          <div className="col-span-4">
            <Profile />
          </div>
        )}
        {activeMenu === "My Orders" && (
          <div className="col-span-4">
            <MyOrder />
          </div>
        )}
        {activeMenu === "Recent Product" && (
          <div className="col-span-4">
            <RecentProducts />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfileMenu;
