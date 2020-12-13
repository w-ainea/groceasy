import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { Product } from "..";
import { allProductsSelector } from "../../redux/selectors/productsSelector";

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-col px-10 justify-center">
      <Link to="product" className="btn-primary">
        Add Product
      </Link>
      {products.map((product) => (
        <Product key={product.product_id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: allProductsSelector,
});

export default connect(mapStateToProps, null)(ProductList);
