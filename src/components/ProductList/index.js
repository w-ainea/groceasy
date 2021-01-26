import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { AddIcon, Product } from "..";
import { allProductsSelector } from "../../redux/selectors/productsSelector";

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-col px-10 pb-16 justify-center relative">
      <Link to="admin/products/new">
        <span className="mx-auto absolute bottom-0 right-0 bg-green-400 px-4 py-4 rounded-full mr-10">
          <AddIcon />
        </span>
      </Link>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: allProductsSelector,
});

export default connect(mapStateToProps, null)(ProductList);
