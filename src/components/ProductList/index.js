import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { AddIcon, Product } from "..";
import { allProductsSelector } from "../../redux/selectors/productsSelector";
import { Delete, Edit } from "../Icons";

const ProductList = ({ products }) => {
  return (
    <div className="grid relative">
      <Link to="admin/products/new">
        <span className="mx-auto absolute bottom-0 right-0 bg-green-400 px-4 py-4 rounded-full mr-10">
          <AddIcon />
        </span>
      </Link>
      <table className="table-auto border border-collapse border-gray-200">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        {products.map((product) => (
          <tbody>
            <tr className="border-b-2 border-gray-200">
              <td>{product.quantity}</td>
              <td>{product.product_name}</td>
              <td>{product.price}</td>
              <td>
                <span class="material-icons">delete</span>
              </td>
              <td>
                <span class="material-icons">create</span>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: allProductsSelector,
});

export default connect(mapStateToProps, null)(ProductList);
