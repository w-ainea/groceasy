import React from "react";
import { NavLink } from "react-router-dom";
import { AnalyticsIcon, HomeIcon, ShopIcon } from "../Icons";

const MainNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white text-sm shadow-md sm:shadow-none sm:text-base sm:relative sm:items-center">
      <div className="px-10 flex justify-between items-center sm:px-0">
        <NavLink to="/" className="flex px-2 py-4 justify-center sm:hidden">
          <div className="grid ">
            <span className="sm:hidden">
              <HomeIcon />
            </span>
            <h1 className="hover:text-green-500 transition-all duration-200 md:text-lg">
              Home
            </h1>
          </div>
        </NavLink>
        <NavLink to="/shop" className="flex px-2 py-4 justify-center">
          <div className="">
            <span className="sm:hidden">
              <ShopIcon />
            </span>
            <h1 className="hover:text-green-500 transition-all duration-200 md:text-lg">
              Shop
            </h1>
          </div>
        </NavLink>
        <NavLink to="/auth" className="flex px-2 py-4 justify-center">
          <div className="grid">
            <span className="sm:hidden">
              <ShopIcon />
            </span>
            <h1 className="hover:text-green-500 transition-all duration-200 md:text-lg">
              Sell
            </h1>
          </div>
        </NavLink>
        {/* {isAuthenticated && (
          <NavLink to="/dashboard" className="flex px-2 py-4 justify-center">
            <div className="grid">
              <span className="sm:hidden">
                <AnalyticsIcon />
              </span>
              <h1 className="hover:text-green-500 transition-all duration-200 md:text-lg">
                Dashboard
              </h1>
            </div>
          </NavLink>
        )} */}
        {/* <AuthenticationButton /> */}
      </div>
    </div>
  );
};

export default MainNav;
