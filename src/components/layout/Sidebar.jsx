"use client";
import Link from "next/link";
import {
  BiSolidCategoryAlt,
  BiSolidUserRectangle,
  BiSupport,
} from "react-icons/bi";
import { CiShoppingBasket } from "react-icons/ci";
import { FaMoneyCheck, FaRocketchat, FaUser } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { IoIosRocket } from "react-icons/io";
import { BsFillHandIndexFill, BsTicketDetailed } from "react-icons/bs";
const Sidebar = () => {
  const menu = [
    {
      id: 1,
      name: "Vendor",
      icon: <FaUser />,
      route: "/admin/dashboard/vendor",
    },
    {
      id: 2,
      name: "Customer",
      icon: <BiSolidUserRectangle />,
      route: "/admin/dashboard/customer",
    },
    {
      id: 3,
      name: "Categories",
      icon: <BiSolidCategoryAlt />,
      route: "/admin/dashboard/categories",
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
      icon: <CiShoppingBasket />,
      route: "/admin/dashboard",
    },
    {
      id: 6,
      name: "Finance",
      icon: <FaMoneyCheck />,
      route: "/admin/dashboard",
    },
    {
      id: 7,
      name: "Shipment",
      icon: <ImLocation />,
      route: "/admin/dashboard",
    },
    {
      id: 8,
      name: "Add Manager",
      icon: <IoIosRocket />,
      route: "/admin/dashboard",
    },
    {
      id: 9,
      name: "Vouchers",
      icon: <BsTicketDetailed />,
      route: "/admin/dashboard",
    },
    {
      id: 10,
      name: "Event Manager",
      icon: <BsFillHandIndexFill />,
      route: "/admin/dashboard",
    },
    {
      id: 11,
      name: "Message Center",
      icon: <FaRocketchat />,
      route: "/admin/dashboard",
    },
    {
      id: 12,
      name: "Support",
      icon: <BiSupport />,
      route: "/admin/dashboard",
    },
  ];
  return (
    <div className="w-64 shadow-xl bg-white text-black sticky top-0 h-screen">
      <div className="bg-orange-400 text-white">
        <div className="flex items-center justify-between px-2">
          <Link href="/admin/dashboard">
            <h1 className="block pl-4 py-4 text-xl   font-semibold">
              Dashboard
            </h1>
          </Link>
          <MdMenu size={30} className="text-white" />
        </div>
      </div>
      <div className="px-4 ">
        <ul className="text-xl flex-col flex font-semibold cursor-pointer space-y-5 mt-5">
          {menu.map((item) => (
            <>
              <Link href={item?.route}>
                <li className="flex items-center gap-5" key={item?.id}>
                  <h1>{item?.icon}</h1>
                  <h1 className="text-lg">{item?.name}</h1>
                </li>
              </Link>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
