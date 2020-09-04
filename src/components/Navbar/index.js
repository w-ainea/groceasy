import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, ShopIcon, ContactIcon, AccountIcon } from "..";

const Navbar = () => {
  return (
    <nav className="px-4 fixed bottom-0 flex justify-between h-12 items-center w-screen sm:top-0 mt-24 sm:grid sm:h-56 sm:max-w-sm mx-auto text-sm sm:text-base font-light text-green-500 sm:w-64 sm:shadow-md sm:rounded-lg bg-white z-10">
      <NavLink to="/" className="sm:flex py-4 sm:p-2">
        <HomeIcon />
        Home
      </NavLink>
      <NavLink to="/shop" className="sm:flex sm:p-2 py-4">
        <ShopIcon />
        Categories
      </NavLink>
      <NavLink to="/contact" className="sm:flex sm:p-2 py-4">
        <ContactIcon />
        Contact
      </NavLink>
      <NavLink to="/account" className="sm:flex sm:p-2 py-4">
        <AccountIcon />
        Account
      </NavLink>
    </nav>
  );
};

export default Navbar;
