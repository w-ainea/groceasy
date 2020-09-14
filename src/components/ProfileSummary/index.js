import React from "react";
import { AverageSales, NewCustomers, Profile, TotalSales } from "..";

const ProfileSummary = () => {
  return (
    <div className="profile-summary my-8 mx-8">
      <Profile />
      <AverageSales />
      <TotalSales />
      <NewCustomers />
    </div>
  );
};

export default ProfileSummary;
