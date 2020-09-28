import React from "react";
import {
  Analytics,
  // DashboardNav,
  // ProfileSummary,
  // MenuIcon,
} from "../../components";

const Dashboard = () => {
  return (
    <div className="bg-white w-screen grid h-screen">
      {/* <div className="grid-cols-1 hidden md:block md:fixed md:left-0 md:top-0 bg-green-400 h-screen shadow-xs">
        <DashboardNav />
      </div>
      <section className="profile-summary grid-cols-1 block md:fixed right-0 top-0 h-screen md:border-l-2">
        <ProfileSummary />
      </section>
      <section className="ml-64 grid-cols-2 py-8">
        <div className="toggle-nav absolute left-0 pl-8 top-auto text-gray-600 cursor-pointer">
          <span className="uppercase text-xs">menu</span>
          <MenuIcon />
        </div> */}
      <div className="flex shadow-sm">
        <Analytics />
      </div>
      {/* </section> */}
    </div>
  );
};

export default Dashboard;
