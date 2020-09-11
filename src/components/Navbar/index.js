import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, ShopIcon, ContactIcon, AccountIcon } from "..";

const Navbar = () => {
  return (
    <nav className="px-4 fixed bottom-0 flex justify-between h-12 items-center w-screen md:top-0 mt-24 md:grid md:h-56 mx-auto text-sm md:text-base font-light text-green-500 md:w-64 md:justify-center md:shadow-md md:rounded-lg bg-white z-10">
      <NavLink to="/" className="md:flex py-4 md:p-2">
        <HomeIcon />
        Home
      </NavLink>
      <NavLink to="/shop" className="md:flex md:p-2 py-4">
        <ShopIcon />
        Shop
      </NavLink>
      <NavLink to="/contact" className="md:flex md:p-2 py-4">
        <ContactIcon />
        Contact
      </NavLink>
      <NavLink to="/account" className="md:flex md:p-2 py-4">
        <AccountIcon />
        Account
      </NavLink>
    </nav>
  );
};

export default Navbar;
