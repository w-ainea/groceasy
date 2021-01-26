import React from "react";

import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { selectCartItemsCount } from "../../redux/selectors/cartSelector";

import { NotificationIcon, CartIcon } from "../Icons";
import { MainNav } from "..";

const Header = ({ itemCount }) => {
  return (
    <div className="shadow-md relative w-screen top-0 z-10 bg-white">
      <header className="main-header container sm:px-4 h-12 sm:h-16 text-gray-700">
        <MainNav />
        <div className="flex">
          <Link to="/" className="text-mandarin-color font-semibold w-4/12">
            GROCEASY
          </Link>
        </div>

        <div className="flex relative">
          <NavLink
            to="/notifications"
            className="header-link relative mx-12 hover:text-green-400"
          >
            <span className="header-icon absolute text-gray-800 rounded-full pl-2 right-0">
              0
            </span>

            <NotificationIcon />
          </NavLink>
          <NavLink
            to="/cart"
            className="header-link relative hover:text-green-400"
          >
            <span className="header-icon absolute text-gray-800 rounded-full pl-2 pb-1 top-0 right-0">
              {itemCount}
            </span>
            <CartIcon />
          </NavLink>
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default withRouter(connect(mapStateToProps)(Header));
