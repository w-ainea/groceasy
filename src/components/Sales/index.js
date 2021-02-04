import React from "react";

const Sales = ({ name, revenue, sold }) => {
  return (
    <div className="flex justify-between">
      <span>{name}</span>
      <span>{revenue}</span>
      <span>{sold}</span>
    </div>
  );
};

export default Sales;
