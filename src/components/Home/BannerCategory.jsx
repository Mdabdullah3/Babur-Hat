import { useState } from "react";
import Link from "next/link";
import useCategoryStore from "../../store/CategoriesStore";
import { TbCategory2 } from "react-icons/tb";

const BannerCategory = () => {
  const { categories } = useCategoryStore();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="bg-white h-full rounded-2xl px-6 text-md pb-2 border-[1px] border-gray-300 shadow-md">
      <Link href="/categories">
        <h1 className="flex gap-2 items-center text-lg font-bold my-2">
          <TbCategory2 />
          Categories
        </h1>
      </Link>
      {categories?.map((cat, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => setHoveredCategory(cat)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <Link
            href={`/shop?category=${cat._id}`}
            className="flex items-center gap-3 mt-2 tracking-wider
            text-gray-600"
          >
            <h1>{cat?.name}</h1>
          </Link>

          {/* Hovered Subcategories Card */}
          {hoveredCategory === cat && cat.subCategories && (
            <div className="absolute -top-2 left-full bg-white border border-gray-300 shadow-md rounded-lg p-4 w-64 z-10">
              <ul>
                {cat.subCategories.map((subCat) => (
                  <Link
                    href={`/shop?sub-category=${subCat?._id}`}
                    key={subCat?._id}
                    className="text-gray-700 mb-2"
                  >
                    <li>{subCat?.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BannerCategory;
