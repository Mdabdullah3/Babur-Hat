"use client";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  console.log(user);
  useEffect(() => {
    try {
      const userData = localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error("Failed to parse user data from localStorage:", error);
      localStorage.removeItem("user");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/auth/login");
  };

  return (
    <nav>
      <div className="bg-black text-white py-4">
        <div className="w-11/12 mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-3xl font-bold cursor-pointer">
              <h1 className="text-3xl font-bold cursor-pointer">Babur Hut</h1>
            </Link>
            <div>
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
                <div>
                  <FaRegUser size={30} />
                </div>
                {user ? (
                  <div className="tracking-wider">
                    <h1 className="text-[13px]">Welcome, {user?.data.name}</h1>
                    <button
                      onClick={handleLogout}
                      className="flex items-center text-sm font-bold"
                    >
                      Logout <MdKeyboardArrowDown size={20} />
                    </button>
                  </div>
                ) : (
                  <div className="tracking-wider">
                    <h1 className="text-[13px]">Welcome</h1>
                    <div className="dropdown dropdown-hover">
                      <div
                        tabIndex={0}
                        role="button"
                        className="flex items-center text-sm font-bold"
                      >
                        Sign In / Register <MdKeyboardArrowDown size={20} />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-50 menu shadow bg-black cursor-pointer text-white rounded-box w-auto py-4 px-6"
                      >
                        <Link href="/auth/login">Login</Link>
                        <Link href="/auth/register" className="mt-4">
                          Register
                        </Link>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/cart"
                className="flex items-center gap-4 cursor-pointer"
              >
                <PiShoppingCartSimpleBold size={32} />
                <div>
                  <h1 className="bg-white px-3 rounded-full py-0 text-black">
                    {12}
                  </h1>
                  <h1>Cart</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <ul className="flex items-center gap-8 text-md tracking-wider font-bold -ml-28">
            <li className="text-[#E92769]">Recent Events</li>
            <li>New Arrival</li>
            <li>Top Rated</li>
            <li>Best Deals</li>
            <li>Top Rated</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
