/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import EventProducts from "../../components/Event";
export const metadata = {
  title: "Event - Babur Hat",
  description: "Event section of Babur Hat",
};
const Event = () => {
  return (
    <main>
      <Navbar />
      <section>
        <div className=" relative">
          <img src="/cover.jpg" alt="" />
          <h1 className="text-2xl font-bold mb-5 absolute top-16 left-10">
            Events
          </h1>
        </div>
        <EventProducts />
      </section>
      <Footer />
    </main>
  );
};

export default Event;
