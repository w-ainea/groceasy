import React from "react";

const Input = ({ id, value, required, ...otherProps }) => {
  return (
    <div className="input">
      <input
        id={id}
        value={value}
        className="bg-gray-200 rounded-lg my-2 py-2 px-4"
        {...otherProps}
        required
      />
    </div>
  );
};

export default Input;
