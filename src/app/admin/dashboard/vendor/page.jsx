"use client";
import React, { useState } from "react";
import InputSearch from "../../../../components/common/InputSearch";
import PrimaryButton from "../../../../components/common/PrimaryButton";
import { vendor } from "../../../../utils/constants";
import VendorCard from "../../../../components/Dashboard/Vendor/VendorCard";
const Vendor = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    console.log("Search term:", value);
  };
  return (
    <div>
      <h1 className="text-3xl text-gray-700 font-bold">Vendor</h1>
      <div className="w-10/12 mx-auto py-6 flex items-center justify-between gap-6">
        <div className="flex-1">
          <InputSearch
            placeholder="Search For Vendor.."
            value={searchTerm}
            onChange={(value) => setSearchTerm(value)}
            onSearch={handleSearch}
          />
        </div>
        <PrimaryButton value="Pending Request" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:w-11/12 mx-auto w-full mt-10">
        {vendor.map((item) => (
          <>
            <VendorCard item={item} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Vendor;
