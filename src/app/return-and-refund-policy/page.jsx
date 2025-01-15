// pages/return-refund.js
import Navbar from "../../components/layout/Navbar";
export const metadata = {
  title: "Return and Refund Policy - Ready How",
  description: "Return and Refund Policy of Ready How",
};
export default function ReturnRefundPage() {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-center mb-6">
            Return & Refund Policy
          </h1>

          {/* English Content */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              1. Eligibility for Returns
            </h2>
            <ul className="list-inside list-disc">
              <li>
                Returns are accepted within 7 days of receiving the product.
              </li>
              <li>
                The product must be unused, unwashed, and in its original
                condition with all tags, packaging, and accessories intact.
              </li>
              <li>
                Certain products, such as undergarments, personal care items,
                and customized orders, are non-returnable.
              </li>
              <li>
                Any item that has been altered or damaged by the customer will
                not be accepted for return.
              </li>
              <li>
                Returns are applicable only if the product received is
                defective, damaged, or significantly different from what was
                described.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold">2. Return Process</h2>
            <ul className="list-inside list-disc">
              <li>
                To initiate a return, contact our customer support team via
                email or phone with your order details.
              </li>
              <li>
                Our team will guide you through the return process, including
                providing a return authorization number.
              </li>
              <li>Pack the product securely to avoid damage during transit.</li>
              <li>
                Returns can be made through our designated logistics partners or
                dropped off at our specified locations.
              </li>
              <li>
                Ensure that the return package includes all original documents,
                such as the invoice and return authorization.
              </li>
              <li>
                Ready How will not be responsible for any loss or damage to the
                product during return transit.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold">3. Refund Process</h2>
            <ul className="list-inside list-disc">
              <li>
                Once the returned product is received and inspected, a refund
                will be processed within 7-10 business days.
              </li>
              <li>
                Refunds will be issued through the original payment method. For
                cash-on-delivery orders, refunds will be processed via bank
                transfer or mobile wallet.
              </li>
              <li>
                If the returned product does not meet the eligibility criteria,
                the refund may be rejected, and the product will be sent back to
                the customer.
              </li>
              <li>
                Any shipping fees incurred during the original purchase are
                non-refundable unless the return is due to a fault on Ready
                How’s part.
              </li>
              <li>
                Promotional vouchers or discount codes used during the purchase
                will not be refunded.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold">4. Exchange Policy</h2>
            <ul className="list-inside list-disc">
              <li>Exchanges are subject to product availability.</li>
              <li>
                If you wish to exchange a product, follow the same process as
                returns. Once the return is approved, we will ship the new
                product.
              </li>
              <li>
                Any price difference between the exchanged products must be
                settled before the new product is dispatched.
              </li>
              <li>
                In case the exchanged product is out of stock, customers may opt
                for a refund or choose an alternative product.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold">5. Non-Returnable Items</h2>
            <ul className="list-inside list-disc">
              <li>
                The following items are not eligible for return or refund:
              </li>
              <ul className="list-inside list-disc">
                <li>Undergarments, socks, and personal hygiene products.</li>
                <li>Customized or personalized products.</li>
                <li>Products marked as Final Sale or Non-Returnable.</li>
                <li>Gift cards and vouchers.</li>
                <li>
                  Digital products or services purchased on Ready How are also
                  non-refundable.
                </li>
              </ul>
            </ul>

            <h2 className="text-2xl font-semibold">
              6. Special Conditions for Refunds
            </h2>
            <ul className="list-inside list-disc">
              <li>
                If you received a free gift with your purchase, it must also be
                returned in its original condition. Failure to do so may result
                in a deduction from the refund amount.
              </li>
              <li>
                Ready How reserves the right to refuse a refund if the returned
                product does not comply with the stated return conditions.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold">7. Contact Us</h2>
            <p>
              If you have any return or refund-related inquiries, please contact
              our customer support team:
            </p>
            <ul className="list-inside list-disc">
              <li>Email: support@readyhow.com</li>
              <li>Phone: +880-1748614424</li>
            </ul>
          </div>

          {/* Bangla Content */}
          <div className="space-y-6 mt-12">
            <h2 className="text-2xl font-semibold">১. ফেরতের যোগ্যতা</h2>
            <ul className="list-inside list-disc">
              <li>পণ্য প্রাপ্তির ৭ দিনের মধ্যে ফেরত গ্রহণ করা হয়।</li>
              <li>
                পণ্যটি ব্যবহার না করা, অযাচিত এবং তার মূল অবস্থায় থাকতে হবে,
                সমস্ত ট্যাগ, প্যাকেজিং এবং আনুষাঙ্গিকসহ।
              </li>
              <li>
                কিছু নির্দিষ্ট পণ্য যেমন অন্তর্বাস, ব্যক্তিগত পরিচর্যা সামগ্রী
                এবং কাস্টমাইজড অর্ডার ফেরতযোগ্য নয়।
              </li>
              <li>
                ক্রেতার দ্বারা পরিবর্তিত বা ক্ষতিগ্রস্ত পণ্য ফেরতযোগ্য নয়।
              </li>
              <li>
                শুধুমাত্র ত্রুটিপূর্ণ, ক্ষতিগ্রস্ত বা বর্ণনার সঙ্গে
                উল্লেখযোগ্যভাবে ভিন্ন পণ্য ফেরতের জন্য যোগ্য।
              </li>
            </ul>

            <h2 className="text-2xl font-semibold">২. ফেরত প্রক্রিয়া</h2>
            <ul className="list-inside list-disc">
              <li>
                ফেরত শুরু করতে, আপনার অর্ডারের বিবরণসহ আমাদের কাস্টমার সাপোর্ট
                টিমের সাথে ইমেইল বা ফোনের মাধ্যমে যোগাযোগ করুন।
              </li>
              <li>
                আমাদের টিম আপনাকে ফেরত প্রক্রিয়ার নির্দেশনা দেবে এবং একটি ফেরত
                অনুমোদন নম্বর প্রদান করবে।
              </li>
              <li>
                পরিবহনের সময় ক্ষতি এড়াতে পণ্যটি সুরক্ষিতভাবে প্যাক করুন।
              </li>
              <li>
                আমাদের নির্ধারিত লজিস্টিক পার্টনারের মাধ্যমে বা নির্দিষ্ট
                ড্রপ-অফ স্থানে পণ্য ফেরত দেওয়া যেতে পারে।
              </li>
              <li>
                ফেরত প্যাকেজের সাথে সমস্ত মূল ডকুমেন্ট যেমন ইনভয়েস এবং ফেরত
                অনুমোদন অন্তর্ভুক্ত করুন।
              </li>
              <li>
                ফেরত প্রক্রিয়ায় পরিবহনকালে পণ্য ক্ষতিগ্রস্ত হলে Ready How
                দায়বদ্ধ নয়।
              </li>
            </ul>

            <h2 className="text-2xl font-semibold">৩. রিফান্ড প্রক্রিয়া</h2>
            <ul className="list-inside list-disc">
              <li>
                ফেরতকৃত পণ্য প্রাপ্তি এবং পর্যালোচনার পরে ৭-১০ কর্মদিবসের মধ্যে
                রিফান্ড প্রক্রিয়া সম্পন্ন করা হবে।
              </li>
              <li>
                রিফান্ড মূল পেমেন্ট পদ্ধতির মাধ্যমে প্রদান করা হবে।
                ক্যাশ-অন-ডেলিভারি অর্ডারের জন্য, রিফান্ড ব্যাংক ট্রান্সফার বা
                মোবাইল ওয়ালেটের মাধ্যমে প্রক্রিয়া করা হবে।
              </li>
              <li>
                যদি ফেরতকৃত পণ্য যোগ্যতার মানদণ্ড পূরণ না করে, তাহলে রিফান্ড
                প্রত্যাখ্যান করা হতে পারে এবং পণ্যটি ক্রেতার কাছে ফেরত পাঠানো
                হবে।
              </li>
              <li>
                মূল ক্রয়ের সময় প্রদত্ত শিপিং ফি ফেরতযোগ্য নয় যদি না Ready
                How-এর দোষে ফেরত হয়।
              </li>
              <li>
                কেনাকাটার সময় ব্যবহার করা প্রোমোশনাল ভাউচার বা ডিসকাউন্ট কোড
                ফেরতযোগ্য নয়।
              </li>
            </ul>

            <h2 className="text-2xl font-semibold">৪. পণ্য বিনিময় নীতি</h2>
            <ul className="list-inside list-disc">
              <li>পণ্য বিনিময় স্টকের প্রাপ্যতার উপর নির্ভরশীল।</li>
              <li>
                আপনি যদি পণ্য বিনিময় করতে চান, তাহলে ফেরতের মতো একই প্রক্রিয়া
                অনুসরণ করুন। ফেরত অনুমোদিত হওয়ার পরে, আমরা নতুন পণ্যটি পাঠিয়ে
                দেব।
              </li>
              <li>
                বিনিময়কৃত পণ্যের মূল্য পার্থক্য থাকলে তা নতুন পণ্য প্রেরণের আগে
                মিটিয়ে নিতে হবে।
              </li>
              <li>
                বিনিময়ের জন্য চাওয়া পণ্য স্টকে না থাকলে, ক্রেতা রিফান্ড নিতে
                পারেন বা বিকল্প পণ্য চয়ন করতে পারেন।
              </li>
            </ul>

            <h2 className="text-2xl font-semibold">
              ৫. ফেরতযোগ্য নয় এমন আইটেম
            </h2>
            <ul className="list-inside list-disc">
              <li>নিম্নলিখিত আইটেম ফেরত বা রিফান্ডের জন্য যোগ্য নয়:</li>
              <ul className="list-inside list-disc">
                <li>অন্তর্বাস, মোজা এবং ব্যক্তিগত পরিচর্যা সামগ্রী।</li>
                <li>কাস্টমাইজড বা ব্যক্তিগতকৃত পণ্য।</li>
                <li>ফাইনাল সেল বা ফেরতযোগ্য নয় চিহ্নিত পণ্য।</li>
                <li>উপহার কার্ড এবং ভাউচার।</li>
                <li>
                  Ready How থেকে কেনা ডিজিটাল পণ্য বা পরিষেবা ফেরতযোগ্য নয়।
                </li>
              </ul>
            </ul>

            <h2 className="text-2xl font-semibold">
              ৬. রিফান্ডের জন্য বিশেষ শর্ত
            </h2>
            <ul className="list-inside list-disc">
              <li>
                যদি আপনার ক্রয়ের সাথে একটি ফ্রি গিফট পাওয়া যায়, তবে সেটিও মূল
                অবস্থায় ফেরত দিতে হবে। তা না হলে রিফান্ডের পরিমাণ থেকে কাটছাঁট
                করা হতে পারে।
              </li>
              <li>
                যদি ফেরত পণ্য নির্ধারিত শর্ত পূরণ না করে, Ready How রিফান্ড
                প্রত্যাখ্যান করার অধিকার সংরক্ষণ করে।
              </li>
            </ul>

            <h2 className="text-2xl font-semibold">
              ৭. আমাদের সাথে যোগাযোগ করুন
            </h2>
            <p>
              ফেরত বা রিফান্ড সম্পর্কিত যেকোনো প্রশ্নের জন্য আমাদের কাস্টমার
              সাপোর্ট টিমের সাথে যোগাযোগ করুন:
            </p>
            <ul className="list-inside list-disc">
              <li>ইমেইল: support@readyhow.com</li>
              <li>ফোন: +৮৮০-১৭৪৮৬১৪৪২৪</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
