import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as cartActions from "../../redux/actions/cartActions";

const ShopItem = ({ product, addItemToCart }) => {
  const { name, price, sellerName, imgUrl } = product;

  return (
    <div className="shadow-lg rounded-md bg-white object-cover overflow-hidden sm:w-40 flex flex-col">
      <img src={imgUrl} alt="fruits" className="w-100 bg-cover" />
      <div className="flex justify-between mt-4 px-2">
        <h1 className="text-base font-medium">{name}</h1>
        <h1 className="text-base font-medium">{price}</h1>
      </div>
      <div className="px-2 py-2">
        <Link to="shop/:sellerId">Seller: {sellerName}</Link>
      </div>
      <button
        onClick={() => addItemToCart(product)}
        className="btn-primary hover:border-green-500  hover:bg-white  hover:text-green-500 "
      >
        buy
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => dispatch(cartActions.addProductToCart(product)),
  };
};

export default connect(null, mapDispatchToProps)(ShopItem);
