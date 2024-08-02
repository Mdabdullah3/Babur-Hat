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
import useProductStore from "../../store/ProductStore";
import useUserStore from "../../store/userStore";

const Navbar = () => {
  const { user, fetchUser, logout } = useUserStore();
  useEffect(() => {
    fetchUser();
  }, [fetchUser, user]);

  const { cart } = useCartStore();
  const { suggestions, fetchSuggestions, setSearchTerm } = useProductStore();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setSearchTerm(value);
    if (value) {
      fetchSuggestions(value);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

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
            <div className="relative">
              <label className="input input-bordered rounded-full flex items-center gap-2 h-[52px] mx-auto">
                <input
                  type="text"
                  className="grow w-[23rem] placeholder:text-gray-500 text-black"
                  placeholder="Search products..."
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <div className="bg-black px-6 py-2 rounded-full">
                  <FiSearch className="text-white" size={29} />
                </div>
              </label>
              {showSuggestions && (
                <ul className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-50 py-2">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={suggestion._id}
                      className={`px-4 capitalize py-2 hover:bg-gray-100 cursor-pointer text-black ${
                        index !== suggestions.length - 1
                          ? "border-b border-gray-400"
                          : ""
                      }`}
                      onClick={() => {
                        router.push(`/products/${suggestion._id}`);
                        setShowSuggestions(false);
                        setSearchValue(suggestion.name);
                      }}
                    >
                      {suggestion.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
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
      </div>
    </nav>
  );
};

export default Navbar;
