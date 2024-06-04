import React, { useState } from "react";
import InputSearch from "../../../../components/common/InputSearch";

const Customer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };
  return (
    <section className="px-5">
      <h1 className="text-3xl text-gray-700 font-bold my-5">Customer</h1>
      <div>
        <div className="flex-1">
          <InputSearch
            placeholder="Search For Vendor.."
            value={searchTerm}
            onChange={(value) => setSearchTerm(value)}
            onSearch={handleSearch}
          />
        </div>
      </div>
    </section>
  );
};

export default Customer;
