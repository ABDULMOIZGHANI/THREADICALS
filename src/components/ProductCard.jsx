import React from "react";
import { addToCart } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductCard = ({ item, index }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(item));

    // console.log("Added..." , item.id)
  };

  return (
    <Link to={`/product/${item.id}`}>
      <div
        key={index + 1}
        className="relative sm:w-72 min-h-[580px] sm:mx-auto hover:border-red-400 rounded-lg shadow-lg md:w-full border text-center"
      >
        <figure className="overflow-hidden">
          <img
            loading="lazy"
            className="sm:w-72 w-full h-[18rem] transform transition-transform duration-300 hover:scale-105 "
            src={item.image}
            alt={item.title}
          />
          <figcaption className="font-bold p-2 text-lg">
            {item.title.slice(0, 38)}...
          </figcaption>
        </figure>
        <div className="p-3">
          <h2 className="font-semibold text-2xl">RS{item.price}</h2>
          <p>{item.description.slice(0, 100)}...</p>
        </div>
        {/* Add to cart button */}
        <div
          onClick={(e) => handleAddToCart(e, item)}
          className="mt-12 w-8 h-8 rounded-full flex items-center align-middle justify-center group text-white bg-red-500  text-lg absolute border right-4 bottom-3 cursor-pointer hover:w-32 hover:p-2 hover:bg-red-400 transition-all duration-500 overflow-hidden"
        >
          <span className="group-hover:hidden">+</span>
          <span className="hidden text-nowrap group-hover:block">
            Add To Cart
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
