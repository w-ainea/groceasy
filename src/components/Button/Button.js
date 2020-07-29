import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, ...otherProps }) => (
  <button
    className="bg-transparent border border-teal-400 py-2 px-8 hover:bg-teal-500 rounded-full hover:text-white mb-4"
    type="submit"
    {...otherProps}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
