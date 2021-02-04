import * as React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { AddIcon } from "..";
import { allProductsSelector } from "../../redux/selectors/productsSelector";

import * as productActions from "../../redux/actions/productActions";

const ProductList = ({ products, loadProducts, deleteProduct }) => {
  const history = useHistory();

  React.useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div className="flex flex-col relative">
      <table className="table-auto border border-collapse border-gray-200 mb-16 text-gray-800">
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
                <span
                  onClick={() => deleteProduct(product)}
                  class="material-icons cursor-pointer text-green-500"
                >
                  delete
                </span>
              </td>
              <td>
                <span
                  onClick={() =>
                    history.push("/admin/products/product/" + product.id)
                  }
                  class="material-icons cursor-pointer text-green-500"
                >
                  create
                </span>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <Link to="admin/products/new">
        <span className="mx-auto absolute bottom-0 right-0 bg-green-400 px-4 py-4 rounded-full mr-10">
          <AddIcon />
        </span>
      </Link>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: allProductsSelector,
});

const mapDispatchToProps = {
  loadProducts: productActions.fetchProducts,
  deleteProduct: productActions.deleteProductOptimistic,
  saveProduct: productActions.saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
