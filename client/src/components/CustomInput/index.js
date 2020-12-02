import React from "react";

const CustomInput = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  ...otherProps
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-2" htmlFor={name}>
        {label}
      </label>
      <div className="field">
        <input
          name={name}
          value={value}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={placeholder}
          onChange={onChange}
          required
          {...otherProps}
        />
      </div>
    </div>
  );
};

export default CustomInput;
