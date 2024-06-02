/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import InputSearch from "../../common/InputSearch";
import { vendorProducts } from "../../../utils/constants";
const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeMenu, setActiveMenu] = useState(1);
  const handleSearch = (value) => {
    console.log("Search term:", value);
  };
  const approvedProduct = vendorProducts?.filter(
    (product) => product.status === "approved"
  );
  const pendingProduct = vendorProducts?.filter(
    (product) => product.status === "pending"
  );
  const deletedProduct = vendorProducts?.filter(
    (product) => product.status === "deleted"
  );
  const suspendedProduct = vendorProducts?.filter(
    (product) => product.status === "suspended"
  );
  const menu = [
    {
      id: 1,
      name: "All",
      items: vendorProducts.length,
    },
    {
      id: 2,
      name: "Online",
      items: approvedProduct.length,
    },
    {
      id: 3,
      name: "Pending",
      items: pendingProduct.length,
    },
    {
      id: 4,
      name: "Suspended",
      items: suspendedProduct.length,
    },
    {
      id: 5,
      name: "Deleted",
      items: deletedProduct.length,
    },
  ];
  return (
    <section className="py-10">
      <InputSearch
        placeholder="Search For Product.."
        value={searchTerm}
        onChange={(value) => setSearchTerm(value)}
        onSearch={handleSearch}
      />
      <div className="flex items-center justify-center border-b-2 gap-10 mt-10">
        {menu.map((item) => (
          <>
            <button
              className={`font-bold pb-2 ${
                activeMenu === item.id
                  ? "text-primary border-b-2 border-primary"
                  : ""
              }`}
            >
              {item.name}
            </button>
          </>
        ))}
      </div>
      <div>
        <table className="table-auto w-full overflow-auto">
          <thead>
            <tr className="bg-primary/40 text-center font-mono ">
              <th
                className="
                               w-1/6
                               min-w-[160px]
                              text-sm
                               font-semibold
                               text-secondary
                               py-4
                               lg:py-4
                               px-3
                               lg:px-4
                               border-l border-transparent
                               font-mono
                               "
              >
                Image
              </th>
              <th
                className="
                               w-1/6
                               min-w-[160px]
                              text-sm
                               font-semibold
                               text-secondary
                               py-4
                               lg:py-4
                               px-3
                               lg:px-4
                               "
              >
                Product Name
              </th>
              <th
                className="
                               w-1/6
                               min-w-[160px]
                              text-sm
                               font-semibold
                               text-secondary
                               py-4
                               lg:py-4
                               px-3
                               lg:px-4
                               "
              >
                Sku
              </th>
              <th
                className="
                               w-1/6
                               min-w-[160px]
                              text-sm
                               font-semibold
                               text-secondary
                               py-4
                               lg:py-4
                               px-3
                               lg:px-4
                               "
              >
                Price
              </th>
              <th
                className="
                               w-1/6
                               min-w-[160px]
                              text-sm
                               font-semibold
                               text-secondary
                               py-4
                               lg:py-4
                               px-3
                               lg:px-4
                               "
              >
                status
              </th>
              <th
                className="
                               w-1/6
                               min-w-[160px]
                              text-sm
                               font-semibold
                               text-secondary
                               py-4
                               lg:py-4
                               px-3
                               lg:px-4
                               "
              >
                Date
              </th>
              <th
                className="
                               w-1/6
                               min-w-[160px]
                              text-sm
                               font-semibold
                               text-secondary
                               py-4
                               lg:py-4
                               px-3
                               lg:px-4
                               "
              >
                Action
              </th>
            </tr>
          </thead>
          {vendorProducts?.map((item) => (
            <tbody key={item?.id}>
              <tr className="border-r border-l border-gray-300 border-b">
                <td>
                  <img className="w-20 h-20 mx-auto" src={item?.img} alt="" />
                </td>
                <td
                  className="
                               text-center text-dark
                               font-medium
                               text-secondary
                               py-5 text-sm
                                bg-transparent
                               border-b border-l border-r border-gray-300
                               "
                >
                  {item?.name}
                </td>

                <td
                  className="
                               text-center text-dark
                               font-medium
                               text-secondary
                               py-5
                               px-2 bg-transparent
                               border-b border-r border-gray-300
                               "
                >
                  {item?.sku}
                </td>
                <td
                  className="
                               text-center text-dark
                               font-medium
                               text-secondary
                               py-5
                               px-2 bg-transparent
                               border-b border-r border-gray-300
                               "
                >
                  {item?.price}
                </td>
                <td
                  className="
                               text-center text-dark
                               font-medium
                               text-secondary
                               py-5
                               px-2 cursor-pointer
                               bg-transparent
                               border-b border-r border-gray-300
                               "
                >
                  {item?.status}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};

export default Products;
