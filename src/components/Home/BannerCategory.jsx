import { category } from "../../utils/constants";
const BannerCategory = () => {
  console.log(category);
  return (
    <div className="text-black">
      <h1>THis is categorh</h1>
      {category.map((cat) => (
        <>
          <h1>{cat?.name}</h1>
        </>
      ))}
    </div>
  );
};

export default BannerCategory;
