import React from "react";
import { Link } from "react-router-dom";

import heroImg from "../../assets/img/hero-img.svg";

const Hero = () => (
  <div className="flex flex-wrap w-4/5 mx-auto mt-16 px-2">
    <div className="md:w-1/2 sm:w-screen p">
      <img
        src={heroImg}
        alt=""
        className="w-full bg-cover bg-no-repeat bg-center object-cover object-center"
      />
    </div>
    <div className="md:w-1/2 mt-8 sm:w-screen px-2">
      <h1 className="text-2xl font-semibold mb-4">
        We bring your local supplier store to you
      </h1>
      <p>We make it easy to shop for groceries from your local supplier</p>
      <div className="sm:mt-8 md:mt-16 flex-wrap m-2 text-sm">
        <Link
          to="/shop"
          className="bg-teal-500 py-2 px-8 rounded-full text-white mr-2 hover:text-teal-500 hover:bg-transparent border hover:border-teal-500"
        >
          Shop Now
        </Link>
        <Link
          to="/sign-up"
          className="bg-transparent border border-teal-400 py-2 px-8 hover:bg-teal-500 rounded-full hover:text-white"
        >
          Sign Up
        </Link>
      </div>
    </div>
  </div>
);

export default Hero;
