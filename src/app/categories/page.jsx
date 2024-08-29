"use client";
import React, { useEffect, useRef } from "react";
import useCategoryStore from "../../store/CategoriesStore";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { TbCategory2 } from "react-icons/tb";
const Categories = () => {
  const { categories, fetchCategories } = useCategoryStore();
  const categoryRefs = useRef({});

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleScrollToCategory = (categoryId) => {
    categoryRefs.current[categoryId]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section>
      <Navbar />
      <div className="w-10/12 py-10 mx-auto">
        <h1 className="flex gap-2 items-center text-lg font-bold my-2">
          <TbCategory2 />
          Categories
        </h1>
        {/* Top section with category buttons */}
        <div className="mb-6 space-x-4 space-y-5">
          {categories?.map((category) => (
            <button
              key={category?._id}
              onClick={() => handleScrollToCategory(category?._id)}
              className="px-8 py-3 font-semibold rounded-md border hover:bg-blue-700 shadow-lg text-md capitalize hover:text-white"
            >
              {category?.name}
            </button>
          ))}
        </div>

        {/* Bottom section with categories and subcategories in 3-column layout */}
        <div className="grid grid-cols-3 mt-20 gap-6">
          {categories?.map((category) => (
            <div
              key={category?._id}
              ref={(el) => (categoryRefs.current[category?._id] = el)}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-4 capitalize hover:underline">
                {category.name}
              </h2>
              <ul className="space-y-1 border-l-[1px]">
                {category?.subCategories?.map((sub) => (
                  <li key={sub?._id} className="px-2 py-1  hover:underline">
                    {sub?.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Categories;
