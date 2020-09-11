import React from "react";

const SubtractIcon = ({ ...props }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="minus w-4 h-6 text-gray-800 cursor-pointer"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 12H6"
      />
    </svg>
  );
};

export default SubtractIcon;
