import React from "react";
import { connect } from "react-redux";
import { RemoveIcon } from "../../components";

import * as cartActions from "../../redux/actions/cartActions";
import { createStructuredSelector } from "reselect";
import {
  cartItemsSelector,
  cartItemPriceSelector,
} from "../../redux/selectors/cartSelector";

const CheckOutPage = ({ cartItems, removeItem, total }) => {
  return (
    <div className="container w-9/12 px-10">
      <h1 className="font-semibold text-xl text-center">Your Order Summary</h1>
      <table className="table-auto">
        <thead>
          <tr className="flex justify-between">
            <td className="md:px-8 py-2">Product </td>
            <td className="md:px-8 py-2">Price</td>
            <td className="md:px-8 py-2">Quantity</td>
            <td className="md:px-8 py-2">Remove</td>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => (
            <tr key={cartItem.id} className="flex justify-between item py-4">
              <td>
                <img
                  className="w-16 h-16 rounded-full"
                  src={cartItem.imgUrl}
                  alt="item"
                />
              </td>
              <span>{cartItem.name}</span>
              <td>{cartItem.quantity}</td>
              <td>{cartItem.price}</td>
              <td>
                <RemoveIcon onClick={() => removeItem(cartItem)} />
              </td>
            </tr>
          ))}

          <h1 className="uppercase text-right font-medium top-auto pt-6">
            total:<span>kes {total}</span>{" "}
          </h1>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  total: cartItemPriceSelector,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (cartItem) => dispatch(cartActions.removeCartItem(cartItem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);
