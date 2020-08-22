import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-4 fixed bottom-0 flex justify-between h-12 items-center bg-white w-screen sm:relative sm:grid sm:bg-white max-w-sm mx-auto text font-light text-green-500 sm:w-6/12">
      <NavLink to="/" className="navlink sm:p-2">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="home w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        Home
      </NavLink>
      <NavLink to="/shop" className="navlink sm:p-2">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="shopping-bag w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        Shop
      </NavLink>
      <NavLink to="/contact" className="navlink sm:p-2">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="support w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        Contact
      </NavLink>
      <NavLink to="/account" className="navlink sm:p-2">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="user w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        Account
      </NavLink>
    </nav>
  );
};

export default Navbar;
