import React from "react";

const Seller = ({ username, email, products }) => {
  return (
    <div className="seller">
      <div className="seller-info flex">
        <h1>{username}</h1>
        <h1>{email}</h1>
        <h1>{products}</h1>
      </div>
    </div>
  );
};

export default Seller;
