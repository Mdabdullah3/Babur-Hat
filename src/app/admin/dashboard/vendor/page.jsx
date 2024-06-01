"use client";
import React, { useState } from "react";
import InputSearch from "../../../../components/common/InputSearch";
import PrimaryButton from "../../../../components/common/PrimaryButton";
const Vendor = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    console.log("Search term:", value);
  };
  return (
    <div>
      <h1 className="text-3xl text-gray-700 font-bold">Vendor</h1>
      <div className="w-10/12 mx-auto py-6 flex items-center justify-between">
        <InputSearch
          placeholder="Search For Vendor.."
          value={searchTerm}
          onChange={(value) => setSearchTerm(value)}
          onSearch={handleSearch}
        />
        <PrimaryButton value="Pending Request" />
      </div>
    </div>
  );
};

export default Vendor;
