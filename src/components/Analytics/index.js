import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Pie3D, Bar3D, Line2D } from "..";
import * as salesActions from "../../redux/actions/salesActions";

const Analytics = ({ products, categories, sales }) => {
  useEffect(() => {
    salesActions.fetchSales();
  }, []);

  let sortedProducts = products.map((product) => ({
    ...product,
    categoryName: categories.find(
      (category) => category.id === product.categoryId
    ),
  }));

  let categoriesData = Array.from(sortedProducts).reduce((total, current) => {
    let { categoryName } = current;

    if (!total[categoryName.title]) {
      total[categoryName.title] = { label: categoryName.title, value: 1 };
    } else {
      total[categoryName.title] = {
        label: categoryName.title,
        value: total[categoryName.title].value + 1,
      };
    }

    return total;
  }, {});

  categoriesData = Object.values(categoriesData);

  return (
    <section className="grid gap-10 lg:grid-cols-2">
      <Pie3D data={categoriesData} />
      <Bar3D data={sales} />
      <Line2D />
    </section>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  categories: state.categories,
  sales: state.sales,
});

export default connect(mapStateToProps)(Analytics);
