"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
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
      <div className="grid ">
        <div className="flex-col flex gap-5">
          {menu.map((item) => (
            <>
              <button
                className={`font-bold pb-2 ${
                  activeMenu === item
                    ? "text-primary border-b-2 border-primary"
                    : ""
                }`}
                onClick={() => setActiveMenu(item)}
              >
                {item}
              </button>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
