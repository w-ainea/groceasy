import React from "react";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className=" block mt-6 rounded-full bg-green-500 text-white py-2 px-4 hover:bg-white hover:text-green-500 hover: border hover:border-green-500 uppercase w-56"
    >
      {children}
    </button>
  );
};

export default CustomButton;
