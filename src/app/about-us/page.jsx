export const metadata = {
  title: "About Us - Ready How",
  description: "About Us section of Ready How",
};
import Navbar from "../../components/layout/Navbar";

export default function About() {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <div className="bg-gray-50 text-gray-800">
        <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg">
              Discover the essence of Bangladeshi fashion with Ready How.
            </p>
          </div>
        </header>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Welcome to Ready How</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ready How is the first and only fashion-focused e-commerce
              platform in Bangladesh, bringing together the best of Bangladeshi
              fashion under one roof. Whether youre looking for trendy apparel,
              stylish accessories, or timeless traditional wear, we are your
              go-to destination for everything fashion.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
            <p className="text-lg text-center text-gray-600 leading-relaxed max-w-2xl mx-auto">
              To make fashion accessible, affordable, and sustainable for
              everyone, while showcasing the finest Bangladeshi brands to the
              world.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Premium Brands</h3>
                <p className="text-gray-600">
                  Top names in Bangladeshi fashion, known for their superior
                  quality and iconic designs.
                </p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Established Stores
                </h3>
                <p className="text-gray-600">
                  Physical shops with limited online presence, offering unique
                  products and local charm.
                </p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Online-Only Brands
                </h3>
                <p className="text-gray-600">
                  Emerging digital-first brands that bring fresh styles to the
                  table.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">
              Why Choose Us?
            </h2>
            <ul className="space-y-4 text-gray-600 max-w-2xl mx-auto">
              <li>
                <span className="font-semibold">Comprehensive Selection:</span>{" "}
                All prominent Bangladeshi fashion brands, available in one
                place.
              </li>
              <li>
                <span className="font-semibold">Convenience:</span> Seamless
                shopping experience via our website and mobile apps on iOS and
                Android.
              </li>
              <li>
                <span className="font-semibold">Affordability:</span>{" "}
                Competitive pricing with exclusive discounts and promotions.
              </li>
              <li>
                <span className="font-semibold">Global Reach:</span> We bring
                Bangladeshi fashion to customers worldwide, ensuring
                high-quality garments at affordable prices.
              </li>
            </ul>
          </div>
        </section>

        <footer className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Ready How. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
