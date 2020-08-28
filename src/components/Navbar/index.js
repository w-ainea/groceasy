import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-4 fixed bottom-0 flex justify-between h-12 items-center w-screen sm:top-0 mt-24 sm:grid sm:h-56 sm:max-w-sm mx-auto text-sm sm:text-base font-light text-green-500 sm:w-64 sm:shadow-md sm:rounded-lg bg-white z-10">
      <NavLink to="/" className="sm:flex pt-3 sm:p-2">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="home w-6 h-6 mx-auto"
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
      <NavLink to="/shop" className="sm:flex pt-3 sm:p-2">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="shopping-bag w-6 h-6 mx-auto"
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
      <NavLink to="/contact" className="sm:flex pt-3 sm:p-2">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="question-mark-circle w-6 h-6 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Contact
      </NavLink>
      <NavLink to="/account" className="sm:flex pt-3 sm:p-2">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="user w-6 h-6 mx-auto"
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
