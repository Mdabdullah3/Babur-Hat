import Footer from "../../../components/layout/Footer";
import Navbar from "../../../components/layout/Navbar";
import SingleVendor from "../../../components/SingleVendor";
export const metadata = {
  title: "Vendor Profile - Babur Hat",
  description: "Single Vendor section of Babur Hat",
};
const page = ({ params }) => {
  const { id } = params;
  return (
    <main>
      <Navbar />
      <SingleVendor vendorId={id} />
      <Footer />
    </main>
  );
};

export default page;
