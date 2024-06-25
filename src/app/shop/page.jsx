/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import ShopMenu from "../../components/ShopMenu";
import { size } from "../../utils/constants";
import ProductCard from "../../components/common/ProductCard";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { CiMenuBurger } from "react-icons/ci";

const shop = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const url = "https://api.rebzigo.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="relative z-50">
        <div className="drawer drawer-start">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-2" className="">
              <CiMenuBurger />
            </label>
          </div>
          <div className="drawer-side z-50">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <div className="space-y-4">
                <div>
                  <p className="text-3xl tracking-wider mb-6 font-medium">
                    Filters
                  </p>
                  <div className="space-y-5">
                    <ShopMenu title="Categories">
                      <div className="mt-5">
                        <ul className="space-y-3">
                          <li>
                            <label
                              htmlFor="FilterMens"
                              className="inline-flex items-center gap-2"
                            >
                              <input
                                type="radio"
                                id="FilterMens"
                                className="size-4 radio-primary radio"
                              />
                              <span className="text-sm font-medium tracking-wider">
                                Mens (13)
                              </span>
                            </label>
                          </li>
                          <li>
                            <label
                              htmlFor="FilterWomens"
                              className="inline-flex items-center gap-2"
                            >
                              <input
                                type="radio"
                                id="FilterWomens"
                                className="size-4 radio-primary radio"
                              />
                              <span className="text-sm font-medium tracking-wider">
                                Womens (13)
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </ShopMenu>
                    <ShopMenu title="Size">
                      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 mt-6 w-full">
                        {size?.map((item, index) => (
                          <div
                            key={index}
                            className="mx-auto w-full text-center"
                          >
                            <h1 className="px-2 py-2 rounded-lg border border-gray-400 text-md font-medium">
                              {item}
                            </h1>
                          </div>
                        ))}
                      </div>
                    </ShopMenu>
                    <ShopMenu title="Price">
                      <div className="mt-5 w-full">
                        <input
                          type="range"
                          min={0}
                          max="1000"
                          className="range range-xs range-primary"
                        />
                        <p className="tracking-wider mt-2 flex justify-between">
                          <span>Price - $0</span>
                          <span>$1000</span>
                        </p>
                      </div>
                    </ShopMenu>
                  </div>
                  <div className="mt-10">
                    <button className="font-bold rounded-sm tracking-wider w-full py-3 bg-primary text-white">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <section className="w-11/12 mx-auto mt-24">
        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-10">
          <div className="hidden lg:block space-y-4">
            <div>
              <p className="text-3xl tracking-wider mb-6 font-medium">
                Filters
              </p>
              <div className="space-y-5">
                <ShopMenu title="Categories">
                  <div className="mt-5">
                    <ul className="space-y-3">
                      <li>
                        <label
                          htmlFor="FilterMens"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="radio"
                            id="FilterMens"
                            className="size-4 radio-primary radio"
                          />
                          <span className="text-sm font-medium tracking-wider">
                            Mens (13)
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor="FilterWomens"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="radio"
                            id="FilterWomens"
                            className="size-4 radio-primary radio"
                          />
                          <span className="text-sm font-medium tracking-wider">
                            Womens (13)
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </ShopMenu>
                <ShopMenu title="Size">
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 mt-6 w-full">
                    {size?.map((item, index) => (
                      <div key={index} className="mx-auto w-full text-center">
                        <h1 className="px-2 py-2 rounded-lg border border-gray-400 text-md font-medium">
                          {item}
                        </h1>
                      </div>
                    ))}
                  </div>
                </ShopMenu>
                <ShopMenu title="Price">
                  <div className="mt-5 w-full">
                    <input
                      type="range"
                      min={0}
                      max="1000"
                      className="range range-xs range-primary"
                    />
                    <p className="tracking-wider mt-2 flex justify-between">
                      <span>Price - $0</span>
                      <span>$1000</span>
                    </p>
                  </div>
                </ShopMenu>
              </div>
              <div className="mt-10">
                <button className="font-bold rounded-sm tracking-wider w-full py-3 bg-primary text-white">
                  Reset
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {Products?.products?.slice(0, 20).map((product) => (
                <ProductCard key={product._id} product={product}></ProductCard>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default shop;
