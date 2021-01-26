import * as React from "react";
import { connect } from "react-redux";

import { Pie3D, Line2D, Doughnut3D } from "..";
import * as productActions from "../../redux/actions/productActions";
import * as categoryActions from "../../redux/actions/categoryActions";

const Analytics = ({
  products,
  categories,
  fetchProducts,
  fetchCategories,
}) => {
  React.useEffect(() => {
    if (products.length === 0) {
      fetchProducts().then((err) => alert(err));
    }

    if (categories.length === 0) {
      fetchCategories().then((err) => alert(err));
    }
  }, []);

  let sortedProducts = products.reduce(function (acc, product) {
    const { category } = product;

    if (!acc[category]) {
      acc[category] = { label: category, value: 1 };
    } else {
      acc[category] = { ...acc[category], value: acc[category].value + 1 };
    }

    return acc;
  }, {});

  sortedProducts = Object.values(sortedProducts)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 6);

  return (
    <section className="grid gap-10 lg:grid-cols-2">
      <Pie3D data={sortedProducts} />
      <Line2D />
      <Doughnut3D />
    </section>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  categories: state.categories,
});

const mapDispatchToProps = {
  fetchProducts: productActions.fetchProducts,
  fetchCategories: categoryActions.fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
