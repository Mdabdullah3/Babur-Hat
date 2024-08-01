/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import ShopMenu from "../../components/ShopMenu";
import { size } from "../../utils/constants";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { CiMenuBurger } from "react-icons/ci";
import useProductStore from "../../store/ProductStore";
import useCategoryStore from "../../store/CategoriesStore";
import ProductCardDesign from "../../components/common/ProductCardDesign";
const shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const { products, fetchProducts } = useProductStore();
  const { categories, fetchCategories } = useCategoryStore();
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    // setCategoryId(categoryId);
    // setSubCategoryId(null);
  };
  console.log(categories);

  const handleSubCategoryChange = (subCategoryId) => {
    setSelectedSubCategory(subCategoryId);
    // setSubCategoryId(subCategoryId);
  };
  return (
    <div>
      <Navbar />
      <div className="relative z-50">
        <div className="drawer drawer-start lg:hidden block">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content mt-2 mx-4">
            <label htmlFor="my-drawer-2" className="text-2xl font-bold">
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
                          {categories?.map((category) => (
                            <li key={category._id}>
                              <label
                                htmlFor={`Filter${category.name}`}
                                className="inline-flex items-center gap-2"
                              >
                                <input
                                  type="radio"
                                  id={`Filter${category.name}`}
                                  className="size-4 radio-primary radio"
                                  checked={selectedCategory === category._id}
                                  onChange={() =>
                                    handleCategoryChange(category._id)
                                  }
                                />
                                <span className="text-sm font-medium tracking-wider">
                                  {category.name} (
                                  {category.subCategories.length})
                                </span>
                              </label>
                              {selectedCategory === category._id &&
                                category.subCategories.length > 0 && (
                                  <ul className="ml-4 space-y-2">
                                    {category.subCategories.map(
                                      (subCategory) => (
                                        <li key={subCategory._id}>
                                          <label
                                            htmlFor={`FilterSub${subCategory.name}`}
                                            className="inline-flex items-center gap-2"
                                          >
                                            <input
                                              type="radio"
                                              id={`FilterSub${subCategory.name}`}
                                              className="size-4 radio-primary radio"
                                              checked={
                                                selectedSubCategory ===
                                                subCategory._id
                                              }
                                              onChange={() =>
                                                handleSubCategoryChange(
                                                  subCategory._id
                                                )
                                              }
                                            />
                                            <span className="text-sm font-medium tracking-wider">
                                              {subCategory.name}
                                            </span>
                                          </label>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                            </li>
                          ))}
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
      <section className="md:w-11/12 w-[95%] mx-auto mt-6 lg:mt-16">
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
                      {categories?.map((category) => (
                        <li key={category._id}>
                          <label
                            htmlFor={`Filter${category.name}`}
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="radio"
                              id={`Filter${category.name}`}
                              className="size-4 radio-primary radio"
                              checked={selectedCategory === category._id}
                              onChange={() =>
                                handleCategoryChange(category._id)
                              }
                            />
                            <span className="text-sm font-medium tracking-wider">
                              {category.name} ({category.subCategories.length})
                            </span>
                          </label>
                          {selectedCategory === category._id &&
                            category.subCategories.length > 0 && (
                              <ul className="ml-4 mt-3 space-y-2">
                                {category.subCategories.map((subCategory) => (
                                  <li key={subCategory._id}>
                                    <label
                                      htmlFor={`FilterSub${subCategory.name}`}
                                      className="inline-flex items-center gap-2"
                                    >
                                      <input
                                        type="radio"
                                        id={`FilterSub${subCategory.name}`}
                                        className="size-4 radio-primary radio"
                                        checked={
                                          selectedSubCategory ===
                                          subCategory._id
                                        }
                                        onChange={() =>
                                          handleSubCategoryChange(
                                            subCategory._id
                                          )
                                        }
                                      />
                                      <span className="text-sm font-medium tracking-wider">
                                        {subCategory.name}
                                      </span>
                                    </label>
                                  </li>
                                ))}
                              </ul>
                            )}
                        </li>
                      ))}
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-4 gap-2">
              {products?.slice(0, 20).map((product) => (
                <ProductCardDesign
                  key={product._id}
                  product={product}
                ></ProductCardDesign>
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
