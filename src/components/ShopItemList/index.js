import React from "react";
import { ShopItem } from "..";

import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import * as sellerActions from "../../redux/actions/sellerActions";
import * as categoryActions from "../../redux/actions/categoryActions";

class ShopItemList extends React.Component {
  componentDidMount() {
    if (this.props.products.length === 0) {
      this.props.fetchProducts().catch((err) => console.log(err));
    }

    if (this.props.sellers.length === 0) {
      this.props.fetchSellers().catch((err) => alert(err));
    }

    if (this.props.categories.length === 0) {
      this.props.fetchCategories().catch((err) => {
        throw err;
      });
    }
  }

  render() {
    return (
      <div className=" mx-auto mb-10 sm:mb-0 w-full">
        {/* {this.props.categories.map((category) =>
          
        )} */}
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
  categories: state.categories,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(productActions.fetchProducts()),
    fetchSellers: () => dispatch(sellerActions.fetchSellers()),
    fetchCategories: () => dispatch(categoryActions.fetchCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopItemList);
