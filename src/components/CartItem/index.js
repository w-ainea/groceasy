import React from "react";

const CartItem = () => {
  return (
    <div className="cart-item flex justify-evenly p-4 items-center">
      <div className="cart-img rounded-full bg-gray-100 p-12"></div>
      <div className="product-details">
        <h1>Product Name</h1>
        <span>Product Price</span>
      </div>
      <div className="quantity flex items-center">
        <span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="minus w-4 h-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18 12H6"
            />
          </svg>
        </span>
        <span className="p-4">1</span>
        <span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="plus w-4 h-4 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
