import React from "react";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { selectCartItemsCount } from "../../redux/selectors/cartSelector";
import { CartIcon, NotificationIcon } from "../Icons";
import { useAuth0 } from "@auth0/auth0-react";
// import { LoginButton, LogoutButton } from "..";

const Header = ({ itemCount, history }) => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="shadow-md fixed w-full top-0 z-10 bg-white">
      <header className="main-header container sm:px-4 h-12">
        <div className="uppercase font-bold text-green-800">Groceasy</div>
        <ul className="flex flex-auto justify-center text-green-500">
          <li className="header-link mx-12">
            <span className="header-icon">0</span>
            <NotificationIcon />
          </li>
          <Link to="/cart" className="header-link">
            <span className="header-icon">{itemCount}</span>
            <CartIcon />
          </Link>
        </ul>
        {isAuthenticated && (
          <div>
            <span onClick={() => history.push("/account")}>{user.name}</span>
          </div>
        )}
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default withRouter(connect(mapStateToProps)(Header));
