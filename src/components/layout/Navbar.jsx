/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaHeart, FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import Link from "next/link";
import useCartStore from "../../store/cartStore";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";
import { API_URL, SERVER } from "../../config";
import useUserStore from "../../store/userStore";
import { category } from "../../utils/constants";
import useProductStore from "../../store/ProductStore";
import useCategoryStore from "../../store/CategoriesStore";
import { TbCategory2 } from "react-icons/tb";

const Navbar = () => {
  // const { user, logout } = useAuthStore((state) => ({
  //   user: state.user,
  //   logout: state.logout,
  // }));
  const [logo, setLogo] = useState([]);
  const { user, fetchUser, logout } = useUserStore();
  useEffect(() => {
    fetchUser();
  }, [fetchUser, user]);
  const { cart } = useCartStore();
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path) => (pathname === path ? "text-[#E92769]" : "");

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };
  useEffect(() => {
    const fetchLogoData = async () => {
      const response = await fetch(`${API_URL}/others`);
      const data = await response.json();
      const filterLogo = data?.data?.filter(
        (item) => item?.banner === "LogoImage"
      );
      setLogo(filterLogo);
    };
    fetchLogoData();
  }, []);
  const { suggestions, fetchSuggestions, setSearchTerm } = useProductStore();
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const { categories } = useCategoryStore();

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

  const handleSearchSubmit = () => {
    if (searchValue) {
      router.push(`/shop?search=${searchValue}`);
      setShowSuggestions(false);
    }
  };
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
                {logo?.map((item) => (
                  <img
                    key={item?._id}
                    src={`${SERVER}${item?.logo?.secure_url}`}
                    alt="logo"
                    className="w-40"
                  />
                ))}
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <label className="input input-bordered rounded-full flex items-center gap-2 h-[52px] mx-auto">
                <input
                  className="grow w-[23rem] text-black"
                  placeholder="Search products..."
                  value={searchValue}
                  onChange={handleSearchChange}
                  onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
                />
                <div className="bg-black px-6 py-2 rounded-full">
                  <FiSearch className="text-white" size={29} />
                </div>
              </label>
              {showSuggestions && (
                <ul className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                  {suggestions?.map((suggestion, index) => (
                    <li
                      key={suggestion._id}
                      className={`p-2 px-4 capitalize hover:bg-gray-100 cursor-pointer text-black ${
                        index !== suggestions.length - 1
                          ? "border-b border-gray-300"
                          : ""
                      }`}
                      onClick={() => {
                        router.push(`/shop?search=${suggestion?.name}`);
                        setShowSuggestions(false);
                        setSearchValue(suggestion?.name);
                      }}
                    >
                      {suggestion.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="flex items-center md:gap-8 gap-4">
            <div className="flex items-center lg:gap-4 dropdown dropdown-hover">
              {user?.avatar?.secure_url ? (
                <div className="relative">
                  <Link href="/profile">
                    <img
                      tabIndex={0}
                      role="button"
                      src={
                        user?.avatar?.public_id &&
                        user?.avatar?.secure_url.startsWith("/")
                          ? `${SERVER}${user?.avatar?.secure_url}`
                          : user?.avatar?.secure_url
                      }
                      alt="User Avatar"
                      className="md:w-12 w-10 h-10 md:h-12 rounded-full cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
                    />
                  </Link>
                </div>
              ) : (
                <Link href="/auth/login">
                  <h1 className="lg:text-3xl text-xl">
                    <FaRegUser />
                  </h1>
                </Link>
              )}

              {user ? (
                <div className="tracking-wider ">
                  <h1 className="text-[13px] hidden lg:block">Welcome</h1>
                  <div className="dropdown dropdown-hover ">
                    <div
                      tabIndex={0}
                      role="button"
                      className="flex items-center text-sm font-bold"
                    >
                      <div className="capitalize tracking-wider  items-center hidden lg:flex">
                        {user?.name} <MdKeyboardArrowDown size={20} />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-50 menu shadow bg-black cursor-pointer text-white rounded-box lg:w-52 w-28 flex flex-col gap-3 text-md tracking-wider mt-2 md:mt-0 py-4 lg:px-6 px-3 md:-ml-0 -ml-16 text-[12px] md:text-sm"
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
                      className="dropdown-content z-50 menu shadow bg-black cursor-pointer text-white rounded-box w-52 flex flex-col gap-3 text-md tracking-wider py-4 px-6"
                    >
                      <Link href="/auth/login">
                        <h1 className="block">Login</h1>
                      </Link>
                      <hr />
                      <Link href="/auth/register">
                        <h1 className=" block">Register</h1>
                      </Link>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <Link href="/cart">
              <div className="flex items-center md:gap-4 cursor-pointer">
                <h1 className="lg:text-3xl text-2xl">
                  <PiShoppingCartSimpleBold />
                </h1>
                <div className="">
                  <h1 className="bg-white md:px-3 px-2 mt-2 md:mt-0 rounded-full py-0 text-black">
                    {cart?.length || 0}
                  </h1>
                  <h1 className="hidden md:block">Cart</h1>
                </div>
              </div>
            </Link>
            <Link href="/wishlist">
              <h1 className="md:text-2xl text-xl hidden md:block">
                <FaHeart />
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <ul className="hidden md:flex items-center gap-8 text-md tracking-wider font-bold -ml-28">
            <Link href="/">
              <li className={`cursor-pointer ${isActive("/")}`}>Home</li>
            </Link>
            <Link href="/event">
              <li className={`cursor-pointer ${isActive("/event")}`}>Events</li>
            </Link>
            <Link href="/products">
              <li className={`cursor-pointer ${isActive("/products")}`}>
                New Arrival
              </li>
            </Link>
            <Link href="/shop">
              <li className={`cursor-pointer ${isActive("/shop")}`}>Shop</li>
            </Link>
            <Link href="/best-deal">
              <li className={`cursor-pointer ${isActive("/best-deal")}`}>
                Best Deals
              </li>
            </Link>
            <Link href="/vendor">
              <li className={`cursor-pointer ${isActive("/vendor")}`}>
                Top Rated
              </li>
            </Link>
          </ul>
        </div>
        <div className="block md:hidden lg:mt-4 px-4">
          <div className="relative">
            <label className="input input-bordered rounded-full flex items-center gap-2 lg:h-[52px] h-[44px] mx-auto">
              <input
                className="grow w-[23rem] text-black"
                placeholder="Search products..."
                value={searchValue}
                onChange={handleSearchChange}
                onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
              />

              <div className="bg-black px-4 py-2 rounded-full">
                <FiSearch className="text-white text-xl lg:text-2xl" />
              </div>
            </label>
            {showSuggestions && (
              <ul className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                {suggestions?.map((suggestion, index) => (
                  <li
                    key={suggestion._id}
                    className={`p-2 px-4 capitalize hover:bg-gray-100 cursor-pointer text-black ${
                      index !== suggestions.length - 1
                        ? "border-b border-gray-300"
                        : ""
                    }`}
                    onClick={() => {
                      router.push(`/products/${suggestion._id}`);
                      setShowSuggestions(false);
                      setSearchValue(suggestion?.name);
                    }}
                  >
                    {suggestion.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="drawer z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>

          <ul className="menu p-6 w-60  min-h-full bg-base-200 text-base-content z-50">
            <Link href="/categories">
              <h1 className="flex gap-2 items-center text-lg font-bold my-2">
                <TbCategory2 />
                Categories
              </h1>
            </Link>
            {categories?.map((cat, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredCategory(cat)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <Link
                  href={`/shop?category=${cat._id}`}
                  className="flex items-center gap-3 mt-2 tracking-wider
            text-gray-600"
                >
                  <img
                    src={`${SERVER}${cat?.iconImage?.secure_url}`}
                    className="w-4 h-4 rounded-full"
                    alt=""
                  />
                  <h1 className="capitalize">{cat?.name}</h1>
                </Link>

                {/* Hovered Subcategories Card */}
                {hoveredCategory === cat && cat.subCategories.length > 0 && (
                  <div className="absolute -top-1 left-full bg-white border border-gray-300 shadow-md rounded-lg p-2 w-36 z-10">
                    <ul>
                      {cat.subCategories.map((subCat) => (
                        <Link
                          href={`/shop?sub-category=${subCat?._id}`}
                          key={subCat?._id}
                          className="text-gray-700 mb-2 capitalize"
                        >
                          <li>{subCat?.name}</li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
