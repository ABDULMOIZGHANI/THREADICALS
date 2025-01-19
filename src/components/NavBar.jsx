import React, { useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LOGO from "/LOGO.png";

//For accessing the Store state thats why use  useSelector Hook.
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ModalMainForm from "./ModalMainForm";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/ProductSlice";

const NavBar = () => {
  //For accessing the Store state thats why use  useSelector Hook.
  //  Store kay ander cart hai or usmai carProducts ka array hai jo hamry cartSlice mai hai.
  const productsInCart = useSelector((state) => state.cart);
  // console.log(productsInCart.totalQuantity);

  // ==== For Login Sign Up ==================
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };
  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  return (
    <header
      className="bg-white shadow-md "
      style={{ position: "sticky", top: "0px", zIndex: "2" }}
    >
      {/* ===== Top Header ====== */}
      <div className="container mx-auto px-4 md:px-16  lg:px-24 py-4 flex align-middle justify-between ">
        <div className="text-lg font-bold flex align-middle items-center">
          <Link to="/" className="hover:text-red-500 transition-all">
            <img src={LOGO} alt="" style={{ width: "120px" }} />
          </Link>
        </div>
        {/* ============= Search Bar ============== */}
        <div className="relative flex-1 mx-4">
          {/* <form onSubmit={handleSearch} > */}
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="w-full border py-2 px-4"
              placeholder="search here..."
              // onChange={(e)=> setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-red-500 cursor-pointer" />
          </form>
        </div>
        {/* ========= Icons  =============*/}
        <div className="flex items-center space-x-4 ">
          <Link to="/Cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl " />
              {productsInCart.totalQuantity > 0 ? (
                <span
                  className="bg-red-500 text-white  h-6 w-6 rounded-full text-center leading-6 block 
            absolute top-[-15px] right-[-15px]"
                >
                  {productsInCart.totalQuantity}
                </span>
              ) : null}
            </div>
          </Link>
          <button
            className="hidden md:block"
            onClick={() => setIsModelOpen(true)}
          >
            login | Register
          </button>
          <button
            className="block md:hidden"
            onClick={() => setIsModelOpen(true)}
          >
            <FaUser />
          </button>
        </div>
      </div>
      {/* ===== Links ===== */}
      <nav className="flex justify-center align-middle space-x-10 py-4 text-sm font-bold uppercase">
        <NavLink to="./Home" className="transition-all hover:text-red-500">
          Home
        </NavLink>
        <NavLink to="./Shop" className="transition-all hover:text-red-500">
          Shop
        </NavLink>
      </nav>
      <ModalMainForm isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </ModalMainForm>
    </header>
  );
};

export default NavBar;
