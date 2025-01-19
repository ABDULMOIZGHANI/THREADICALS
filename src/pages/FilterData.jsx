import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filterData);
  return (
    <>
      <h1 className="text-center mt-8 font-semibold text-3xl text-red-500">
        {filterProducts.length > 0 ? "Filter Data" : "No Product Found..."}
      </h1>
      <div className="p-4 gap-6 container mx-auto my-4 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filterProducts.map((item, index) => {
          return <ProductCard item={item} key={index*7+1} />;
        })}
      </div>
    </>
  );
};

export default FilterData;
