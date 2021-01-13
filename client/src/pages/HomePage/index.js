import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Fruits from "../../assets/img/fruits.jpg";

import { allCategoriesSelector } from "../../redux/selectors/categorySelector";
import * as categoryActions from "../../redux/actions/categoryActions";

function HomePage({ fetchCategories, categories }) {
  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories().catch((err) => alert("Loading products failed", err));
    }
  });

  return (
    <div className="flex justify-center mt-8 mb-4 px-6 md:px-10">
      <Categories categories={categories} />
    </div>
  );
}

const Categories = ({ categories }) => {
  return (
    <div className="md:px-10 mx-auto mb-10 sm:mb-0">
      <h1 className="font-medium text-xl mb-4 text-center font-headings text-gray-700">
        Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="shadow-lg rounded-md bg-white object-cover overflow-hidden text-gray-800"
          >
            <img src={`${Fruits}`} alt="fruits" className="w-100 bg-cover" />
            <div className="text-center my-4">
              <h1 className="font-medium">{category.name}</h1>
              <Link to="/shop" className="text-green-500 hover:underline">
                Browse
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: allCategoriesSelector,
});

const mapDispatchToProps = {
  fetchCategories: categoryActions.fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
