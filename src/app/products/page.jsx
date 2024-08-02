/* eslint-disable @next/next/no-img-element */
import DeafultProducts from "../../components/Home/DeafultProducts";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
export const metadata = {
  title: "New Arrival - Babur Hat",
  description: "New Arrival section of Babur Hat",
};
const Products = () => {
  return (
    <main>
      <Navbar />
      <section>
        <div className=" relative">
          <img src="/cover.jpg" alt="" />
          <h1 className="text-2xl font-bold mb-5 absolute top-16 left-10">
            Products
          </h1>
        </div>
      </section>
      <section>
        <DeafultProducts />
      </section>
      <Footer />
    </main>
  );
};

export default Products;
