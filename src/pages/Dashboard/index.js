import React from "react";
import { Analytics, Overview } from "../../components";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 w-screen">
      <section className="container mx-auto relative pt-24 px-10">
        <Overview />
        <Analytics />
      </section>
    </div>
  );
};

export default Dashboard;
