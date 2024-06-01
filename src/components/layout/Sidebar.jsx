"use client";
import Link from "next/link";
import { BiSolidCategoryAlt, BiSolidUserRectangle } from "react-icons/bi";
import { CiShoppingBasket } from "react-icons/ci";
import { FaMoneyCheck, FaUser } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { IoIosRocket } from "react-icons/io";
const Sidebar = () => {
  const menu = [
    {
      id: 1,
      name: "Vendor",
      icon: <FaUser />,
      route: "/",
    },
    {
      id: 2,
      name: "Customer",
      icon: <BiSolidUserRectangle />,
      route: "/",
    },
    {
      id: 3,
      name: "Categories",
      icon: <BiSolidCategoryAlt />,
      route: "/",
    },
    {
      id: 4,
      name: "Products",
      icon: <FaCartFlatbed />,
      route: "/admin/dashboard/products",
    },
    {
      id: 5, 
      name: "Order & Review",
      icon: <CiShoppingBasket  />,
      route: "/"
    },
    {
      id: 6,
      name: "Finance",
      icon: <FaMoneyCheck />,
      route: "/"
    },
    {
      id:7,
      name:"Shipment",
      icon: <ImLocation />,
      route: "/"
    },
    {
      id:8,
      name: "Add Manager",
      icon: <IoIosRocket />,
      route: "/"
    },
    {
      id:8,
      name: "Add Manager",
      icon: <IoIosRocket />,
      route: "/"
    },
    {
      id: 9,
      name: ""
    }
  ];
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
