import React from "react";
import Report from "../../components/Report";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "Report - Ready How",
  description: "Report section of Ready How",
};
const ReportPage = () => {
  return (
    <main>
      <Navbar />
      <section>
        <Report />
      </section>
      <Footer />
    </main>
  );
};

export default ReportPage;
