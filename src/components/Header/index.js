import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-16 cursor-pointer">
      <div className="uppercase font-bold text-green-800">Groceasy</div>
      <ul className="flex text-green-500">
        <li className="header-link">
          <span className="header-icon">0</span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="bell w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </li>
        <li className="header-link">
          <span className="header-icon">0</span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="shopping-cart w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </li>
      </ul>
    </header>
  );
};

export default Header;
