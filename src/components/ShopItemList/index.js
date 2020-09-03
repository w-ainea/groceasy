import React from "react";
import { ShopItem } from "..";

import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
// import { bindActionCreators } from "redux";

// import * as productsApi from "../../api/productsApi";

class ShopItemList extends React.Component {
  componentDidMount() {
    this.props.fetchProducts().catch((err) => console.error(err));
  }

  render() {
    console.log(this.props);
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
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(productActions.fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopItemList);
