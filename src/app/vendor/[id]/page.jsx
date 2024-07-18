import Footer from "../../../components/layout/Footer";
import Navbar from "../../../components/layout/Navbar";
import SingleVendor from "../../../components/SingleVendor";
export const metadata = {
  title: "Md Abdullah - Babur Hat",
  description: "Single Vendor section of Babur Hat",
};
const page = () => {
  return (
    <main>
      <Navbar />
      <SingleVendor />
      <Footer />
    </main>
  );
};

export default page;
