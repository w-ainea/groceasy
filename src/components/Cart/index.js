import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { CartItem, CustomButton } from "..";
import { createStructuredSelector } from "reselect";
import { cartItemsSelector } from "../../redux/selectors/cartSelector";
import { cartItemPriceSelector } from "../../redux/selectors/cartSelector";

const Cart = ({ cartItems, history, total }) => {
  return (
    <div className="flex flex-col px-10 justify-center">
      {cartItems.length === 0 ? (
        <div className="flex justify-center">
          <h1 className="fixed">Your cart is currently empty</h1>
        </div>
      ) : (
        <>
          <h1 className="text-center font-semibold">Your Cart</h1>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </>
      )}
      <h1 className="uppercase text-center font-medium top-auto pt-10">
        total:<span>kes {total}</span>{" "}
      </h1>

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
  cartItems: cartItemsSelector,
  total: cartItemPriceSelector,
});

// const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps)(Cart));
