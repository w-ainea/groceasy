import * as React from "react";
import { ShopItem } from "..";

import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import * as sellerActions from "../../redux/actions/sellerActions";
import * as categoryActions from "../../redux/actions/categoryActions";

function ShopItemList({
  products,
  sellers,
  categories,
  fetchCategories,
  fetchProducts,
  fetchSellers,
}) {
  React.useEffect(() => {
    if (products.length === 0) {
      fetchProducts().catch((err) => alert(err));
    }

    if (sellers.length === 0) {
      fetchSellers().catch((err) => alert(err));
    }

    if (categories.length === 0) {
      fetchCategories().catch((err) => {
        throw err;
      });
    }
  });

  let groupByCategory = products.reduce((acc, current) => {
    if (!current.category) return acc;

    if (!acc[current.category]) {
      acc[current.category] = [];
    }

    acc[current.category].push(current);

    return acc;
  }, {});

  console.log("grouped by category", groupByCategory);

  return (
    <div className="flex justify-center px-4 md:px-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10">
        {products.map((product) => (
          <ShopItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  sellers: state.sellers,
  categories: state.categories,
});

const mapDispatchToProps = {
  fetchProducts: productActions.fetchProducts,
  fetchSellers: sellerActions.fetchSellers,
  fetchCategories: categoryActions.fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopItemList);
