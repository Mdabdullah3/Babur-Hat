import React from "react";
import { vendorEvent } from "../../../utils/constants";
import TableHead from "../../common/TableHead";
const VendorCampaign = () => {
  const header = [
    "Event Id",
    "Payment",
    "Discount",
    "Date",
    "Status",
    "Action",
  ];
  return (
    <section>
      {vendorEvent.length > 0 ? (
        <div>
            <TableHead />
        </div>
      ) : (
        <div className="text-center">No data found</div>
      )}
    </section>
  );
};

export default VendorCampaign;
