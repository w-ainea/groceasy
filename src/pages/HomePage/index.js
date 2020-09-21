import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Fruits from "../../assets/img/fruits.jpg";
import { Hero } from "../../components";

import { allCategoriesSelector } from "../../redux/selectors/categorySelector";
import * as categoryActions from "../../redux/actions/categoryActions";


const HomePage = ({ fetchCategories, categories }) => {
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <Hero />
      <Categories categories={categories} />
    </>
  );
};

const Categories = ({ categories }) => {
  return (
    <div className="p-10 mx-auto mb-10 sm:mb-0">
      <h1 className="font-medium text-xl md:font-semibold md:text-2xl py-4">
        Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="shadow-lg rounded-md bg-white object-cover overflow-hidden"
          >
            <img src={`${Fruits}`} alt="fruits" className="w-100 bg-cover" />
            <div className="text-center my-4">
              <h1 className="text-xl font-medium">{category.title}</h1>
              <Link to="/shop" className="text-green-400">
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(categoryActions.fetchCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
