import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { CartItem, CustomButton } from "..";
import { BackIcon } from "..";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/selectors/cartSelector";

const Cart = ({ cartItems, history, total }) => {
  return (
    <div className="flex flex-col px-10 justify-center max-w-lg mx-auto">
      {cartItems.length === 0 ? (
        <div className="flex justify-center text-black-coffee">
          <h1>Your cart is currently empty</h1>
        </div>
      ) : (
        <>
          <h1 className="text-center font-semibold text-black-coffee">
            Your Cart
          </h1>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </>
      )}
      <div className="checkout-footer top-auto pt-12 flex justify-between items-center">
        <Link to="/shop" className=" flex text-yellow-green">
          <span>
            <BackIcon />
          </span>
          Continue Shopping
        </Link>
        <h1 className="capitalize text-right">
          total:{" "}
          <span className="font-semibold text-black-coffee">KES {total}</span>
        </h1>
      </div>

      {cartItems.length === 0 ? (
        " "
      ) : (
        <CustomButton
          onClick={() => history.push("/checkout")}
          className="top-auto flex"
        >
          Place Order
        </CustomButton>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default withRouter(connect(mapStateToProps)(Cart));
