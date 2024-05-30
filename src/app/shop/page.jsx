/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import ShopMenu from "../../components/ShopMenu";
import { size } from "../../utils/constants";
import ProductCard from "../../components/common/ProductCard";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
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
      <section className="w-11/12 mx-auto mt-24">
        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-10">
          <div className="hidden space-y-4 lg:block">
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
                          htmlFor="FilterInStock"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="radio"
                            id="FilterInStock"
                            className="size-4 radio-primary radio"
                          />

                          <span className="text-sm font-medium tracking-wider">
                            Mens (13)
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor="FilterInStock"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="radio"
                            id="FilterInStock"
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
                  <div className="grid grid-cols-5 gap-3 mt-6 w-11/12">
                    {size?.map((item, index) => (
                      <>
                        <div key={index} className="mx-auto w-12 text-center">
                          <h1 className="px-2 py-2 rounded-lg border-[1px] border-gray-400 text-md font-[500]">
                            {item}
                          </h1>
                        </div>
                      </>
                    ))}
                  </div>
                </ShopMenu>
                <ShopMenu title="Price">
                  <div className="mt-5 w-10/12">
                    <input
                      type="range"
                      min={0}
                      max="100"
                      value="40"
                      className="range range-xs range-primary"
                    />
                    <p className=" tracking-wider mt-2 flex justify-between">
                      Price - $0 <h1>$1000</h1>
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
            <div className="grid grid-cols-4 mx-auto">
              {Products?.products?.slice(0, 20).map((product) => (
                <>
                  <ProductCard
                    key={product._id}
                    product={product}
                  ></ProductCard>
                </>
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
