import React from "react";
import { connect } from "react-redux";
import {
  RemoveIcon,
  AddIcon,
  SubtractIcon,
  BackIcon,
  CustomButton,
} from "../../components";

import * as cartActions from "../../redux/actions/cartActions";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/selectors/cartSelector";
import { Link } from "react-router-dom";

const CheckOutPage = ({
  cartItems,
  removeItem,
  total,
  addItem,
  subtractItem,
}) => {
  return (
    <div className="p-10">
      <div className="checkout-header">
        <h1 className="py-6 font-semibold">Your Order Summary</h1>
      </div>
      <div className="checkout-content">
        {cartItems.map((cartItem) => {
          const { id, imgUrl, name, quantity, price } = cartItem;

          return (
            <div
              key={id}
              className="cart-item flex justify-between items-center py-4 border-b-2"
            >
              <div>
                <img
                  src={imgUrl}
                  className="w-20 h-20 rounded-full"
                  alt="item"
                />
              </div>
              <h4 className="font-semibold">{name}</h4>
              <div className="flex items-center">
                <SubtractIcon onClick={() => subtractItem(cartItem)} />
                <span className="px-2 text-sm">{quantity}</span>
                <AddIcon onClick={() => addItem(cartItem)} />
              </div>
              <div>{price}</div>
              <span>
                <RemoveIcon onClick={() => removeItem(cartItem)} />
              </span>
            </div>
          );
        })}
      </div>

      <div className="checkout-footer top-auto py-6 flex justify-between items-center">
        <div className="footer-link ">
          <Link to="/shop" className=" flex text-green-500">
            <span>
              <BackIcon />
            </span>
            Continue Shopping
          </Link>
        </div>
        <div className="footer-total">
          <h1 className="capitalize text-right">
            total: <span className="font-semibold">KES {total}</span>
          </h1>
        </div>
      </div>

      <CustomButton>checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (cartItem) => dispatch(cartActions.removeCartItem(cartItem)),
    addItem: (cartItem) => dispatch(cartActions.addProductToCart(cartItem)),
    subtractItem: (cartItem) =>
      dispatch(cartActions.subtractCartItem(cartItem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);
