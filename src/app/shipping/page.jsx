import React from "react";
import ProductSummery from "../../components/Shipping/ProductSummery";
import ShippingForm from "../../components/Shipping/ShippingForm";
export const metadata = {
  title: "Shipping",
};
const Shipping = () => {
  return (
    <div>
      <section className="w-11/12 mx-auto mt-10">
        <h1 className="text-3xl font-bold tracking-widest ">Checkout</h1>
        <div>
          <h1 className="tracking-wider mt-1">
            Returning customer?
            <span className="font-[500] ml-1">Click here to login</span>
          </h1>
        </div>
        <div className="mt-14 px-10">
          <div className="flex gap-12 items-start">
            <ShippingForm />
            <ProductSummery />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shipping;
