import React from "react";
import { Analytics, ProductList, Profile, UserInfo } from "../../components";

const Dashboard = () => {
  function handleClick(e, tabName) {
    const tabContent = document.querySelectorAll(".tab-content");

    const tabLinks = document.querySelectorAll(".tab-link");

    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
  }

  return (
    <div className="bg-gray-100 px-10 md:px-20">
      <div className="grid">
        <Profile />
        <div className="overview mt-8">
          <h1 className="dashboard text-lg text-black-coffee font-headings">
            Dashboard
          </h1>
          <div className="dashboard-links max-w-sm flex justify-between py-4">
            <h1
              className="cursor-pointer tab-link border-b-2 hover:font-semibold hover:border-green-400 text-black-coffee"
              onClick={(event) => handleClick(event, "overview-tab")}
            >
              Overview
            </h1>
            <h1
              className="cursor-pointer tab-link border-b-2 hover:font-semibold hover:border-green-400 text-black-coffee"
              onClick={(event) => handleClick(event, "products-tab")}
            >
              Products
            </h1>
            <h1
              className="cursor-pointer tab-link border-b-2 hover:font-semibold hover:border-green-400 text-black-coffee"
              onClick={(event) => handleClick(event, "orders-tab")}
            >
              Orders
            </h1>
          </div>
        </div>

        <div className="tab-content" id="overview-tab">
          <UserInfo />
          <div className="flex shadow-sm">
            <Analytics />
          </div>
        </div>
        <div className="tab-content hidden" id="products-tab">
          <ProductList />
        </div>
        <div className="tab-content hidden" id="orders-tab">
          Orders
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
