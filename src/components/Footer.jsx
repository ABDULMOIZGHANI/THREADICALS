import React from "react";
import { Link, NavLink } from "react-router-dom";

// Icons
import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-800 min-h-[300px] text-white">
      <div className="container mx-auto py-10">
        {/* Footer 1st Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          {/* footer 1st column */}
          {/* === Foooter Logo */}
          <div className="grid items-center">
            <div className="text-2xl font-bold flex align-middle items-center">
              <Link
                to="/home"
                className="mx-auto md:mx-0 hover:text-red-500 transition-all"
              >
                THREADCLE
              </Link>
            </div>
            <p className="mt-4 p-4 md:p-0 text-center md:text-left">
              Your one-shop for all your needs. Shop with us and experience the
              best online shopping experienece.
            </p>
          </div>
          {/* footer 2nd column */}
          <div className="text-center">
            <h2 className="text-xl font-semibold ">Qick Links</h2>
            {/* footer Links */}
            <div className="grid mt-4 justify-center md:text-left ">
              <NavLink
                to="./Home"
                className="transition-all hover:text-red-500 hover:translate-x-2 m-1"
              >
                Home
              </NavLink>
              <NavLink
                to="./Shop"
                className="transition-all hover:text-red-500 hover:translate-x-2 m-1"
              >
                Shop
              </NavLink>
            </div>
          </div>

          {/* footer 3rd column */}
          <div className="mx-auto">
            <h2 className="text-xl text-center md:text-left font-semibold">
              Follow Us
            </h2>
            {/* Social Links */}
            <div className="mt-4 text-2xl flex gap-2">
              <FaFacebook
                className="cursor-pointer transition-all hover:text-red-500 hover:translate-y-[-10px] overflow-hidden "
                title="facebook"
              />
              <Link to="https://www.instagram.com/threadicals?">
                <FaInstagramSquare
                  className="cursor-pointer transition-all hover:text-red-500 hover:translate-y-[-10px] overflow-hidden "
                  title="instagram"
                />
              </Link>
              <FaSquareXTwitter
                className="cursor-pointer transition-all hover:text-red-500 hover:translate-y-[-10px] overflow-hidden "
                title="twitter"
              />
              <FaLinkedin
                className="cursor-pointer transition-all hover:text-red-500 hover:translate-y-[-10px] overflow-hidden "
                title="linkedIn"
              />
            </div>
          </div>
        </div>

        {/* footer 2nd Row */}
        <div className="mt-12 text-center md:text-left ">
          <hr />
          <div className="mt-2 md:flex md:justify-between">
            <p className=""> &copy; 2025. THREADCLE. All rights reserved.</p>
            <div className="mt-8 md:mt-0 cursor-pointer text-gray-400">
              <Link className="hover:underline mx-2" to="#">
                Privacy Pilicy
              </Link>
              <Link className="hover:underline mx-2" to="#">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
