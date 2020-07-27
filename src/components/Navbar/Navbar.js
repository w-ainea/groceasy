import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="main-nav flex flex-wrap justify-between  w-4/5 mx-auto h-8 py-8 content-center cursor-pointer text-green-900 font-light">
    <div className="logo flex flex-1">
      <NavLink to="/" className="text-xl p-0">
        GROCEASY
      </NavLink>
    </div>
    <div className="nav-links flex justify-around flex-1 capitalize">
      <NavLink to="/contact" className="nav-link">
        contact
      </NavLink>
      <NavLink to="/shop" className="nav-link">
        shop
      </NavLink>
    </div>
    <div className="nav-cta flex flex-1 justify-around capitalize">
      <NavLink to="/sign-up">Sign up</NavLink>

      <NavLink to="/cart" className="">
        cart
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
