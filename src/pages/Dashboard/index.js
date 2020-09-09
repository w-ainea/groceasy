import React from "react";
import { Card } from "../../components";

const Dashboard = () => {
  return (
    <>
      <div className="overview-container grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Dashboard;
