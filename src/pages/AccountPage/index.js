import * as React from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import * as authActions from "../../redux/actions/authActions";
import Dashboard from "../Dashboard";
import { OrderList, ProductList } from "../../components";

const AccountPage = ({ user, loadUser }) => {
  const history = useHistory();
  const { isAuthenticated, credentials } = user;

  React.useEffect(() => {
    // if (!credentials.username) {
    //   loadUser(credentials.id, credentials.token).then((user) => {
    //     return user;
    //   });
    // }
  });

  function handleClick(e, navLink) {
    // display tab content on click
    const navLinks = document.querySelectorAll(".nav-link");

    const sectionContent = document.querySelectorAll(".section-content");

    for (let i = 0; i < sectionContent.length; i++) {
      sectionContent[i].style.display = "none";
    }

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].className = navLinks[i].className.replace("active", "");
    }

    document.getElementById(navLink).style.display = "block";
    e.currentTarget.className += " active";
  }

  return (
    <div className="container">
      {isAuthenticated ? (
        <div className="grid grid-cols-3 gap-16">
          <section className="navigation col-span-1">
            <div className="user-profile flex justify-between my-4 px-10 w-40">
              {/* <div className="profile-img w-16 h-16 bg-orange-300 rounded-full"></div> */}
              <div className="user-name my-4">
                <h1 className="font-bold text-xl text-gray-700">
                  Hello, {credentials.username}
                </h1>
              </div>
            </div>
            <ul className="nav-links text-gray-700">
              <li
                className="nav-link"
                onClick={(e) => handleClick(e, "dashboard")}
              >
                <span className="material-icons">home</span>
                <h1 className="nav-link__text">Dashboard</h1>
              </li>
              <li
                className="nav-link"
                onClick={(e) => handleClick(e, "products")}
              >
                <span className="material-icons">receipt_long</span>
                <h1 className="nav-link__text">Products</h1>
              </li>
              <li
                className="nav-link"
                onClick={(e) => handleClick(e, "orders")}
              >
                <span className="material-icons">shopping_basket</span>
                <h1 className="nav-link__text">Orders</h1>
              </li>
              <li
                className="nav-link"
                onClick={(e) => handleClick(e, "messages")}
              >
                <span className="material-icons">chat</span>
                <h1 className="nav-link__text">Messages</h1>
              </li>
              <li
                className="nav-link"
                onClick={(e) => handleClick(e, "profile")}
              >
                <span className="material-icons">account_circle</span>
                <h1 className="nav-link__text">Profile</h1>
              </li>
            </ul>
          </section>
          <section className="main-content col-span-2 bg-gray-100 px-8">
            <h1 className="section-header"></h1>
            <div className="section-container">
              <div className="section-content" id="dashboard">
                <Dashboard />
              </div>
              <div className="section-content" id="products">
                <ProductList />
              </div>
              <div className="section-content" id="orders">
                <OrderList />
              </div>
              <div className="section-content" id="messages"></div>
              <div className="section-content" id="profile"></div>
            </div>
          </section>
        </div>
      ) : (
        <Redirect to="/auth" />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  loadUser: authActions.fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
