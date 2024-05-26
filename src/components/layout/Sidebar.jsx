// components/layout/Sidebar.js
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full p-4">
      <nav>
        <ul>
          <li>
            <Link href="/admin/dashboard">
              <a className="block py-2">Babur Hut</a>
            </Link>
          </li>
          <li>
            <Link href="/admin/dashboard/products">
              <a className="block py-2">Products</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile">
              <a className="block py-2">Profile</a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
