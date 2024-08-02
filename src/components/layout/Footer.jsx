/* eslint-disable @next/next/no-img-element */

import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineFacebook,
} from "react-icons/ai";
const Footer = () => {
  const contact = [
    "DemoStore",
    "Boss Pg, Hyderabad",
    "Telengana",
    "+91 80089252100",
    "baburhut@gmail.com",
  ];
  const information = [
    "Privacy Policy",
    "Refund Policy",
    "Shipping Policy",
    "Terms of Service",
    "Blogs",
  ];
  const account = ["Search ", "About Us", "Faq", "Contact", "Size Chart"];
  const links = [
    "Accessories",
    "Laptops",
    "Headphones",
    "Smart Watches",
    "Tablets",
  ];
  return (
    <div className="bg-primary mt-20">
      <footer className="py-8  md:text-center grid grid-cols-2 gap-10 bg-primary w-11/12 mx-auto md:grid-cols-5">
        <div>
          <h5 className="text-white font-bold underline">Contact Us</h5>
          {contact &&
            contact.map((item) => (
              <p
                key={item}
                className="text-white font-light py-1 cursor-pointer ease-out transition-all hover:text-[1.01rem] hover:translate-x-1"
              >
                {item}
              </p>
            ))}
          <div className="flex justify-between 800px:w-full w-3/5 m-auto items-center text-white cursor-pointer">
            <AiOutlineInstagram size={30} />
            <AiOutlineLinkedin size={30} />
            <AiOutlineFacebook size={30} />
            <AiOutlineTwitter size={30} />
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="text-white font-bold underline">Information</h5>
          {information &&
            information.map((item) => (
              <p
                key={item}
                className="text-white font-light  py-1 cursor-pointer ease-out transition-all hover:text-[1.01rem] hover:translate-x-1"
              >
                {item}
              </p>
            ))}
        </div>
        <div className="flex flex-col">
          <h5 className="text-white font-bold underline">Account</h5>
          {account &&
            account.map((item) => (
              <p
                key={item}
                className="text-white font-light  py-1 cursor-pointer ease-out transition-all hover:text-[1.01rem] hover:translate-x-1"
              >
                {item}
              </p>
            ))}
        </div>
        <div className="flex flex-col">
          <h5 className="text-white font-bold underline">Quick Links</h5>
          {links &&
            links.map((item) => (
              <p
                key={item}
                className="text-white font-light cursor-pointer py-1 ease-out transition-all hover:text-[1.01rem] hover:translate-x-1 "
              >
                {item}
              </p>
            ))}
        </div>
        <div className="flex flex-col flex-wrap text-white font-light  cursor-pointer hover:underline">
          <h5>Our App</h5>
          <p>
            Download Our App and get extra <br />
            15% Discount on your first Order.
          </p>
          <div className=" flex items-center justify-center">
            <img
              src="/pngegg.png"
              className="h-[100px] cursor-pointer "
              alt=""
            />
          </div>
        </div>
      </footer>
      <footer className="py-3 bg-primary">
        <div className="w-full">
          <p className="text-center mb-0 text-white">
            &copy;{new Date().getFullYear()}; Powered By Developers
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
