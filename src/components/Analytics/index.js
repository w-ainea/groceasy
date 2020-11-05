import React, { useEffect } from "react";
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
  useEffect(() => {
    if (products.length === 0) {
      fetchProducts().then((err) => alert(err));
    }

    if (categories.length === 0) {
      fetchCategories().then((err) => alert(err));
    }
  });

  // group products by category
  let sortedProducts = products.map((product) => ({
    ...product,
    categoryName: categories.find(
      (category) => category.name === product.category
    ),
  }));

  let categoriesData = sortedProducts.reduce((total, current) => {
    const { category } = current;

    if (!category) return total;
    if (!total[category]) {
      total[category] = { label: category, value: 1 };
    } else {
      total[category] = { ...total, value: total[category].length + 1 };
    }

    return total;
  }, {});

  console.log("categories data", categoriesData);

  return (
    <section className="grid gap-10 lg:grid-cols-2">
      <Pie3D data={categoriesData} />
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