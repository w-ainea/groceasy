import React from "react";
import { ShopItem } from "..";

import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import * as sellerActions from "../../redux/actions/sellerActions";

class ShopItemList extends React.Component {
  componentDidMount() {
    if (this.props.products.length === 0) {
      this.props.fetchProducts().catch((err) => console.log(err));
    }

    this.props.fetchSellers().catch((err) => alert(err));
  }

  render() {
    console.log(this.props.products.length);
    return (
      <div className=" mx-auto mb-10 sm:mb-0 w-full">
        Category Title
        <div className="grid md:grid-cols-3 justify-center gap-6">
          {this.props.products.map((product) => (
            <ShopItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  sellers: state.sellers,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(productActions.fetchProducts()),
    fetchSellers: () => dispatch(sellerActions.fetchSellers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopItemList);
