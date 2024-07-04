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
    "venugopalreddy9493@gmail.com",
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
      <footer className="py-4 bg-primary">
        <div className="w-full sm:justify-around sm:flex sm:items-center">
          <div className="sm:w-1/3 w-full mb-[10px]">
            <div className="footer-top-data flex items-center justify-center">
              <img
                src="/newsletter.png
              "
                alt="news letter"
              />
              <h2 className="mb-0 text-white font-bold">
                Sign Up for NewsLetter
              </h2>
            </div>
          </div>
          <div className="sm:w-1/2 w-4/5 m-auto ">
            <div className="relative">
              <input
                type="search"
                id="search-dropdown"
                className="block outline-none border-none p-2.5 z-0 px-4 w-full text-md rounded-lg"
                placeholder="Email Here..."
                required
              />
              <span className="absolute z-0 right-2 top-1.5 p-1 px-4 bg-[#232f3e] cursor-pointer text-white font-light rounded-md hover:opacity-80">
                Subscribe
              </span>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 w-full text-center justify-evenly flex bg-primary">
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
            <AiOutlineInstagram className=" text-[2.2rem] p-[4px]  mr-[10px] rounded-xl hover:bg-[#febd69]" />
            <AiOutlineLinkedin className=" text-[2rem] p-[4px]  mr-[10px] rounded-xl hover:bg-[#febd69]" />
            <AiOutlineGithub className=" text-[2.2rem] p-[4px]  mr-[10px] rounded-xl hover:bg-[#febd69]" />
            <AiOutlineFacebook className=" text-[2.2rem] p-[4px]  mr-[10px] rounded-xl hover:bg-[#febd69]" />
            <AiOutlineTwitter className=" text-[2.2rem] p-[4px]  mr-[10px] rounded-xl hover:bg-[#febd69]" />
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
