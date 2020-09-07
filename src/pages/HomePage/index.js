import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fruits from "../../assets/img/fruits.jpg";

import { connect } from "react-redux";
import * as categoryActions from "../../redux/actions/categoryActions";

const HomePage = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    props.fetchCategories().then((_categories) => setCategories(_categories));
  }, []);
  return (
    <>
      <Hero />
      <Categories categories={props.categories} />
    </>
  );
};

const Hero = () => (
  <div className="px-10 pt-8">
    <h1 className="text-xl font-medium md:tracking-wide md:text-2xl md:font-semibold">
      Get groceries from your local supplier
    </h1>
    <span className="capitalize">in 5 minutes daily</span>

    <Link
      to="/shop"
      className="block rounded-full border bg-green-500 text-white hover:border-green-500 text-center w-32 mt-3 py-1 md:mt-6 md:py-2 hover:bg-white hover:text-green-500"
    >
      Shop Now
    </Link>
  </div>
);

const Categories = ({ categories }) => (
  <div className="p-10 mx-auto mb-10 sm:mb-0">
    <h1 className="font-medium text-xl md:font-semibold md:text-2xl py-4">
      Categories
    </h1>
    <div className="grid md:grid-cols-2 gap-6">
      {categories.map((category) => (
        <div
          key={category.categoryId}
          className="shadow-lg rounded-md bg-white object-cover overflow-hidden"
        >
          <img src={`${Fruits}`} alt="fruits" className="w-100 bg-cover" />
          <div className="text-center my-4">
            <h1 className="text-xl font-medium">{category.title}</h1>
            <Link to="/shop/fruits" className="text-green-400">
              Browse
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(categoryActions.fetchCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
