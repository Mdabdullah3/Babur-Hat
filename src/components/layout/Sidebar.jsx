"use client";
import Link from "next/link";
import { BiSolidCategoryAlt, BiSolidUserRectangle } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-64 shadow-xl bg-white text-black h-full">
      <div className="flex items-center justify-between">
        <Link href="/admin/dashboard">
          <h1 className="block pl-4 py-4 text-xl bg-orange-400 w-54 text-white px-2 font-semibold">
            Dashboard
          </h1>
          <MdMenu size={30} className="text-white" />
        </Link>
      </div>
      <div className="px-4 ">
        <ul className="text-xl font-semibold">
          <li className="flex items-center gap-5">
            <FaUser />
            <h1>Vendor</h1>
          </li>
          <li className="flex items-center gap-5">
            <BiSolidUserRectangle />
            <h1>Customer</h1>
          </li>
          <Link
            href="/admin/dashboard/products"
            className="flex items-center gap-5"
          >
            <FaCartFlatbed /> <h1>Product</h1>
          </Link>
          <Link
            href="/admin/dashboard/products"
            className="flex items-center gap-5"
          >
            <BiSolidCategoryAlt /> <h1>Categories</h1>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
