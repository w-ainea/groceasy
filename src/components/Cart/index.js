import React from "react";
import { CartItem, CustomButton } from "..";
import { connect } from "react-redux";

const Cart = (props) => {
  return (
    <div className="flex  flex-col justify-center">
      {props.cartItems.length === 0 ? (
        <div className="flex justify-center">
          <h1 className="fixed">Your cart is currently empty</h1>
        </div>
      ) : (
        <>
          <h1 className="text-center font-semibold">Your Cart</h1>
          {props.cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </>
      )}

      {props.cartItems.length === 0 ? (
        " "
      ) : (
        <CustomButton className="top-auto flex justify-center">
          Proceed To CheckOut
        </CustomButton>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(Cart);
