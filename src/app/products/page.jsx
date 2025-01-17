/* eslint-disable @next/next/no-img-element */
import DeafultProducts from "../../components/Home/DeafultProducts";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
export const metadata = {
  title: "New Arrival - Ready How",
  description: "New Arrival section of Ready How",
};
const Products = () => {
  return (
    <main>
      <Navbar />
      <section>
        <section className="md:w-11/12 w-full mx-auto">
          <h1 className="md:text-2xl font-bold md:my-10 my-6">New Arrival</h1>
        </section>
      </section>
      <section>
        <DeafultProducts />
      </section>
      <Footer />
    </main>
  );
};

export default Products;
