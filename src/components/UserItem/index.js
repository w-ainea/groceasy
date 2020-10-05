import React from "react";

const UserItem = ({ icon, label, value }) => {
  return (
    <div className="item-container bg-white rounded-md px-4 py-2 max-w-64 flex justify-center items-center">
      <div className="icon-container  flex items-center p-4 bg-orange-100 mr-4 rounded-full">
        <span className="p-2 text-green-600">{icon}</span>
      </div>
      <div className="item-text">
        <h1 className="label font-bold">{label}</h1>
        <h2 className="value">{value}</h2>
      </div>
    </div>
  );
};

export default UserItem;
