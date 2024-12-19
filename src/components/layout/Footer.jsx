/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
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
    {
      id:1,
      name: 'Privacy Policy',
      link: "/privacy-policy"
    },
    {
      id:2,
      name: "Refund Policy",
      link: "/refund-policy"
    },
    {
      id:3,
      name: "Shipping Policy",
      link: "/shipping-policy"
    },
    {
      id:4,
      name: "Terms and Conditions",
      link: "/terms-and-condition"
    }
  ]

  const account = [
    {
      id: 1,
      name: "About Us",
      link: "/about-us"
    },
    {
      id: 2,
      name: "Faq",
      link: "/faq"
    },
    {
      id: 3,
      name: "Contact",
      link: "/contact"
    },
    {
      id:4,
      name: "Size Charts",
      link: "/size-charts"
    }
  ]
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
            information?.map((item) => (
              <Link 
                href={item.link}
                key={item.id}
                className="text-white font-light  py-1 cursor-pointer ease-out transition-all hover:text-[1.01rem] hover:translate-x-1"
              >
                {item.name}
              </Link>
            ))}
        </div>
        <div className="flex flex-col">
          <h5 className="text-white font-bold underline">Account</h5>
          {account &&
            account.map((item) => (
              <Link href={item.link}
                key={item.id}
                className="text-white font-light  py-1 cursor-pointer ease-out transition-all hover:text-[1.01rem] hover:translate-x-1"
              >
                {item.name}
              </Link>
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
            5% Discount on your first Order.
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
            &copy;{new Date().getFullYear()}; Developed By <a href="https://abdullah-io.netlify.app/">Md Abdullah</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
