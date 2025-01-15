import React from "react";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const information = [
    {
      id: 0,
      name: "About Us",
      link: "/about-us",
    },
    {
      id: 1,
      name: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      id: 2,
      name: "Refund Policy",
      link: "/return-and-refund-policy",
    },
    {
      id: 3,
      name: "Shipping Policy",
      link: "/shipping-policy",
    },
    {
      id: 4,
      name: "Terms and Conditions",
      link: "/terms-and-condition",
    },
  ];
  return (
    <footer className="bg-primary text-white">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <h1 className="text-xl font-bold">Contact Us</h1>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed  lg:text-left">
              House 198-200, Avenue 3, Mirpur DOHS, Dhaka
            </p>
            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed  lg:text-left">
              +8801748614424
            </p>
            <p className="pb-2 mx-auto mt-6 max-w-md text-center leading-relaxed  lg:text-left">
              info@readyhow.com
            </p>
            <a
              className="mx-auto mt-6 max-w-md text-center leading-relaxed  lg:text-left"
              href="https://www.facebook.com/people/Ready-How/61569352619463"
            >
              <FaFacebook size={30} />
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4 lg:mt-0 lg:justify-end lg:gap-4">
            {information.map((info) => (
              <li key={info.id}>
                <a
                  href={info.link}
                  className="text-center text-sm font-semibold leading-7 text-white hover:text-gray-300 hover:underline"
                >
                  {info.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-center text-sm  lg:text-right">
          &copy;{new Date().getFullYear()}; Developed By Bit Encrypt It
        </p>
      </div>
    </footer>
  );
};

export default Footer;
