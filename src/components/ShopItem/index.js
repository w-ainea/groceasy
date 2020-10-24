import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as cartActions from "../../redux/actions/cartActions";

const ShopItem = ({ product, addItemToCart, history }) => {
  const { product_name, price, sellerName, imgUrl } = product;

  return (
    <div className="shadow-lg rounded-md bg-white object-cover overflow-hidden sm:w-40 md:w-56 xl:w-64 flex flex-col text-black-coffee">
      <img src={imgUrl} alt={product.category} className="w-100 bg-cover" />
      <div className="flex justify-between mt-4 px-2">
        <h1 className="text-base font-medium">{product_name}</h1>
        <h1 className="text-base font-medium">{price}</h1>
      </div>
      <div className="px-2 py-2 cursor-pointer">
        <h1
          onClick={() => {
            history.push("/sellers/:sellerId");
          }}
        >
          Seller: {sellerName}
        </h1>
      </div>
      <button
        onClick={() => addItemToCart(product)}
        className="btn-primary hover:border-green-400 hover:bg-white hover:text-gray-700"
      >
        buy
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  addItemToCart: cartActions.addProductToCart,
};

export default withRouter(connect(null, mapDispatchToProps)(ShopItem));
