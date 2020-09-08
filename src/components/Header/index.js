import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { cartItemTotalSelector } from "../../redux/selectors/itemCountSelector";
import { CartIcon, NotificationIcon } from "../Icons";

const Header = ({ itemCount }) => {
  return (
    <div className="shadow-md fixed w-full top-0 z-10 bg-white">
      <header className="main-header container sm:px-4 h-12">
        <div className="uppercase font-bold text-green-800">Groceasy</div>
        <ul className="flex text-green-500">
          <li className="header-link mx-12">
            <span className="header-icon">0</span>
            <NotificationIcon />
          </li>
          <Link to="/cart" className="header-link">
            <span className="header-icon">{itemCount}</span>
            <CartIcon />
          </Link>
        </ul>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: cartItemTotalSelector(state),
});

export default connect(mapStateToProps)(Header);
