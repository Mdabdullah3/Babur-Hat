import React from "react";
import ProductSummery from "../../components/Shipping/ProductSummery";
import ShippingForm from "../../components/Shipping/ShippingForm";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
export const metadata = {
  title: "Shipping",
};
const Shipping = () => {
  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default Shipping;
