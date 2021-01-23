import { toast } from "material-react-toastify";
import * as React from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import * as productActions from "../../redux/actions/productActions";

import { Delete, Edit } from "../Icons";

function Product({ product, deleteProduct }) {
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/admin/products/product/${product.id}`);
  };

  const handleDelete = async () => {
    let resp = await deleteProduct();
    if (resp.status === 200) {
      toast.success("success!");
    }
  };

  return (
    <div className="product flex justify-between items-center py-4 border-b-2">
      <div>
        <img
          src={product.imgurl}
          alt="item"
          className="w-12 h-12 rounded-full"
        />
      </div>
      <h4 className="font-semibold">{product.product_name}</h4>
      <div>{product.price}</div>
      <span
        className="text-green-500 cursor-pointer"
        onClick={() => deleteProduct(product)}
      >
        <Delete />
      </span>
      <span className="text-green-500 cursor-pointer">
        <Edit onClick={handleEdit} />
      </span>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    products: state.products,
    categories: state.categories,
  };
}

const mapDispatchToProps = {
  deleteProduct: productActions.deleteProductOptimistic,
  saveProduct: productActions.saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
