import React from "react";
import { Link } from "react-router-dom";
import Fruits from "../../assets/img/fruits.jpg";
import Vegetables from "../../assets/img/vegetables.jpg";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
    </>
  );
};

const Hero = () => (
  <div className="px-10 pt-8">
    <h1 className="text-xl font-medium md:tracking-wide md:text-2xl md:font-semibold">
      Get groceries from your local supplier
    </h1>
    <span className="capitalize">in 5 minutes daily</span>

    <Link
      to="/shop"
      className="block rounded-full border border-green-500 text-center w-32 mt-3 py-1 md:mt-6 md:py-2 hover:bg-green-500 hover:text-white"
    >
      Get started
    </Link>
  </div>
);

const Categories = () => (
  <div className="p-10 mx-auto mb-10 sm:mb-0">
    <h1 className="font-medium text-xl md:font-semibold md:text-2xl py-4">
      Categories
    </h1>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="shadow-lg rounded-md bg-white object-cover overflow-hidden  ">
        <img src={`${Fruits}`} alt="fruits" className="w-100 bg-cover" />
        <div className="text-center my-4">
          <h1 className="text-xl font-medium">Fruits</h1>
          <Link to="/shop/fruits" className="text-green-400">
            Browse
          </Link>
        </div>
      </div>
      <div className="shadow-lg rounded-md bg-white object-cover overflow-hidden">
        <img src={`${Vegetables}`} alt="fruits" className="w-100 bg-cover" />
        <div className="text-center my-4">
          <h1 className="text-xl font-medium">Vegetables</h1>
          <Link to="/shop/fruits" className="text-green-400">
            Browse
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
