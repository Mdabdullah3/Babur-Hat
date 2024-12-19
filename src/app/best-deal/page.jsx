/* eslint-disable @next/next/no-img-element */
import React from "react";
import BestDealProducts from "../../components/BestDeal";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
export const metadata = {
  title: "Best Deal - Ready How",
  description: "Best Deal section of Ready How",
};
const BestDeal = () => {
  return (
    <main>
      <Navbar />
      <section>
        <div className=" relative">
          <img src="/cover.jpg" alt="" />
          <h1 className="text-2xl font-bold mb-5 absolute top-16 left-10">
            Best Deal Products
          </h1>
        </div>

        <BestDealProducts />
      </section>
      <Footer />
    </main>
  );
};

export default BestDeal;
