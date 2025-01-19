import React from "react";
import { Categories } from "../assets/mockData";
import { MdOutlineArrowCircleRight } from "react-icons/md";

import homeBg from "../assets/images/home-bg.jpg";
import Button from "../components/Button/Button";
import InfoSection from "../components/InfoSection";
import TopProducts from "../components/TopProducts";
import Shop from "./Shop";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="bg-white mt-2 px-4 md:px-16 lg:px-24 py-4">
        <div className="container mx-auto py-4 flex flex-col md:flex-row gap-2 justify-center align-middle">
          {/* ====Image Section ===== */}
          <figure className="mx-auto md:w-9/12 md:relative">
            <img src={homeBg} alt="hero secition image" loading="lazy" />
            <figcaption className=" lg:absolute  lg:top-0 left-8 text-red-500">
              <p className="opacity-75">
                Mohammad Hassan, Zarck gul bangash, Rabia rehan, Nabeel ansaree,
                Hamza | THREADCLE
              </p>
              <h2 className=" font-semibold text-l">WELCOME TO THREADCLE</h2>
              <h3 className="mb-3 font-bold text-xl">MILLION + PRODUCTS</h3>
              <Link to={"/Shop"}>
                <Button text="Shop Now" icon={true} />
              </Link>
            </figcaption>
          </figure>
        </div>
      </main>

      <InfoSection />
      <TopProducts />
      <Shop />
    </>
  );
};

export default Home;
