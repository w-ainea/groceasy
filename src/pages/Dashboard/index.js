import React from "react";
import { Analytics, Profile, UserInfo } from "../../components";

const Dashboard = () => {
  return (
    <div className="bg-gray-100">
      <div className="grid pt-4 container mx-auto">
        <Profile />

        <UserInfo />
        <div className="flex shadow-sm">
          <Analytics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
