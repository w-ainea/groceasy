import React from "react";

function TextInput({ handleChange, label, id, required, ...otherProps }) {
  return (
    <div className="mb-4">
      <label
        className="block text-grey-darker text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        onChange={handleChange}
        required
        {...otherProps}
      />
    </div>
  );
}

export default TextInput;
