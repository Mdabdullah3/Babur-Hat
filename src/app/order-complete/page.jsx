import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "Order Complete - Ready How",
  description: "Order Complete section of Ready How",
};
const ThankYou = () => {
  return (
    <section>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center text-center">
            <FaCheckCircle className="text-green-500 text-5xl mb-4" />
            <h1 className="text-2xl font-semibold mb-2">
              Thank You for Your Order!
            </h1>
            <p className="text-gray-600 mb-6">
              We’ve received your order and send you a confirmation shortly.
            </p>
            <div className="flex space-x-4">
              <Link href="/profile">
                <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                  My Orders
                </button>
              </Link>
              <Link href="/">
                <button className="px-6 py-2 text-blue-500 bg-white border border-blue-500 rounded hover:bg-blue-50">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ThankYou;
