import React from "react";

const TotalSales = () => {
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="lead-text text-center">
        <h1 className="total-amount font-bold text-xl uppercase">kes 20,000</h1>
        <p className="font-light">Total sales</p>
      </div>
    </div>
  );
};

export default TotalSales;
