import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Privacy Policy
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Effective Date: 01.01.2025
          </p>
        </header>

        <div className="bg-white shadow-md rounded-lg p-6 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              1. Information We Collect
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">
                  1.1 Personal Information
                </h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Shipping and Billing Address</li>
                  <li>Payment Details (stored securely)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">
                  1.2 Account Information
                </h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Username</li>
                  <li>Password (encrypted)</li>
                  <li>Order History</li>
                  <li>Wishlist or Saved Items</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">
                  1.3 Technical Information
                </h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>IP Address</li>
                  <li>Browser Type</li>
                  <li>Device Information</li>
                  <li>Location Data (if permitted)</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">1.4 Usage Data</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Pages viewed</li>
                  <li>Products searched</li>
                  <li>Clickstream data</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              2. How We Use Your Information
            </h2>
            <ul className="list-decimal list-inside text-gray-600 mt-4 space-y-2">
              <li>Order fulfillment and communication about your orders.</li>
              <li>
                Personalization through tailored recommendations and promotions.
              </li>
              <li>Sending updates, promotions, and account notifications.</li>
              <li>Enhancing security and preventing unauthorized access.</li>
              <li>Conducting analytics to improve our Platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              3. Sharing Your Information
            </h2>
            <p className="text-gray-600 mt-4">
              We do not sell your personal data. We share data with:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Vendors to fulfill orders.</li>
              <li>
                Service providers for payments, deliveries, and analytics.
              </li>
              <li>Authorities to comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              4. Data Retention
            </h2>
            <p className="text-gray-600 mt-4">
              We retain data as long as necessary to provide services or comply
              with legal obligations. You can request data deletion through
              support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              5. Security Measures
            </h2>
            <p className="text-gray-600 mt-4">
              We use encryption, regular updates, and access controls to protect
              your data, but no system is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              6. Your Rights
            </h2>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Access and correct your data via account settings.</li>
              <li>
                Request data deletion or opt out of marketing communications.
              </li>
              <li>
                Request a copy of your data or withdraw consent for processing.
              </li>
            </ul>
          </section>

          <footer className="mt-10 text-center text-gray-600">
            <p>If you have questions, contact us at:</p>
            <p className="mt-2">Email: support@readyhow.com</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
