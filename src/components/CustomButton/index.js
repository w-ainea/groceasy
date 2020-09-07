import React from "react";

const CustomButton = (props) => {
  const { children } = props;

  return (
    <button className="rounded-full bg-green-500 text-white py-2 px-4 hover:bg-white hover:text-green-500 hover: border hover:border-green-500 uppercase">
      {children}
    </button>
  );
};

export default CustomButton;
