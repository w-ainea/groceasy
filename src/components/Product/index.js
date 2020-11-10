import * as React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as productActions from "../../redux/actions/productActions";

import { Delete, Edit } from "../Icons";

class Product extends React.Component {
  state = {
    redirectToEdit: false,
  };

  handleClick = () => {
    this.props.saveProduct(this.props.product);
    this.setState({ redirectToEdit: true });
  };

  render() {
    const { product, deleteProduct } = this.props;

    return (
      <div className="product flex justify-between items-center py-4 border-b-2">
        {this.state.redirectToEdit && <Redirect to="/product" />}
        <div>
          <img
            src={product.imgUrl}
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
          <Edit onClick={this.handleClick} />
        </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    categories: state.categories,
  };
}

const mapDispatchToProps = {
  deleteProduct: productActions.deleteProductOptimistic(),
  saveProduct: productActions.saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
