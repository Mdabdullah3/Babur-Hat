import React from "react";
import InputSearch from "../../common/InputSearch";
import { vendorProducts } from "../../../utils/constants";
const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeMenu, setActiveMenu] = useState(1);
  const handleSearch = (value) => {
    console.log("Search term:", value);
  };
  const approvedProduct = vendorProducts?.filter(
    (product) => product.status === "approved"
  );
  const pendingProduct = vendorProducts?.filter(
    (product) => product.status === "pending"
  );
  const deletedProduct = vendorProducts?.filter(
    (product) => product.status === "deleted"
  );
  const suspendedProduct = vendorProducts?.filter(
    (product) => product.status === "suspended"
  );
  const menu = [
    {
      id: 1,
      name: "All",
      items: vendorProducts.length,
    },
    {
      id: 2,
      name: "Online",
      items: approvedProduct.length,
    },
    {
      id: 3,
      name: "Pending",
      items: pendingProduct.length,
    },
    {
      id: 4,
      name: "Suspended",
      items: suspendedProduct.length,
    },
    {
      id: 5,
      name: "Deleted",
      items: deletedProduct.length,
    },
  ];
  return (
    <section className="w-10/12 mx-auto my-6">
      <InputSearch
        placeholder="Search For Product.."
        value={searchTerm}
        onChange={(value) => setSearchTerm(value)}
        onSearch={handleSearch}
      />
      <div className="flex items-center justify-center border-b-2">
        {menu.map((item) => (
          <>
            <button
              className={`font-bold pb-2 ${
                activeMenu === item.id
                  ? "text-primary border-b-2 border-primary"
                  : ""
              }`}
            >
              {item.name}
            </button>
          </>
        ))}
      </div>
    </section>
  );
};

export default Products;
