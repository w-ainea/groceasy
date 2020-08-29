import React from "react";
import { Overview } from "../../components";

const Dashboard = () => {
  return (
    <>
      <div className="overview-container grid sm:grid-cols-2 gap-6">
        <Overview />
        <Overview />
      </div>
    </>
  );
};

export default Dashboard;
