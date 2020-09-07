import React from "react";
import { CartItem } from "..";
import { connect } from "react-redux";

const Cart = (props) => {
  console.log(props);
  return (
    <div>
      <CartItem />
      <CartItem />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(Cart);
