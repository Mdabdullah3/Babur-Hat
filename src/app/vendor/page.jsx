/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../../components/layout/Navbar";
import TopRated from "../../components/Home/TopRated";
import Footer from "../../components/layout/Footer";
export const metadata = {
  title: "Vendor - Babur Hat",
  description: "Vendor section of Babur Hat",
};
const VendorShop = () => {
  return (
    <main>
      <Navbar />
      <section>
        <div className=" relative">
          <img src="/cover.jpg" alt="" />
          <h1 className="text-2xl font-bold mb-5 absolute top-16 left-10">
            Vendors
          </h1>
        </div>
      </section>
      <section>
        <TopRated />
      </section>
      <Footer />
    </main>
  );
};

export default VendorShop;
