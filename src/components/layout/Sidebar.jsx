"use client";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <div>
        <ul>
          <li>
            <Link href="/admin/dashboard">
              <h1 className="block py-2">Babur Hut</h1>
            </Link>
          </li>
          <li>
            <Link href="/admin/dashboard/products">
              <h1 className="block py-2">Products</h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
