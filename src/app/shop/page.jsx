import React, { Suspense } from "react";
import ShopComponent from "../../components/ShopComponent";

export const metadata = {
  title: "Shop - Babur Hat",
  description: "Shop section of Babur Hat",
}; 
const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopComponent />
    </Suspense>
  );
};

export default page;
