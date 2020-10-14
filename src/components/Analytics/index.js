import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Pie3D, Bar3D, Line2D } from "..";
import * as salesActions from "../../redux/actions/salesActions";
import * as productActions from "../../redux/actions/productActions";
import * as categoryActions from "../../redux/actions/categoryActions";

const Analytics = ({
  products,
  categories,
  sales,
  fetchProducts,
  fetchSales,
  fetchCategories,
}) => {
  useEffect(() => {
    if (sales.length === 0) {
      fetchSales().then((err) => alert(err));
    }

    if (products.length === 0) {
      fetchProducts().then((err) => alert(err));
    }

    if (categories.length === 0) {
      fetchCategories().then((err) => alert(err));
    }
  }, []);

  // group products by category
  console.log(products);
  let sortedProducts = products.map((product) => ({
    ...product,
    categoryName: categories.find(
      (category) => category.category_name === product.category
    ),
  }));

  let categoriesData = sortedProducts.reduce((total, current) => {
    console.log("current", current);

    return total;
  }, {});

  categoriesData = Object.values(categoriesData);
  console.log(categoriesData);

  return (
    <section className="grid gap-10 lg:grid-cols-2">
      {/* <Pie3D data={categoriesData} /> */}
      {/* <Bar3D data={sales} /> */}
      <Line2D />
    </section>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  categories: state.categories,
  sales: state.sales,
});

const mapDispatchToProps = {
  fetchProducts: productActions.fetchProducts,
  fetchSales: salesActions.fetchSales,
  fetchCategories: categoryActions.fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
