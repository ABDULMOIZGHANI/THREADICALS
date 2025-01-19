import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import { addToCart } from "../redux/CartSlice";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState([]);

  const { id } = useParams();

  const AllProducts = useSelector((state) => state.product.products);
  // console.log(AllProducts);

  useEffect(() => {
    const productHasClicked = AllProducts.find((product) => product.id == id);
    setProductDetail(productHasClicked);
  }, []);
  // console.log(productDetail);

  const dispatch = useDispatch();
  const handleAddToCart = (productDetail) => {
    dispatch(addToCart(productDetail));
  };

  return (
    <div className="w-full flex justify-center">
      <div className="px-4 mx-auto my-10 md:border md:w-[90%] md:shadow-md md:flex justify-center md:items-center md:gap-x-16">
        {/* Image Section */}
        <div className="border md:border-0 my-16">
          <img
            src={productDetail.image}
            alt={productDetail.title}
            className="mx-auto h-60 md:h-96"
          />
        </div>

        {/* Deatail Section  */}
        <div className="mx-auto md:mx-0 md:w-2/3">
          <h2 className="my-2 font-bold text-2xl">{productDetail.title}</h2>
          <p className="my-2 text-lg "> {productDetail.description}</p>
          <p className="my-2  text-xl font-bold">
            Price: RS{productDetail.price}
          </p>
          <p>
            <b>Size:</b> {productDetail.size}
          </p>
          {/* ========== Buttons =================== */}
          <div className="my-4 md:my-2 text-lg">
            {/* ====== Add To CArt ==== */}
            <button
              className="h-10 w-36 rounded-lg text-white bg-red-500  text-lg  border cursor-pointer  hover:bg-red-700 transition-all duration-500 mr-6 mb-8"
              onClick={(e) => handleAddToCart(productDetail)}
            >
              Add To Cart
            </button>

            <Link to={"/Shop"}>
              <Button text="Visit Shop" icon={false} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
