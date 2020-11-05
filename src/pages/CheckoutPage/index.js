import * as React from "react";
import { connect } from "react-redux";
import {
  RemoveIcon,
  AddIcon,
  SubtractIcon,
  BackIcon,
  CustomButton,
  CheckoutForm,
} from "../../components";

import * as cartActions from "../../redux/actions/cartActions";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/selectors/cartSelector";
import { Link } from "react-router-dom";
import { checkout } from "../../redux/actions/checkoutActions";

const CheckOutPage = ({
  cartItems,
  removeItem,
  total,
  addItem,
  subtractItem,
  checkout,
}) => {
  const [show, setShowModal] = React.useState(false);

  const showModal = () => {
    return setShowModal(true);
  };

  const hideModal = () => {
    return setShowModal(false);
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="checkout-header">
        <h1 className="py-6 font-headings text-center text-black-coffee">
          Your Order Summary
        </h1>
      </div>
      <div className="checkout-content text-black-coffee">
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
              <h4 className="font-light">{name}</h4>
              <div className="flex items-center font-thin">
                <SubtractIcon onClick={() => subtractItem(cartItem)} />
                <span className="px-2 text-sm">{quantity}</span>
                <AddIcon onClick={() => addItem(cartItem)} />
              </div>
              <div className="font-thin">{price}</div>
              <span>
                <RemoveIcon onClick={() => removeItem(cartItem)} />
              </span>
            </div>
          );
        })}
      </div>

      <div className="checkout-footer top-auto py-6 flex justify-between items-center">
        <div className="footer-link ">
          <Link to="/shop" className=" flex text-yellow-green">
            <span>
              <BackIcon />
            </span>
            Continue Shopping
          </Link>
        </div>
        <div className="footer-total">
          <h1 className="capitalize text-right  text-black-coffee">
            total: <span className="font-semibold">KES {total}</span>
          </h1>
        </div>
      </div>

      <CustomButton onClick={showModal}>Checkout</CustomButton>

      <CheckoutForm
        show={show}
        total={total}
        handleClose={hideModal}
        checkout={checkout}
      />
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
    checkout: (total) => dispatch(checkout(total)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);