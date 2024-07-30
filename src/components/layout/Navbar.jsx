/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import Link from "next/link";
import useAuthStore from "../../store/authStore";
import useCartStore from "../../store/cartStore";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { SERVER } from "../../config";
import useUserStore from "../../store/userStore";
import { category } from "../../utils/constants";

const Navbar = () => {
  // const { user, logout } = useAuthStore((state) => ({
  //   user: state.user,
  //   logout: state.logout,
  // }));
  const { user, fetchUser, logout } = useUserStore();
  useEffect(() => {
    fetchUser();
  }, [fetchUser, user]);
  const { cart } = useCartStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  // const displayUser = user?.data;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <nav className="relative">
      <div className="bg-black text-white py-4">
        <div className="lg:w-11/12 w-[95%] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <label htmlFor="my-drawer" className="md:hidden cursor-pointer">
              <MdMenu size={28} />
            </label>
            <Link href="/">
              <div className="text-3xl font-bold cursor-pointer">
                <h1 className="lg:text-3xl text-xl font-bold cursor-pointer">
                  Babur Hut
                </h1>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <label className="input input-bordered rounded-full flex items-center gap-2 h-[52px] mx-auto">
              <input
                type="text"
                className="grow w-[23rem]"
                placeholder="Bluetooth Headphones"
              />
              <div className="bg-black px-6 py-2 rounded-full">
                <FiSearch className="text-white" size={29} />
              </div>
            </label>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              {user?.avatar ? (
                <img
                  src={`${SERVER}${user?.avatar?.secure_url}`}
                  alt="User Avatar"
                  className="md:w-12 w-6 h-6 md:h-12 rounded-full"
                />
              ) : (
                <Link href="/auth/login">
                  <h1 className="lg:text-3xl text-xl">
                    <FaRegUser />
                  </h1>
                </Link>
              )}
              {user ? (
                <div className="tracking-wider hidden lg:block">
                  <h1 className="text-[13px]">Welcome</h1>
                  <div className="dropdown dropdown-hover">
                    <div
                      tabIndex={0}
                      role="button"
                      className="flex items-center text-sm font-bold"
                    >
                      <div className="capitalize tracking-wider flex items-center">
                        {user?.name} <MdKeyboardArrowDown size={20} />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-50 menu shadow bg-black cursor-pointer text-white rounded-box w-52 flex flex-col gap-3 text-md tracking-wider py-4 px-6"
                    >
                      <Link href="/profile">
                        <h1 className="block">My Profile</h1>
                      </Link>
                      <hr />
                      <Link href="/wishlist">
                        <h1 className="block">Wishlist</h1>
                      </Link>
                      <hr />
                      <button onClick={handleLogout} className="text-start">
                        Log Out
                      </button>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="tracking-wider hidden lg:block">
                  <h1 className="text-[13px]">Welcome</h1>
                  <div className="dropdown dropdown-hover relative">
                    <div
                      tabIndex={0}
                      role="button"
                      className="flex items-center text-sm font-bold"
                    >
                      Sign In / Register <MdKeyboardArrowDown size={20} />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-50 menu absolute top-0 shadow bg-black cursor-pointer text-white rounded-box w-auto py-4 px-6"
                    >
                      <Link href="/auth/login">
                        <h1 className="block">Login</h1>
                      </Link>
                      <Link href="/auth/register">
                        <h1 className="mt-4 block">Register</h1>
                      </Link>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <Link href="/cart">
              <div className="flex items-center gap-4 cursor-pointer">
                <h1 className="lg:text-3xl text-2xl">
                  <PiShoppingCartSimpleBold />
                </h1>
                <div className="hidden md:block">
                  <h1 className="bg-white px-3 rounded-full py-0 text-black">
                    {cart?.length || 0}
                  </h1>
                  <h1>Cart</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <ul className="hidden md:flex items-center gap-8 text-md tracking-wider font-bold -ml-28">
            <li className="text-[#E92769]">Recent Events</li>
            <li>New Arrival</li>
            <li>Top Rated</li>
            <li>Best Deals</li>
            <li>Top Rated</li>
          </ul>
        </div>
        <div className="block md:hidden lg:mt-4 px-4">
          <label className="input input-bordered rounded-full flex items-center gap-2 lg:h-[52px] h-[44px] mx-auto">
            <input
              type="text"
              className="grow w-full"
              placeholder="Bluetooth Headphones"
            />
            <div className="bg-black px-4 py-2 rounded-full">
              <FiSearch className="text-white text-xl lg:text-2xl" />
            </div>
          </label>
        </div>
      </div>
      <div className="drawer z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4  min-h-full bg-base-200 text-base-content z-50">
            {category?.map((cat, index) => (
              <Link
                href="/shop"
                key={index}
                className="flex items-center gap-3 mt-4 tracking-wider text-gray-600"
              >
                <h1 className="bg-gray-200 px-1 py-1 rounded-full">
                  {cat?.icon}
                </h1>
                <h1>{cat?.name}</h1>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
