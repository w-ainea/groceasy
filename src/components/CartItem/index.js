import React from "react";
import { RemoveIcon } from "..";
import { connect } from "react-redux";
import { removeCartItem } from "../../redux/actions/cartActions";

const CartItem = ({ cartItem, removeItem }) => {
  return (
    <div className="cart-item flex justify-between items-center py-4 border-b-2 text-black-coffee">
      <div>
        <img
          src={cartItem.imgUrl}
          alt="item"
          className="w-20 h-20 rounded-full"
        />
      </div>
      <h4 className="font-light">{cartItem.product_name}</h4>

      <div className="font-thin">
        {cartItem.quantity} X {cartItem.price}
      </div>
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
