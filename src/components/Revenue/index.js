import React from "react";

const Revenue = ({ label, value }) => {
  return (
    <div className="py-4 px-4 rounded-2xl shadow-md">
      <h1 className="font-headings font-medium text-green-400">{label}</h1>
      <h1 className="font-medium text-2xl text-gray-700 mt-4">
        {" "}
        <span className="font-bold text-xs">KES:</span> {value}
      </h1>
    </div>
  );
};

export default Revenue;
