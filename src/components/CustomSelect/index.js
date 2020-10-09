import React from "react";

const CustomSelect = ({
  name,
  label,
  value,
  onChange,
  options,
  defaultOption,
  // options,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className="mb-4">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
        >
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default CustomSelect;
