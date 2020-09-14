import React from "react";
import { NavLink } from "react-router-dom";
import {
  MenuIcon,
  DashboardIcon,
  AnalyticsIcon,
  CartIcon,
  StockIcon,
} from "..";

const DashboardNav = () => {
  return (
    <div className="dash-nav w-full px-16 my-8 mx-auto relative hidden">
      <div className="nav-links pt-8">
        <NavLink
          to="/dashboard"
          className="nav-link py-4 text-white font-light text-lg flex"
        >
          <DashboardIcon />

          <span className="pl-4">Dashboard</span>
        </NavLink>
        <NavLink
          to="/analytics"
          className="nav-link py-4 text-white font-light text-lg flex"
        >
          <AnalyticsIcon />
          <span className="pl-4">Analytics</span>
        </NavLink>
        <NavLink
          to="/orders"
          className="nav-link py-4 text-white font-light text-lg flex"
        >
          <CartIcon />
          <span className="pl-4">Orders</span>
        </NavLink>
        <NavLink
          to="/stock"
          className="nav-link py-4 text-white font-light text-lg flex"
        >
          <StockIcon />
          <span className="pl-4">Inventory</span>
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardNav;
