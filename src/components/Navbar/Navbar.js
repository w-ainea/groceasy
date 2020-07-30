import React from "react";
import { auth } from "../../firebase/firebase.utils";

import { NavLink } from "react-router-dom";

const Navbar = ({ currentUser }) => (
  <nav className="main-nav flex flex-wrap justify-around  w-4/5 mx-auto h-8 py-8 content-center cursor-pointer text-green-900 font-light">
    <div className="logo flex flex-1 items-center">
      <NavLink to="/home" className="text-xl p-0">
        GROCEASY
      </NavLink>
    </div>
    <div className="nav-links flex justify-around flex-1 capitalize">
      {(window.location.pathname === "/dashboard") |
      (window.location.pathname === "/products") |
      (window.location.pathname === "/summary") ? (
        <div className="flex justify-between flex-1">
          <NavLink to="/summary" className="nav-link">
            Summary
          </NavLink>

          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
        </div>
      ) : (
        <div className="flex justify-around flex-1">
          <NavLink to="/shop" className="nav-link">
            shop
          </NavLink>

          <NavLink to="/cart" className="">
            cart
          </NavLink>
        </div>
      )}
    </div>
    <div className="nav-cta flex flex-1 justify-around capitalize">
      {currentUser ? (
        <div className="cursor-pointer" onClick={() => auth.signOut()}>
          {" "}
          Sign Out{" "}
        </div>
      ) : (
        <NavLink to="/sign-up">Sign In</NavLink>
      )}
    </div>
  </nav>
);

export default Navbar;
