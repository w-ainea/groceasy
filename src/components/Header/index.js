import React from "react";

import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { selectCartItemsCount } from "../../redux/selectors/cartSelector";

import { NotificationIcon, CartIcon } from "../Icons";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";

const Header = ({ itemCount, history }) => {
  return (
    <div className="shadow-md relative w-screen top-0 z-10 bg-white">
      <header className="main-header container sm:px-4 h-16 text-gray-700">
        <div className="flex items-center">
          <NavLink to="/shop" className="flex px-2 py-4">
            <span>
              <h1 className="hover:text-green-500 transition-all duration-200 md:text-lg">
                Shop
              </h1>
            </span>
          </NavLink>
          <NavLink to="/dashboard" className="flex px-2 py-4">
            <span>
              <h1 className="hover:text-green-500 transition-all duration-200 md:text-lg">
                Dashboard
              </h1>
            </span>
          </NavLink>
        </div>

        {/* <div>
          <Link
            to="/"
            className="w-4 h-4 items-center text-mandarin-color font-semibold"
          >
            GROCEASY
          </Link>
        </div> */}

        <div className="flex relative">
          <NavLink
            to="/notifications"
            className="header-link mx-12 hover:text-green-400"
          >
            <span className="header-icon text-gray-800 rounded-full pl-2 top-0 right-0">
              0
            </span>

            <NotificationIcon />
          </NavLink>
          <NavLink to="/cart" className="header-link hover:text-green-400">
            <span className="header-icon text-gray-800 rounded-full pl-2 pb-1 top-0 right-0">
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
