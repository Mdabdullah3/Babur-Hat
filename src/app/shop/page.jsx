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
import { useSearchParams } from "next/navigation";

const shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedSize, setSelectecdSize] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const { products, fetchProducts } = useProductStore();
  const { categories, fetchCategories } = useCategoryStore();
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  console.log(category);
  useEffect(() => {
    fetchProducts();
    fetchCategories();
    if (category) {
      setSelectedCategory(category);
    }
    if (search) {
      setSearchTerm(search);
    }
  }, [fetchProducts, search, fetchCategories, category]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    // setCategoryId(categoryId);
    // setSubCategoryId(null);
  };

  const handleSubCategoryChange = (subCategoryId) => {
    setSelectedSubCategory(subCategoryId);
  };
  const handleSizeChange = (size) => {
    setSelectecdSize(size);
  };

  const handlePriceChange = (event) => {
    const value = Number(event.target.value);
    setPriceRange([0, value]);
  };
  const filterProducts = () => {
    const filteredProducts = products?.filter((product) => {
      let matchesCategory = true;
      let matchesSubCategory = true;
      let matchesSize = true;
      let matchesPrice = true;
      let matchesSearchTerm = true;
      if (selectedCategory) {
        matchesCategory = product.category === selectedCategory;
      }

      if (selectedSubCategory) {
        matchesSubCategory = product.subCategory === selectedSubCategory;
      }

      if (selectedSize) {
        matchesSize = product.size === selectedSize;
      }

      if (priceRange[0] !== 0 || priceRange[1] !== 1000) {
        matchesPrice =
          product.price >= priceRange[0] && product.price <= priceRange[1];
      }

      if (searchTerm) {
        matchesSearchTerm = product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      }

      return (
        matchesCategory &&
        matchesSubCategory &&
        matchesSize &&
        matchesPrice &&
        matchesSearchTerm
      );
    });

    return filteredProducts;
  };

  console.log(priceRange, filterProducts());
  const filterProduct = filterProducts();

  const handleResetFilters = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setSelectecdSize(null);
    setPriceRange([0, 1000]);
    fetchProducts();
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
                            onClick={() => handleSizeChange(item)}
                            key={index}
                            className="mx-auto w-full cursor-pointer text-center"
                          >
                            <h1
                              className={`text-sm font-medium border border-gray-400 p-4 tracking-wider ${
                                item === selectedSize ? "text-primary" : ""
                              }`}
                            >
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
                    <button
                      onClick={handleResetFilters}
                      className="font-bold rounded-sm tracking-wider w-full py-3 bg-primary text-white"
                    >
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
                      <div
                        onClick={() => handleSizeChange(item)}
                        key={index}
                        className="mx-auto w-full text-center cursor-pointer"
                      >
                        <h1
                          className={`text-sm font-medium border-gray-400 border p-3 rounded-lg tracking-wider ${
                            item === selectedSize ? "text-primary" : ""
                          }`}
                        >
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
                      max={Math.max(...products.map((p) => p.price), 1000)}
                      className="range range-xs range-primary"
                      value={priceRange[1]}
                      onChange={handlePriceChange}
                    />
                    <p className="tracking-wider mt-2 flex justify-between">
                      <span>Price - ${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </p>
                  </div>
                </ShopMenu>
              </div>
              <div className="mt-10">
                <button
                  onClick={handleResetFilters}
                  className="font-bold rounded-sm tracking-wider w-full py-3 bg-primary text-white"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            {filterProduct.length > 0 ? (
              <div className="grid grid-cols-2  md:grid-cols-4 md:gap-4 gap-2">
                {filterProduct.map((product) => (
                  <ProductCardDesign key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <h1 className="text-center text-red-500 text-xl mt-10">
                No Product Found
              </h1>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default shop;
