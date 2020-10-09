import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ProductForm } from "../../components";
import { allCategoriesSelector } from "../../redux/selectors/categorySelector";
import { allProductsSelector } from "../../redux/selectors/productsSelector";
import { newProduct } from "../../tools/mockData";
import * as productActions from "../../redux/actions/productActions";
import * as caregorytActions from "../../redux/actions/categoryActions";

const ManageProduct = ({
  products,
  categories,
  fetchProducts,
  fetchCategories,
  ...props
}) => {
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
      [name]: [value],
    }));
  }

  return (
    <div className="flex justify-center mt-8">
      <ProductForm
        product={product}
        categories={categories}
        onChange={handleChange}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: newProduct,
  products: state.products,
  categories: state.categories,
});

const mapDispatchToProps = {
  fetchProducts: productActions.fetchProducts,
  fetchCategories: caregorytActions.fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct);
