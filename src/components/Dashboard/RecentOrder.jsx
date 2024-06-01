/* eslint-disable @next/next/no-img-element */
import React from "react";
import { reacentOrder } from "../../utils/constants";
const RecentOrder = () => {
  return (
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
              Product
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
              Name
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
              Customer
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
              Product ID
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
              Quantity
            </th>
          </tr>
        </thead>
        {reacentOrder?.map((item) => (
          <tbody key={item?._id}>
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
                {item?.customerNumber}
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
                {item?.productId ? item.productId : "No Code"}
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
                {item?.quantity}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default RecentOrder;
