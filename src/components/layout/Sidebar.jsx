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
      icon: <CiShoppingBasket />,
      route: "/",
    },
    {
      id: 6,
      name: "Finance",
      icon: <FaMoneyCheck />,
      route: "/",
    },
    {
      id: 7,
      name: "Shipment",
      icon: <ImLocation />,
      route: "/",
    },
    {
      id: 8,
      name: "Add Manager",
      icon: <IoIosRocket />,
      route: "/",
    },
    {
      id: 8,
      name: "Add Manager",
      icon: <IoIosRocket />,
      route: "/",
    },
    {
      id: 9,
      name: "Vouchers",
      icon: <BsTicketDetailed />,
      route: "/",
    },
    {
      id: 10,
      name: "Event Manager",
      icon: <BsFillHandIndexFill />,
      route: "/",
    },
    {
      id: 11,
      name: "Message Center",
      icon: <FaRocketchat />,
      route: "/",
    },
    {
      id: 12,
      name: "Support",
      icon: <BiSupport />,
      route: "/",
    },
  ];
  return (
    <div className="w-64 shadow-xl bg-white text-black h-full">
      <div className="bg-orange-400 text-white">
        <div className="flex items-center justify-between">
          <Link href="/admin/dashboard">
            <h1 className="block pl-4 py-4 text-xl  px-2 font-semibold">
              Dashboard
            </h1>
            <MdMenu size={30} className="text-white" />
          </Link>
        </div>
      </div>
      <div className="px-4 ">
        <ul className="text-xl font-semibold space-y-4">
          {menu.map((item) => (
            <>
              <li className="flex items-center gap-5" key={item?.id}>
                <h1>{item?.icon}</h1>
                <h1>{item?.name}</h1>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
