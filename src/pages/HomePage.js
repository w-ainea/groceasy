import React from "react";
import Hero from "../components/Hero/Hero";

import Browse from "../assets/img/browse.svg";
import Choose from "../assets/img/choose.svg";
import Checkout from "../assets/img/checkout.svg";
import ProductPreview from "../components/ProductPreview/ProductPreview";

const HomePage = () => (
  <>
    <Hero />
    <Features />
    <ProductPreview />
  </>
);

const Features = () => (
  <div className="mt-24 w-4/5 mx-auto pb-16">
    <h2 className="text-center text-4xl mb-8 font-semibold">How it works</h2>
    <div className="flex flex-wrap mx-1 overflow-hidden font-light mt-12">
      <div className="my-1 px-1 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 ">
        <img src={Browse} alt="Browse" className="w-32 h-32 mx-auto pb-8" />

        <h3>
          Browse through the collection of prducts offered by your local
          supplier
        </h3>
      </div>

      <div className="my-1 px-1 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
        <img src={Choose} alt="" className="w-32 h-32 mx-auto pb-8" />

        <h3>Pick your products from the collection</h3>
      </div>

      <div className="my-1 px-1 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
        <img src={Checkout} alt="" className="w-32 h-32 mx-auto pb-8" />
        <h3>You're all set, now proceeed to check out</h3>
      </div>
    </div>
  </div>
);

export default HomePage;
