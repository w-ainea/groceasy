import React from "react";
import { connect } from "react-redux";

import * as productActions from "../../redux/actions/productActions";

import { Delete, Edit } from "../Icons";

const Product = ({ product, deleteProduct }) => {
  return (
    <div className="product flex justify-between items-center py-4 border-b-2">
      <div>
        <img
          src={product.imgUrl}
          alt="item"
          className="w-12 h-12 rounded-full"
        />
      </div>
      <h4 className="font-semibold">{product.name}</h4>
      <div>{product.price}</div>
      <span
        className="text-green-500 cursor-pointer"
        onClick={() => deleteProduct(product)}
      >
        <Delete />
      </span>
      <span className="text-green-500 cursor-pointer">
        <Edit />
      </span>
    </div>
  );
};

const mapDispatchToProps = {
  deleteProduct: productActions.deleteProductOptimistic,
};

export default connect(null, mapDispatchToProps)(Product);
