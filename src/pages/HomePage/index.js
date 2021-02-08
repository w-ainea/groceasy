import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { allCategoriesSelector } from "../../redux/selectors/categorySelector";
import * as categoryActions from "../../redux/actions/categoryActions";
import { Hero } from "../../components";

function HomePage({ fetchCategories, categories }) {
  // if there are no categories loaded, fetch from server
  // in case an error occurs when loading, alert the user
  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories().catch((err) => alert("Loading categories failed", err));
    }
  });

  return (
    <div className="grid justify-center mb-4">
      <Hero />
      <Categories categories={categories} />
    </div>
  );
}

const Categories = ({ categories }) => {
  return (
    <div className="md:px-10 mx-auto mb-10 sm:mb-0 px-10">
      <div className="my-16 text-center ">
        <h1 className="font-bold text-4xl mb-4 font-headings text-gray-700">
          Looking to shop?
        </h1>
        <p className="text-gray-600 text-lg">
          Browse through the collection of products from retailers who've
          already set up shop
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="shadow-2xl rounded-md bg-white object-cover overflow-hidden text-gray-800 pt-4 px-8"
          >
            <img
              src={`${category.imgurl}`}
              alt="fruits"
              className="bg-cover object-cover flex mx-auto"
            />
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
