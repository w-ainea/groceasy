import React from "react";
import { RemoveIcon } from "..";
import { connect } from "react-redux";
import { removeCartItem } from "../../redux/actions/cartActions";

import { AddIcon, SubtractIcon } from "../Icons";

const CartItem = ({ cartItem, removeItem, addItem, subtractItem }) => {
  return (
    <div className="cart-item flex justify-between items-center py-4 border-b-2 text-black-coffee">
      <div>
        <img
          src={cartItem.imgurl}
          alt="item"
          className="w-20 h-20 rounded-full"
        />
      </div>
      <h4 className="font-light">{cartItem.product_name}</h4>

      <div className="flex items-center font-thin">
        <SubtractIcon onClick={() => subtractItem(cartItem)} />
        <span className="px-2 text-sm">{cartItem.quantity}</span>
        <AddIcon onClick={() => addItem(cartItem)} />
      </div>

      <div className="font-thin">{cartItem.price * cartItem.quantity}</div>
      <span>
        <RemoveIcon onClick={() => removeItem(cartItem)} />
      </span>
    </div>
  );
};

const mapDispatchToProps = {
  removeItem: removeCartItem,
};

export default connect(null, mapDispatchToProps)(CartItem);
