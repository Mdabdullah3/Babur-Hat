/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../../components/layout/Navbar";
import TopRated from "../../components/Home/TopRated";
import Footer from "../../components/layout/Footer";
export const metadata = {
  title: "Vendor - Ready How",
  description: "Vendor section of Ready How",
};
const VendorShop = () => {
  return (
    <main>
      <Navbar />
      <section>
        <TopRated />
      </section>
      <Footer />
    </main>
  );
};

export default VendorShop;
