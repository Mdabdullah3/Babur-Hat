"use client";
import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Profile from "../../components/MyProfile/Profile";
const MyProfile = () => {
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
      <Navbar />
      <div className="grid w-11/12 mx-auto grid-cols-5 pt-10">
        <div className="flex-col flex gap-5">
          {menu.map((item) => (
            <>
              <h1
                className={`font-bold pb-2 ${
                  activeMenu === item ? "text-primary" : ""
                }`}
                onClick={() => setActiveMenu(item)}
              >
                {item}
              </h1>
            </>
          ))}
        </div>
        {activeMenu === "My Profile" && (
          <div className="col-span-4">
            <Profile />
          </div>
        )}
      </div>
    </section>
  );
};

export default MyProfile;
