"use client";
import React, { useEffect, useState } from "react";
import useProductStore from "../../store/ProductStore";
import ProductCardDesign from "../common/ProductCardDesign";
import LoadingState from "../common/LoadingState";
const DeafultProducts = () => {
  const { products, fetchProducts, page, totalPages, setPage } =
    useProductStore();
  const sectionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const loadProduct = async () => {
      await fetchProducts();
      setLoading(false);
    };

    loadProduct();
  }, [page, fetchProducts]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="lg:w-11/12 w-[95%] mx-auto mt-4 lg:mt-10">
      {loading ? (
        <LoadingState />
      ) : (
        <section>
          <h1 className="text-lg lg:text-2xl lg:mb-10 mb-4 font-bold">
            Recomended Products
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-8">
            {products?.map((product) => (
              <ProductCardDesign product={product} key={product?._id} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-12">
            {/* Previous Button */}
            <button
              className="px-4 py-2 mx-1 text-sm bg-primary rounded hover:bg-primary/70 text-white"
              onClick={() => handlePageChange(page - 1)}
              disabled={page <= 1}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  className={`px-4 py-2 mx-1 text-sm rounded ${
                    pageNumber === page
                      ? "bg-primary text-white"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                  disabled={pageNumber === page} // Disable the active page button
                >
                  {pageNumber}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              className="px-4 py-2 mx-1 text-sm bg-primary rounded hover:bg-primary/70 text-white"
              onClick={() => handlePageChange(page + 1)}
              disabled={page >= totalPages}
            >
              Next
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default DeafultProducts;
