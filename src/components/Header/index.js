import React from "react";

import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { selectCartItemsCount } from "../../redux/selectors/cartSelector";

import { NotificationIcon, CartIcon } from "../Icons";
import { MainNav } from "..";

const Header = ({ itemCount, user }) => {
  return (
    <div className="shadow-md top-0 z-10 bg-white">
      <header className="main-header container sm:px-4 h-12 sm:h-16 text-gray-700">
        <MainNav user={user} />
        <div className="flex">
          <Link to="/" className="text-mandarin-color font-semibold w-4/12">
            GROCEASY
          </Link>
        </div>

        <div className="flex relative">
          <NavLink
            to="/notifications"
            className="header-link mx-12 hover:text-green-400"
          >
            <span className="header-icon absolute rounded-full pl-2 top-0 left-0 text-mandarin-color">
              0
            </span>

            <NotificationIcon />
          </NavLink>
          <NavLink to="/cart" className="header-link hover:text-green-400">
            <span className="header-icon absolute rounded-full pl-2 pb-1 top-0 left-0 text-mandarin-color">
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
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(Header));
