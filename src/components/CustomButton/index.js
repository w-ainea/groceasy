import React from "react";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className="mt-6 rounded-full bg-green-500 text-white py-2 px-4 hover:bg-mandarin-color uppercase w-56 transition transform duration-500 ease-in-out"
    >
      {children}
    </button>
  );
};

export default CustomButton;
