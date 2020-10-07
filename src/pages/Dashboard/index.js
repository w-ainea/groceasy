import React from "react";
import { Analytics, Profile, UserInfo } from "../../components";

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
    e.currentTarget.className += "active";
  }

  return (
    <div className="bg-gray-100">
      <div className="grid pt-4 container mx-auto">
        <Profile />
        <div className="overview">
          <h1 className="dashboard font-bold text-xl">Dashboard</h1>
          <div className="dashboard-links max-w-md flex justify-between pt-4">
            <div
              className="tab-link border-b-2 hover:cursor-pointer active:border-green-400 hover:font-semibold hover:border-green-400"
              onClick={(event) => handleClick(event, "overview-tab")}
            >
              Overview
            </div>
            <div
              className="tab-link border-b-2 hover:cursor-pointer active:border-green-400 hover:font-semibold hover:border-green-400"
              onClick={(event) => handleClick(event, "products-tab")}
            >
              Products
            </div>
            <div
              className="tab-link border-b-2 hover:cursor-pointer active:border-green-400 hover:font-semibold hover:border-green-400"
              onClick={(event) => handleClick(event, "orders-tab")}
            >
              Orders
            </div>
          </div>
        </div>

        <div className="tab-content" id="overview-tab">
          <UserInfo />
          <div className="flex shadow-sm">
            <Analytics />
          </div>
        </div>
        <div className="tab-content" id="products-tab"></div>
        <div className="tab-content" id="orders-tab"></div>
      </div>
    </div>
  );
};

export default Dashboard;
