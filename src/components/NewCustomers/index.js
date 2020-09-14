import React from "react";

const NewCustomers = () => {
  return (
    <div className="average-container px-10 my-8 py-4 mx-auto flex justify-around items-center text-green-400 shadow rounded-md">
      <div className="averageIcon bg-orange-100  p-4 rounded-full ">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      </div>
      <div className="lead-text text-center">
        <h1 className="total-amount font-bold text-xl uppercase">20</h1>
        <p className="font-light">New Customers</p>
      </div>
    </div>
  );
};

export default NewCustomers;
