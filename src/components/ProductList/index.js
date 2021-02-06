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
      <table className="table-fixed border border-collapse border-gray-200 mb-16 text-gray-800 mt-8">
        <thead>
          <tr className="border-b-2 border-green-300">
            <th className="w-1/5 text-center py-4">Quantity</th>
            <th className="w-1/5">Product Name</th>
            <th className="w-1/5">Price</th>
            <th className="w-1/5">Delete</th>
            <th className="w-1/5">Edit</th>
          </tr>
        </thead>
        {products.map((product) => (
          <tbody>
            <tr
              key={product.id}
              className="border-b-2 border-gray-200 text-center"
            >
              <td className="w-1/5 py-4">{product.quantity}</td>
              <td className="w-1/5">{product.product_name}</td>
              <td className="w-1/5 text-center">{product.price}</td>
              <td className="w-1/5 text-center">
                <span
                  onClick={() => deleteProduct(product)}
                  className="material-icons cursor-pointer text-green-500"
                >
                  delete
                </span>
              </td>
              <td className="w-1/5 text-center">
                <span
                  onClick={() =>
                    history.push("/admin/products/product/" + product.id)
                  }
                  className="material-icons cursor-pointer text-green-500"
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
