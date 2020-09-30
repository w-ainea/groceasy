import React from "react";

const UserItem = ({ icon, label, value }) => {
  return (
    <div className="item-container bg-white rounded-md px-4 py-2 max-w-64 flex justify-center items-center">
      <div className="icon-container w-16 h-16 bg-yellow-200 rounded-full mr-8">
        <span className="p-2">{icon}</span>
      </div>
      <div className="item-text">
        <h1 className="label">{label}</h1>
        <h2 className="value">{value}</h2>
      </div>
    </div>
  );
};

export default UserItem;
