import { category } from "../../utils/constants";
const BannerCategory = () => {
  console.log(category);
  return (
    <div className=" bg-white rounded-2xl px-6 text-md pt-4">
      {category.map((cat) => (
        <>
          <div
            key={cat?.id}
            className="flex items-center gap-3 mt-4 tracking-wider text-gray-600"
          >
            <h1 className="bg-gray-200 px-1 py-1 rounded-full">{cat?.icon}</h1>
            <h1>{cat?.name}</h1>
          </div>
        </>
      ))}
    </div>
  );
};

export default BannerCategory;
