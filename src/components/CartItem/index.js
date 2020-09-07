import React from "react";
import { AddIcon, SubtractIcon } from "..";

const CartItem = ({ cartItem }) => {
  return (
    <div className="cart-item flex justify-evenly p-4 items-center">
      <div className="cart-img">
        <img className="rounded-full w-10 h-10" src={cartItem.imgUrl} alt="" />
      </div>
      <div className="product-details">
        <h1>{cartItem.name}</h1>
        <span>{cartItem.price * cartItem.quantity}</span>
      </div>
      <div className="quantity flex items-center">
        <span>
          <AddIcon />
        </span>
        <span className="p-4">{cartItem.quantity}</span>
        <span>
          <SubtractIcon />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
