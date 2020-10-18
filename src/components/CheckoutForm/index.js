import React from "react";
import { CustomButton } from "..";
import { CloseIcon } from "../Icons";

import "./index.css";

const CheckoutForm = ({ show, total, handleClose, checkout }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log(show);
  return (
    <div className={showHideClassName}>
      <div className="w-full max-w-xs modal-main rounded-md shadow-xs">
        <div className="text-green-500 absolute right-0 pr-4 pt-2">
          <CloseIcon onClick={handleClose} />
        </div>
        <form
          className="bg-white px-8 pt-6 pb-8 mb-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Enter Your Phone number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="tel"
              placeholder="0712345678"
            />
          </div>
          <p className="text-gray-700">Your total is: {total}</p>
          <div className="flex items-center justify-between">
            <CustomButton onClick={() => checkout(total)}>Pay Now</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
