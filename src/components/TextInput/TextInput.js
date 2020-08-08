import React from "react";

function TextInput({ handleChange, label, id, required, ...otherProps }) {
  return (
    <div className="">
      <input
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
        onChange={handleChange}
        required
        {...otherProps}
      />
    </div>
  );
}

export default TextInput;
