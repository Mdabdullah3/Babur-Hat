"use client";
import React, { useState } from "react";
import { vendorEvents } from "../../../utils/constants";
import TableHead from "../../common/TableHead";
const VendorCampaign = () => {
  const [selectedMenu, setSelectedMenu] = useState(1);
  const handleMenuClick = (id) => {
    setSelectedMenu(id);
  };
  const header = [
    "Event Id",
    "Payment",
    "Discount",
    "Date",
    "Status",
    "Action",
  ];
  const menu = [
    {
      id: 1,
      name: "All",
      items: 5,
    },
    {
      id: 2,
      name: "Previous Joined Event",
      items: 10,
    },
  ];
  return (
    <section className="w-11/12 mx-auto">
      <div></div>
      {vendorEvents.length > 0 ? (
        <div>
          <TableHead header={header} />
        </div>
      ) : (
        <div className="text-center">No data found</div>
      )}
    </section>
  );
};

export default VendorCampaign;
