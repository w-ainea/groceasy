import React from "react";
import { connect } from "react-redux";
import { Pie3D } from "..";

const Analytics = ({ products, categories }) => {
  const chartData = [
    {
      label: "Fruits",
      value: "290",
    },
    {
      label: "Vegetables",
      value: "260",
    },
    {
      label: "Spices",
      value: "180",
    },
    {
      label: "Others",
      value: "140",
    },
  ];

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
    <section className="grid sm:grid-cols-2">
      <Pie3D data={categoriesData} className="w-40" />
    </section>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  categories: state.categories,
});

export default connect(mapStateToProps)(Analytics);
