import { category } from "../../utils/constants";

const BannerCategory = () => {
  return (
    <div className="bg-white rounded-2xl px-6 text-md pb-2 border-[1px] border-gray-300 shadow-md">
      {category.map((cat, index) => (
        <div
          key={index}
          className="flex items-center gap-3 mt-4 tracking-wider text-gray-600"
        >
          <h1 className="bg-gray-200 px-1 py-1 rounded-full">{cat?.icon}</h1>
          <h1>{cat?.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default BannerCategory;
