import * as React from "react";
import { connect } from "react-redux";

import { ProductForm } from "../../components";

import * as productActions from "../../redux/actions/productActions";
import * as caregorytActions from "../../redux/actions/categoryActions";

const ManageProduct = ({
  products,
  categories,
  fetchProducts,
  fetchCategories,
  saveProduct,
  ...props
}) => {
  // local component state
  const [product, setProduct] = React.useState({ ...props.product });

  React.useEffect(() => {
    if (products.length === 0) {
      fetchProducts().catch((err) => alert(err));
    }
    if (categories.length === 0) {
      fetchCategories().catch((err) => alert(err));
    }
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct(() => ({
      [name]: value,
    }));
  }

  function handleSave(e) {
    e.preventDefault();
    saveProduct(product);
    console.log(product);
  }

  return (
    <div className="flex justify-center mt-8">
      <ProductForm
        product={product}
        categories={categories}
        onChange={handleChange}
        saveProduct={saveProduct}
        onSave={handleSave}
      />
    </div>
  );
};

const getProductById = (products, id) => {
  return products.find((product) => product.id === id) || null;
};

function mapStateToProps(state, ownProps) {
  console.log("own props", ownProps.location.key);
  const id = ownProps.location.key;
  console.log(id);
  const product =
    id && state.products.length > 0
      ? getProductById(state.products, id)
      : { product_name: "", price: "", seller_id: "", category: "" };

  return {
    product,
    products: state.products,
    categories: state.categories,
  };
}

const mapDispatchToProps = {
  fetchProducts: productActions.fetchProducts,
  fetchCategories: caregorytActions.fetchCategories,
  saveProduct: productActions.saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct);
