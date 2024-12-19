import React, { Suspense } from "react";
import ShopComponent from "../../components/ShopComponent";

export const metadata = {
  title: "Shop - Ready How",
  description: "Shop section of Ready How",
};
const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopComponent />
    </Suspense>
  );
};

export default page;
