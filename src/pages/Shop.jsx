import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard.jsx";
import { fetchProducts } from "../redux/ProductSlice.jsx";

// for unique id
import { v4 as uuidv4 } from "uuid";
import Loader from "../components/loader/Loader.jsx";

const Shop = () => {
  const dispatch = useDispatch();
  const productsFromStore = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // console.log(productsFromStore);

  //   ============= Loader =============
  if (productsFromStore.isLoading) {
    return (
      <div className="mt-20 container mx-auto">
        {" "}
        <Loader />
      </div>
    );
  }
  if (productsFromStore.isError) {
    return (
      <h1 className="mt-20 container mx-auto text-center font-bold text-3xl">
        Netwok Error In Shop Page.⚠️⚠️⚠️
      </h1>
    );
  }
  return (
    <>
      <h1 className="text-center mt-8 font-semibold text-3xl text-red-500">
        SHOP
      </h1>
      <div className="p-4 gap-6 container mx-auto my-4 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {productsFromStore.products.slice(0, 20).map((item, index) => {
          return <ProductCard item={item} key={uuidv4 + index} />;
        })}
      </div>
    </>
  );
};

export default Shop;
