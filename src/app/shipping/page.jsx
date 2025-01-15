import React from "react";
import ShippingForm from "../../components/Shipping/ShippingForm";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "Shipping - Ready How",
  description: "Shipping section of Ready How",
};
const Shipping = () => {
  return (
    <div>
      <Navbar />
      <section className="md:w-11/12 w-full mx-auto md:mt-10 mt-3">
        <h1 className="md:text-3xl text-2xl font-bold tracking-widest text-center md:text-start ">
          Checkout
        </h1>
        <div className="md:mt-14 mt-2 px-10">
          <ShippingForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shipping;
