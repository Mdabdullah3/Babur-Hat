"use client";
import React, { useState } from "react";
import Profile from "./Profile";
import MyOrder from "./MyOrder";
import RecentProducts from "./RecentProducts";
import UpdatePassword from "./UpdatePassword";
import MyReview from "./MyReview";
import { MdMenu } from "react-icons/md";
import useUserStore from "../../store/userStore";
import { useRouter } from "next/navigation";

const ProfileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("My Orders");
  const { logout } = useUserStore();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };
  const menu = [
    "My Orders",
    "My Profile",
    "My Reviews",
    "Recent Product",
    "Update Password",
  ];

  return (
    <section className="w-full">
      <div className="lg:grid lg:grid-cols-5 lg:w-11/12 mx-auto pt-4 lg:pt-10">
        <div className="lg:hidden z-50">
          <div className="drawer">
            <input
              id="profile_drawer"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content ml-4">
              <label
                htmlFor="profile_drawer"
                className="md:hidden cursor-pointer "
              >
                <MdMenu size={28} />
              </label>
            </div>
            <div className="drawer-side z-50">
              <label
                htmlFor="profile_drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {menu?.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`font-bold pb-2 cursor-pointer ${
                        activeMenu === item ? "text-primary" : ""
                      }`}
                      onClick={() => setActiveMenu(item)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-5">
          {menu.map((item, index) => (
            <h1
              key={index}
              className={`font-bold pb-2 cursor-pointer  ${
                activeMenu === item ? "text-primary" : ""
              }`}
              onClick={() => setActiveMenu(item)}
            >
              {item}
            </h1>
          ))}
        </div>

        <div className="col-span-4 mt-8 lg:mt-0">
          {activeMenu === "My Profile" && <Profile />}
          {activeMenu === "My Orders" && <MyOrder />}
          {activeMenu === "Recent Product" && <RecentProducts />}
          {activeMenu === "My Reviews" && <MyReview />}
          {activeMenu === "Update Password" && <UpdatePassword />}
        </div>
      </div>
    </section>
  );
};

export default ProfileMenu;
