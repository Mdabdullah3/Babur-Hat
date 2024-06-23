import React from "react";
import ShopMenu from "./ShopMenu";
import { size } from "../utils/constants";

const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <div className={`drawer ${isOpen ? "active" : ""}`}>
      <input id="my-drawer2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer2" className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="hidden lg:block">
          {/* Filters content */}
          <div className="bg-white">
            <p className="text-3xl tracking-wider mb-6 font-medium">Filters</p>
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
              {/* Size */}
              <ShopMenu title="Size">
                <div className="grid grid-cols-5 gap-3 mt-6 w-11/12">
                  {size?.map((item, index) => (
                    <div key={index} className="mx-auto w-12 text-center">
                      <h1 className="px-2 py-2 rounded-lg border-[1px] border-gray-400 text-md font-[500]">
                        {item}
                      </h1>
                    </div>
                  ))}
                </div>
              </ShopMenu>
              {/* Price */}
              <ShopMenu title="Price">
                <div className="mt-5 w-10/12">
                  <input
                    type="range"
                    min={0}
                    max="100"
                    value="40"
                    className="range range-xs range-primary"
                  />
                  <p className="tracking-wider mt-2 flex justify-between">
                    Price - $0 <span>$1000</span>
                  </p>
                </div>
              </ShopMenu>
              {/* Reset button */}
              <div className="mt-10">
                <button className="font-bold rounded-sm tracking-wider w-full py-3 bg-primary text-white">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
