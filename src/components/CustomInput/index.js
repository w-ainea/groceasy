import React from "react";

const CustomInput = ({ name, placeholder, value, onChange }) => {
  return (
    <div className="field">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={name}
        >
          {name}
        </label>
        <input
          type="text"
          name={name}
          value={value}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CustomInput;
