import React from "react";
import ShippingForm from "../../components/Shipping/ShippingForm";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "Shipping - Babur Hat",
  description: "Shipping section of Babur Hat",
};
const Shipping = () => {
  return (
    <div>
      <Navbar />
      <section className="w-11/12 mx-auto mt-10">
        <h1 className="text-3xl font-bold tracking-widest ">Checkout</h1>
        <div className="mt-14 px-10">
          <ShippingForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shipping;
