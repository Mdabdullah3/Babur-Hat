/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import useEventStore from "../../../store/eventStore";
import { SERVER } from "../../../config";
import Link from "next/link";
const SuperDells = () => {
  const { packageProducts, fetchPackageProducts } = useEventStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchPackageProducts();
      setLoading(false);
    };
    fetchData();
  }, [fetchPackageProducts]);

  // if (loading) {
  //     return <div>Loading...</div>;
  //   }

  console.log(
    `${SERVER}${packageProducts[0]?.product?.coverPhoto?.secure_url}`
  );
  return (
    <div className="bg-rose-200/60 px-6 py-4 rounded-2xl w-96">
      <h1 className="text-2xl text-primary font-bold mb-4">Super Dells</h1>
      <div className="bg-white rounded-2xl py-4">
        <img
          src={`${SERVER}${packageProducts[0]?.product?.coverPhoto?.secure_url}`}
          className="rounded-2xl mx-auto w-60"
          alt="Super Dells"
        />
        <h1 className="text-xl font-bold text-primary text-center mt-2">
          BDT
          {packageProducts[0]?.product?.productVariants[0]?.discount > 0
            ? packageProducts[0]?.product?.productVariants[0]?.discount
            : packageProducts[0]?.product?.productVariants[0]?.price}
          .00
          <del className="ml-2 font-normal text-gray-400 text-lg">
            BDT
            {packageProducts[0]?.product?.productVariants[0]?.discount &&
              packageProducts[0]?.product?.productVariants[0]?.price}
            .00
          </del>
        </h1>
        <div className="flex items-center justify-center gap-3">
          {packageProducts?.slice(0, 2).map((item) => (
            <>
              <Link href={`/products/${item?.product?._id}`} key={item?._id}>
                <img
                  src={`${SERVER}${item?.product?.coverPhoto?.secure_url}`}
                  alt="sd"
                  className="w-36 rounded-md"
                />
                <h1 className="text-md  text-primary text-center mt-2">
                  BDT
                  {item?.product?.productVariants[0]?.discount > 0
                    ? item?.product?.productVariants[0]?.discount
                    : item?.product?.productVariants[0]?.price}
                  <del className="ml-2 font-normal text-gray-400 text-sm">
                    BDT
                    {item?.product?.productVariants[0]?.discount &&
                      item?.product?.productVariants[0]?.price}
                  </del>
                </h1>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuperDells;
