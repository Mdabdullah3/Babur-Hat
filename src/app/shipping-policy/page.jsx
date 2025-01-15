import Navbar from "../../components/layout/Navbar";
import React from "react";
export const metadata = {
  title: "Shipping Policy - Ready How",
  description: "Shipping Policy of Ready How",
};
const ShippingPolicy = () => {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <div className="container mx-auto p-6">
        {/* English Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Shipping Policy</h1>
          <p>
            Welcome to Ready How! Our shipping policy aims to provide clear
            information about our order delivery process. This policy applies to
            all orders placed through our website and mobile applications.
          </p>
          <h2 className="text-2xl font-semibold mt-6">1. Delivery Areas</h2>
          <p>
            Ready How currently delivers across Bangladesh and plans to expand
            internationally in the future. Delivery areas will be specified
            during the checkout process. Customers must ensure their delivery
            address is accurate and falls within our serviceable zones.
          </p>
          <h2 className="text-2xl font-semibold mt-6">2. Delivery Time</h2>
          <h3 className="text-xl font-semibold mt-4">
            2.1 Estimated Delivery Time
          </h3>
          <p>
            Orders are usually processed within 1-2 business days after
            confirmation. Delivery time depends on the following factors:
          </p>
          <ul className="list-disc pl-6">
            <li>Vendor processing time.</li>
            <li>Delivery location.</li>
            <li>Availability of logistics partners.</li>
          </ul>
          <p>
            Standard delivery time for domestic orders is 3-7 business days.
          </p>
          <h3 className="text-xl font-semibold mt-4">2.2 Express Delivery</h3>
          <p>
            Express delivery may be available for selected products and
            locations. Additional charges apply for this service.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. Delivery Charges</h2>
          <h3 className="text-xl font-semibold mt-4">
            3.1 Domestic Shipping Fees
          </h3>
          <p>
            Shipping charges are calculated based on the order value, weight,
            and destination. Free shipping promotions may apply for orders
            exceeding a specified amount, as mentioned on the website.
          </p>
          <h3 className="text-xl font-semibold mt-4">
            3.2 International Shipping
          </h3>
          <p>
            (When available) Delivery charges for international orders will be
            determined during checkout based on the destination, weight, and
            shipping method. Customs duties, import taxes, and other additional
            fees are the responsibility of the customer, and Ready How is not
            liable for these charges.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. Order Tracking</h2>
          <p>
            Once your order has been shipped, you will receive a tracking ID via
            email or SMS. You can track your order status directly by entering
            the tracking ID on our website or app.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Missed Deliveries</h2>
          <h3 className="text-xl font-semibold mt-4">
            5.1 Incomplete Delivery Attempts
          </h3>
          <p>
            If a delivery attempt fails due to incorrect address or customer
            unavailability, our logistics partner will make up to two more
            attempts. After three failed attempts, the order will be returned to
            the vendor.
          </p>
          <h3 className="text-xl font-semibold mt-4">5.2 Redelivery Charges</h3>
          <p>
            Additional charges may apply for redelivery due to incorrect address
            or failed delivery attempts.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            6. Special Conditions for International Orders
          </h2>
          <p>
            International customers must comply with their local customs
            regulations. Ready How is not responsible for delays caused by
            customs clearance procedures.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            7. Damaged or Lost Shipments
          </h2>
          <h3 className="text-xl font-semibold mt-4">7.1 Damaged Shipments</h3>
          <p>
            If your order arrives damaged, please contact our customer support
            team within 48 hours of receiving the product. Photographic evidence
            of the damaged product and packaging may be required.
          </p>
          <h3 className="text-xl font-semibold mt-4">7.2 Lost Shipments</h3>
          <p>
            If your order does not arrive within the specified delivery time and
            is confirmed lost by our logistics partner, Ready How will initiate
            a refund or replacement process.
          </p>

          <h2 className="text-2xl font-semibold mt-6">8. Contact Us</h2>
          <p>
            For any questions or concerns regarding shipping, please contact our
            customer support team:
          </p>
          <p>Email: support@readyhow.com</p>
          <p>Phone: +880-1748614424</p>
          <p>
            Thank you for choosing Ready How! We are committed to providing a
            seamless shopping experience with timely and reliable delivery
            services.
          </p>
        </section>

        {/* Bangla Section */}
        <section>
          <h1 className="text-4xl font-bold mb-4">শিপিং পলিসি</h1>
          <p>
            রেডি হাউ-এ আপনাকে স্বাগতম! আমাদের শিপিং পলিসি আপনাকে আমাদের অর্ডার
            ডেলিভারি প্রক্রিয়া সম্পর্কে একটি স্পষ্ট ধারণা প্রদান করে। এই
            পলিসিটি আমাদের ওয়েবসাইট এবং মোবাইল অ্যাপ্লিকেশনের মাধ্যমে দেওয়া
            সমস্ত অর্ডারের জন্য প্রযোজ্য।
          </p>
          <h2 className="text-2xl font-semibold mt-6">১. ডেলিভারি এরিয়া</h2>
          <p>
            রেডি হাউ বর্তমানে বাংলাদেশ জুড়ে ডেলিভারি প্রদান করে এবং ভবিষ্যতে
            আন্তর্জাতিকভাবে প্রসারিত হওয়ার পরিকল্পনা রয়েছে। চেকআউট প্রক্রিয়ার
            সময় ডেলিভারি এলাকা নির্দিষ্ট করা থাকবে। গ্রাহকদের অবশ্যই নিশ্চিত
            করতে হবে যে তাদের ডেলিভারি ঠিকানা সঠিক এবং আমাদের সেবাযোগ্য এলাকায়
            অবস্থিত।
          </p>
          <h2 className="text-2xl font-semibold mt-6">২. ডেলিভারি সময়</h2>
          <h3 className="text-xl font-semibold mt-4">
            ২.১ আনুমানিক ডেলিভারি সময়
          </h3>
          <p>
            অর্ডার নিশ্চিত হওয়ার পরে সাধারণত ১-২ কর্মদিবসের মধ্যে প্রসেস করা
            হয়। ডেলিভারি সময় নিম্নলিখিত বিষয়গুলির উপর নির্ভর করে:
          </p>
          <ul className="list-disc pl-6">
            <li>ভেন্ডরের প্রসেসিং সময়।</li>
            <li>ডেলিভারি লোকেশন।</li>
            <li>লজিস্টিক পার্টনারের প্রাপ্যতা।</li>
          </ul>
          <p>অভ্যন্তরীণ অর্ডারের জন্য সাধারণ ডেলিভারি সময় ৩-৭ কর্মদিবস।</p>
          <h3 className="text-xl font-semibold mt-4">২.২ এক্সপ্রেস ডেলিভারি</h3>
          <p>
            নির্বাচিত পণ্য এবং লোকেশনের জন্য এক্সপ্রেস ডেলিভারি উপলব্ধ থাকতে
            পারে। এই পরিষেবার জন্য অতিরিক্ত চার্জ প্রযোজ্য।
          </p>

          <h2 className="text-2xl font-semibold mt-6">৩. ডেলিভারি চার্জ</h2>
          <h3 className="text-xl font-semibold mt-4">৩.১ ডোমেস্টিক শিপিং ফি</h3>
          <p>
            অর্ডারের মূল্য, ওজন এবং গন্তব্যের উপর ভিত্তি করে শিপিং চার্জ
            নির্ধারিত হয়। নির্দিষ্ট মূল্যের বেশি অর্ডারের জন্য ফ্রি শিপিং
            প্রোমোশন প্রযোজ্য হতে পারে, যা ওয়েবসাইটে উল্লেখ থাকবে।
          </p>
          <h3 className="text-xl font-semibold mt-4">৩.২ আন্তর্জাতিক শিপিং</h3>
          <p>
            (যখন উপলব্ধ হবে) আন্তর্জাতিক অর্ডারের জন্য ডেলিভারি চার্জ গন্তব্য,
            ওজন এবং শিপিং পদ্ধতির উপর ভিত্তি করে চেকআউটের সময় নির্ধারণ করা হবে।
            কাস্টমস ডিউটি, আমদানি কর এবং অন্যান্য অতিরিক্ত ফি গ্রাহকের দায়িত্ব
            এবং রেডি হাউ এগুলোর জন্য দায়ী থাকবে না।
          </p>

          <h2 className="text-2xl font-semibold mt-6">৪. অর্ডার ট্র্যাকিং</h2>
          <p>
            আপনার অর্ডার শিপিং হওয়ার পরে, আপনি ইমেইল বা এসএমএসের মাধ্যমে একটি
            ট্র্যাকিং আইডি পাবেন। ওয়েবসাইট বা অ্যাপে ট্র্যাকিং আইডি প্রবেশ
            করিয়ে সরাসরি আপনার অর্ডারের স্ট্যাটাস ট্র্যাক করতে পারবেন।
          </p>

          <h2 className="text-2xl font-semibold mt-6">৫. মিসড ডেলিভারি</h2>
          <h3 className="text-xl font-semibold mt-4">
            ৫.১ অসম্পূর্ণ ডেলিভারি প্রচেষ্টা
          </h3>
          <p>
            ভুল ঠিকানা বা গ্রাহকের অনুপস্থিতির কারণে যদি ডেলিভারি প্রচেষ্টা
            ব্যর্থ হয়, আমাদের লজিস্টিক পার্টনার পুনরায় ডেলিভারি করার জন্য
            সর্বোচ্চ দুইবার চেষ্টা করবে। তিনবার ব্যর্থ প্রচেষ্টার পরে, অর্ডারটি
            ভেন্ডরের কাছে ফেরত পাঠানো হবে।
          </p>
          <h3 className="text-xl font-semibold mt-4">৫.২ পুনঃডেলিভারি চার্জ</h3>
          <p>
            ভুল ঠিকানা বা ব্যর্থ ডেলিভারি প্রচেষ্টার ক্ষেত্রে পুনঃডেলিভারির জন্য
            অতিরিক্ত চার্জ প্রযোজ্য হতে পারে।
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            ৬. আন্তর্জাতিক অর্ডারের জন্য বিশেষ শর্তাবলী
          </h2>
          <p>
            আন্তর্জাতিক গ্রাহকদের তাদের স্থানীয় কাস্টমস নিয়মাবলী অনুসরণ করতে
            হবে। কাস্টমস ক্লিয়ারেন্স প্রক্রিয়ার কারণে বিলম্ব হলে রেডি হাউ
            দায়ী থাকবে না।
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            ৭. ক্ষতিগ্রস্ত বা হারানো চালান
          </h2>
          <h3 className="text-xl font-semibold mt-4">৭.১ ক্ষতিগ্রস্ত চালান</h3>
          <p>
            আপনার অর্ডার ক্ষতিগ্রস্ত অবস্থায় পৌঁছালে, পণ্যটি গ্রহণের ৪৮ ঘণ্টার
            মধ্যে আমাদের কাস্টমার সাপোর্ট টিমের সাথে যোগাযোগ করুন। ক্ষতিগ্রস্ত
            পণ্য এবং প্যাকেজিংয়ের ফটোগ্রাফিক প্রমাণ দিতে হতে পারে।
          </p>
          <h3 className="text-xl font-semibold mt-4">৭.২ হারানো চালান</h3>
          <p>
            যদি আপনার অর্ডার নির্ধারিত ডেলিভারি সময়ের মধ্যে পৌঁছায় না এবং
            আমাদের লজিস্টিক পার্টনার দ্বারা হারানো বলে নিশ্চিত হয়, রেডি হাউ
            রিফান্ড বা প্রতিস্থাপন প্রক্রিয়া শুরু করবে।
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            ৮. আমাদের সাথে যোগাযোগ করুন
          </h2>
          <p>
            শিপিং সংক্রান্ত যেকোনো প্রশ্ন বা উদ্বেগের জন্য, আমাদের কাস্টমার
            সাপোর্ট টিমের সাথে যোগাযোগ করুন:
          </p>
          <p>ইমেইল: support@readyhow.com</p>
          <p>ফোন: +৮৮০-১৭৪৮৬১৪৪২৪</p>
          <p>
            রেডি হাউ নির্বাচন করার জন্য ধন্যবাদ! আমরা সময়মত এবং নির্ভরযোগ্য
            ডেলিভারি পরিষেবা দিয়ে একটি নিরবচ্ছিন্ন শপিং অভিজ্ঞতা প্রদান করতে
            প্রতিশ্রুতিবদ্ধ।
          </p>
        </section>
      </div>
    </main>
  );
};

export default ShippingPolicy;
