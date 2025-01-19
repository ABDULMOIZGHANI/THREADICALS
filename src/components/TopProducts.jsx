import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/ProductSlice";
import ProductCard from "./ProductCard";
import Loader from "./loader/Loader";

const TopProducts = () => {
  // ========== REdux==============
  const dispatch = useDispatch();
  const productsFromStore = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // console.log(productsFromStore);

  //   ============= Loader =============
  if (productsFromStore.isLoading) {
    return <Loader />;
  }
  if (productsFromStore.isError) {
    return <h1 className='mt-20 container mx-auto text-center font-bold text-3xl' >Netwok Error⚠️⚠️⚠️</h1>
  }
  return (
    <>
      <h1 className="text-center my-4 font-semibold text-3xl text-red-500">Top Products</h1>
    <div className="p-4 gap-6 gap-y-16 container mx-auto my-4 grid grid-cols-1 md:grid-cols-3 md:gap-y-16 lg:grid-cols-4 xl:grid-cols-5">
      {productsFromStore.products.slice(0, 5).map((item, index) => {
        return (
          <ProductCard item={item} key={index} /> 
        );
      })}
    </div>
      </>
  );
};

export default TopProducts;
