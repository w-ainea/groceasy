import React from "react";
import { withRouter } from "react-router-dom";
import { CustomButton } from "..";

const Hero = ({ history }) => {
  return (
    <div className="px-10 pt-8">
      <h1 className="text-xl font-medium md:tracking-wide md:text-2xl md:font-semibold">
        Get groceries from your local supplier
      </h1>
      <span className="capitalize">in 5 minutes daily</span>

      <CustomButton
        onClick={() => history.push("/shop")}
        className="block rounded-full border bg-green-500 text-white hover:border-green-500 text-center w-32 mt-3 py-1 md:mt-6 md:py-2 hover:bg-white hover:text-green-500"
      >
        Shop Now
      </CustomButton>
    </div>
  );
};

export default withRouter(Hero);
