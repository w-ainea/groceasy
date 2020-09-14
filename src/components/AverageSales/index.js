import React from "react";

const AverageSales = () => {
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      </div>
      <div className="lead-text text-center">
        <h1 className="total-amount font-bold text-xl uppercase">kes 2,000</h1>
        <p className="font-light">Average Weekly sales</p>
      </div>
    </div>
  );
};

export default AverageSales;
