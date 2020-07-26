import React from "react";

const Navbar = () => (
  <nav className="main-nav flex flex-wrap justify-between container mx-auto h-8 content-center">
    <div className="logo flex flex-1">
      <h1 className="font-semibold ">GROCEASY</h1>
    </div>
    <ul className="nav-links flex justify-around flex-1 capitalize">
      <li className="nav-link">contact</li>
      <li className="nav-link">shop</li>
    </ul>
    <div className="nav-cta flex flex-1 justify-around capitalize">
      <button className="bg-transparent py-1 px-2 border-teal-400 border rounded font-semibold hover:text-white hover:bg-teal-500">
        Sign up
      </button>
      <nav-link className="">cart</nav-link>
    </div>
  </nav>
);

export default Navbar;
