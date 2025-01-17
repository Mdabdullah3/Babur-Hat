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
      <section className="md:w-11/12 w-full mx-auto">
        <h1 className="md:text-2xl font-bold md:my-10 my-6">Best Deal</h1>
      </section>
      <section>
        <BestDealProducts />
      </section>
      <Footer />
    </main>
  );
};

export default BestDeal;
