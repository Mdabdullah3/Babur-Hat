/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import EventProducts from "../../components/Event";
export const metadata = {
  title: "Event - Ready How",
  description: "Event section of Ready How",
};
const Event = () => {
  return (
    <main>
      <Navbar />
      <section>
        <section className="md:w-11/12 w-full mx-auto">
          <h1 className="md:text-2xl font-bold md:my-10 my-6">Our Events</h1>
        </section>
        <EventProducts />
      </section>
      <Footer />
    </main>
  );
};

export default Event;
