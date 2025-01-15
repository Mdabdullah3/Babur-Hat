import React from "react";
import { FaFacebook  } from "react-icons/fa";

const Footers = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <h1 className="text-xl font-bold">Contact Us</h1>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed  lg:text-left">
              House 198-200, Avenue 3, Mirpur DOHS, Dhaka
            </p>
            <p>+880 017 4861 4424</p>
            <p>info@readyhow.com</p>
            <a href="https://www.facebook.com/people/Ready-How/61569352619463">
              <FaFacebook size={30} />
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                {" "}
                About{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                {" "}
                Services{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                {" "}
                Projects{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                {" "}
                Blog{" "}
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm  lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footers;
