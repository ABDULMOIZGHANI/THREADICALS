import React, { useState } from "react";

//For accessing the Store state thats why use  useSelector Hook.
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import { FaTrashAlt } from "react-icons/fa";
import ModalMainForm from "../components/ModalMainForm";
import ChangeAddress from "../components/ChangeAddress";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const [isModelOpen, setIsModelOpen] = useState(false);
  const productsInCart = useSelector((state) => state.cart.cartProducts);
  const productsInCartQ = useSelector((state) => state.cart);
  // console.log(productsInCart);

  const [address, setAddress] = useState("main street, 0014");

  // =========== Remove item from CArt =================
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-8 min-h-96 px-4 md:px-16 lg:px-24">
      {productsInCart.length > 0 ? (
        // ======== If Cart Is NOT Empty =================
        <div>
          <h3 className="text-3xl font-bold my-6">Shopping Cart</h3>
          {/* Make 2 colmns */}
          <div className="flex flex-col justify-between xl:space-x-10  xl:flex-row mt-8 ">
            {/* For display products */}
            <div className="xl:w-2/3 max-h-[800px] overflow-y-scroll ">
              {/* For Headinds */}
              <div className="hidden md:flex justify-between border-b items-center px-4 mb-4 text-s font-bold">
                <h4>Product</h4>
                <div className="flex space-x-8">
                  <h4>PRICE</h4>
                  <h4>QUANTITY</h4>
                  <h4>SUBTOTAL</h4>
                  <h4>REMOVE</h4>
                </div>
              </div>

              {productsInCart.map((product, i) => {
                return (
                  <div
                    className="block md:flex items-center justify-between align-middle pt-3 border-b odd:bg-slate-100 my-2   "
                    key={i * 9}
                  >
                    <div className="flex md:flex ml-4 lg:ml-0 items-center space-x-4">
                      <img
                        src={product.image}
                        className="h-12 w-12 lg:h-16 lg:w-16 mb-2"
                        loading="lazy"
                        alt="product image"
                      />
                      <figcaption className="md:block flex-1 text-sm lg:text-lg w-40 ml-4 font-semibold">
                        {product.title.slice(0, 25)}...
                      </figcaption>
                    </div>

                    <div className="flex mr-9 space-x-3 md:space-x-16 items-center justify-evenly">
                      <p>RS {product.price.toFixed(2)}</p>
                      <div className="flex items-center justify-center border">
                        <button
                          className="text-xl font-bold px-1.5 border-r hover:bg-red-500 hover:text-white"
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                          disabled={product.quantity === 1}
                        >
                          -
                        </button>
                        <p className="text-xl px-2">{product.quantity}</p>
                        <button
                          className="text-xl px-1 border-l hover:bg-red-500 hover:text-white "
                          onClick={() => dispatch(increaseQuantity(product.id))}
                          disabled={product.quantity === 10}
                        >
                          +
                        </button>
                      </div>
                      <p className="border w-12">
                        RS {(product.price * product.quantity).toFixed(1)}
                      </p>
                      {/* ===Revome Button===== */}
                      <button
                        className="hover:text-red-600"
                        onClick={(e) => dispatch(removeFromCart(product.id))}
                      >
                        <FaTrashAlt />{" "}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* ============  for Cart total ================ */}
            <div className="w-full xl:w-1/3 mt-12 xl:mt-0 max-h-80 xl:sticky xl:top-5 bg-white p-6 rounded-lg shadow-md border ">
              <h3 className="text-lg font-bold mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pd-1">
                <span>Total Items:</span>
                <span className="font-semibold">
                  {productsInCartQ.totalQuantity}
                </span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping: </p>
                <p className="">
                  Shipping To <span className="font-bold">{address}</span>{" "}
                </p>

                <button
                  className="text-blue-500 hover:underline mt-1 "
                  onClick={() => setIsModelOpen(true)}
                >
                  change address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span className="font-semibold">
                  RS {productsInCartQ.totalPrice.toFixed(2)}
                </span>
              </div>
              <button
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
                onClick={() => navigate("/Checkout")}
              >
                Proceed To Check
              </button>
            </div>
          </div>
          {/* =========== For chaning the address =============== */}
          <ModalMainForm
            isModelOpen={isModelOpen}
            setIsModelOpen={setIsModelOpen}
          >
            <ChangeAddress
              setAddress={setAddress}
              setIsModelOpen={setIsModelOpen}
            />
          </ModalMainForm>
        </div>
      ) : (
        // ======== While CArt is Empty ==================
        <div className="grid justify-center mt-5 items-center">
          <h1 className="text-center text-3xl w-max m-auto items-center p-4  text-red-500">
            Card Is Empty
          </h1>
          <img src="/emptyCart.png" alt="Empty cart image" />
          <Link to="/shop" className="mt-7 text-center">
            <Button text="Visit Shop" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
